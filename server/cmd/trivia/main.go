package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/bern/live-trivia/server/cmd/trivia/api"

	"github.com/gorilla/mux"
)

func determineListenAddress() (string, error) {
	port := os.Getenv("PORT")
	if port == "" {
		return "", fmt.Errorf("$PORT not set")
	}
	return ":" + port, nil
}

func main() {
	addr, err := determineListenAddress()
	if err != nil {
		log.Fatal(err)
	}

	server := newServer()
	err = server.Init()
	if err != nil {
		log.Fatal(err)
	}

	log.Println("Serving on port", addr)
	err = http.ListenAndServe(addr, server.API)
	if err != nil {
		log.Fatal("ListenAndServe: ", err)
	}
}

func newServer() *api.Server {
	server := &api.Server{}
	server.API = mux.NewRouter().StrictSlash(true)

	return server
}
