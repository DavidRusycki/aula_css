<?php

if (isset($_POST['logar'])) {
    if (($_POST['login'] == 'admin') && ($_POST['senha'] == 'admin')) {
        echo 'logado';
        $_SESSION['usuario'] = $_POST['login'];
        echo '<a href="index.php">Acessar</a>';
    }
    else {
        echo 'Login ou senha incorreto!';
    }
}
?>

<form method="post">

<input type="text" name="login" placeholder="login">
<br>
<input type="password" name="senha" id="senha" placeholder="senha">
<br>
<input type="submit" value="Enviar" name="logar">

</form>
