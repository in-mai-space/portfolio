package internal

import (
	"in-mai-space/portfolio/internal/config"
	"in-mai-space/portfolio/internal/middlewares"
	"in-mai-space/portfolio/internal/routes"
	"in-mai-space/portfolio/internal/utilities"

	go_json "github.com/goccy/go-json"
	"github.com/gofiber/fiber/v2"
	"github.com/jackc/pgx/v5/pgxpool"
)

// set up app by configuring middleware and routes
func InitServer(db *pgxpool.Pool, config *config.GlobalConfig) *fiber.App {
	server := createFiberApp()

	middlewares.ConfigureMiddlewares(server)

	routes.SetUpRoutes(server, db, middlewares.IsAuthorized(config))

	return server
}

func createFiberApp() *fiber.App {
	fiberApp := fiber.New(fiber.Config{
		AppName:      "Mai's Portfolio v1.0",
		JSONEncoder:  go_json.Marshal,
		JSONDecoder:  go_json.Unmarshal,
		ErrorHandler: utilities.AppErrorHandler,
	})
	return fiberApp
}
