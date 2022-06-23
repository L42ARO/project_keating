package main

import (
	"keating/pkg/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	gin.SetMode(gin.ReleaseMode) ///We're not actually in release mode but just to stop the stupid warning from showing up
	r := gin.Default()           //already returns a pointer
	routes.RegisterRoutes(r)
	r.Run()

}
