package models

type Hello struct {
	Message string `json:"message"`
}

func NewHello() *Hello {
	return &Hello{Message: "Hello World!"}
}
