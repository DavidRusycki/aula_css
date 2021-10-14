<?php

function connect() {
    $oConnection = new PDO('mysql:host=localhost;dbname=marcondes','root','');
    $oConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    return $oConnection;
}

function executeSql($sSql) {
    $oConnection = connect();
    $oPrepare = $oConnection->prepare($sSql);
    $oPrepare->execute();
    $aFetch = $oPrepare->fetchAll();
    montaTabela($aFetch);
}

function montaTabela($aFetch) {
    $aColunas = [];
    echo '<table>';
    foreach($aFetch as $aLinha) {
        echo '<tr>';
        foreach($aLinha as $sTitulo => $xValor) {
            if (is_string($sTitulo)) {
                if (!in_array($sTitulo, $aColunas)) {
                    $aColunas[] = $sTitulo;
                    echo '<td>';
                    echo $sTitulo;
                    echo '</td>';
                }
            }
        }
        echo '</tr>';
        
        echo '<tr>';
        foreach($aLinha as $sTitulo => $xValor) {
            if (is_string($sTitulo)) {
                echo '<td>';
                echo $xValor;
                echo '</td>';
            }
        }
        echo '</tr>';
    }
    echo '</table>';
}

$sSql =  'SELECT cidades.*, 
estados.sigla as estado_sigla, 
estados.nome as estado_nome 
FROM cidades,estados 
WHERE cidades.estado = estados.id';

executeSql($sSql);