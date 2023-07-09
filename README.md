# Note

## Create mock data

```bash
node mock/dataCreate.js
```

## Setup .env

```bash
cp .env.exmaple .env
```

## Buid & Run

```bash
docker compose build
docker compose up -d
```

## Run json-server

```bash
docker compose exec -it web sh
npm run json-server
```
