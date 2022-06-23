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
		c.JSON(http.StatusInternalServerError, err.Error())
		log.Println("Error binding to json: ", err)
		return
	}
	if err := newNeoTask.CreateNeotask(); err == config.ErrExists {
		c.JSON(http.StatusBadRequest, err.Error())
		return
	}
	c.JSON(http.StatusOK, newNeoTask)
}
