package config

import (
	"fmt"
)

type DatabaseConfig struct {
	Host       string `env:"HOST"`
	Name       string `env:"NAME"`
	User       string `env:"USER"`
	Password   string `env:"PASSWORD"`
	Port       uint   `env:"PORT"`
	RequireSSL bool   `env:"REQUIRE_SSL"`
}

func (db *DatabaseConfig) GetDSNString() string {
	var sslmode string
	if db.RequireSSL {
		sslmode = "required"
	} else {
		sslmode = "disable"
	}

	return fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=%s", db.Host, db.Port, db.User, db.Password, db.Name, sslmode)
}
