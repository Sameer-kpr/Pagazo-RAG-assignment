Berkshire Hathaway Intelligence Chat

A Retrieval-Augmented Generation (RAG) chatbot that allows users to ask questions about Berkshire Hathaway’s annual letters and financial reports. This web-based app fetches PDF documents from a public Google Drive folder, processes them into embeddings using OpenAI’s API, stores them in PostgreSQL, and retrieves relevant information to answer user queries.

Features

Cloud-based PDF ingestion: Automatically fetches PDFs from a public Google Drive folder.

RAG-enabled: Uses vector embeddings and PostgreSQL for semantic search.

Chat interface: Simple HTML/CSS front-end for user interaction.

Powered by OpenAI: Uses embeddings and GPT-4o to generate answers.

Local deployment: Run entirely on your machine with PostgreSQL and Node.js.

Folder Structure
tenxtech/
│
├─ public/
│   ├─ index.html         # Front-end HTML
│   ├─ style.css          # Styling
│   └─ script.js          # Front-end JS
│
├─ node_modules/          # Node dependencies
├─ final_final_Pagazo.js  # Main backend server
├─ package.json
├─ package-lock.json
└─ .env                   # Environment variables (API keys, DB password)

Prerequisites

Node.js (v22+ recommended)

PostgreSQL installed locally with vector extension enabled

OpenAI API key

Google Drive folder containing Berkshire Hathaway PDFs (publicly accessible)

The server will create the database schema if missing.

Cloud PDFs from the specified Google Drive folder will be ingested automatically.

Backend runs at: http://localhost:4111

Open Frontend:

Navigate to public/index.html in a browser or visit http://localhost:4111 if served by Express.

Enter a question in the input box and click Send.

Usage

Ask questions about Berkshire Hathaway annual letters or reports.

The chatbot retrieves relevant text chunks from PDFs and uses GPT-4o to answer.

Example questions:

"What was Berkshire Hathaway’s revenue growth in 2010?"

"Who is the CEO of Berkshire Hathaway?"

"What investment philosophy does Warren Buffett follow?"

Notes

PDFs must be publicly accessible via Google Drive for ingestion. The Drive link is- https://drive.google.com/drive/folders/1IdPSENw-efKI6S0QiMrSxk12YqxW3eRU

RAG functionality depends on embeddings being created and stored in PostgreSQL.

If the bot only echoes questions, check:

Database ingestion completed successfully.

PostgreSQL connection is working.

OpenAI API key is valid.

Tech Stack

Backend: Node.js, Express, PostgreSQL

Frontend: HTML, CSS, JavaScript

AI: OpenAI GPT-4o for answering questions, OpenAI Embeddings for RAG search

PDF Parsing: pdf-parse library

Vector Search: PostgreSQL vector extension
