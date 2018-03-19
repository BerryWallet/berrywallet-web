# BerryWallet site
NodeJS app with React for server- and client- side rendering.

## Developing

### 1. Configure development environment
```bash
$ docker-composer -f docker-composer-dev.yml
```

### 2. Install deps
Install required packages
```bash
$ yarn install
```

### 3. Build and run front
Build front bundle and run webpack in watch mode
```bash
$ npm run front:dev
```

### 4. Build and run server
In other terminal you need to build server and run it
```bash
$ npm run build:server && npm start
```
