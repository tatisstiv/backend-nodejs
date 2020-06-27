import {Request, Response} from 'express';
import {clientes} from './conta';

export function saque(req:Request, res:Response){
    let cliente = clientes.find(i => i.codigo == Number(req.params.codigo));

    if(cliente != undefined){
        if(Number(req.params.valorSaque) <= 600){
            if(Number(req.params.valorSaque) + 0.3 <= cliente.saldo){
                cliente.saldo = cliente.saldo - Number(req.params.valorSaque) - 0.3;
                res.send('Saque feito com sucesso, saldo atual: B$ ' + cliente.saldo);
            } else {
                res.send('Saldo insuficiente');
            }
        } else {
            res.send('Saque acima do limite permitido');
        }
    } else {
        res.send('Conta não encontrada');
    }
}

export function deposito(req:Request, res:Response){
    let cliente = clientes.find(i => i.codigo == Number(req.params.codigo));

    if(cliente != undefined){
        cliente.saldo = cliente.saldo + Number(req.params.valorDeposito);
        res.send('Novo saldo: B$ ' + cliente.saldo);
    } else {
        res.send('Conta não encontrada');
    }
}
