<?php

const TAMANHO = 150;
const PAGINA = 'pagina';
const QUANTIDADE = 10;
$aTabela = [];

function geraArrayTabela(&$aTabela) {
    for ($iIndice=0; $iIndice < TAMANHO; $iIndice++) { 
        for ($i=0; $i < 5; $i++) { 
            $aTabela[$iIndice][] = rand(0, 100);
        }
    }
}

function imprimeTabela($aTabela) {
    echo '<table>';
    
    for ($iIndice = getPagina()*QUANTIDADE-QUANTIDADE; $iIndice < getPagina()*QUANTIDADE; $iIndice++) {
        echo '<tr>';
        echo '<td>';
        echo $iIndice;
        echo '</td>';
        for ($iIndice1 = 0; $iIndice1 < 5; $iIndice1++) {
            echo '<td>';
            echo $aTabela[$iIndice][$iIndice1];
            echo '</td>';
        }
        echo '</tr>';
    }
    
    for ($i = 1; $i <= TAMANHO/QUANTIDADE; $i++) {
        echo "<a href='?pagina={$i}'>{$i} </a>"; 
    }

    echo '</table>';
}

function getPagina() {
    return $_GET[PAGINA];
}


geraArrayTabela($aTabela);
imprimeTabela($aTabela);


?>