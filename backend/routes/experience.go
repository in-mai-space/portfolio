package route

import "github.com/gofiber/fiber/v2"

func ExperienceRoute(app fiber.Router) {
	app.Get("/experiences")

	app.Get("/experiences/:id")

	app.Post("/experiences")

	app.Put("/experiences/:id")

	app.Delete("/experiences/:id")
}
