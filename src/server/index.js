import path from 'path';
import express from "express";
import cors from "cors";
import {reactRenderRoute} from './routes';

const CURRENT_PATH = path.resolve('dist');
const PUBLIC_PATH = path.resolve(CURRENT_PATH, 'public');

const app = express();

app.use(cors());
app.use("/", express.static(PUBLIC_PATH));

app.get("*", reactRenderRoute);

app.listen(3000, () => {
    console.log(`Server is listening on port: 3000`)
});