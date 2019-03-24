package routes

import (
	"net/http"

	"github.com/gorilla/mux"
	"github.com/jinzhu/gorm"
)

var db *gorm.DB
var r *mux.Router

// ConfigureRoutes sets routes for mux router
func ConfigureRoutes(database *gorm.DB, router *mux.Router) {
	r = router
	db = database

	r.HandleFunc("/", getServerIsUp).Methods("GET")

	r.HandleFunc("/names", getNames).Methods("GET")
	r.HandleFunc("/items/{id}", getItems).Methods("GET")
	r.HandleFunc("/locations", getLocations).Methods("GET")

	r.NotFoundHandler = http.HandlerFunc(routeNotFound)

}
