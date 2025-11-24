# Imagen base
FROM node:18

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar package.json y package-lock.json
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto del código del backend
COPY . .

# Exponer el puerto en el que corre tu backend
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["node", "src/server.js"]
