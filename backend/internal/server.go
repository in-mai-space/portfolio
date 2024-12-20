package internal

import (
	"in-mai-space/portfolio/internal/config"
	"in-mai-space/portfolio/internal/middlewares"
	"in-mai-space/portfolio/internal/routes"

	go_json "github.com/goccy/go-json"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/fiber/v2/middleware/requestid"
	"gorm.io/gorm"
)

// set up app by configuring middleware and routes
func InitApp(db *gorm.DB, config *config.GlobalConfig) *fiber.App {
	app := createNewApp(db)

	configureMiddlewares(app)

	routes.SetUpRoutes(app, db, config, middlewares.IsValidJWTToken(config))

	return app
}

// create a new fiber app
func createNewApp(db *gorm.DB) *fiber.App {
	app := fiber.New(fiber.Config{
		AppName:     "Mai's Portfolio v1.0",
		JSONEncoder: go_json.Marshal,
		JSONDecoder: go_json.Unmarshal,
		//ErrorHandler: utilities.ErrorHandler,
	})
	return app
}

// set up necessary middlewares
func configureMiddlewares(app *fiber.App) {
	app.Use(cors.New(cors.Config{
		AllowHeaders:  "Origin, Content-Type, Accept, Authorization",
		AllowMethods:  "GET, POST, PUT, DELETE",
		ExposeHeaders: "Authorization, Content-Length, Content-Type",
	}))

	app.Use(helmet.New())

	app.Use(recover.New())

	app.Use(requestid.New())

	app.Use(compress.New(compress.Config{
		Level: compress.LevelBestSpeed,
	}))

	app.Use(logger.New(logger.Config{
		Format: "${time} ${ip} ${method} ${path} ${status} ${latency}\n",
	}))
}
