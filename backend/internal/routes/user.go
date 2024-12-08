package route

import "github.com/gofiber/fiber/v2"

func UserRoute(app fiber.Router) {
	app.Get("/about")

	app.Post("/me")

	app.Put("/me")

	app.Delete("/me")
}
