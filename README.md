# Description

Classic to do list application to browse on a list of existing tasks and handle create, read, update and delete operation on those tasks. The purpose of this application is to implement the essential building blocks of a CRUD web application using PostgreSQL and React.

# Design

## Tech Stack

Next.js, React, Material-UI, node-postgres, Typescript with ES7 JavaScript syntax.

## Data

The database contains a single table of 'tasks' that contains all of the tasks that an user has created. The schema of the tasks table is as follows:

- ID: a unique serial integer that serves as the primary key and is automatically generated on each create request.
- Title: the name that identifies the tasks to the user, a varchar(64)
- Description: additional text that clarifies the details of the task, a varchar(256)
- Creation Time: the date when the task was created by the user

## API

In order to perform CRUD operations of the database, we require these 5 API methods:

- /api/tasks
  - POST: lists all existing tasks in the database in a single page. In larger databases, it may support search, sorting, filtering, pagination and lazy loading.
- /api/new
  - POST: inserts a new task into the tasks database
- /api/tasks/\[task_id\]
  - GET: reads the data for the task in the database and returns it
  - PUT: updates the data of the task with a new title and description
  - DELETE: deletes the task from the database

## Interface

### Pages

- /index: interfaces with the /api/tasks API to show the user all existing tasks, and handles access to those tasks
- /new: interfaces with the /api/new API to create new tasks
- /tasks/\[id\]: interfaces with the /api/tasks/\[id\] API to read, update and delete tasks from the database

### Components

- Layout.tsx: uniform layout for all pages of the website that includes a navbar
- TasksList.tsx: presents a list of tasks
- TaskView.tsx: presents task details (if they exist) and allows modification and deletion
- CreateTask.tsx: form to create a new task

# Relevant sources

[Video: Nextjs PostgreSQL Typescript CRUD (REST API & Frontend)](https://www.youtube.com/watch?v=fle43mKDLSI)
[Video: React, Node y PostgreSQL (PERN Stack) con Material UI](https://www.youtube.com/watch?v=_zGL_MU29zs)

---

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
