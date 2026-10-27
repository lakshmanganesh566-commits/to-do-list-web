# To-Do List Web App

A simple, responsive To-Do List application built with HTML, CSS, and vanilla JavaScript. Add tasks, mark them as complete, edit or delete individual tasks, and clear the list when needed. Tasks are saved in your browser using `localStorage`, so they remain available when you reopen the page in the same browser.

## Features

- Add new tasks using the **Add Task** button or the **Enter** key.
- Mark tasks as completed or incomplete.
- Edit existing tasks.
- Delete individual tasks.
- Clear all tasks after confirmation.
- Display the number of tasks remaining.
- Save tasks in browser `localStorage`.
- Responsive layout for desktop and mobile screens.
- No frameworks, packages, or build tools required.

## Project Structure

```text
to-do-list-web-app/
├── index.html   # App structure and content
├── style.css    # Layout, colors, and responsive styles
├── script.js    # Task operations and localStorage persistence
└── README.md    # Project documentation
```

## Getting Started

### Requirements

A modern web browser such as Chrome, Firefox, Edge, or Safari. No installation or server is required for basic use.

### Run Locally

1. Download and extract the project ZIP file.
2. Keep `index.html`, `style.css`, and `script.js` in the same folder.
3. Open `index.html` in your browser.
4. Start adding tasks.

## How to Use

1. Enter a task in the input field.
2. Select **Add Task** or press **Enter**.
3. Use the checkbox to mark a task complete or incomplete.
4. Select **Edit** to change a task's text.
5. Select **Delete** to remove one task.
6. Select **Clear All** to remove every task after confirming the prompt.

Tasks are stored in the current browser's local storage. They are not synced across browsers or devices. Clearing the browser's site data may remove saved tasks.

## Technologies Used

- **HTML5** — page structure
- **CSS3** — styling and responsive layout
- **JavaScript** — task management and browser storage
- **Web Storage API (`localStorage`)** — saving tasks locally

## Customization

- Edit `index.html` to change headings or page content.
- Edit `style.css` to adjust colors, spacing, typography, or layout.
- Edit `script.js` to change task behavior.

## Deployment

This is a static website and can be hosted on services such as GitHub Pages, Netlify, or Vercel. Upload the project files while preserving their relative paths. The app does not require a backend.

## License

No license is specified. Add a license file if you intend to distribute or reuse the project publicly.
