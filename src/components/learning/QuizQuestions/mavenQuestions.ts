
import { QuizQuestion } from "./type";
export const mavenQuestions: QuizQuestion[] = [
{
"id": 1,
"question": "What is Apache Maven primarily used for?",
"options": [
"Web server deployment",
"Database management",
"Project build automation and dependency management",
"Application monitoring"
],
"correctAnswer": 2,
"level": "beginner"
},
{
"id": 2,
"question": "What is the name of the core configuration file in Maven?",
"options": [
"maven.xml",
"pom.xml",
"config.xml",
"build.xml"
],
"correctAnswer": 1,
"level": "beginner"
},
{
"id": 3,
"question": "Which Maven command is used to compile the source code of a project?",
"options": [
"mvn build",
"mvn run",
"mvn compile",
"mvn execute"
],
"correctAnswer": 2,
"level": "beginner"
},
{
"id": 4,
"question": "What does POM stand for in Maven?",
"options": [
"Project Object Module",
"Project Object Model",
"Project Oriented Model",
"Primary Object Model"
],

"correctAnswer": 1,
"level": "beginner"
},
{
"id": 5,
"question": "Where does Maven store downloaded dependencies by default?",
"options": [
"In the project directory",
"In a global repository on Maven's servers",
"In the local repository (.m2/repository by default)",
"In a temporary folder that is cleared after each build"
],
"correctAnswer": 2,
"level": "beginner"
},
{
"id": 6,
"question": "What is a Maven artifact?",
"options": [
"A historical record of previous build attempts",
"A dependency that is marked as deprecated",
"A build result such as a JAR, WAR, or POM file",
"A custom Maven plugin"
],
"correctAnswer": 2,
"level": "intermediate"
},
{
"id": 7,
"question": "What are Maven lifecycle phases?",
"options": [
"Different versions of Maven that a project can use",
"Predefined sequences of build steps like compile, test, and package",
"Time periods between major Maven releases",
"Optional build configurations that can be enabled or disabled"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 8,
"question": "What is the purpose of the 'scope' attribute in Maven dependencies?",
"options": [
"To restrict which projects can use the dependency",
"To specify when the dependency is available (compile, runtime, test, etc.)",
"To define the version range of a dependency",
"To set the priority of dependencies"
],

"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 9,
"question": "What is a Maven profile used for?",
"options": [
"To store developer credentials",
"To define sets of configuration values activated in specific environments",
"To track the performance of Maven builds",
"To manage multiple Maven installations"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 10,
"question": "How do you skip running tests in a Maven build?",
"options": [
"mvn install -notests",
"mvn install -skiptests",
"mvn install -DskipTests",
"mvn install -test=false"
],
"correctAnswer": 2,
"level": "intermediate"
},
{
"id": 11,
"question": "What is Maven's transitive dependency resolution?",
"options": [
"The process of resolving conflicts between dependencies",
"The ability to automatically include dependencies of your dependencies",
"The process of upgrading dependencies to their latest versions",
"The verification of dependency checksums"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 12,
"question": "What is a multi-module project in Maven?",
"options": [
"A project with multiple main methods",
"A project that supports multiple programming languages",
"A project consisting of multiple subprojects managed together",
"A project with multiple version control repositories"
],

"correctAnswer": 2,
"level": "intermediate"
},
{
"id": 13,
"question": "Which element in the POM file is used to inherit properties and configuration from a parent POM?",
"options": [
"<extends>",
"<inherits>",
"<parent>",
"<super>"
],
"correctAnswer": 2,
"level": "intermediate"
},
{
"id": 14,
"question": "What is the purpose of the 'dependencyManagement' section in a POM file?",
"options": [
"To automatically download all dependencies",
"To set dependency versions without actually including them as dependencies",
"To manage which dependencies are included in the final package",
"To restrict certain dependencies from being used"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 15,
"question": "What is the purpose of exclusions in Maven dependencies?",
"options": [
"To prevent specific transitive dependencies from being included",
"To exclude certain files from the build process",
"To mark dependencies as optional",
"To prevent dependencies from being downloaded again"
],
"correctAnswer": 0,
"level": "intermediate"
},
{
"id": 16,
"question": "What is a Maven archetype?",
"options": [
"An old version of a Maven plugin",
"A predefined template for creating new Maven projects",
"A special type of Maven repository",
"A class of build errors in Maven"

],
"correctAnswer": 1,
"level": "advanced"
},
{
"id": 17,
"question": "What is the purpose of the Maven Release Plugin?",
"options": [
"To publish Maven artifacts to public repositories",
"To automate the steps involved in releasing a project",
"To release memory after a Maven build completes",
"To generate release notes for a project"
],
"correctAnswer": 1,
"level": "advanced"
},
{
"id": 18,
"question": "How can you create a custom Maven plugin?",
"options": [
"By extending the AbstractMavenPlugin class",
"By creating a JAR with special Maven annotations",
"By implementing the Mojo interface and using the maven-plugin packaging",
"By registering a new plugin in the Maven plugin registry"
],
"correctAnswer": 2,
"level": "advanced"
},
{
"id": 19,
"question": "What is the purpose of the Maven Enforcer Plugin?",
"options": [
"To enforce code style guidelines",
"To enforce security policies in the code",
"To enforce rules on the build environment and dependencies",
"To enforce proper test coverage"
],
"correctAnswer": 2,
"level": "advanced"
},
{
"id": 20,
"question": "What is Maven's build lifecycle extension mechanism?",
"options": [
"A way to add new goals to existing Maven plugins",
"A method for extending build lifecycles with custom phases",
"A mechanism for hooking into and modifying the build process",
"A system for creating dependencies between different Maven builds"

],
"correctAnswer": 2,
"level": "advanced"
}
]