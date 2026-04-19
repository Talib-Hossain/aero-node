# Aero Track Backend

Node.js + TypeScript backend starter for a personal flight tracking app powered by the AirLabs API.

## Stack

- Node.js
- Express
- TypeScript
- Zod for validation
- Axios for AirLabs integration

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Copy environment variables:

```bash
cp .env.example .env
```

3. Add your AirLabs API key in `.env`.

4. Start the dev server:

```bash
npm run dev
```

## Available Endpoints

- `GET /api/v1/health`
- `GET /api/v1/flights`
- `GET /api/v1/flights/:flightId`
- `GET /api/v1/airports`
- `GET /api/v1/routes`

## Query Examples

```bash
GET /api/v1/flights?dep_iata=DEL&limit=10
GET /api/v1/flights/AI101
GET /api/v1/airports?iata_code=JFK
GET /api/v1/routes?dep_iata=DEL&arr_iata=BOM
```
