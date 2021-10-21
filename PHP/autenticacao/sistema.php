<?php
if (!isset($_SESSION['usuario'])) {
    echo 'Falha no sistema.';
    echo 'Você precisa se autenticar!';
    echo '<a href="index.php">Voltar</a>';
    exit();
}

?>

<a href="?desconectar=true">Desconectar</a>;

<h1>

Olá <?= isset($_SESSION['usuario'])?$_SESSION['usuario'] : 'Pessoa'?>

</h1>