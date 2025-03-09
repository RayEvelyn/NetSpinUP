#!/bin/bash

# Set up and run NetSpinUP project with Docker

# Stop and remove any existing containers
docker-compose down

# Build and start the containers
docker-compose up --build -d

# Show running services
docker ps

echo "NetSpinUP is running!"
echo "API is available at http://localhost:5000"
echo "Web is available at http://localhost:3000"
