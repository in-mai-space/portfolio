package config

type AuthenticationConfig struct {
	SupabaseURL string `env:"SUPABASE_URL"`
	SupabaseKey string `env:"SUPABASE_KEY"`
}
