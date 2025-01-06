package internal

import (
	"in-mai-space/portfolio/internal/config"
	"in-mai-space/portfolio/internal/middlewares"

	go_json "github.com/goccy/go-json"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

// set up app by configuring middleware and routes
func InitApp(db *gorm.DB, config *config.GlobalConfig) *fiber.App {
	app := createFiberApp(db)

	middlewares.ConfigureMiddlewares(app)

	setUpRoutes(app, db, config, middlewares.IsAuthorized(config))

	return app
}

func createFiberApp(db *gorm.DB) *fiber.App {
	app := fiber.New(fiber.Config{
		AppName:     "Mai's Portfolio v1.0",
		JSONEncoder: go_json.Marshal,
		JSONDecoder: go_json.Unmarshal,
		// TODO: create custom errors for the app
		//ErrorHandler: utilities.ErrorHandler,
	})
	return app
}

func setUpRoutes(app *fiber.App, db *gorm.DB, config *config.GlobalConfig, authMiddleware func(*fiber.Ctx) error) {
	// healthcheck route
	app.Get("/healthcheck", func(ctx *fiber.Ctx) error {
		return ctx.Status(fiber.StatusOK).SendString("OK")
	})

	// middleware for /api/v1
	app.Group("/api/v1", authMiddleware)

	// TODO: set-up API route

	handleNonExistingRoute(app)
}

func handleNonExistingRoute(app *fiber.App) {
	app.Use(func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusNotFound).SendString("The requested route does not exist")
	})
}
