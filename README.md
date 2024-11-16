# CI/CD Project - Learning Automation Project

This repository represents my learning project for studying and automating CI/CD processes. The project is designed to demonstrate the process of automatically deploying a React application using modern DevOps technologies.

## Project Description

The project is a simple landing page created with React using TypeScript and Vite for development and building. The main goal of the project is to create a workflow that will automatically deploy application updates to AWS after each commit to the GitHub repository. In this way, I am learning and implementing the complete CI/CD cycle for frontend applications.

### Technologies Used

- **React and TypeScript**: for creating components and ensuring type safety.
- **Vite**: a tool for developing and building the project, providing fast build times and flexibility in configuration.
- **GitHub Actions**: for automating the CI/CD process. GitHub Actions is used to run scripts after each commit, enabling automated testing, building, and deployment.
- **AWS EC2**: an instance for hosting the project, allowing deployment in the cloud and testing its availability.
- **Nginx**: configured as a reverse proxy to route requests to the Node.js server running through PM2.
- **PM2**: a process manager for managing the Node.js server, providing resilience and automatic restart if needed.
- **Docker** (planned): I plan to add containerization to the project to create a more flexible infrastructure, simplifying dependency management and deployment.

The workflow of the project includes automatic deployment: after each commit, GitHub Actions initiates the build and then deploys to the EC2 server, ensuring quick and secure updates of the application.

## Future Plans

At this stage, the project consists only of the frontend part, but I plan to significantly expand its functionality. Upcoming plans include:

1. **Adding a Backend**: Developing a backend using Node.js and Express. The backend will support an API for managing application data and providing user information.
2. **Containerization**: Using Docker to simplify deployment and ensure compatibility across different environments. All components of the project will be containerized, providing greater flexibility in managing the infrastructure.
3. **Scaling with Kubernetes**: I plan to learn Kubernetes and set up a cluster for automatically scaling the application based on load.
4. **Database Integration**: Adding a database (possibly PostgreSQL or MongoDB) to store user data and manage content.
5. **Security**: Setting up authentication and authorization to manage access to specific parts of the application.
6. **Monitoring and Logging**: Adding monitoring tools (Prometheus, Grafana) to track performance and logging (ELK Stack) for log analysis.

This project is an excellent opportunity for me to learn the full cycle of developing, automating, and deploying web applications using modern DevOps technologies. I intend to continue improving this project by adding new technologies and approaches that will help me become a more experienced engineer in the field of automation and development.
