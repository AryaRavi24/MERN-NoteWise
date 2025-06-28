# NoteWise - MERN Stack Note-Taking App

NoteWise is a full-stack note-taking web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to securely create, update, and delete notes with a clean and responsive user interface.

## Features

- Create, Read, Update, and Delete (CRUD) notes
- Organized note management
- Responsive design
- Backend RESTful API with Express.js
- MongoDB integration for persistent data storage

## Tech Stack

- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Other Tools: Vite, Git, Upstash (for rate limiting)

## Getting Started

### Prerequisites

- Node.js and npm
- MongoDB (local or Atlas)
- Git

### Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/MERN-NoteWise.git
cd MERN-NoteWise

2.Install backend dependencies	

npm install

3.Set up environment variables

MONGO_URI=your_mongo_connection_string
PORT=5000
UPSTASH_REDIS_REST_URL=your_secret_url
UPSTASH_REDIS_REST_TOKEN=your_secret_token

4.Start the backend server

npm run server

5.Navigate to the client and install frontend dependencies

cd client
npm install
npm run dev
