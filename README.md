# Docker-Compose-Project

# This project deploys a multi-container application using docker-compose.yml file.

![Capture](https://user-images.githubusercontent.com/117350787/225546388-0df65232-ff89-4c6a-bdb8-13954857d652.PNG)

# The application consists of the following services:

- Redis: a container running the Redis key-value store on port 6379, with a healthcheck that pings the Redis server.
- PostgresDB: a container running a Postgres database on port 5432, with a healthcheck that checks the readiness of the database server.
- Vote: a container running a voting application on port 8501 that communicates with Redis for storing vote data.
- Worker: a container running a worker process that communicates with Redis for processing vote data and with Postgres for storing the processed data.
- Result: a container running a result application on port 80 that communicates with Postgres for retrieving the processed data.

All the containers are connected to a network named "mynetwork" using the bridge driver. The services have dependencies on each other, specified using the "depends_on" keyword, which ensures that the necessary containers are started in the correct order. Additionally, each service has a healthcheck that monitors the container's status and helps ensure that the application is running correctly.
