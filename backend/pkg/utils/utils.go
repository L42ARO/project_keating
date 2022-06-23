package utils

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
)

func SetHeaderJSON(w *http.ResponseWriter) {
	(*w).Header().Set("Content-Type", "application/json")
}
func ParseBody(r *http.Request, x interface{}) {
	//NOTE: Not an error handler, just a simple way to read the body
	if body, err := ioutil.ReadAll(r.Body); err == nil {
		if err := json.Unmarshal([]byte(body), x); err != nil {
			return
		}
	}
}
