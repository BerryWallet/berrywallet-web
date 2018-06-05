import React from "react";
import path from 'path';
import express from "express";
import cors from "cors";
import {renderToString} from "react-dom/server";
import {App} from '../components/App';

const CURRENT_PATH = path.resolve('dist');
const PUBLIC_PATH = path.resolve(CURRENT_PATH, 'public');

const app = express();

app.use(cors());
app.use("/", express.static(PUBLIC_PATH));

app.get("/", (req, res, next) => {
    const name = 'Tyler';
    const markup = renderToString(<App name={name}/>);

    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with RR</title>
        <script src="/main.bundle.js" defer></script>
      </head>
      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
});

app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`)
});