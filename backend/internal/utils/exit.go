package utils

import (
	"fmt"
	"os"
)

func Exit(message string) {
	fmt.Print(message)
	os.Exit(0)
}
