package route

import "github.com/gofiber/fiber/v2"

func HealthcheckRoute(app fiber.Router) {
	app.Get("/healthcheck", func(c *fiber.Ctx) error {
		return c.SendString("Hello world")
	})
}
