package database

import (
	"gorm.io/gorm"
)

var DB *gorm.DB

func ConnectDB(dsn string) {
	// dsn := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", config.Config("DB_HOST"), port, config.Config("DB_USER"), config.Config("DB_PASSWORD"), config.Config("DB_NAME"))

	// db, err := gorm.Open(postgres.Open(dsn))

	// if err != nil {
	// 	panic("Failed to connect to database")
	// }

	// err = db.AutoMigrate(&model.User{}, &model.Experience{}, &model.Project{}, &model.SocialMediaHandle{}, &model.Tag{})

	// if err != nil {
	// 	panic("Failed to automigrate database")
	// }

	// fmt.Println("Connected to database")
}
