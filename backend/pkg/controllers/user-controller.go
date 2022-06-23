package controllers

import (
	"encoding/json"
	"keating/pkg/config"
	"keating/pkg/models"
	"keating/pkg/utils"
	"net/http"

	"github.com/gorilla/mux"
)

func CreateUserHandler(w http.ResponseWriter, r *http.Request) {
	utils.SetHeaderJSON(&w)
	newUser := &models.User{}
	utils.ParseBody(r, newUser)
	err := newUser.CreateUser()
	if err == config.ErrExists {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
		return
	}
	res, _ := json.Marshal(newUser)
	w.Write(res)
}
func GetUsersHandler(w http.ResponseWriter, r *http.Request) {
	users := models.GetAllUsers()
	res, _ := json.Marshal(users)
	utils.SetHeaderJSON(&w)
	w.WriteHeader(http.StatusOK)
	w.Write(res)
}
func GetUserByHandler(w http.ResponseWriter, r *http.Request, indexType string) {
	utils.SetHeaderJSON(&w)
	value := mux.Vars(r)[indexType]
	user, err := models.GetUser(indexType, value)
	if err == config.ErrNotFound {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
	}
	res, _ := json.Marshal(user)
	w.Write(res)
}

func UpdateHandler(w http.ResponseWriter, r *http.Request) {
	uptUser := &models.User{}
	utils.ParseBody(r, uptUser)
	err := uptUser.UpdateUser()
	if err == config.ErrNotFound {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
		return
	}
	w.Write([]byte("UPDATE user SUCCESFUL"))

}

func DeleteUserByNameHandler(w http.ResponseWriter, r *http.Request) {
	utils.SetHeaderJSON(&w)
	name := mux.Vars(r)["name"]
	err := models.DeleteUser("name", name)
	if err == config.ErrNotFound {
		w.WriteHeader(http.StatusBadRequest)
		w.Write([]byte(err.Error()))
		return
	}
	w.Write([]byte("Delete User Successful"))

}
