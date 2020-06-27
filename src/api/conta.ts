export type Tipo = 'corrente' | 'poupanca'

export class Conta {
    tipo: Tipo;
    codigo: number;
    saldo: number

    constructor(tipo: Tipo, codigo: number, saldo: number){
        this.tipo = tipo;
        this.codigo = codigo;
        this.saldo = saldo;
    }
}

export let clientes : Conta[] = [
    new Conta('poupanca', 1, 19885),
    new Conta('corrente', 2, 879),
    new Conta('corrente', 3, 400)
]