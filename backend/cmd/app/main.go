package main

import (
	"fmt"
	"in-mai-space/portfolio/internal"
	"in-mai-space/portfolio/internal/config"
	"in-mai-space/portfolio/internal/database"
	"in-mai-space/portfolio/internal/utils"
	"path/filepath"

	"github.com/gofiber/fiber/v2"
)

func main() {
	config, err := config.GetConfig(filepath.Join("..", ".env"))

	if err != nil {
		utils.Exit(fmt.Sprintf("failed to get configurations: %s", err.Error()))
	}

	db, err := database.ConnectDB(&config.DatabaseConfig)

	if err != nil {
		utils.Exit(fmt.Sprintf("failed to connect to database: %s", err.Error()))
	}

	app := internal.InitApp(db, config)

	startServer(app)

	// handle server shutting down
}

func startServer(app *fiber.App) {
	err := app.Listen(":3000")
	if err != nil {
		fmt.Println("failed to start server")
	}
}
