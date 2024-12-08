package config

type AuthenticationConfig struct {
	SupabaseURL       string `env:"URL"`
	SupabaseKey       string `env:"KEY"`
	SupabaseSecretKey string `env:"JWT_SECRET_KEY"`
}
