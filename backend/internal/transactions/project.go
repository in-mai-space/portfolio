package transactions

import (
	model "in-mai-space/portfolio/internal/models"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

func CreateProject(db *gorm.DB, payload model.CreateProjectPayload) (*model.Project, error) {
	project := &model.Project{
		Name:        payload.Name,
		Github:      payload.Github,
		Description: payload.Description,
		Tags:        payload.Tags,
		UserID:      payload.UserID,
	}

	if err := db.Create(project).Error; err != nil {
		return nil, err
	}

	return project, nil
}

func GetProject(db *gorm.DB, id uuid.UUID) (*model.Project, error) {
	project := &model.Project{}
	if err := db.Where("id = ?", id).First(project).Error; err != nil {
		return nil, err
	}
	return project, nil
}

func GetProjectByTag(db *gorm.DB, tags *model.Tag) ([]*model.Project, error) {
	return nil, nil
}

func GetAllProjects(db *gorm.DB, page int, limit int) ([]*model.Project, error) {
	var projects []*model.Project
	offset := (page - 1) * limit

	if err := db.Offset(offset).Limit(limit).Find(&projects).Error; err != nil {
		return nil, err
	}

	return projects, nil
}

func UpdateProject(db *gorm.DB, id uuid.UUID, payload *model.UpdateProjectPayload) (*model.Project, error) {
	return nil, nil
}

func DeleteProject(db *gorm.DB, id uuid.UUID) error {
	err := db.Where("id = ?", id).Delete(&model.Project{}).Error
	return err
}
