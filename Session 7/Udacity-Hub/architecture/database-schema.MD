## Udacity Hub Database Schema

#### Session_Leads

| Field        | Type             | Special Attributes |
| ------------ | ---------------- | ------------------ |
| **id**       | **Serial**       | **Primary Key**    |
| **name**     | **VarChar(100)** | **N/A**            |
| **email**    | **VarChar(150)** | **N/A**            |
| **password** | **VarChar(150)** | **N/A**            |

#### Students

| Field    | Type             | Special Attributes |
| -------- | ---------------- | ------------------ |
| **id**   | **Serial**       | **Primary Key**    |
| **name** | **VarChar(100)** | **N/A**            |

#### Sessions

| Field     | Type             | Special Attributes |
| --------- | ---------------- | ------------------ |
| **id**    | **Serial**       | **Primary Key**    |
| **date**  | **Date**         | **N/A**            |
| **title** | **VarChar(150)** | **N/A**            |
| **sl_id** | **Integer**      | **Foreign Key**    |

#### Student_Sessions

| Field          | Type        | Special Attributes |
| -------------- | ----------- | ------------------ |
| **id**         | **Serial**  | **Primary Key**    |
| **session_id** | **Integer** | **Foreign Key**    |
| **student_id** | **Integer** | **Foreign Key**    |
