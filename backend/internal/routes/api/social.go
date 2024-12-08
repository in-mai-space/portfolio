package routes

import (
	"in-mai-space/portfolio/internal/config"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func SocialRoute(app fiber.Router, db *gorm.DB, config *config.GlobalConfig, authMiddleware func(*fiber.Ctx) error) {
	route := app.Group("/socials")

	route.Get("/")

	route.Post("/", authMiddleware)

	route.Put("/:id", authMiddleware)

	route.Delete("/:id", authMiddleware)
}
