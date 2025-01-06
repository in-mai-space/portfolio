package middlewares

import (
	"in-mai-space/portfolio/internal/config"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/compress"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/helmet"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/gofiber/fiber/v2/middleware/requestid"
)

// set up necessary middlewares
func ConfigureMiddlewares(app *fiber.App, config *config.GlobalConfig) {
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

	app.Group("/api/v1", isAuthorized(config))

	app.Use(logger.New(logger.Config{
		Format: "${time} ${ip} ${method} ${path} ${status} ${latency}\n",
	}))
}
