# Personalized News Feed Web Application

 #### This is a personalized news feed web application built with TypeScript, SQL, JavaScript, and npm. The application fetches news from different sources and presents them in a personalized manner to the user.  

## Getting Started

 #### These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

 #### Node.js and npm installed on your machine.
 #### A PostgreSQL database.
## Installing
#### 1. Clone the repository to your local machine:
        git clone https://github.com/erenbesikcioglu07/SERVER-Personalized-News-Feed-Web-Application.git
#### 2. Navigate to the project directory:
        cd SERVER-Personalized-News-Feed-Web-Application
#### 3. Install the project dependencies:
        npm install
#### 4. Fill the .env file in the root directory of the project and add your environment variables:   
        DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database>?schema=public"
        PORT=5000
        JWT_SECRET=<your-jwt-secret>

        NEWSAPI_KEY=<your-newsapi-key>
        NEWSAPI_URL=https://newsapi.org/v2
        GUARDIAN_API_KEY=<your-guardian-api-key>
        GUARDIAN_API_URL=https://content.guardianapis.com

#### 5. Run the project:        
        npm start

## Features
        Fetches news from different sources.
        Presents news in a personalized manner to the user.
        User authentication to ensure secure access.        

## Built With
        TypeScript
        SQL
        npm
