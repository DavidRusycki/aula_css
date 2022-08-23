var divPrincipal = null;

var campoNome = null;
var campoRua = null;
var campoNumero = null;
var campoCep = null;
var campoRegiao = null;
var campoUf = null;
var campoMunicipio = null;
var campoNacionalidade = null;
var campoDataNascimento = null;

var array = {
    "SUL":{
        "SC":['cidade', 'aurora'],
        "PR":['cidade1', 'aurora1'],
        "RS":['cidade2', 'aurora2']
    },
    "NORTE":{
        "AM":['cidade3', 'aurora3'],
        "MA":['cidade4', 'aurora4'],
        "BA":['cidade5', 'aurora5']
    },
    "NORDESTE":{
        "NO":['cidade6', 'aurora6'],
        "ND":['cidade7', 'aurora7']
    }
};

var regiao = null;
var uf = null;
var municipio = null;

function onLoad() {
    divPrincipal = document.createElement('div');
    document.body.appendChild(divPrincipal);

    adicionarCamposTela();
}

function adicionarCamposTela() {


    var br = document.createElement('br');

    campoNome = document.createElement('input');
    campoNome.setAttribute('type', 'text');
    campoNome.setAttribute('id', 'Nome');
    campoNomeLabel = document.createElement('label');
    campoNomeLabel.innerHTML = 'Nome';
    campoNomeLabel.setAttribute('for', 'Nome');
    divPrincipal.appendChild(campoNomeLabel);
    divPrincipal.appendChild(campoNome);

    divPrincipal.appendChild(br);

    campoRua = document.createElement('input');
    campoRua.setAttribute('type', 'text');
    campoRua.setAttribute('id', 'Rua');
    campoRuaLabel = document.createElement('label');
    campoRuaLabel.innerHTML = 'Rua';
    campoRuaLabel.setAttribute('for', 'Rua');
    divPrincipal.appendChild(campoRuaLabel);
    divPrincipal.appendChild(campoRua);

    br = document.createElement('br');
    divPrincipal.appendChild(br);

    campoNumero = document.createElement('input');
    campoNumero.setAttribute('type', 'number');
    campoNumero.setAttribute('id', 'Numero');
    campoNumeroLabel = document.createElement('label');
    campoNumeroLabel.innerHTML = 'Numero';
    campoNumeroLabel.setAttribute('for', 'Numero');
    divPrincipal.appendChild(campoNumeroLabel);
    divPrincipal.appendChild(campoNumero);

    br = document.createElement('br');
    divPrincipal.appendChild(br);

    campoCep = document.createElement('input');
    campoCep.setAttribute('type', 'text');
    campoCep.setAttribute('id', 'Cep');
    campoCepLabel = document.createElement('label');
    campoCepLabel.innerHTML = 'Cep';
    campoCepLabel.setAttribute('for', 'Cep');
    divPrincipal.appendChild(campoCepLabel);
    divPrincipal.appendChild(campoCep);

    br = document.createElement('br');
    divPrincipal.appendChild(br);

    campoRegiao = document.createElement('select');
    campoRegiao.setAttribute('name', 'Regiao');
    campoRegiao.setAttribute('id', 'Regiao');
    campoRegiao = montaListaRegiao(campoRegiao, array);
    campoRegiao.addEventListener('change', onChangeLista);
    campoRegiaoLabel = document.createElement('label');
    campoRegiaoLabel.innerHTML = 'Regiao';
    campoRegiaoLabel.setAttribute('for', 'Regiao');
    divPrincipal.appendChild(campoRegiaoLabel);
    divPrincipal.appendChild(campoRegiao);

    br = document.createElement('br');
    divPrincipal.appendChild(br);

    campoUf = document.createElement('select');
    campoUf.setAttribute('name', 'Uf');
    campoUf.setAttribute('id', 'Uf');
    campoUf.addEventListener('change', onChangeUf);
    campoUfLabel = document.createElement('label');
    campoUfLabel.innerHTML = 'Uf';
    campoUfLabel.setAttribute('for', 'Uf');
    divPrincipal.appendChild(campoUfLabel);
    divPrincipal.appendChild(campoUf);

    br = document.createElement('br');
    divPrincipal.appendChild(br);

    campoMunicipio = document.createElement('select');
    campoMunicipio.setAttribute('name', 'Municipio');
    campoMunicipio.setAttribute('id', 'Municipio');
    campoMunicipioLabel = document.createElement('label');
    campoMunicipioLabel.innerHTML = 'Municipio';
    campoMunicipioLabel.setAttribute('for', 'Municipio');
    divPrincipal.appendChild(campoMunicipioLabel);
    divPrincipal.appendChild(campoMunicipio);

    br = document.createElement('br');
    divPrincipal.appendChild(br);

    campoNacionalidade = document.createElement('input');
    campoNacionalidade.setAttribute('type', 'text');
    campoNacionalidade.setAttribute('id', 'Nacionalidade');
    campoNacionalidadeLabel = document.createElement('label');
    campoNacionalidadeLabel.innerHTML = 'Nacionalidade';
    campoNacionalidadeLabel.setAttribute('for', 'Nacionalidade');
    divPrincipal.appendChild(campoNacionalidadeLabel);
    divPrincipal.appendChild(campoNacionalidade);

    br = document.createElement('br');
    divPrincipal.appendChild(br);

    campoDataNascimento = document.createElement('input');
    campoDataNascimento.setAttribute('type', 'date');
    campoDataNascimento.setAttribute('id', 'DataNascimento');
    campoDataNascimentoLabel = document.createElement('label');
    campoDataNascimentoLabel.innerHTML = 'DataNascimento';
    campoDataNascimentoLabel.setAttribute('for', 'DataNascimento');
    divPrincipal.appendChild(campoDataNascimentoLabel);
    divPrincipal.appendChild(campoDataNascimento);

    br = document.createElement('br');
    divPrincipal.appendChild(br);

    var botao = document.createElement('button');
    botao.innerHTML = 'cadastrar';

    divPrincipal.appendChild(botao);
}

function montaListaRegiao(campoLista, arrayOpcoes) {

    var selecione = document.createElement('option');
    selecione.innerHTML = 'Selecione';
    selecione.setAttribute('value', 0)
    campoLista.appendChild(selecione);

    for(opcao in arrayOpcoes) {
        var option = null;
        option = document.createElement('option');
        option.setAttribute('value', opcao)
        option.innerHTML = opcao
        campoLista.appendChild(option);
    }    

    return campoLista;
}

function onChangeLista() {
    if (campoRegiao.value == 0) {
        limpaCampo(campoUf);
        limpaCampo(campoMunicipio);
        desativaCampo(campoUf);
        desativaCampo(campoMunicipio);
    }
    else {
        montaListaUf();
        montaListaMunicipio();
        ativaCampo(campoUf);
        ativaCampo(campoMunicipio);
    }
}

function onChangeUf() {
    if (campoRegiao.value == 0) {
        limpaCampo(campoUf);
        limpaCampo(campoMunicipio);
        desativaCampo(campoUf);
        desativaCampo(campoMunicipio);
    }
    else {
        montaListaMunicipio();
        ativaCampo(campoMunicipio);
    }
}

function montaListaUf() {
    var opcoes = getOpcoesFromRegiao(campoRegiao.value);
    montaLista(campoUf, opcoes);
}

function getOpcoesFromRegiao(regiao) {
    opcoes = [];
    var estados = array[regiao];
    for(estado in estados) {
        opcoes.push(estado);
    }
    return opcoes;
}

function montaListaMunicipio() {
    var opcoes = getOpcoesFromUf(campoUf.value);
    montaLista(campoMunicipio, opcoes);
}

function getOpcoesFromUf(uf) {
    opcoes = [];
    var municipios = array[campoRegiao.value][uf];
    return municipios;
}

function montaLista(campo, array) {
    campo.innerHTML = '';

    var selecione = document.createElement('option');
    selecione.innerHTML = 'Selecione';
    selecione.setAttribute('value', 0)
    campo.appendChild(selecione);

    for(valor in array) {
        var option = document.createElement('option');
        option.innerHTML = array[valor];
        option.setAttribute('value', array[valor]);
        campo.appendChild(option);
    }
}

function limpaCampo(campo) {
    campo.value = 0;
}

function desativaCampo(campo) {
    campo.setAttribute('disabled', true);
}

function ativaCampo(campo) {
    campo.removeAttribute('disabled');
}