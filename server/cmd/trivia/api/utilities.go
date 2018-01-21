package api

import (
	"log"
	"net/http"
	"time"
)

func httpHandler(inner http.Handler, name string) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()

		inner.ServeHTTP(w, r)

		log.Printf(
			"%s\t%s\t%s\t%s",
			r.Method,
			r.RequestURI,
			name,
			time.Since(start),
		)
	})
}

func newHandler(routeName string, handlerFunc http.HandlerFunc) http.Handler {
	var handler http.Handler
	handler = handlerFunc
	return httpHandler(handler, routeName)
}

func sendError(w http.ResponseWriter, errorCode int, errorMessage string, err error) {
	errString := errorMessage + "=" + err.Error()
	log.Println(errString)
	w.WriteHeader(http.StatusInternalServerError)
	w.Write([]byte(errString))
}
