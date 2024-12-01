package main

import (
	"in-mai-space/portfolio/database"
	route "in-mai-space/portfolio/routes"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()

	database.ConnectDB()

	route.SetUpRoutes(app)

	app.Listen(":3000")
}
