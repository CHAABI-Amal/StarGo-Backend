# Utiliser une image Node.js officielle
FROM node:18

# Créer et définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code de l'application
COPY . .

# Construire l'application NestJS
RUN npm run build

# Exposer le port utilisé par NestJS
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["npm", "run", "start:prod"]
