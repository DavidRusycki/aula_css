class NegociacaoController {
    
    constructor() {
        let query = document.querySelector.bind(document);


        this._inputData = documento.querySelector("#data");
        this._inputQuantidade = documento.querySelector("#quantidade");
        this._inputValor = documento.querySelector("#valor");


    }

    adiciona(event) {
        event.preventDefault();
        console.log('controller funcando');

        let data = new Date(this._inputData.value);

        let negociacao = new negociacao(data, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));

    }

}