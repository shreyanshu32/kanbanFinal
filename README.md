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
|yarn |Installs dependencies|
|yarn dev| Starts local server at localhost:5173|
|yarn build | Build your production site to ./dist/
|yarn preview | Preview your build locally, before deploying|
