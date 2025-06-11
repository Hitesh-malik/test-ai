import { QuizQuestion } from "./type";
export const sqlDeveloperQuestions: QuizQuestion[] = [
  {
    "id": 1,
    "question": "Which SQL statement is used to retrieve data from a database?",
    "options": [
      "GET",
      "SELECT",
      "FETCH",
      "RETRIEVE"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 2,
    "question": "Which clause is used to filter rows in a SQL query?",
    "options": [
      "WHERE",
      "FILTER",
      "HAVING",
      "CONDITION"
    ],
    "correctAnswer": 0,
    "level": "beginner"
  },
  {
    "id": 3,
    "question": "Which SQL statement is used to add new records to a table?",
    "options": [
      "ADD",
      "CREATE",
      "INSERT",
      "APPEND"
    ],
    "correctAnswer": 2,
    "level": "beginner"
  },
  {
    "id": 4,
    "question": "Which of the following is a valid primary key constraint?",
    "options": [
      "PRIMARY KEY (column_name)",
      "MAKE PRIMARY KEY (column_name)",
      "KEY PRIMARY (column_name)",
      "CONSTRAINT PRIMARY (column_name)"
    ],

    "correctAnswer": 0,
    "level": "beginner"
  },
  {
    "id": 5,
    "question": "Which operator is used to combine result sets of two or more SELECT statements removing duplicates?",
    "options": [
      "JOIN",
      "UNION",
      "MERGE",
      "COMBINE"
    ],
    "correctAnswer": 1,
    "level": "beginner"
  },
  {
    "id": 6,
    "question": "What is the purpose of the GROUP BY clause in SQL?",
    "options": [
      "To sort the result set",
      "To filter rows based on conditions",
      "To group rows with the same values in specified columns",
      "To join multiple tables"
    ],
    "correctAnswer": 2,
    "level": "intermediate"
  },
  {
    "id": 7,
    "question": "Which join type returns all rows from both tables where there is a match?",
    "options": [
      "INNER JOIN",
      "LEFT JOIN",
      "RIGHT JOIN",
      "FULL OUTER JOIN"
    ],
    "correctAnswer": 0,
    "level": "intermediate"
  },
  {
    "id": 8,
    "question": "What is a subquery in SQL?",
    "options": [
      "A query that runs before the main query",
      "A query nested inside another query",
      "A query that combines multiple tables",
      "A query that returns only a subset of columns"

    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 9,
    "question": "Which statement is used to create a temporary table that exists only for the duration of a session?",
    "options": [
      "CREATE TEMPORARY TABLE",
      "CREATE TEMP TABLE",
      "CREATE SESSION TABLE",
      "CREATE VOLATILE TABLE"
    ],
    "correctAnswer": 0,
    "level": "intermediate"
  },
  {
    "id": 10,
    "question": "What is the difference between DELETE and TRUNCATE commands?",
    "options": [
      "DELETE can use a WHERE clause, TRUNCATE cannot",
      "TRUNCATE is faster but cannot be rolled back, DELETE is slower but can be rolled back",
      "DELETE removes specific columns, TRUNCATE removes specific rows",
      "Both statements are identical in functionality"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 11,
    "question": "What is a view in SQL?",
    "options": [
      "A physical copy of a table",
      "A virtual table based on the result of a SELECT query",
      "A snapshot of database at a specific time",
      "A report generated from database data"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 12,
    "question": "What is the purpose of an index in a database?",
    "options": [
      "To enforce data integrity",
      "To speed up the retrieval of rows from a table",
      "To establish relationships between tables",

      "To encrypt sensitive data"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 13,
    "question": "Which statement is used to modify existing records in a table?",
    "options": [
      "MODIFY",
      "ALTER",
      "CHANGE",
      "UPDATE"
    ],
    "correctAnswer": 3,
    "level": "intermediate"
  },
  {
    "id": 14,
    "question": "What does the HAVING clause do in a SQL query?",
    "options": [
      "Filters rows before they are grouped",
      "Filters groups based on conditions",
      "Sorts the result set",
      "Limits the number of rows returned"
    ],
    "correctAnswer": 1,
    "level": "intermediate"
  },
  {
    "id": 15,
    "question": "Which constraint ensures that values in one table exist in another table?",
    "options": [
      "PRIMARY KEY",
      "UNIQUE",
      "CHECK",
      "FOREIGN KEY"
    ],
    "correctAnswer": 3,
    "level": "intermediate"
  },
  {
    "id": 16,
    "question": "What is a database transaction?",
    "options": [
      "A purchase made through a database application",
      "A unit of work performed against a database that is treated as a single logical operation",
      "The process of backing up a database",

      "The transfer of data between different database systems"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  },
  {
    "id": 17,
    "question": "What does the ACID property 'Isolation' ensure in database transactions?",
    "options": [
      "All transactions are preserved in case of a system failure",
      "All parts of a transaction are completed or none at all",
      "Concurrent transactions do not interfere with each other",
      "Completed transactions persist even after system restart"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 18,
    "question": "What is a database deadlock?",
    "options": [
      "When a database runs out of storage space",
      "When a query takes too long to execute",
      "When two or more transactions are waiting for each other to release locks",
      "When a database server crashes unexpectedly"
    ],
    "correctAnswer": 2,
    "level": "advanced"
  },
  {
    "id": 19,
    "question": "What is normalization in database design?",
    "options": [
      "The process of organizing data to reduce redundancy and improve data integrity",
      "The process of combining multiple databases into one",
      "The process of encrypting sensitive data in a database",
      "The process of optimizing database performance"
    ],
    "correctAnswer": 0,
    "level": "advanced"
  },
  {
    "id": 20,
    "question": "What is the purpose of a Common Table Expression (CTE) in SQL?",
    "options": [
      "To create temporary tables that persist after the query",
      "To define named query blocks that can be referenced in the main query",
      "To share code between different database servers",

      "To establish connections between unrelated databases"
    ],
    "correctAnswer": 1,
    "level": "advanced"
  }
];