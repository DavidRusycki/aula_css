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

        let data = DateConverter.paraData(this._inputData.value);

        let negociacao = new Negociacao(data, parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));

        let diaMesAno = DateConverter.paraTexto(data);

        console.log(data);
        console.log(diaMesAno);
        console.log(negociacao);

        negociacao.getVolume();

    }

}