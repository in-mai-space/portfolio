package transactions

import "github.com/jackc/pgx/v5/pgxpool"

type ExperienceTransactionInterface interface {
	InsertExperience()
	GetExperience()
	UpdateExperience()
	DeleteExperience()
}

type ExperienceTransaction struct {
	database *pgxpool.Pool
}

func NewExperienceTransaction(db *pgxpool.Pool) *ExperienceTransaction {
	experience := &ExperienceTransaction{
		database: db,
	}
	return experience
}

func (transaction *ExperienceTransaction) InsertExperience() {

}

func (transaction *ExperienceTransaction) GetExperience() {

}

func (transaction *ExperienceTransaction) UpdateExperience() {

}

func (transaction *ExperienceTransaction) DeleteExperience() {

}
