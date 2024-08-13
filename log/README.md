# LOGS

Steps i've followed so far.

1. React initilization along with next.js

   ```bash
   $ npx create-next-app@latest
   ```

2. Dockerize

   - Write Dockerfile

   ```bash
   docker login
   docker build -t ruohao1/portfolio .
   docker run -dp 8000:3000 ruohao1/portfolio
   ```

   eventually

   ```bash
   docker push ruohao1/portfolio
   ```

   - Using Docker compose instead

   ```bash
   docker compose up
   ```

3. Done a bit of html, css and javascript

   - snap scrolling, animations (reveal on scroll, hide navbar on scroll)
   - custom color palet, font
