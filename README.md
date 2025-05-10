# Afghan Proverbs RESTful API

This is a backend project for a RESTful API that manages Afghan proverbs. It was built as part of a CodeToInspire online class assignment to demonstrate understanding of REST principles and CRUD operations.

## 🚀 How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/Masomatta/RESTFUL-api-HW.git
Navigate to the project folder:

## cd RESTFUL-api-HW
Install dependencies:
npm install
## Start the server (development mode):
npm run start
This uses nodemon to auto-restart the server on file changes.

## Access the API:
http://localhost:3000/proverbs
📋 Example API Endpoints
GET /proverbs – Get all proverbs

GET /proverbs/random – Get a random proverb

GET /proverbs/search/:keyword – Search by keyword

POST /proverbs – Add a new proverb

PUT /proverbs/:id – Update a proverb

DELETE /proverbs/:id – Delete a proverb

📁 Project Structure
server.js – Main server file
proverbs.json – Data storage 


📌 Note
This project is for learning purposes only and is part of a class assignment.
