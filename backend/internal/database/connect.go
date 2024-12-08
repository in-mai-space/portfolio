package database

import (
	"fmt"
	"in-mai-space/portfolio/internal/config"

	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

func ConnectDB(db *config.DatabaseConfig) (*gorm.DB, error) {
	dsn := db.GetDSNString()
	gormDB, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		return nil, fmt.Errorf("failed to open database connection: %w", err)
	}

	// err = gormDB.AutoMigrate(&models.User{}, &models.Experience{}, &models.Project{}, &models.SocialMediaHandle{}, &models.Tag{})
	// if err != nil {
	// 	return nil, fmt.Errorf("failed to automigrate models: %w", err)
	// }

	return gormDB, nil
}
