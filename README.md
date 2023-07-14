# Note

- Next.js App Router
- Server Actions
- MongoDB + Prisma


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

Add hostname to `/etc/hosts`

```
127.0.0.1    mongo
```
