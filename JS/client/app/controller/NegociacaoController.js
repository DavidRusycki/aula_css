class NegociacaoController {
    
    constructor() {
        let query = document.querySelector.bind(document);


        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
    }

    adiciona(event) {
        event.preventDefault();
        console.log('controller funcando');

        let data = new Date(...this._inputData.value.split('-').map((valor, indice) => {valor - indice % 2}));

        let negociacao = new negociacao(data, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));

    }

}