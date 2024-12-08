package routes

import (
	"in-mai-space/portfolio/internal/config"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func SetUpRoutes(app *fiber.App, db *gorm.DB, config *config.GlobalConfig, authMiddleware func(*fiber.Ctx) error) {
	api := app.Group("/api/v1")

	HealthcheckRoute(api)
	SocialRoute(api)
	TagRoute(api)
	UserRoute(api)
	ProjectRoute(api)
	ExperienceRoute(api)
}
