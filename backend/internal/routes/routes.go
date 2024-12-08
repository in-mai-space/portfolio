package route

import "github.com/gofiber/fiber/v2"

func SetUpRoutes(app *fiber.App) {
	api := app.Group("/api/v1")

	HealthcheckRoute(api)
	SocialRoute(api)
	TagRoute(api)
	UserRoute(api)
	ProjectRoute(api)
	ExperienceRoute(api)
}
