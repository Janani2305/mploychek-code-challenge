 # MPloyChek Code Challenge

A single page application built with Angular and a Node.js (Express) API.

## Features
1. **Login:** User ID, password and role (General User or Admin), checked by the API.
2. **Home page:** shows the logged-in user's details and a records table. Admin sees all records, General User sees only their own level.
3. **Admin page:** only for Admin. Add and delete users. A route guard blocks other roles.
4. **Async processing:** every API call accepts a `delay` parameter (for example `?delay=2000`), and the app shows loading messages while waiting.

## Tech
- Angular (standalone components, lazy-ready routing, reactive forms, route guard, RxJS)
- Node.js and Express
- JSON file as the database

## How to run
1. Start the API:
```
   cd backend
   npm install
   node server.js
```
   It runs on http://localhost:3000
2. In a second terminal, start Angular from the project root:
```
   npm install
   ng serve
```
   Open http://localhost:4200

## Test logins
| User ID | Password | Role |
|---|---|---|
| admin1 | admin123 | Admin |
| user1 | user123 | General User |

## Project structure
- `src/app/login`: login page
- `src/app/home`: user details and records table
- `src/app/admin`: user management (Admin only)
- `src/app/auth.ts`, `src/app/user.ts`: services
- `src/app/admin-guard.ts`: route guard
- `backend/`: Express API and `data.json`

## Notes
Passwords are stored in plain text because this is a demo. A real app would hash them (for example with bcrypt) and use JWT tokens. A cloud database such as AWS DynamoDB could replace the JSON file without changing the Angular code.