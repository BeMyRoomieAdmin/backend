# BeMyRoomie

[![Node.js Version](https://img.shields.io/badge/Node.js-22.13.1-blue)](https://nodejs.org/)
[![NestJS Version](https://img.shields.io/badge/NestJS-11.0.1-red)](https://nestjs.com/)
[![Mongoose Version](https://img.shields.io/badge/Mongoose-8.9.6-green)](https://mongoosejs.com/)

Una plataforma para conectar a personas que buscan compañeros de piso con gustos y necesidades similares.

## Tabla de contenidos

1.  Introducción
2.  Instalación
3.  Configuración
4.  Ejecución
5.  Funcionalidades
6.  Licencia
7.  Contacto

## 1. Introducción

BeMyRoomie es una plataforma innovadora diseñada para facilitar la búsqueda de compañeros de piso ideales. Nuestra misión es conectar a personas con intereses y estilos de vida compatibles, creando así hogares armoniosos y experiencias de convivencia positivas.

Este proyecto está desarrollado con NestJS, un framework de Node.js progresivo y robusto, que nos permite construir aplicaciones escalables y mantenibles. Utilizamos Mongoose para interactuar con MongoDB, nuestra base de datos NoSQL elegida por su flexibilidad y rendimiento.

## 2. Instalación

¡Vamos a preparar tu ordenador para que puedas ejecutar BeMyRoomie! Sigue estos pasos con cuidado:

### Requisitos

- Node.js versión 22.13.1
- npm (o yarn, pnpm)
- Docker y Docker Compose

### 2.1. Instalación de software básico

Lo primero que necesitamos es instalar algunas herramientas esenciales:

1.  **Windows:**

    - **Google Chrome:** Descarga e instala Google Chrome desde este enlace: [https://www.google.com/chrome/](https://www.google.com/chrome/)
    - **Node.js y npm:** Descarga el instalador de Node.js LTS versión 22.13.1 desde este enlace: [https://nodejs.org/download/release/v22.13.1/node-v22.13.1-x64.msi](https://nodejs.org/download/release/v22.13.1/node-v22.13.1-x64.msi) y sigue los pasos de instalación. ¡No te preocupes si no entiendes algunas opciones, puedes dejarlas como están!
    - **Git:** Descarga Git desde este enlace: [https://git-scm.com/download/win](https://git-scm.com/download/win) y sigue los pasos de instalación. Git nos servirá para descargar el código del proyecto.
    - **Visual Studio Code:** Descarga Visual Studio Code desde este enlace: [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download) y sigue los pasos. Este será nuestro editor de código.
    - **Docker Desktop:** Descarga Docker Desktop desde este enlace: [https://docs.docker.com/desktop/setup/install/windows-install/](https://docs.docker.com/desktop/setup/install/windows-install/) y sigue los pasos. Docker nos permitirá crear un entorno virtual para la base de datos.

2.  **macOS:**

    - **Google Chrome:** Descarga e instala Google Chrome desde este enlace: [https://www.google.com/chrome/](https://www.google.com/chrome/)
    - **Homebrew:** Abre la terminal (Aplicaciones > Terminal) y pega este comando:

      ```bash
      /bin/bash -c "$(curl -fsSL [https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh](https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh))"
      ```

      Homebrew nos ayudará a instalar otras herramientas.

    - **Node.js y npm:** Abre la terminal y escribe:

      ```bash
      brew install node@22.13.1
      ```

    - **Git:** Abre la terminal y escribe:

      ```bash
      brew install git
      ```

    - **Visual Studio Code:** Descarga Visual Studio Code desde este enlace: [https://code.visualstudio.com/Download](https://code.visualstudio.com/Download) y sigue los pasos.
    - **Docker Desktop:** Descarga Docker Desktop desde este enlace: [https://docs.docker.com/desktop/setup/install/mac-install/](https://docs.docker.com/desktop/setup/install/mac-install/) y sigue los pasos.

3.  **Linux:**

    - La instalación varía según la distribución. Busca en internet cómo instalar Chrome, Node.js, Git, Visual Studio Code y Docker Desktop en tu distribución específica (por ejemplo, Ubuntu, Fedora, etc.).

### 2.2. ¡Manos a la obra con BeMyRoomie!

¡Ya casi estamos listos! Ahora vamos a preparar el proyecto BeMyRoomie:

1.  **Descarga del código:**

    - Abre la terminal (en Windows busca "cmd" o "Símbolo del sistema").
    - Navega a la carpeta donde quieres guardar el proyecto. Puedes usar el comando `cd` (por ejemplo, `cd Documentos/proyectos`).
    - Clona el repositorio con este comando (recuerda que debes ser colaborador del proyecto):

      ```bash
      git clone https://github.com/BeMyRoomieAdmin/backend
      ```

2.  **Abre el proyecto con Visual Studio Code:**

    - Abre Visual Studio Code.
    - Ve a "Archivo" > "Abrir carpeta..." y selecciona la carpeta que acabas de clonar.

3.  **Instala las dependencias:**

    - Abre la terminal dentro de Visual Studio Code (puedes ir a "Ver" > "Terminal" o pulsar `Ctrl + J` (Windows) o `Command + J` (macOS)).
    - Escribe este comando y presiona Enter:

      ```bash
      npm install
      ```

      Este comando instalará todas las herramientas necesarias para que BeMyRoomie funcione. ¡Puede tardar un poco!

### 2.3. ¡La base de datos en marcha!

BeMyRoomie utiliza una base de datos llamada MongoDB. ¡No te preocupes, es más fácil de lo que parece!

1.  **Busca el archivo `docker-compose.yml` en la raíz del proyecto:**

    - El archivo `docker-compose.yml` está en la raíz del proyecto. Si no lo ves, ponte en contacto con el equipo de desarrollo. Mas detalles al final de este documento.

2.  **Levanta el contenedor de MongoDB:**

    - Abre la terminal dentro de Visual Studio Code (si no la tienes abierta).
    - Escribe este comando y presiona Enter:

      ```bash
      docker-compose up -d
      ```

      Este comando creará un "contenedor" virtual con la base de datos MongoDB. ¡Así de fácil! Se paciente porque puede tardar un poco.

¡Con estos pasos, tendrás todo lo necesario para empezar a trabajar con BeMyRoomie! En la siguiente sección te explicamos cómo ejecutar la aplicación.

---

**Nota importante:** Si en algún momento te encuentras con un error o no sabes cómo continuar, ¡no te preocupes! Busca en internet (por ejemplo, en Google) el mensaje de error o la duda que tengas. ¡Seguro que encuentras la respuesta! Y si no, ¡siempre puedes pedir ayuda a alguien con más experiencia!

---

## 3. Configuración

### Variables de entorno

Crea un archivo `.env` en la raíz del proyecto y copia el contenido del archivo `.env.example` (si lo tienes) o añade las siguientes variables de ejemplo:

```
NODE_ENV=development
PORT=3000
DATABASE_USER=root
DATABASE_PASSWORD=root
DATABASE_HOST=localhost
DATABASE_PORT=27017
DATABASE_NAME=be-my-roomie-development
PASSWORD=123123aS
```

## 4. Ejecución

Para poder empezar a trabajar con BeMyRoomie, es necesario levantar el proyecto correctamente en tu ordenador. Pero antes de eso, necesitamos tener Docker y Docker Compose instalados y la base de datos en marcha siguiendo los pasos de la sección anterior.

Para poblar la base de datos con datos ficticios, debes ejecutar el siguiente comando:

### Seed de la base de datos

```bash
npm run seed
```

Y una vez terminado el proceso sin ningún error, puedes empezar a trabajar con el proyecto. Para ello, ejecuta el siguiente comando:

### Desarrollo

```bash
npm run dev
```

## 5. Funcionalidades

- Registro de usuarios
- Recuperación de contraseña
- Inicio de sesión
- Búsqueda de Habitaciones
- Creación de Apartamentos
- Creación de Habitaciones
- Chat en vivo entre usuarios con websockets (en desarrollo)

## 6. Licencia

Este proyecto es privado y todos los derechos están reservados.

## 7. Contacto

Correo electrónico: bemyroomieofficial@gmail.com
