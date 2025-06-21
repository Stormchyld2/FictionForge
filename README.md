FictionForge

FictionForge is an open-source, AI-powered novel writing studio that helps authors brainstorm plots, develop characters, plan story arcs, and generate chapters—all running locally on your machine.

Features

Chat-based Brainstorming: Interactive AI chat panel for plotting, worldbuilding, and character ideation.

Outline & Beat Sheets: Generate story outlines, chapter breakdowns, and beat sheets with one command.

Character & Worldbuilder: Create and store character profiles, settings, and lore in an organized compendium.

Rich Text Editor: Write and edit chapters directly in the IDE with inline AI suggestions (ghost text).

Local LLM Integration: Connect to Ollama, LocalAI, or other local LLM servers (e.g., mistral:story, mixtral:8x7b-instruct).

Offline & Private: Everything runs locally—no cloud subscriptions or data leaks.

File & Storage: Save drafts to IndexedDB or system files; export/import Markdown or JSON.

Plugin Ready: Easily extend with new AI providers, export formats, or custom prompts.

Getting Started

Prerequisites

Node.js v20.x (LTS)

NPM v10.x

Git

Ollama or another local LLM server set up and running

Installation

Clone your fork

git clone https://github.com/Stormchyld2/fictionforge.git
cd fictionforge

Install dependencies

npm install

Configure your LLM
Create a .env file in the project root:

LLM_PROVIDER=ollama
LLM_BASE_URL=http://127.0.0.1:11434
DEFAULT_MODEL=mistral:story

Run the dev server

npm run dev

Open in browser
Navigate to http://localhost:5173 to start writing.

Usage

Brainstorm Tab: Ask AI to suggest plots and world details.

Outline Tab: Generate chapter outlines and story arcs.

Characters Tab: Create and manage character profiles.

Write Tab: Draft chapters, with inline AI suggestions.

Export: Download your novel as Markdown or JSON.

Configuration

LLM Settings: Adjust .env to use different providers or models.

Storage: Choose between IndexedDB (localStorage) or File System Access API in browser.

Theme: Customize colors in app/theme.css.

Contributing

Contributions are welcome! Please fork the repo, create a feature branch, and submit a pull request.

Fork the project

Create your feature branch (git checkout -b feature/my-feature)

Commit your changes (git commit -m 'Add my feature')

Push to the branch (git push origin feature/my-feature)

Open a Pull Request

License

This project is licensed under the MIT License. See LICENSE for details.

