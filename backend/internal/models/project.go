package models

import (
	"github.com/google/uuid"
)

type Project struct {
	ID          uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid();primary_key"`
	Name        string    `json:"name"`
	Github      string    `json:"github"`
	Preview     string    `json:"preview"`
	Description string    `json:"description"`
	Tags        []Tag     `json:"tags" gorm:"many2many:project_tags"`
	UserID      uuid.UUID `json:"userId" gorm:"type:uuid"`
}

type CreateProjectPayload struct {
	Name        string    `json:"name"`
	Github      string    `json:"github"`
	Preview     string    `json:"preview"`
	Description string    `json:"description"`
	Tags        []Tag     `json:"tags"`
	UserID      uuid.UUID `json:"userId"`
}

type UpdateProjectPayload struct {
	Name        *string `json:"name"`
	Preview     string  `json:"preview"`
	Github      *string `json:"github"`
	Description *string `json:"description"`
	Tags        []Tag   `json:"tags"`
}
