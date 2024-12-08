package routes

import (
	"in-mai-space/portfolio/internal/config"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func SetUpRoutes(app *fiber.App, db *gorm.DB, config *config.GlobalConfig, authMiddleware func(*fiber.Ctx) error) {
	HealthcheckRoute(app)

	auth := app.Group("/auth/v1")
	AuthenticationRoute(auth)

	api := app.Group("/api/v1")
	APIRoute(api, db, config, authMiddleware)
}
