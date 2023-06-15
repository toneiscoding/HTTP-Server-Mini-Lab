import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const _dirname = path.dirname(_filename);

const app = express();

app.use(express.static(path.join(__dirname, "/dist")));

app.listen(4000, () => {
    console.log('listening on port ', 4000);
});