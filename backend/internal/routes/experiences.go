package routes

import "github.com/gofiber/fiber/v2"

func ExperienceRoute(app fiber.Router) {
	route := app.Group("/experiences")

	route.Get("/")

	route.Get("/:id")

	route.Post("/")

	route.Put("/:id")

	route.Delete("/:id")
}
