package routes

import (
	"keating/pkg/controllers"
	"net/http"

	"github.com/gorilla/mux"
)

func RegisterRoutes(router *mux.Router) {
	//CREATE
	router.HandleFunc("/create-user", controllers.CreateUserHandler).Methods("POST")
	router.HandleFunc("/create-neotask", controllers.CreateNeotaskHandler).Methods("POST")
	//READ
	router.HandleFunc("/get-users", controllers.GetUsersHandler).Methods("GET")
	router.HandleFunc("/get-name/{name}", func(w http.ResponseWriter, r *http.Request) {
		controllers.GetUserByHandler(w, r, "name")
	}).Methods("GET")
	router.HandleFunc("/get-id/{id}", func(w http.ResponseWriter, r *http.Request) {
		controllers.GetUserByHandler(w, r, "id")
	}).Methods("GET")
	//UPDATE
	router.HandleFunc("/update-user", controllers.UpdateHandler).Methods("PUT")
	//DELETE
	router.HandleFunc("/delete-name/{name}", controllers.DeleteUserByNameHandler).Methods("DELETE")
}
