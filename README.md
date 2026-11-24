# CyberGuard — Cyberbullying Detection System

CyberGuard is a web app for reviewing text for possible cyberbullying. It uses an OpenAI model to assess context and return an overall cyberbullying score, six content scores, detected languages, flagged terms, and a short context analysis. Results are displayed in a visual dashboard.

## Features

- Context-aware analysis of text, including multilingual and code-switched content.
- Scores for toxicity, severe toxicity, identity attacks, insults, profanity, and threats.
- A cyberbullying score, highlighted flagged terms, and detected languages.
- Recent analysis history in the browser interface.

Model output is an estimate and can be wrong. Treat the results as decision support, not as a definitive judgment about a person or message.

## Requirements

- Node.js compatible with the installed Next.js version (Node.js 20 or newer recommended).
- An OpenAI API key with access to the configured model.

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Create a local environment file from the example:

   ```bash
   cp .env.example .env.local
   ```

3. Edit `.env.local` and set `OPENAI_API_KEY` to your API key. `OPENAI_MODEL` is optional and defaults to `gpt-4o-mini`.

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000).

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with Turbopack. |
| `npm run build` | Create a production build. |
| `npm start` | Serve the production build. |
| `npm run lint` | Run ESLint. |

## Analysis API

`POST /api/analyze` accepts JSON with a `text` string. Text must be between 2 and 3000 characters after trimming.

```bash
curl -X POST http://localhost:3000/api/analyze \
  -H 'Content-Type: application/json' \
  -d '{"text":"Example message to review"}'
```

The endpoint returns an `AnalysisResult` containing attribute scores, an `isBullying` verdict, the original submitted text, flagged words, detected languages, and context analysis. Invalid input returns HTTP 400; analysis failures return HTTP 502.

## Privacy

The API sends submitted text to OpenAI for analysis. The app does not persist analysis results on its server; recent history is kept in the browser interface. Avoid submitting sensitive personal information, and review OpenAI's data handling terms for your account before use.

## Technology

- Next.js 15 and React 19
- TypeScript
- Material UI and Framer Motion
- OpenAI Node.js SDK
# CyberGuard-Cyberbullying-Detection
