package models

import "github.com/google/uuid"

type Experience struct {
	ID          uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid();primary_key"`
	Position    string    `json:"position"`
	Company     string    `json:"company"`
	Description string    `json:"description"`
	Tags        []Tag     `json:"tags" gorm:"many2many:experience_tags"`
	UserID      uuid.UUID `json:"userId" gorm:"type:uuid"`
}

type CreateExperiencePayload struct {
	Position    string    `json:"position"`
	Company     string    `json:"company"`
	Description string    `json:"description"`
	UserID      uuid.UUID `json:"userId"`
}

type UpdateExperiencePayload struct {
	Position    *string    `json:"position"`
	Company     *string    `json:"company"`
	Description *string    `json:"description"`
	UserID      *uuid.UUID `json:"userId"`
}
