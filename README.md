# Team Management App

This project is a full-stack application for managing team members. It features a React typescript frontend and a Django backend.

## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.8 or higher
- Node.js 14.x or higher
- Yarn package manager

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Cloning the Repository

To get started, clone the repository to your local machine:

```bash
git clone https://github.com/vijaypraju04/team-management.git
cd team-management
```

### Setting Up the Backend
```bash
cd backend/server
python -m venv venv
source venv/bin/activate
```

#### Install the required Python packages:
```bash
pip install -r requirements.txt
```

#### Migrate the database:
```bash
python manage.py migrate
```

### Setting Up the Frontend
```bash
cd ../../frontend/app
yarn install
```

### Running the Application
From the root of the project, you can start both the frontend and the backend concurrently:
```bash
yarn start
```
This command will start the Django backend on http://localhost:8000 and the React frontend on http://localhost:3000.
