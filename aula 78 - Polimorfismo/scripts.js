function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        this.verSaldo();
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function(valor){
    console.log(`Ag/c: ${this.agencia} / ${this.conta}` + `Sado: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11,2332, 132.323);
conta1.depositar(11);
conta1.depositar(100);
conta1.sacar(200);