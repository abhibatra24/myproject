# MyProject — Dockerized Node.js Application

A simple Node.js web application containerized with Docker and deployed on AWS using Amazon ECR and Amazon EC2.

## Project Overview

This project demonstrates a basic DevOps deployment workflow:

```text
Developer
   ↓
GitHub
   ↓
Docker Build
   ↓
Amazon ECR
   ↓
Amazon EC2
   ↓
Docker Container
   ↓
Web Application
```

##  Technologies Used

* Node.js
* Git & GitHub
* Docker
* Docker Compose
* AWS ECR
* AWS EC2
* AWS IAM
* Linux
* SSH

##  Project Structure

```text
myproject/
├── server.js
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
└── README.md
```

##  Run Locally with Docker

Build the Docker image:

```bash
docker build -t myproject:latest .
```

Run the container:

```bash
docker run -d -p 3000:3000 --name myproject-container myproject:latest
```

The application can then be accessed at:

```text
http://localhost:3000
```

##  Run with Docker Compose

```bash
docker compose up -d --build
```

To stop the application:

```bash
docker compose down
```

##  AWS Deployment

The Docker image is stored in a private Amazon ECR repository and pulled onto an Amazon EC2 instance.

Deployment flow:

```text
Local Machine
     ↓
Docker Image
     ↓
Amazon ECR
     ↓
EC2 Instance
     ↓
Docker Pull
     ↓
Docker Container
     ↓
Port 80 → Container Port 3000
```

##  AWS Services

### Amazon ECR

Used as the private container registry for storing the Docker image.

### Amazon EC2

Used to host and run the Docker container.

### IAM

An EC2 IAM role provides permission for the instance to pull the Docker image from ECR without storing AWS access keys on the server.

### Security Group

HTTP traffic is allowed through port 80, while SSH access is restricted.

##  Current Deployment

The application is currently running inside a Docker container on an AWS EC2 instance.

Container port:

```text
3000
```

EC2 exposed port:

```text
80
```

Port mapping:

```text
EC2 :80 → Docker :3000
```

##  Future Improvements

* Infrastructure as Code with Terraform
* CI/CD using GitHub Actions
* Automated Docker image builds
* Automated deployment to EC2
* AWS monitoring with CloudWatch
* Improved application architecture
* Production-ready reverse proxy configuration
