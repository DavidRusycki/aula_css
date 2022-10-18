class NegociacaoController {
    
    constructor() {
        let query = document.querySelector.bind(document);


        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");

        this._negociacoesView = new NegociacoesView('negociacoes');
        // this._negociacoes = new Negociacoes((model) => {this._negociacoesView.update(model)});
        
        const me = this;

        this._negociacoes = new Proxy(new Negociacoes(), {
            get(target, prop, receiver) {
                if (typeof(target[prop]) == typeof(Function) && ['adiciona', 'esvazia'].includes(prop)) {
                    return function() {
                        target[prop].apply(target, arguments);
                        me._negociacoesView.update(target);
                    }
                }
                else {
                    return target[prop];
                }

            }
        });

        this._mensagem = new Mensagem();
        this._mensagemView = new MensagemView('mensagemView');
        this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        event.preventDefault();
        
        this._negociacoes.adiciona(this._criaNegociacao());
        this._mensagem.texto = 'Negociacao adicionada!';
        this._mensagemView.update(this._mensagem);

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

    apaga() {
        this._negociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso!';
        this._mensagemView.update(this._mensagem);
    }

}