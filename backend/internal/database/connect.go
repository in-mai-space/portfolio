package database

import (
	"in-mai-space/portfolio/internal/config"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConnectDB(db *config.DatabaseConfig) (*gorm.DB, error) {
	dsn := db.GetDSNString()
	gormDB, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	return gormDB, err
}
