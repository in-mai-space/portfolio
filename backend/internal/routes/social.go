package routes

import "github.com/gofiber/fiber/v2"

func SocialRoute(app fiber.Router) {
	route := app.Group("/socials")

	route.Get("/")

	route.Post("/")

	route.Put("/:id")

	route.Delete("/:id")
}
