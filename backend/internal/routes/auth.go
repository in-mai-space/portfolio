package routes

import (
	"github.com/gofiber/fiber/v2"
)

func AuthenticationRoute(app fiber.Router) {
	app.Post("/login")
	app.Post("/logout")
	app.Post("/refresh-token")
	app.Post("/forgot-password")
	app.Post("/reset-password")
}
