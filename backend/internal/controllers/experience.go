package controllers

import (
	"in-mai-space/portfolio/internal/services"

	"github.com/gofiber/fiber/v2"
)

type ExperienceControllerInterface interface {
	CreateExperience(ctx *fiber.Ctx) error
	GetExperience(ctx *fiber.Ctx) error
	UpdateExperience(ctx *fiber.Ctx) error
	DeleteExperience(ctx *fiber.Ctx) error
}

type ExperienceController struct {
	service *services.ExperienceService
}

func NewExperienceController(service *services.ExperienceService) *ExperienceController {
	controller := &ExperienceController{
		service: service,
	}
	return controller
}

func (controller *ExperienceController) CreateExperience(ctx *fiber.Ctx) error {
	return nil
}

func (controller *ExperienceController) GetExperience(ctx *fiber.Ctx) error {
	return nil
}

func (controller *ExperienceController) UpdateExperience(ctx *fiber.Ctx) error {
	return nil
}

func (controller *ExperienceController) DeleteExperience(ctx *fiber.Ctx) error {
	return nil
}
