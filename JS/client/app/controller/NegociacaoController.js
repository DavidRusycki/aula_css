class NegociacaoController {
    
    constructor() {
        let query = document.querySelector.bind(document);


        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacoesView('negociacoes');
        this._negociacoesView.update(this._negociacoes);
        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('mensagemView');
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();
        
        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociacao adicionada!';
        this._mensagemView.update(this._mensagem);

        this._negociacoesView.update(this._negociacoes);
        this._limparFormulatio()
    }

    _limparFormulatio() {
        this._inputData.value = '2020-01-01';
        this._inputQuantidade.value = 1
        this._inputValor.value = 2.0
    }

    _criaNegociacao() {
        return new Negociacao(DateConverter.paraData(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
    }

}