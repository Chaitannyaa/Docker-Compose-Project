# Worker/app/Dockerfile

FROM python:3.9-slim

WORKDIR /app

RUN apt-get update && apt-get install -y \
    build-essential \
    libpq-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

COPY worker.py requirements.txt ./

RUN pip3 install -r requirements.txt

ENTRYPOINT [ "python", "./worker.py" ]
