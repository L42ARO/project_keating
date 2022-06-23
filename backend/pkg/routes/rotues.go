package routes

import (
	"keating/pkg/controllers"

	"github.com/gin-gonic/gin"
)

func RegisterRoutes(r *gin.Engine) {
	r.GET("/year", controllers.BasicHandler)
	r.POST("/create-neotask", controllers.CreateNeotaskHandler)
}
