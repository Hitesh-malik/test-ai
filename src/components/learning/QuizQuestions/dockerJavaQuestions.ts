import { QuizQuestion } from "./type";
export const dockerJavaQuestions: QuizQuestion[] = [
{
"id": 1,
"question": "What is Docker?",
"options": [
"A programming language for cloud applications",
"A platform for developing, shipping, and running applications in containers",
"A database management system for Java",
"A testing framework for Java applications"
],
"correctAnswer": 1,
"level": "beginner"
},
{
"id": 2,
"question": "What file is used to define how to build a Docker image?",
"options": [
"docker.json",
"Dockerfile",
"docker-compose.yml",
"image.config"
],
"correctAnswer": 1,
"level": "beginner"
},
{
"id": 3,
"question": "Which command is used to run a Docker container?",
"options": [
"docker start",
"docker execute",
"docker run",
"docker create"
],
"correctAnswer": 2,
"level": "beginner"
},
{
"id": 4,
"question": "What is the main advantage of using Docker for Java applications?",
"options": [
"It compiles Java code faster than traditional methods",
"It eliminates the need for a JVM",
"It provides a consistent environment across development, testing, and production",
"It automatically optimizes Java bytecode"
],

"correctAnswer": 2,
"level": "beginner"
},
{
"id": 5,
"question": "Which of the following is a common base image for Java applications?",
"options": [
"ubuntu:latest",
"alpine:latest",
"openjdk:11",
"nginx:latest"
],
"correctAnswer": 2,
"level": "beginner"
},
{
"id": 6,
"question": "What is a multi-stage build in Docker and why is it useful for Java applications?",
"options": [
"Running multiple Java versions in one container",
"Using different stages to build and run the application, resulting in smaller final images",
"Building multiple Docker images at once",
"A technique for running multi-threaded Java applications"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 7,
"question": "What is the purpose of the ENTRYPOINT instruction in a Dockerfile for a Java application?",
"options": [
"To specify the network ports the container will use",
"To define environment variables for the JVM",
"To configure which command will be executed when the container starts",
"To set the Java classpath"
],
"correctAnswer": 2,
"level": "intermediate"
},
{
"id": 8,
"question": "How would you configure a Java application's memory limits in Docker?",
"options": [
"Using the -Xmx JVM flag in the Dockerfile",
"By setting the JAVA_MEMORY environment variable",
"Using the --memory flag when running the container",
"Both A and C are valid approaches"
],

"correctAnswer": 3,
"level": "intermediate"
},
{
"id": 9,
"question": "What is Docker Compose used for in Java development?",
"options": [
"To compile Java code into bytecode",
"To orchestrate multiple containers that work together",
"To compose Java classes into packages",
"To optimize Docker images for Java applications"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 10,
"question": "What is the recommended approach for handling application logs in a Dockerized Java application?",
"options": [
"Write logs to specific files inside the container",
"Use a volume to persist logs outside the container",
"Output logs to stdout/stderr and let Docker logging drivers handle them",
"Disable logging in containerized environments"
],
"correctAnswer": 2,
"level": "intermediate"
},
{
"id": 11,
"question": "Which of the following is a best practice for Docker image layers in Java applications?",
"options": [
"Place the application JAR/WAR file before the dependency installation to optimize caching",
"Place dependency installation before copying application code to optimize caching",
"Add all files in a single COPY instruction to minimize layers",
"Rebuild the entire image for any code change to ensure consistency"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 12,
"question": "How are environment-specific configurations typically handled in Dockerized Spring Boot applications?",
"options": [
"Hardcoding configurations in the application.properties file",
"Using environment variables passed to the container",
"Rebuilding the Docker image for each environment",

"Using separate JVMs for each environment"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 13,
"question": "What is the purpose of a Docker volume for a Java application?",
"options": [
"To increase the application's memory capacity",
"To persist data outside the container's lifecycle",
"To share Java libraries between containers",
"To improve CPU allocation for the JVM"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 14,
"question": "What does the Docker 'HEALTHCHECK' instruction do for a Java application?",
"options": [
"It automatically tunes JVM parameters for optimal performance",
"It checks if the container is still working by running a specified command periodically",
"It verifies the Java code has no bugs or vulnerabilities",
"It ensures the Java application starts with the correct classpath"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 15,
"question": "What is the benefit of using Alpine-based Java images instead of standard ones?",
"options": [
"They provide more Java features",
"They are significantly smaller in size",
"They automatically include more libraries",
"They allow Java code to run faster"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 16,
"question": "What is Container Orchestration and how does it relate to Java applications in Docker?",
"options": [
"A technique for organizing Java packages in a container",
"A method to optimize JVM garbage collection in containers",

"Systems like Kubernetes that automate deployment, scaling, and management of containerized applications",
"A design pattern for structuring Java microservices"
],
"correctAnswer": 2,
"level": "advanced"
},
{
"id": 17,
"question": "What technique can be used to create minimal JRE-based Docker images for Java applications?",
"options": [
"Using the --optimize flag when building the image",
"Using jlink to create a custom runtime with only the needed modules",
"Simply using the smallest Alpine image available",
"Running the application with the -minimal JVM flag"
],
"correctAnswer": 1,
"level": "advanced"
},
{
"id": 18,
"question": "How can you implement proper graceful shutdown for a Java application in Docker?",
"options": [
"Java applications automatically handle Docker signals",
"Add a special signal handler in the Dockerfile",
"Configure the application to handle SIGTERM and perform cleanup before shutdown",
"Set the Docker container to always force kill applications"
],
"correctAnswer": 2,
"level": "advanced"
},
{
"id": 19,
"question": "What is the significance of the '--init' flag when running Java applications in Docker?",
"options": [
"It initializes the JVM with optimized settings",
"It provides an init process to handle signals and reap zombie processes",
"It initializes the database connections for Java applications",
"It sets up initial environment variables for the container"
],
"correctAnswer": 1,
"level": "advanced"
},
{
"id": 20,
"question": "What approach should be used for handling JVM garbage collection in containerized Java applications?",
"options": [

"Let the JVM determine the best GC strategy based on available resources",
"Always use the G1 garbage collector with default settings",
"Configure GC parameters based on container memory limits rather than host machine resources",
"Disable garbage collection in containers to improve performance"
],
"correctAnswer": 2,
"level": "advanced"
}
]