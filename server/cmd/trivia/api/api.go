package api

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/gorilla/mux"
	uuid "github.com/satori/go.uuid"
)

// Server contains the API and other network objects
type Server struct {
	API *mux.Router
}

// Init routes for API
func (s *Server) Init() error {
	s.API.Handle("/question", newHandler("create_question", s.CreateQuestion)).Methods("POST")
	return nil
}

// CreateQuestion saves a new caravan to the database
func (s *Server) CreateQuestion(w http.ResponseWriter, r *http.Request) {
	body, err := ioutil.ReadAll(r.Body)
	if err != nil {
		sendError(w, http.StatusInternalServerError, "Error reading request body", err)
		return
	}

	var question Question
	err = json.Unmarshal(body, &question)
	if err != nil {
		sendError(w, http.StatusInternalServerError, "Error unmarshalling json", err)
	}

	id := uuid.NewV4()
	result := questionToDBQuestion(question, id.String())

	json.NewEncoder(w).Encode(result)
}
