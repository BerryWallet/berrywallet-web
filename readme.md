<p align="center">
  <h3 align="center">Website of BERRYWALLET</h3>

  <p align="center">
    NodeJS app with React for server- and client- side rendering.
    <br/>
    <br/>
    <a href="https://berrywallet.io">Website</a>
    ·
    <a href="https://chrome.google.com/webstore/detail/berrywallet/boidgcdefidhoojfljngigkjffbodjmn">Chrome Extension</a>
    ·
    <a href="https://addons.mozilla.org/firefox/addon/berrywallet">Mozilla Extension</a>
  </p>
</p>

<hr />

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


<hr />

<p align="center">
    <i>Contributors: </i>
    <br />
    <i>
        <a href="https://github.com/Eropi4">Yehor Melnykov</a>
        ·
        <a href="https://github.com/m-tymchyk">Maksym Tymchyk</a>
    </i>
</p>