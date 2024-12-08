package main

import (
	"fmt"
	"in-mai-space/portfolio/internal"

	"github.com/gofiber/fiber/v2"
)

func main() {
	// create global config

	// connect to database

	// initialize app
	app := internal.InitApp(nil, nil)

	// start server
	startServer(app)

	// handle server shutting down
}

func startServer(app *fiber.App) {
	err := app.Listen(":3000")
	if err != nil {
		fmt.Println("failed to start server")
	}
}
