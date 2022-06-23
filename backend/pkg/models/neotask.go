package models

import (
	"context"
	"keating/pkg/config"
	"log"

	"github.com/google/uuid"
	"github.com/jackc/pgx/v4"
)

type Neotask struct {
	Id               uuid.UUID `json:"id"`
	Name             string    `json:"name"`
	Deadline         string    `json:"deadline"`
	Duration         string    `json:"duration"`
	Time_done        string    `json:"time_done"`
	Percent_complete float64   `json:"percent_complete"`
	Status           bool      `json:"status"`
	Task_dep         bool      `json:"task_dep"`
}

func (nt *Neotask) CreateNeotask() error {
	err0 := db.QueryRow(context.Background(), "SELECT id FROM neotask WHERE id = $1", nt.Id).Scan()
	if err0 != pgx.ErrNoRows {
		return config.ErrExists
	}

	rows, err := db.Query(context.Background(), "INSERT INTO neotask (name, deadline, duration, time_done, percent_complete, status, task_dep) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id", nt.Name, nt.Deadline, nt.Duration, nt.Time_done, nt.Percent_complete, nt.Status, nt.Task_dep)
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
