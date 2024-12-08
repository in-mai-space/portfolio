package config

type ApplicationConfig struct {
	Host string `env:"HOST"`
	URL  string `env:"URL"`
	Port uint   `env:"PORT"`
}