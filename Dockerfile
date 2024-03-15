# Stage 1: Backend build
FROM python:3.11 AS backend

ARG YOUR_ENV=default

ENV YOUR_ENV=${YOUR_ENV}
ENV POETRY_VERSION=1.7.1
ENV POETRY_HOME=/opt/poetry
ENV POETRY_VENV=/opt/poetry-venv
ENV POETRY_CACHE_DIR=/opt/.cache

RUN apt-get update && apt-get install -y libpq-dev gcc

# System deps:
RUN python3 -m venv $POETRY_VENV \
    && $POETRY_VENV/bin/pip install -U pip setuptools \
    && $POETRY_VENV/bin/pip install poetry==${POETRY_VERSION}

# Add `poetry` to PATH
ENV PATH="${PATH}:${POETRY_VENV}/bin"

# Copy only requirements to cache them in docker layer

WORKDIR /app
RUN poetry init -n
COPY pyproject.toml poetry.lock /app/

# Exclude frontend directory from copying
COPY . /app/
RUN rm -rf /app/frontend

# Project initialization:
RUN poetry config virtualenvs.create false && poetry install --no-interaction

ENTRYPOINT [ "/bin/sh", "run_scripts.sh"]

# Stage 2: Frontend build
FROM node:21.6.1-alpine AS frontend

WORKDIR /app

COPY frontend/package*.json ./
RUN npm install

COPY frontend/. ./

CMD [ "npm", "run", "dev" ]
