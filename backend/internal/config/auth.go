package config

type AuthenticationConfig struct {
	SupabaseURL string `env:"URL"`
	SupabaseKey string `env:"KEY"`
}