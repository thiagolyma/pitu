import express from 'express'; //importando a lib express
import linksRouter from './routes/links';
import cors from 'cors';

const app = express();
app.use(express.json()); //para trabalhar com arquivos no formato json
app.use(cors()); 
app.use(linksRouter);

export default app;



