package main

import (
	"fmt"
	"keating/pkg/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default() //NOTE: already returns a pointer
	fmt.Println("STARTING server")
	routes.RegisterRoutes(r)
	r.Run()

}
