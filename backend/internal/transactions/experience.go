package transactions

import (
	model "in-mai-space/portfolio/internal/models"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func CreateExperience(db *gorm.DB, payload model.CreateExperiencePayload) (*model.Experience, error) {
	experience := &model.Experience{
		Position:    payload.Position,
		Company:     payload.Company,
		Description: payload.Description,
		UserID:      payload.UserID,
		Tags:        payload.Tags,
	}

	if err := db.Create(experience).Error; err != nil {
		return nil, err
	}

	return experience, nil
}

func GetExperience(db *gorm.DB, id uuid.UUID) (*model.Experience, error) {
	experience := &model.Experience{}
	if err := db.Where("id = ?", id).First(experience).Error; err != nil {
		return nil, err
	}
	return experience, nil
}

func GetExperiencesByTag(db *gorm.DB, tags []*model.Tag) ([]*model.Experience, error) {
	return nil, nil
}

func GetAllExperience(db *gorm.DB, page int, limit int) ([]*model.Experience, error) {
	var experiences []*model.Experience
	offset := (page - 1) * limit

	if err := db.Offset(offset).Limit(limit).Find(&experiences).Error; err != nil {
		return nil, err
	}

	return experiences, nil
}

func UpdateExperience(db *gorm.DB, id uuid.UUID, payload model.UpdateExperiencePayload) (*model.Experience, error) {
	experience := &model.Experience{}
	if err := db.Where("id = ?", id).First(experience).Error; err != nil {
		return nil, err
	}

	if payload.Position != nil {
		updates := map[string]interface{}{}
		if payload.Position != nil {
			updates["position"] = *payload.Position
		}
		if payload.Company != nil {
			updates["company"] = *payload.Company
		}
		if payload.Description != nil {
			updates["description"] = *payload.Description
		}
		if payload.Tags != nil {
			updates["tags"] = payload.Tags
		}

		if err := db.Model(experience).Updates(updates).Error; err != nil {
			return nil, err
		}
	}

	return experience, nil
}

func DeleteExperience(db *gorm.DB, id uuid.UUID) error {
	err := db.Where("id = ?", id).Delete(&model.Experience{}).Error
	return err
}
