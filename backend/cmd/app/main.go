package main

import (
	"fmt"
	"in-mai-space/portfolio/internal"
	"in-mai-space/portfolio/internal/config"
	"in-mai-space/portfolio/internal/database"
	"os"
	"path/filepath"

	"github.com/gofiber/fiber/v2"
)

func main() {
	config, err := config.GetConfigurations(filepath.Join("..", ".env"))

	if err != nil {
		os.Exit(1)
	}

	db, err := database.ConnectDB(&config.DatabaseConfig)

	if err != nil {
		os.Exit(1)
	}

	app := internal.InitApp(db, config)

	startServer(app)

	// TODO: handle server shutting down
}

func startServer(app *fiber.App) {
	err := app.Listen(":3000")
	if err != nil {
		fmt.Println("failed to start server")
	}
}
