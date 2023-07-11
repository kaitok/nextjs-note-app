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

## Setup mongo

prisma require replica set for mongodb

```bash
docker compose exec -it mongo sh
mongosh
rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'mongo:27017'}]});
```
