package transactions

import (
	model "in-mai-space/portfolio/internal/models"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func CreateSocialMediaHandle(db *gorm.DB, payload model.CreateSocialMediaHandlePayload) (*model.SocialMediaHandle, error) {
	socialHandle := &model.SocialMediaHandle{
		Name:   payload.Name,
		URL:    payload.URL,
		UserID: payload.UserID,
	}

	if err := db.Create(socialHandle).Error; err != nil {
		return nil, err
	}

	return socialHandle, nil
}

func GetAllSocialMediaHandles(db *gorm.DB, page int, limit int) ([]*model.SocialMediaHandle, error) {
	var socialHandle []*model.SocialMediaHandle
	offset := (page - 1) * limit

	if err := db.Offset(offset).Limit(limit).Find(&socialHandle).Error; err != nil {
		return nil, err
	}

	return socialHandle, nil
}

func DeleteSocialMediaHandle(db *gorm.DB, id uuid.UUID) error {
	err := db.Where("id = ?", id).Delete(&model.SocialMediaHandle{}).Error
	return err
}
