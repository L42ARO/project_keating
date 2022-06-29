package main

import (
	"fmt"
	"keating/pkg/routes"

	"github.com/gin-gonic/gin"
)

//ADDED GIT TO BACKEND
func main() {
	r := gin.Default() //NOTE: already returns a pointer
	fmt.Println("STARTING server")
	r.Use(CORSMiddleware())
	routes.RegisterRoutes(r)
	r.Run()

}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
