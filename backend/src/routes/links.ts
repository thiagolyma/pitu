import {Router} from 'express'; //Importando somente o componente router do express
import linksController from '../controllers/links';

const router = Router();

//Definição das rotas
router.post('/links',linksController.postLink);

router.get('/links/:code',linksController.hitLink);

router.get('/links/:code/stats',linksController.getLink);

//Exportando router para fora do arquivo links.ts
export default router;

