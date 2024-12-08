package models

import "github.com/google/uuid"

type SocialMediaHandle struct {
	ID     uuid.UUID `json:"id" gorm:"type:uuid;default:gen_random_uuid();primary_key"`
	Name   string    `json:"name"`
	URL    string    `json:"url"`
	UserID uuid.UUID `json:"userId" gorm:"type:uuid"`
}

type CreateSocialMediaHandlePayload struct {
	Name   string    `json:"name"`
	URL    string    `json:"url"`
	UserID uuid.UUID `json:"userId"`
}
