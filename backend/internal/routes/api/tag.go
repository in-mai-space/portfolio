package routes

import (
	"in-mai-space/portfolio/internal/config"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func TagRoute(app fiber.Router, db *gorm.DB, config *config.GlobalConfig, authMiddleware func(*fiber.Ctx) error) {
	route := app.Group("/tags")

	route.Get("/tags/:id/projects")

	route.Get("/tags/:id/experiences")

	route.Post("/", authMiddleware)

	route.Put("/:id", authMiddleware)

	route.Delete("/:id", authMiddleware)
}
