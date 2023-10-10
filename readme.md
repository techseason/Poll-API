# Poll Application API

This is a RESTful API for a poll application built using Node.js with Express and MySQL. The API allows users to create, retrieve, and vote on polls, as well as track user votes and calculate rewards based on their choices.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup Instructions](#setup-instructions)
- [Database Schema](#database-schema)
- [Postman Collection](#postman-collection)


## Project Overview

This project implements a poll application API with the following features:

- Create new polls with multiple options.
- Retrieve a list of available polls.
- Allow users to update polls.
- Allow users to delete a poll.

## Setup Instructions

To set up and run the project locally, follow these steps:

1. **Clone the Repository:**
```cmd
git clone https://github.com/techseason/Poll-API.git
```

2. **Install Dependencies:**
```cmd
npm install
```

3. **Database Configuration:**
- Set up a MySQL database and configure the database connection in the `connection.js` file.
- Create the necessary tables using the provided SQL scripts in `table.sql` file.

4. **Start the Server:**
```cmd
node server.js
```

The API will be accessible at `http://localhost:3001/polls/create`.

## Database Schema

The database schema includes tables for storing polls, questions, options, user data, and poll analytics. For the complete database schema, refer to the [SQL script](table.sql).

use sample data-
```cmd
{
  "questions": "What is your favorite programming language?",
  "options": "Java,Python,C++,JavaScript",
  "user_data": "JohnDoe",
  "poll_analytics": "{\"total_votes\": 100, \"option_votes\": {\"Java\": 30, \"Python\": 40, \"C++\": 15, \"JavaScript\": 15}}"
}

```



## Postman Collection

For testing the API, click the Postman collection link that includes requests for all API endpoints. You can access the Postman collection here: [Poll Application API Postman Collection](https://www.postman.com/naruchan07/workspace/my-work/collection/27277026-a9717b72-02e6-46c0-b7d9-ede5a5263708?action=share&creator=27277026).


