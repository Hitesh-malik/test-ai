import { QuizQuestion } from "./type";
export const hibernateQuestions: QuizQuestion[] = [
{
"id": 1,
"question": "What is Hibernate in Java?",
"options": [
"A web server for Java applications",
"An Object-Relational Mapping (ORM) framework for database operations",
"A UI framework for desktop applications",
"A testing framework for Java"
],
"correctAnswer": 1,
"level": "beginner"
},
{
"id": 2,
"question": "Which annotation is used to mark a class as a Hibernate entity?",
"options": [
"@Table",
"@Entity",
"@Persistent",
"@Record"
],
"correctAnswer": 1,
"level": "beginner"
},
{
"id": 3,
"question": "What is the primary function of SessionFactory in Hibernate?",
"options": [
"To execute SQL queries directly",
"To create Session instances that are used for database operations",
"To manage web sessions in a Java application",
"To generate schema for database tables"
],
"correctAnswer": 1,
"level": "beginner"
},
{
"id": 4,
"question": "Which annotation is used to define a primary key in Hibernate?",
"options": [
"@PrimaryKey",
"@Key",
"@Id",
"@Primary"
],
"correctAnswer": 2,

"level": "beginner"
},
{
"id": 5,
"question": "What method is used to save an entity in Hibernate?",
"options": [
"session.store(entity)",
"session.insert(entity)",
"session.save(entity)",
"session.add(entity)"
],
"correctAnswer": 2,
"level": "beginner"
},
{
"id": 6,
"question": "What is the difference between get() and load() methods in Hibernate?",
"options": [
"get() returns null if entity not found, load() throws exception",
"get() retrieves data immediately, load() may return a proxy",
"get() is used for insert operations, load() for updates",
"Both A and B are correct"
],
"correctAnswer": 3,
"level": "intermediate"
},
{
"id": 7,
"question": "What is a Hibernate proxy?",
"options": [
"A design pattern for database access",
"A placeholder object that loads actual data only when needed",
"A security layer between application and database",
"A connection pool implementation"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 8,
"question": "Which annotation is used to define a one-to-many relationship in Hibernate?",
"options": [
"@OneToMany",
"@RelationOneToMany",
"@ManyRelation",
"@HasMany"
],
"correctAnswer": 0,

"level": "intermediate"
},
{
"id": 9,
"question": "What is HQL in Hibernate?",
"options": [
"Hibernate Query Language, an object-oriented query language similar to SQL",
"Hibernate Quick Loader, a tool for bulk loading data",
"Hibernate Query Log, for debugging database operations",
"Hibernate Query Limit, used to restrict result sets"
],
"correctAnswer": 0,
"level": "intermediate"
},
{
"id": 10,
"question": "What is the Hibernate first-level cache?",
"options": [
"A disk-based cache for query results",
"A session-level cache that stores entities for the duration of a session",
"A distributed cache shared between multiple applications",
"A cache for database connection objects"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 11,
"question": "Which of the following is NOT a cascade type in Hibernate?",
"options": [
"CascadeType.PERSIST",
"CascadeType.MERGE",
"CascadeType.UPDATE",
"CascadeType.REMOVE"
],
"correctAnswer": 2,
"level": "intermediate"
},
{
"id": 12,
"question": "What is the difference between eager and lazy loading in Hibernate?",
"options": [
"Eager loading loads all data at startup, lazy loading loads on application exit",
"Eager loading loads related entities immediately, lazy loading loads them when accessed",
"Eager loading is faster but uses more resources, lazy loading is not supported in newer versions",
"There is no difference, they are synonyms for the same behavior"
],
"correctAnswer": 1,

"level": "intermediate"
},
{
"id": 13,
"question": "Which interface is used for criteria queries in Hibernate?",
"options": [
"HibernateQuery",
"Criteria",
"QueryBuilder",
"CriteriaAPI"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 14,
"question": "What is the purpose of @GeneratedValue annotation in Hibernate?",
"options": [
"To create computed columns in the database",
"To automatically generate values for primary keys",
"To trigger events when values are generated",
"To validate generated data against rules"
],
"correctAnswer": 1,
"level": "intermediate"
},
{
"id": 15,
"question": "Which of the following is not a valid inheritance strategy in Hibernate?",
"options": [
"SINGLE_TABLE",
"TABLE_PER_CLASS",
"JOINED",
"EMBEDDED"
],
"correctAnswer": 3,
"level": "intermediate"
},
{
"id": 16,
"question": "What is the N+1 query problem in Hibernate?",
"options": [
"A limitation requiring N+1 tables for N entities",
"A performance issue where loading N child entities requires N+1 database queries",
"A naming convention requiring N+1 characters in entity names",
"A security vulnerability present in N+1 Hibernate versions"
],
"correctAnswer": 1,

"level": "advanced"
},
{
"id": 17,
"question": "How can you implement second-level caching in Hibernate?",
"options": [
"By configuring a cache provider like EhCache or Infinispan",
"By enabling the built-in 'SecondLevelCache' property",
"Second-level caching is enabled by default",
"By using the @SecondCache annotation on entities"
],
"correctAnswer": 0,
"level": "advanced"
},
{
"id": 18,
"question": "What is a natural ID in Hibernate?",
"options": [
"A primary key that is auto-generated",
"A business key that uniquely identifies an entity based on business rules",
"Any ID that uses numeric values",
"A composite key made of multiple columns"
],
"correctAnswer": 1,
"level": "advanced"
},
{
"id": 19,
"question": "What is the purpose of @Filter annotation in Hibernate?",
"options": [
"To automatically filter invalid data before saving",
"To define parameterized filters that can be enabled or disabled at runtime",
"To encrypt sensitive data in the database",
"To compress large data fields"
],
"correctAnswer": 1,
"level": "advanced"
},
{
"id": 20,
"question": "Which method would you use to perform batch inserts efficiently in Hibernate?",
"options": [
"session.batchInsert(entityList)",
"Using StatelessSession instead of regular Session",
"Setting hibernate.jdbc.batch_size and flushing periodically",
"Using the @BatchInsert annotation"
],
"correctAnswer": 2,

"level": "advanced"
}
]