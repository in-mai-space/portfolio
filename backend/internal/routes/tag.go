package routes

import "github.com/gofiber/fiber/v2"

func TagRoute(app fiber.Router) {
	route := app.Group("/tags")

	route.Get("/tags/:id/projects")

	route.Get("/tags/:id/experiences")

	route.Post("/")

	route.Put("/:id")

	route.Delete("/:id")
}
