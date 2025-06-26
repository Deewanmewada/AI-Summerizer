# AI Summarizer (OpenAI Article Summarizer)

## Description
AI Summarizer is an open-source web application that simplifies your reading by transforming lengthy articles into clear and concise summaries. Powered by React, Vite, and Tailwind CSS on the frontend, it leverages a third-party article summarization API via RapidAPI to generate summaries from article URLs.

## Features
- Paste any article URL to get a quick summary.
- View a history of previously summarized articles stored locally.
- Copy article URLs easily from the history list.
- Responsive and clean user interface with smooth user experience.
- Built with modern React and Redux Toolkit Query for efficient state and data fetching.

## Technologies Used
- React 18
- Vite (build tool and dev server)
- Redux Toolkit & Redux Toolkit Query (for API data fetching)
- Tailwind CSS (for styling)
- RapidAPI Article Extractor and Summarizer API
- ESLint (for code linting)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd ai-summarizer
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your RapidAPI key:
   ```
   VITE_RAPID_API_ARTICLE_KEY=your_rapidapi_key_here
   ```

## Usage

- Start the development server:
  ```bash
  npm run dev
  ```

- Open your browser and navigate to `http://localhost:5173` (or the port shown in your terminal).

- Paste an article URL into the input box and press enter or click the submit button.

- View the generated summary below the input.

- Your summarized articles will be saved in your browser's localStorage and appear in the history list for quick access.

## Environment Variables

- `VITE_RAPID_API_ARTICLE_KEY`: Your RapidAPI key to access the article summarization API.

## Project Structure

```
.
├── public/                  # Static assets like favicon
├── src/
│   ├── assets/              # Icons and images
│   ├── components/          # React components (Hero, Demo, etc.)
│   ├── services/            # API service setup with Redux Toolkit Query
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── App.css              # Global styles
├── .gitignore
├── package.json             # Project metadata and dependencies
├── README.md                # Project documentation
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.js        # PostCSS configuration
├── vite.config.js           # Vite configuration
└── eslint.config.js         # ESLint configuration
```

## Scripts

- `npm run dev` - Start the development server with hot module replacement.
- `npm run build` - Build the project for production.
- `npm run preview` - Preview the production build locally.
- `npm run lint` - Run ESLint to check for code issues.

## License

This project is open source and available under the MIT License.

## Contact

For any questions or feedback, please open an issue or contact the repository owner.
