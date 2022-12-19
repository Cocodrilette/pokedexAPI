<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Table of Contents

- [Table of Contents](#table-of-contents)
- [1. Requirements](#1-requirements)
    - [1. Node.js ^18.0.0](#1-nodejs-1800)
    - [2. Nest CLI](#2-nest-cli)
    - [3. Docker](#3-docker)
    - [4. Docker Compose](#4-docker-compose)
- [2. Stack](#2-stack)
    - [NestJS (Typescript)](#nestjs-typescript)
    - [MongoDB](#mongodb)
- [3. Installation](#3-installation)
- [5. Running the app](#5-running-the-app)
    - [1. Clone the repo](#1-clone-the-repo)
    - [2. Install dependencies](#2-install-dependencies)
    - [3. Install Nest CLI](#3-install-nest-cli)
    - [4. Initialize the database](#4-initialize-the-database)
- [6. Initialize the database](#6-initialize-the-database)
    - [1. Install Docker](#1-install-docker)
    - [2. Install Docker Compose (already installed with Docker)](#2-install-docker-compose-already-installed-with-docker)
    - [3. Run the command:](#3-run-the-command)
- [7. Initialize seed data](#7-initialize-seed-data)
    - [**GET** /api/v1/seed](#get-apiv1seed)

# 1. Requirements

### 1. [Node.js ^18.0.0](https://nodejs.org/en/download/)

### 2. [Nest CLI](https://docs.nestjs.com/cli/overview)

### 3. [Docker](https://docs.docker.com/get-docker/)

### 4. [Docker Compose](https://docs.docker.com/compose/install/)

# 2. Stack

### [NestJS](https://nestjs.com/) (Typescript)

### [MongoDB](https://www.mongodb.com/)

# 3. Installation

```bash
# install dependencies
$ npm install
```

> ### ⚠️ Set the enviroment variables in `.env.example` and rename it to `.env` ⚠️

# 5. Running the app

### 1. Clone the repo

```bash
$ git clone https://www.github.com/cocodrilet
```

### 2. Install dependencies

```bash
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### 3. Install Nest CLI

```bash
$ npm i -g @nestjs/cli
```

### 4. Initialize the database

```bash
$ docker-compose up -d
```

# 6. Initialize the database

### 1. Install Docker

### 2. Install Docker Compose (already installed with Docker)

### 3. Run the command:

```bash
$ docker-compose up -d
```

# 7. Initialize seed data

### **GET** /api/v1/seed

```bash
http://localhost:3000/api/v1/seed
```

<!-- ## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
``` -->
