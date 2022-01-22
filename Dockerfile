FROM nicogg/bilygine-vuejs:latest

# make the 'app' folder the current working directory
WORKDIR /app

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

EXPOSE 8080
ENTRYPOINT [ "npm", "run", "serve"]
