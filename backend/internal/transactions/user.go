package transactions

import (
	"in-mai-space/portfolio/internal/models"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func GetUser(db *gorm.DB, id uuid.UUID) (*models.User, error) {
	user := &models.User{}
	if err := db.Where("id = ?", id).First(user).Error; err != nil {
		return nil, err
	}
	return user, nil
}

func UpdateUser(db *gorm.DB, id uuid.UUID, payload *models.UpdateUserPayload) (*models.User, error) {
	return nil, nil
}
