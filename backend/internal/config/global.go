package config

import (
	"fmt"

	"github.com/caarlos0/env/v11"
	"github.com/joho/godotenv"
)

type GlobalConfig struct {
	ApplicationConfig    ApplicationConfig    `envPrefix:"PORTFOLIO_APP_"`
	AuthenticationConfig AuthenticationConfig `envPrefix:"PORTFOLIO_SUPABASE_"`
	DatabaseConfig       DatabaseConfig       `envPrefix:"PORTFOLIO_DB_"`
}

// load env variables and parse it into a global config
func GetConfig(path string) (*GlobalConfig, error) {
	if path != "" {
		err := godotenv.Load(path)
		if err != nil {
			return nil, fmt.Errorf("failed to load env variables: %s", err.Error())
		}
	}

	config, err := env.ParseAs[GlobalConfig]()
	if err != nil {
		return nil, fmt.Errorf("failed to parse env variables: %s", err.Error())
	}

	return &config, nil
}
