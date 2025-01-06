package models

import (
	"github.com/google/uuid"
)

type User struct {
	ID          uuid.UUID           `json:"id" gorm:"type:uuid;default:gen_random_uuid();primary_key"`
	Name        string              `json:"name"`
	Email       string              `json:"email"`
	Bio         string              `json:"bio"`
	About       string              `json:"about"`
	Photo       string              `json:"photo_url"`
	Experiences []Experience        `json:"experiences" gorm:"foreignKey:UserID"`
	Projects    []Project           `json:"projects" gorm:"foreignKey:UserID"`
	SocialMedia []SocialMediaHandle `json:"socials" gorm:"foreignKey:UserID"`
}

type UpdateUserPayload struct {
	Name  *string `json:"name"`
	Email *string `json:"email"`
	Bio   *string `json:"bio"`
	About *string `json:"about"`
	Photo *string `json:"photo_url"`
}
