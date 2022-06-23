package controllers

import (
	"encoding/json"
	"keating/pkg/config"
	"keating/pkg/models"
	"keating/pkg/utils"
	"net/http"
)

func CreateNeotaskHandler(w http.ResponseWriter, r *http.Request) {
	utils.SetHeaderJSON(&w)
	newNeotask := &models.Neotask{}
	utils.ParseBody(r, newNeotask)
	err := newNeotask.CreateNeotask()
	if err == config.ErrExists {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
		return
	}
	res, _ := json.Marshal(newNeotask)
	w.Write(res)
}
