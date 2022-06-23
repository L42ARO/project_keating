package models

import (
	"context"
	"keating/pkg/config"
	"log"
	"reflect"
	"strconv"
	"strings"

	"github.com/jackc/pgx/v4"
)

var db *pgx.Conn

func init() {
	config.Connect()
	db = config.GetDB()
}

type User struct {
	Id   int64  `json:"id"`
	Name string `json:"name"`
}

func GetAllUsers() []User {
	var users []User
	rows, err := db.Query(context.Background(), "SELECT id, name FROM users")
	defer rows.Close()
	if err != nil {
		log.Fatal("Error getting users: ", err)
	}
	for rows.Next() {
		var user User
		if err := rows.Scan(&user.Id, &user.Name); err != nil {
			log.Fatal(err)
		}
		users = append(users, user)
	}
	return users
}
func GetUser(indexType string, value interface{}) (User, error) {
	var user User
	query := "SELECT id, name FROM users WHERE " + indexType + " = $1"
	rows := db.QueryRow(context.Background(), query, value)
	if err := rows.Scan(&user.Id, &user.Name); err == pgx.ErrNoRows {
		return User{}, config.ErrNotFound
	} else if err != nil {
		log.Fatal("Error getting user: ", err)
	}

	return user, nil
}

func (user *User) CreateUser() error {
	err0 := db.QueryRow(context.Background(), "SELECT id FROM users WHERE name = $1", user.Name).Scan()
	if err0 != pgx.ErrNoRows {
		return config.ErrExists
	}

	rows, err := db.Query(context.Background(), "INSERT INTO users (name) VALUES ($1) RETURNING id, name", user.Name)
	defer rows.Close()
	if err != nil {
		log.Fatal("Error creating user: ", err)
	}

	for rows.Next() {
		if err := rows.Scan(&user.Id, &user.Name); err != nil {
			log.Fatal("Error scannig user: ", err)
		}
	}
	return nil
}

func DeleteUser(indexType string, value interface{}) error {
	query := "DELETE FROM users WHERE " + indexType + " = $1 RETURNING id, name"
	tag, err := db.Exec(context.Background(), query, value)
	if err != nil {
		log.Fatal("Error deleting user: ", err)
	}
	if tag.RowsAffected() == 0 {
		return config.ErrNotFound
	}
	return nil
}

func (user *User) UpdateUser() error {
	if reflect.DeepEqual(*user, User{}) {
		return config.ErrEmpty
	}
	fields := reflect.TypeOf(*user)
	values := reflect.ValueOf(*user)
	fieldsToUpdate := []string{}
	valuesToUpdate := []interface{}{}
	for i := 0; i < fields.NumField(); i++ {
		if fields.Field(i).Name == "Id" {
			continue
		}
		if !reflect.DeepEqual(values.Field(i).Interface(), reflect.Zero(fields.Field(i).Type).Interface()) {
			fieldsToUpdate = append(fieldsToUpdate, strings.ToLower(fields.Field(i).Name))
			valuesToUpdate = append(valuesToUpdate, values.Field(i).Interface())
		}
	}
	query := "UPDATE users SET "
	for i, field := range fieldsToUpdate {
		if i != 0 {
			query += ", "
		}
		query += field + " = $" + strconv.Itoa(i+1)
	}
	query += " WHERE id = " + strconv.Itoa(int(user.Id))
	tag, err := db.Exec(context.Background(), query, valuesToUpdate...)
	if err != nil {
		log.Fatal("Error updating user: ", err)
	}
	if tag.RowsAffected() == 0 {
		return config.ErrNotFound
	}
	return nil
}
