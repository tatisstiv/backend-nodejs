import * as controlador from './operacoes';
import {Router} from 'express';

export const router = Router();
router.get(`/saque/:codigo/:valorSaque`, controlador.saque);
router.get(`/deposito/:codigo/:valorDeposito`, controlador.deposito);
