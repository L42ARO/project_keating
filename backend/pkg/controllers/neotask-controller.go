package controllers

import (
	"keating/pkg/config"
	"keating/pkg/models"
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func CreateNeotaskHandler(c *gin.Context) {
	newNeoTask := &models.Neotask{}
	if err := c.BindJSON(newNeoTask); err != nil {
		log.Fatal("Error binding to json: ", err)
	}
	if err := newNeoTask.CreateNeotask(); err == config.ErrExists {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}
	c.JSON(http.StatusOK, newNeoTask)
}
func GetNeotasksHandler(c *gin.Context) {
	neotasks := models.GetAllNeotasks()
	c.JSON(http.StatusOK, neotasks)
}
