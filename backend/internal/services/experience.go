package services

import "in-mai-space/portfolio/internal/transactions"

type ExperienceServiceInterface interface {
	CreateExperience()
	GetExperience()
	UpdateExperience()
	DeleteExperience()
}

type ExperienceService struct {
	transaction *transactions.ExperienceTransaction
}

func NewExperienceService(transaction *transactions.ExperienceTransaction) *ExperienceService {
	service := &ExperienceService{
		transaction: transaction,
	}
	return service
}

func (experience *ExperienceService) CreateExperience() {

}

func (experience *ExperienceService) GetExperience() {

}

func (experience *ExperienceService) UpdateExperience() {

}

func (experience *ExperienceService) DeleteExperience() {

}
