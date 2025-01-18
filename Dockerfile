# Usar una imagen base de Node.js 21
FROM node:21

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app


# Instalar las dependencias iniciales si se desea (no obligatorio)
# RUN npm install

#instalar nestjs de ser necesario
#RUN npm install -g npm@11.0.0
RUN npm i -g @nestjs/cli
#crear proyecto en caso de ser necesario
#RUN nest new . --directory --skip-git


# Copiar package.json y package-lock.json si existen (para futuras instalaciones)
#COPY package*.json ./
COPY . ./

# Exponer el puerto que usará la aplicación
EXPOSE 8080
EXPOSE 5173

# Comando por defecto (mantiene el contenedor corriendo)
CMD ["tail", "-f", "/dev/null"]
