package routes

import (
	"in-mai-space/portfolio/internal/controllers"
	"in-mai-space/portfolio/internal/services"
	"in-mai-space/portfolio/internal/transactions"

	"github.com/gofiber/fiber/v2"
	"github.com/jackc/pgx/v5/pgxpool"
)

func experienceRoute(router fiber.Router, db *pgxpool.Pool) {
	experience := router.Group("/experiences")

	transaction := transactions.NewExperienceTransaction(db)
	service := services.NewExperienceService(transaction)
	controller := controllers.NewExperienceController(service)

	experience.Post("/", controller.CreateExperience)
	experience.Get("/:id", controller.GetExperience)
	experience.Put("/:id", controller.UpdateExperience)
	experience.Delete("/:id", controller.DeleteExperience)
}
