docker build -t frontend-image --target frontend .
docker run -p 5173:5173 --rm --name front_end frontend-image