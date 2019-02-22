FROM node:10
LABEL nirajgeorgian <nirajgeorgian@gmail.com>

# Set the Working directory for API
WORKDIR /www/api

# Dependencies for running the backend API
RUN npm install pm2 -g --no-optional
RUN npm install babel-cli -g --no-optional
RUN apt-get update

# Adding pependencies package
COPY package*.json ./
RUN npm install --production --silent --no-optional

# Add current folder to WORKDIR
COPY . .

# Entrypoint script
RUN cp app.sh /usr/local/bin && chmod +x /usr/local/bin/app.sh

# Expose the port
EXPOSE 8080

CMD ["/usr/local/bin/app.sh"]
