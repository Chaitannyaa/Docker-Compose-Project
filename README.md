# Docker_Compose_Project

# This project deploys a multi-container application with the help of Docker-Compose.

![Capture](https://user-images.githubusercontent.com/117350787/225546388-0df65232-ff89-4c6a-bdb8-13954857d652.PNG)

# Pre-requisites:

- Docker and Docker compose installed
- Knowledge of docker-compose and YAML
- Basic understanding of Python and Javascript languages

# Project Overview:

This project is a web application designed to create a poll for the Popular Container Orchestration Tool using the Vote app [Python-based]. The application collects user choices and stores them on a Redis server. A Worker app [Python-based] then collects the data from the Redis server, processes the data to create poll results, and stores the result data in a Postgres database server. Finally, the Result app [NodeJs] retrieves data from the Postgres server and displays the poll results. This application provides an interface to conduct polls, and with the help of Docker Compose, it deploys multiple containerized services, making it a scalable and efficient solution for conducting polls.

# The application consists of the following services:

- Redis: a container running the Redis key-value store on port 6379, with a healthcheck that pings the Redis server.
- PostgresDB: a container running a Postgres database on port 5432, with a healthcheck that checks the readiness of the database server.
- Vote: a container running a voting application on port 8501 that communicates with Redis for storing vote data.
- Worker: a container running a worker process that communicates with Redis for processing vote data and with Postgres for storing the processed data.
- Result: a container running a result application on port 80 that communicates with Postgres for retrieving the processed data.

![vsdve](https://user-images.githubusercontent.com/117350787/234478665-0df8db8a-8793-4e8c-9596-a9e2d723ae4d.JPG)

All the containers are connected to a network named "mynetwork" using the bridge driver. The services have dependencies on each other, specified using the "depends_on" keyword, which ensures that the necessary containers are started in the correct order. Additionally, each service has a healthcheck that monitors the container's status and helps ensure that the application is running correctly.

# Contributions

Thank you for considering contributing to this project! Welcome to all contributions, big or small.
Use clear, concise and easy-to-read code.

## How to Contribute

- Fork the repository and create your own branch from main.
- Make your changes and Test your changes thoroughly to ensure they work as intended.
- Create a pull request with a clear description of your changes.

# License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/Chaitannyaa/Docker-Compose-Project/blob/e2b1533cb6dbfa0dad10eeaeccd51015e18afbd0/LICENSE.md) file for details.
