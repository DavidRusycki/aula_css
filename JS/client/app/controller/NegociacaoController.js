class NegociacaoController {
    
    constructor() {
        let query = document.querySelector.bind(document);


        this._inputData = document.querySelector("#data");
        this._inputQuantidade = document.querySelector("#quantidade");
        this._inputValor = document.querySelector("#valor");
        
        this._negociacoes = new Bind(new Negociacoes(), new NegociacoesView('negociacoes'), 'adiciona', 'esvazia')
        this._mensagem = new Bind(new Mensagem(), new MensagemView('mensagemView'),  'texto');
        this._negociacaoService = new NegociacaoService();
    }

    adiciona(event) {
        try {
            event.preventDefault();
            
            this._negociacoes.adiciona(this._criaNegociacao());
            this._mensagem.texto = 'Negociacao adicionada!';

            this._limparFormulatio()
        } catch (error) {
            console.log(error);

            if (error instanceof DataInvalidaException) {
                this._mensagem.texto = error.message;
            }
            else {
                this._mensagem.texto = 'Um erro não esperado aconteceu entre em contato com o suporte';
            }

        }
    }

    _limparFormulatio() {
        this._inputData.value = '02/02/2022';
        this._inputQuantidade.value = 1
        this._inputValor.value = 2.0
    }

    _criaNegociacao() {
        return new Negociacao(DateConverter.paraData(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputValor.value));
    }

    apaga() {
        this._negociacoes.esvazia();
        this._mensagem.texto = 'Negociações apagadas com sucesso!';
    }

    importaNegociacoes() {

        this._negociacaoService.obterNegociacoesDaSemana((err, negiacoes) => {
            if (err) {
                this._mensagem.texto = 'Não foi possível obter as negocíações';
            }

            negiacoes.forEach(negociacao => this._negociacoes.adiciona(negociacao));


this._mensagem.texto = 'Negocíações Obtidas com sucesso';
        });
    }

}