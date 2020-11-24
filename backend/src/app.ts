import express from 'express'; //importando a lib express
import linksRouter from './routes/links';

const app = express();
app.use(express.json()); //para trabalhar com arquivos no formato json
app.use(linksRouter);

export default app;



