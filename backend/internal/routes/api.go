package routes

import (
	"in-mai-space/portfolio/internal/config"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func APIRoute(route fiber.Router, db *gorm.DB, config *config.GlobalConfig, authMiddleware func(*fiber.Ctx) error) {
	
}
