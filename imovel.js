function imovel(tipo, local, tamanho, quartos, valor) {
    this.tipo = tipo;
    this.local = local;
    this.tamanho = tamanho;
    this.quartos = quartos;
    this.valor = valor;
}

imovel.prototype.displayInfo = function() {
    console.log(`
    Tipo: ${this.tipo},
    Local: ${this.local},
    Tamanho: ${this.tamanho},
    Quartos: ${this.quartos},
    Valor: ${this.valor}
    `)
}

function apartamento(tipo, local, tamanho, quartos, valor) {
    imovel.call(this, tipo, local, tamanho, quartos, valor);
}
apartamento.prototype = Object.create(imovel.prototype);
apartamento.prototype.constructor = apartamento;

apartamento.prototype.displayInfo = function() {
    imovel.prototype.displayInfo.call(this);
}

function casa(tipo, local, tamanho, quartos, valor) {
    imovel.call(this, tipo, local, tamanho, quartos, valor);
}
casa.prototype = Object.create(imovel.prototype);
casa.prototype.constructor = casa;

casa.prototype.displayInfo = function() {
    imovel.prototype.displayInfo.call(this);
}

const apartamento1 = new apartamento('Apartamento', 'Morumbi', '250m²', '3', '600.000');
const casa1 = new casa('Casa', 'Cidade Jardins', '550m²', '5', '1.350.000')
const apartamento2 = new apartamento('Apartamento', 'Ibirapuera', '390m²', '4', '990.000');

apartamento1.displayInfo();
casa1.displayInfo();
apartamento2.displayInfo();