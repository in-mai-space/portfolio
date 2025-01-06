package utilities

import "github.com/gofiber/fiber/v2"

type StatusCode int

const (
	InternalServer StatusCode = 500
	NotFound       StatusCode = 404
	BadRequest     StatusCode = 400
	Unauthorized   StatusCode = 401
	Forbidden      StatusCode = 403
)

type AppError struct {
	code    StatusCode
	message string
	data    *interface{}
}

func newHTTPError(code StatusCode, msg string, data *interface{}) *AppError {
	return &AppError{
		code:    code,
		message: msg,
		data:    data,
	}
}

func (e *AppError) Error() string {
	return e.message
}

func AppErrorHandler(ctx *fiber.Ctx, err error) error {
	if appErr, ok := err.(*AppError); ok {
		response := fiber.Map{
			"error": appErr.message,
		}
		if appErr.data != nil {
			response["data"] = appErr.data
		}
		return ctx.Status(int(appErr.code)).JSON(response)
	}

	return ctx.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
		"error": "An unexpected error occurred.",
	})
}

func NotFoundError(msg string) *AppError {
	return newHTTPError(NotFound, msg, nil)
}

func InternalServerError() *AppError {
	return newHTTPError(InternalServer, "Unexpected error occurred. Please try again.", nil)
}

func ForbiddenError() *AppError {
	return newHTTPError(Forbidden, "You do not have rights to conduct this action", nil)
}

func UnauthorizedError() *AppError {
	return newHTTPError(Unauthorized, "Unauthorized", nil)
}

func BadRequestError(msg string, data interface{}) *AppError {
	return newHTTPError(BadRequest, msg, &data)
}
