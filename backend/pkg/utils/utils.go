package utils

import (
	"encoding/json"
	"io/ioutil"
	"net/http"
	"reflect"
	"strings"
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
func GetNonEmptyFields(s *interface{}) ([]string, []interface{}) {
	fields := reflect.TypeOf(*s)
	values := reflect.ValueOf(*s)
	nonEmptyFields := []string{}
	nonEmptyValues := []interface{}{}
	for i := 0; i < fields.NumField(); i++ {
		if fields.Field(i).Name == "Id" {
			continue
		}
		if !reflect.DeepEqual(values.Field(i).Interface(), reflect.Zero(fields.Field(i).Type).Interface()) {
			nonEmptyFields = append(nonEmptyFields, strings.ToLower(fields.Field(i).Name))
			nonEmptyValues = append(nonEmptyValues, values.Field(i).Interface())
		}
	}
	return nonEmptyFields, nonEmptyValues
}
