package config

type DatabaseConfig struct {
	Host     string `env:"HOST"`
	Name     string `env:"NAME"`
	User     string `env:"USER"`
	Password string `env:"PASSWORD"`
	Port     uint   `env:"PORT"`
}
