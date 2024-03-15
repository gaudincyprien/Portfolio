docker build -t backend-image --target backend .
docker run -p 8000:8000 --rm --name back-end backend-image