package models

import "github.com/google/uuid"

type Project struct {
	ID          uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid();primary_key"`
	Name        string    `json:"name"`
	Github      string    `json:"github"`
	Description string    `json:"description"`
	Tags        []Tag     `json:"tags" gorm:"many2many:project_tags"`
	UserID      uuid.UUID `json:"userId" gorm:"type:uuid"`
}
