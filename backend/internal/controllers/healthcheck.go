package controllers

import "github.com/gofiber/fiber/v2"

func HealthcheckController(ctx *fiber.Ctx) error {
	return ctx.Status(fiber.StatusOK).SendString("OK")
}
