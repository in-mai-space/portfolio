package routes

import "github.com/gofiber/fiber/v2"

func ProjectRoute(app fiber.Router) {
	route := app.Group("/projects")

	route.Get("/")

	route.Get("/:id")

	route.Post("/")

	route.Put("/:id")

	route.Delete("/:id")
}
