<?php

$iLinhas = null;
$iColunas = null;
$iItens = null;

if (!isset($_POST['linhas'])) {
    $iLinhas = $_GET['linhas'];
}
else {
    $iLinhas = $_POST['linhas'];
}

if (!isset($_POST['colunas'])) {
    $iColunas = $_GET['colunas'];
}
else {
    $iColunas = $_POST['colunas'];
}

if (!isset($_POST['pagina'])) {
    $iPagina = $_GET['pagina'];
}
else {
    $iPagina = $_POST['pagina'];
}

const QUANTIDADE_TOTAL = 1000;

$aMatriz = [];

for ($i=0; $i < QUANTIDADE_TOTAL; $i++) { 
    for ($j=0; $j < $iColunas; $j++) { 
        $aMatriz[$i][$j] = rand(1, 1000);
    }
}

echo '<table>';

for ($i=($iPagina*$iLinhas)-$iLinhas; $i < $iLinhas*$iPagina; $i++) { 
    echo '<tr>';
    echo '<td>';
    echo $i;
    echo '</td>';
    for ($j=0; $j < $iColunas; $j++) { 
        echo '<td>';
        echo $aMatriz[$i][$j];
        echo '</td>';
    }
    echo '</tr>';
}

echo '</table>';

for ($i = 1; $i <= QUANTIDADE_TOTAL/($iLinhas * $iColunas); $i++) {
    echo "<a href='?pagina={$i}&colunas={$iColunas}&linhas={$iLinhas}'>{$i} </a>"; 
}

