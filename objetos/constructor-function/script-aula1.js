function Carro(marcaAtribuida, precoAtribuida) {
    this.marca = marcaAtribuida;
    this.preco = precoAtribuida;
}

const honda = new Carro('Honda', 2000);
const fiat = new Carro('Fiat', 4000);



function Carro2(marca, precoInicial) {
    const taxa = 1.2;
    const precoFinal = precoInicial * taxa;
    
    this.marca = marca;
    this.preco = precoFinal;

    console.log(this);
}

const mazda = new Carro2('Mazda', 5000);





