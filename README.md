# Team Management App

This project is a full-stack application for managing team members. It features a React typescript frontend and a Django backend.

## Prerequisites

Before you begin, ensure you have the following installed:
- Python 3.12 or higher
- Node.js 16.x or higher
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
python3 -m venv venv
source venv/bin/activate
```

#### Install the required Python packages:
```bash
pip install -r requirements.txt
```

#### Migrate the database:
```bash
python3 manage.py migrate
```

### Setting Up the Frontend
```bash
cd ../../frontend/app
yarn install
```

### Running the Application
From the root of the project, you can start both the frontend and the backend concurrently:
```bash
cd ../../../team-management
yarn install && yarn start
```
This command will start the Django backend on http://localhost:8000 and the React frontend on http://localhost:3000.



## Future Enhancements
To further evolve and scale the application if it were to be production grade, here are some potential improvements (not exhaustive at all):

1. Integrate a form validation library to provide user with real time feedback and ensure data integrity.
2. Aim for 100% unit test coverage on backend to ensure reliability and faciliate maintenance
3. Utilize storybook to develop and test UI components in isolation, enhancing UI consistency and setting up the blueprint for long term visual regression testing.
4. Add react-testing-library tests for component interactions
5. Consider state management software (redux, zustand, mobx) if there is a need to have a global state, alternatively could work with context and hooks to handle state management.
6. API caching with tools like Redis to store data in memory for quick retrieval
7. Client side caching using local storage / session storage, reduce load times and especially useful for users in network constrained environments
8. Improve accesibility on all components to meet WCAG accessibility guidelines, including keyboard navigation (tab indexing, etc) and screen reader support
9. Consider support for internationalization/localization if application is going to be used on a more global scale in order to adapt to target markets
10. Adopt a microservices architecture to enhance scalability and maintainability as the application grows (not necessary for small applications)
11. Implement a more responsive website by adding media queries at common breakpoints for target users (large monitor, small laptop, ipad, mobile, etc)
12. Utilize service workers to allow for offline usage incase target user has unstable connection (necessary for longer forms)
13. Consider e2e testing tools like Cypress to ensure core flows/features are working as expected before deploying a build to production
14. Include a rate limiting / throttling mechanism to prevent bad actors from making unwanted requests
15. Utilize logging tools to gather insights/metrics for continued product iteration/improvements (Bugs, user conversion funnels, etc)
16. Consider server side rendering with nextjs if there is a need to improve FCP page load performance, client side rendering may be better for forms that require more interactions
17. If client side processing becomes too heavy, consider a backend for frontend (apollo client) with graphql instead of REST services



<img width="745" alt="image" src="https://github.com/vijaypraju04/team-management/assets/24286181/9635e22e-b03d-4fbd-8e71-acc0ebeab588">

<img width="528" alt="image" src="https://github.com/vijaypraju04/team-management/assets/24286181/48f25d6c-c940-4b60-a8e8-93375f1dd5db">

<img width="497" alt="image" src="https://github.com/vijaypraju04/team-management/assets/24286181/0c0e69be-03c7-49b5-b8d4-e6745f5fcd24">
