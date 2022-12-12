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
- [3. Installation](#3-installation)
- [4. Running the app](#4-running-the-app)
- [5. Initialize the database](#5-initialize-the-database)
- [6. Initialize seed data](#6-initialize-seed-data)

# 1. Requirements

## 1. [Node.js ^18.0.0](https://nodejs.org/en/download/)

## 2. [Nest CLI](https://docs.nestjs.com/cli/overview)

## 3. [Docker](https://docs.docker.com/get-docker/)

## 4. [Docker Compose](https://docs.docker.com/compose/install/)

# 2. Stack

- [NestJS](https://nestjs.com/) (Typescript)
- [MongoDB](https://www.mongodb.com/)

# 3. Installation

```bash
# install dependencies
$ npm install
```

# 4. Running the app

```bash
# 1. Clone the repo
$ git clone https://www.github.com/cocodrilet

# 2. Install dependencies
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# 3. Install Nest CLI
$ npm i -g @nestjs/cli

# 4. Initialize the database
$ docker-compose up -d
```

# 5. Initialize the database

```bash
# 1. Install Docker

# 2. Install Docker Compose

# 3. Run the command
$ docker-compose up -d
```

# 6. Initialize seed data

```bash
# 1. GET /api/v1/seed
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
