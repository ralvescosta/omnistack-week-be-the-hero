# Backend

### UTILS - TypeORM CLI

- Create a New Migration

```
yarn ts-node ./node_modules/typeorm/cli.js migration:create -n MigrationName
```

- Run Migrations

```
yarn ts-node ./node_modules/typeorm/cli.js migration:run -c development
```

- Undo Migrations

```
yarn ts-node ./node_modules/typeorm/cli.js migration:revert -c development
```
