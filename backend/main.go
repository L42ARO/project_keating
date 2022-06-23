package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"keating/pkg/routes"

	"github.com/gorilla/mux"
)

func main() {
	r := mux.NewRouter()
	routes.RegisterRoutes(r)
	http.Handle("/", r)
	port := GetPort()
	fmt.Printf("SERVER on Port %s\n", port)
	log.Fatalln(http.ListenAndServe(port, r))

}

func GetPort() string {
	var port = os.Getenv("PORT")
	if port == "" {
		port = "3000"
		fmt.Println("Defaulting to port :" + port)
	}
	return ":" + port
}
