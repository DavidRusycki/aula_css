class NegociacaoService {
    obterNegociacoesDaSemana(callback) {
        console.log('Importando');
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://localhost:3000/negociacoes/semana');

        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status == 200) {
                    console.log('obtendo do servidor');
                    console.log();

                    const Negociacoes = JSON.parse(xhr.responseText).map(function(objeto) {
                        return new Negociacao(new Date(objeto.data), objeto.quantidade, objeto.valor);
                    })
                    callback(null, Negociacoes);
                }
                else {
                    console.log(xhr.responseText);
                    callback('Não foi pssível obter as negociações', null);
                }
            }
        }

        xhr.send();
    }
}