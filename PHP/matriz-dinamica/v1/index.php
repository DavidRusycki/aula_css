<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Matriz Dinâmica</title>
    <style>
        table {
            border-collapse: collapse;
        }
        td {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    
<?php

$iTamanhoMatriz = rand(10, 30);

//Criar a matriz.
$aArray = [];
for ($iIndice1=0; $iIndice1 <= $iTamanhoMatriz; $iIndice1++) { 
    for ($iIndice2=0; $iIndice2 <= $iTamanhoMatriz; $iIndice2++) {
        $aArray[$iIndice1][] = rand(0, 100);
    }
}

//Imprimir a matriz em tela.
echo '<table>';
for ($iIndice1=0; $iIndice1 <= $iTamanhoMatriz; $iIndice1++) { 
    echo '<tr>';
    for ($iIndice2=0; $iIndice2 <= $iTamanhoMatriz; $iIndice2++) {
        echo '<td>';
        echo $aArray[$iIndice1][$iIndice2];
        echo '</td>';
    }
    echo '</tr>';
}
echo '</table>';

?>
</body>
</html>