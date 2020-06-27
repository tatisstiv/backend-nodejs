import * as controlador from './operacoes';
import {Router} from 'express';

export const router = Router();
router.get('/', (req, res) => {
    res.send('Para realizar saque: http://localhost:5000/saque/(codigo da conta)/(valor do saque)<br/>Para realizar deposito: http://localhost:5000/deposito/(codigo da conta)/(valor do deposito)')
})

router.get(`/saque/:codigo/:valorSaque`, controlador.saque);
router.get(`/deposito/:codigo/:valorDeposito`, controlador.deposito);
