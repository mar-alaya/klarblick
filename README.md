# KlarBlick

A responsive task management dashboard built with vanilla JavaScript, HTML and CSS. Users can create, complete, delete and track tasks, with live statistics and priority indicators.

## Description

KlarBlick lets users manage their daily tasks through a clean dashboard. Tasks are stored as objects inside a central array and rendered dynamically to the DOM. Every action (creating, finishing or deleting a task) updates both the task list and the live statistics (Total / To Do / Finished).

## Features

- Add new tasks with name, description and priority (High / Middle / Low)
- Mark tasks as finished
- Delete tasks
- Priority badges with distinct colors
- Live task counters (Total, To Do, Finished)
- Fully responsive layout (stats, task list, form and footer adapt to smaller screens)
- Clean dashboard design following a pink / white / black color palette

## Technologies

- HTML5
- Tailwind CSS + DaisyUI (CDN)
- JavaScript (Vanilla)

## What I Learned

- Work with arrays of objects in JavaScript.
- Render data dynamically to the DOM instead of hardcoding HTML.
- Use `.filter()` to remove items from an array based on a condition.
- Manage multiple related DOM elements created with `createElement` and `appendChild`.
- Keep UI state (task list, counters) in sync with the underlying data array.
- Debug scope issues with variables like `i` across different event listeners.
- Build a responsive layout with Tailwind CSS breakpoints (`md:`, etc.).

## Author

**Mar Alaya Melia** Software Development project at Digital Career Institute (DCI).
