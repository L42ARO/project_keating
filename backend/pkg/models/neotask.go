package models

import (
	"context"
	"keating/pkg/config"
	"keating/pkg/utils"
	"log"
	"strconv"

	"github.com/georgysavva/scany/pgxscan"
	"github.com/google/uuid"
	"github.com/jackc/pgx/v4"
)

type Neotask struct {
	Id               uuid.UUID `json:"id"`
	Name             *string   `json:"name"`
	Deadline         *string   `json:"deadline"`
	Duration         *string   `json:"duration"`
	Time_done        *string   `json:"time_done"`
	Percent_complete float64   `json:"percent_complete"`
	Status           bool      `json:"status"`
	Task_dep         bool      `json:"task_dep"`
}

func (nt *Neotask) CreateNeotask() error {
	fields, values := utils.GetNonEmptyFields(*nt)
	query0 := "SELECT id FROM neotask WHERE "
	for idx, field := range fields {
		if idx != 0 {
			query0 += " AND "
		}
		query0 += field + " = $" + strconv.Itoa(idx+1)
	}
	err0 := db.QueryRow(context.Background(), query0, values...).Scan()
	if err0 != pgx.ErrNoRows {
		return config.ErrExists
	}
	queryPt1 := "INSERT INTO neotask ("
	queryPt2 := ") VALUES ("
	for idx, field := range fields {
		if idx != 0 {
			queryPt1 += ", "
			queryPt2 += ", "
		}
		queryPt1 += field
		queryPt2 += "$" + strconv.Itoa(idx+1)

	}
	queryFinal := queryPt1 + queryPt2 + ") RETURNING id"
	rows, err := db.Query(context.Background(), queryFinal, values...)
	defer rows.Close()
	if err != nil {
		log.Fatal("Error creating neotask: ", err)
	}
	for rows.Next() {
		if err := rows.Scan(&nt.Id); err != nil {
			log.Fatal("Error scanning neotask: ", err)
		}
	}
	return nil
}

func GetAllNeotasks() []Neotask {
	var neotasks []Neotask
	query := `SELECT * FROM neotask`
	rows, err := db.Query(context.Background(), query)
	defer rows.Close()
	if err != nil {
		log.Fatal("Error executing query: ", err)
	}
	if err := pgxscan.ScanAll(&neotasks, rows); err != nil {
		log.Fatal("Error reading scanning query: ", err)
	}
	return neotasks
}
