# Documents

## How to migrate database schema

The script is in `packages/db/package.json`:

```json
    "migrate-dev": "pnpm with-env prisma migrate dev",
```

Run `pnpm --filter db migrate-dev` to migrate database schema.

## How to seed database

run `pnpm --filter db seed` to seed database.

## How to reset database

run `pnpm --filter db reset` to reset database.
