package transactions

import (
	model "in-mai-space/portfolio/internal/models"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func CreateTag(db *gorm.DB, payload model.CreateTagPayload) (*model.Tag, error) {
	tag := &model.Tag{
		Name:        payload.Name,
		Description: payload.Description,
	}

	if err := db.Create(tag).Error; err != nil {
		return nil, err
	}

	return tag, nil
}

func GetAllTags(db *gorm.DB, page int, limit int) ([]*model.Tag, error) {
	var tags []*model.Tag
	offset := (page - 1) * limit

	if err := db.Offset(offset).Limit(limit).Find(&tags).Error; err != nil {
		return nil, err
	}

	return tags, nil
}

func DeleteTag(db *gorm.DB, id uuid.UUID) error {
	err := db.Where("id = ?", id).Delete(&model.Tag{}).Error
	return err
}
