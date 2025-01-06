package config

type AuthenticationConfig struct {
	SupabaseSecretKey string `env:"JWT_SECRET_KEY"`
}
