## Kanban board with React , Tailwind and Zustand.

_Note: Packages used in this project are installed with yarn and using NPM might lead to a conflict between lock files._

## Project Structure

```
/
├── .github/workflows
|   └── deploy.yml
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
|   |   ├── Button.tsx
|   |   ├── Container.tsx
|   |   ├── Header.tsx
|   |   ├── Task.tsx
│   │   └── TaskForm.tsx
|   ├── utils/
│   |   └── formatDate.ts
│   ├── main.tsx
│   ├── store.ts
│   └── styless.css
└── node_moduels
```

## Installation

All the commands below are run from the root of the project, from a terminal:
|Command|Action|
|:-|:-|
|yarn|Installs dependencies|
|yarn dev| Starts local server at localhost:3000|
|yarn build | Build your production site to ./dist/
|yarn preview | Preview your build locally, before deploying|
