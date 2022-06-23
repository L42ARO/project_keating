package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func BasicHandler(c *gin.Context) {
	res := gin.H{"year": 39}
	c.JSON(http.StatusOK, res)
}
