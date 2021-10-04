<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulário</title>
</head>
<body>
    
    <form action="generation.php" method="POST">

        <label for="linhas">Linhas</label>
        <input type="number" name="linhas" id="linhas">
        <br>
        <label for="colunas">Colunas</label>
        <input type="number" name="colunas" id="colunas">
        <br>
        <label for="Paginas">Pagina</label>
        <input type="number" name="pagina" id="pagina">
        <br>
        
        <input type="submit" value="Enviar">

    </form>

</body>
</html>

<?php

