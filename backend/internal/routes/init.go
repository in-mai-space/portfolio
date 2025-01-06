package routes

import (
	"in-mai-space/portfolio/internal/controllers"

	"github.com/gofiber/fiber/v2"
	"github.com/jackc/pgx/v5/pgxpool"
)

func SetUpRoutes(app *fiber.App, db *pgxpool.Pool, authMiddleware func(*fiber.Ctx) error) {
	app.Get("/healthcheck", controllers.HealthcheckController)

	api := app.Group("/api/v1")
	experienceRoute(api, db)

	handleNonExistingRoute(app)
}

func handleNonExistingRoute(server *fiber.App) {
	server.Use(func(c *fiber.Ctx) error {
		return c.Status(fiber.StatusNotFound).SendString("The requested route does not exist")
	})
}
