package middlewares

import (
	"errors"
	"in-mai-space/portfolio/internal/config"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

func IsAuthorized(config *config.GlobalConfig) fiber.Handler {
	return func(ctx *fiber.Ctx) error {
		authHeader := ctx.Get("Authorization")

		// check if there is no headers
		if authHeader == "" {
			return fiber.ErrUnauthorized
		}

		// check if not a bearer header
		parts := strings.Split(authHeader, " ")
		if len(parts) != 2 || strings.ToLower(parts[0]) != "bearer" {
			return ctx.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
				"error": "Invalid authorization header format",
			})
		}

		accessToken := parts[1]

		// parse access token with secret key
		token, err := jwt.Parse(accessToken, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, errors.New("wrong signing method")
			}
			return []byte(config.AuthenticationConfig.SupabaseSecretKey), nil
		})

		if err != nil || !token.Valid {
			return fiber.ErrUnauthorized
		}

		return ctx.Next()
	}
}
