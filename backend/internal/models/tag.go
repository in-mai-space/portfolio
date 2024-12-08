package model

import "github.com/google/uuid"

type Tag struct {
	ID          uuid.UUID    `json:"id" gorm:"type:uuid;default:gen_random_uuid();primary_key"`
	Name        string       `json:"name"`
	Description string       `json:"description"`
	Experiences []Experience `json:"experiences" gorm:"many2many:experience_tags"`
	Projects    []Project    `json:"projects" gorm:"many2many:project_tags"`
}
