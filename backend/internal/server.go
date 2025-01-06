package internal

import (
	"in-mai-space/portfolio/internal/config"
	"in-mai-space/portfolio/internal/controllers"
	"in-mai-space/portfolio/internal/middlewares"
	"in-mai-space/portfolio/internal/utilities"

	go_json "github.com/goccy/go-json"
	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

// set up app by configuring middleware and routes
func InitServer(db *gorm.DB, config *config.GlobalConfig) *fiber.App {
	server := createFiberApp(db)

	middlewares.ConfigureMiddlewares(server)

	setUpRoutes(server, db, middlewares.IsAuthorized(config))

	return server
}

func createFiberApp(db *gorm.DB) *fiber.App {
	fiberApp := fiber.New(fiber.Config{
		AppName:      "Mai's Portfolio v1.0",
		JSONEncoder:  go_json.Marshal,
		JSONDecoder:  go_json.Unmarshal,
		ErrorHandler: utilities.AppErrorHandler,
	})
	return fiberApp
}

func setUpRoutes(app *fiber.App, db *gorm.DB, authMiddleware func(*fiber.Ctx) error) {
	app.Get("/healthcheck", controllers.HealthcheckController)

	// TODO: set-up API route

	handleNonExistingRoute(app)
}

func handleNonExistingRoute(server *fiber.App) {
	server.Use(func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusNotFound).SendString("The requested route does not exist")
	})
}
