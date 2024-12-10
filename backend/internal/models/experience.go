package models

import (
	"time"

	"github.com/google/uuid"
)

type Experience struct {
	ID          uuid.UUID  `json:"id" gorm:"type:uuid;default:gen_random_uuid();primary_key"`
	Position    string     `json:"position"`
	Company     string     `json:"company"`
	Description string     `json:"description"`
	StartDate   time.Time  `json:"start_date"`
	EndDate     *time.Time `json:"end_date"`
	Tags        []Tag      `json:"tags" gorm:"many2many:experience_tags"`
	UserID      uuid.UUID  `json:"userId" gorm:"type:uuid"`
}

type CreateExperiencePayload struct {
	Position    string     `json:"position"`
	Company     string     `json:"company"`
	Description string     `json:"description"`
	Tags        []Tag      `json:"tags"`
	UserID      uuid.UUID  `json:"userId"`
	StartDate   time.Time  `json:"start_date"`
	EndDate     *time.Time `json:"end_date"`
}

type UpdateExperiencePayload struct {
	Position    *string    `json:"position"`
	Company     *string    `json:"company"`
	Tags        []Tag      `json:"tags"`
	Description *string    `json:"description"`
	StartDate   time.Time  `json:"start_date"`
	EndDate     *time.Time `json:"end_date"`
}
