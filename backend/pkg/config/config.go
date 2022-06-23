package config

import (
	"context"
	"log"

	"github.com/jackc/pgx/v4"
)

var (
	db *pgx.Conn
)

func Connect() {
	connString := "postgresql://l42aro:ojAJ-CFUv-ANYSnypJ-nJg@free-tier11.gcp-us-east1.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full&options=--cluster%3Dcavern-stork-1055"
	conn, err := pgx.Connect(context.Background(), connString)
	if err != nil {
		log.Fatal(err)
	}
	// defer conn.Close(context.Background())
	db = conn
}

func GetDB() *pgx.Conn {
	return db
}
