package route

import (
	"time"

	"github.com/gofiber/fiber/v2"
)

func HealthcheckRoute(app fiber.Router) {
	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.Status(200).JSON(fiber.Map{
			"status": "healthy",
			"time":   time.Now(),
		})
	})
}
