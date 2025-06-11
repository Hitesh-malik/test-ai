import { QuizQuestion } from "./type";
export const linuxShellQuestions: QuizQuestion[] = [
{
"id": 1,
"question": "Which command is used to list files and directories in Linux?",
"options": [
"dir",
"ls",
"list",
"show"
],
"correctAnswer": 1,
"level": "beginner"
},
{
"id": 2,
"question": "What does the 'chmod 755' command do to a file?",
"options": [
"Makes the file readable only",
"Makes the file executable for everyone",
"Gives read, write, and execute permissions to the owner, and read and execute to group and others",
"Makes the file writable for everyone"
],
"correctAnswer": 2,
"level": "beginner"
},
{
"id": 3,
"question": "What is the correct way to redirect the output of a command to a file in bash?",
"options": [
"command > file",
"command < file",
"command to file",
"command -> file"
],
"correctAnswer": 0,
"level": "beginner"
},
{
"id": 4,
"question": "Which symbol is used to specify a comment in a shell script?",
"options": [
"//",
"/* */",
"#",
"--"
],

"correctAnswer": 2,
"level": "beginner"
},
{
"id": 5,
"question": "How do you make a shell script executable?",
"options": [
"exec script.sh",
"run script.sh",
"chmod +x script.sh",
"executable script.sh"
],
"correctAnswer": 2,
"level": "beginner"
},
{
"id": 6,
"question": "How do you define a variable in a shell script?",
"options": [
"var = value",
"variable = value",
"VAR=value",
"set VAR = value"
],
"correctAnswer": 2,
"level": "intermediate"
},
{
"id": 7,
"question": "Which of the following is the correct way to access a variable's value in bash?",
"options": [
"$variable",
"{variable}",
"%(variable)",
"var.variable"
],
"correctAnswer": 0,
"level": "intermediate"
},
{
"id": 8,
"question": "What does the 'grep' command do?",
"options": [
"Sorts lines of text files",
"Searches for patterns in files",
"Groups files together",
"Copies files between directories"
],

"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 9,
"question": "What is a pipe (|) used for in Linux?",
"options": [
"To terminate a command",
"To combine multiple commands into one line",
"To pass the output of one command as input to another",
"To execute commands in parallel"
],
"correctAnswer": 2,
"level": "intermediate"
},
{
"id": 10,
"question": "Which command would you use to find all files that end with .txt in the current directory and subdirectories?",
"options": [
"locate *.txt",
"find . -name \"*.txt\"",
"grep \"*.txt\" .",
"search -p \"*.txt\""
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 11,
"question": "What is the purpose of the 'awk' command?",
"options": [
"To find and replace text in files",
"To scan and process patterns in files",
"To check disk usage",
"To monitor system logs"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 12,
"question": "What is the correct syntax for an if statement in bash?",
"options": [
"if (condition) { commands }",
"if condition then commands fi",
"if [ condition ]; then commands; fi",
"if condition: commands end"

],
"correctAnswer": 2,
"level": "intermediate"
},
{
"id": 13,
"question": "How would you create a for loop in bash that iterates over the values 1 to 5?",
"options": [
"for i in 1 2 3 4 5; do echo $i; done",
"for (i=1; i<=5; i++) { echo $i; }",
"for i in [1..5] echo $i endfor",
"for i=1 to 5 do echo $i end"
],
"correctAnswer": 0,
"level": "intermediate"
},
{
"id": 14,
"question": "What command would you use to check which processes are running on a Linux system?",
"options": [
"proclist",
"ps",
"procs",
"list"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 15,
"question": "What is a shebang (#!) used for in a shell script?",
"options": [
"It's a comment that describes the script's purpose",
"It identifies which interpreter should be used to execute the script",
"It's a special character that marks the start of a function",
"It's used to import other scripts"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 16,
"question": "What is a 'heredoc' in shell scripting?",
"options": [
"A type of documentation format for shell scripts",
"A method to pass a multiline block of text to a command",
"An inheritance concept in shell scripting",
"A special type of shell variable"

],
"correctAnswer": 1,
"level": "advanced"
},
{
"id": 17,
"question": "What does the exec command do when used in a shell script?",
"options": [
"Executes another script and then returns to the current script",
"Executes the script with higher privileges",
"Replaces the current shell process with the specified command",
"Creates a subshell to execute the command"
],
"correctAnswer": 2,
"level": "advanced"
},
{
"id": 18,
"question": "Which technique should be used to prevent command injection in shell scripts when dealing with user input?",
"options": [
"Always use single quotes around user input",
"Double quote variables and use proper parameter expansion",
"Use the 'safe_exec' command for user input",
"Restrict shell script execution to root users only"
],
"correctAnswer": 1,
"level": "advanced"
},
{
"id": 19,
"question": "What is a shell function trap and when would you use it?",
"options": [
"A function that catches programming errors",
"A mechanism to catch and handle signals or execute commands upon script exit",
"A method to prevent users from exiting the shell",
"A way to restrict access to certain shell functions"
],
"correctAnswer": 1,
"level": "advanced"
},
{
"id": 20,
"question": "What is the purpose of the 'set -e' command in a shell script?",
"options": [
"It enables extended regular expressions",
"It causes the script to exit immediately if any command returns a non-zero status",
"It enables all environment variables",

"It sets the script to execute mode"
],
"correctAnswer": 1,
"level": "advanced"
}
]