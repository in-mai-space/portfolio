package database

import (
	"context"
	"in-mai-space/portfolio/internal/config"

	"github.com/jackc/pgx/v5/pgxpool"
)

func ConnectDB(db *config.DatabaseConfig) (*pgxpool.Pool, error) {
	dsn := db.GetDSNString()
	pool, err := pgxpool.New(context.Background(), dsn)

	if err != nil {
		return nil, err
	}

	return pool, nil
}
