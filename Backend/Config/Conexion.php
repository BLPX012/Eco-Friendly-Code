<?php 
$host = "localhost";
$usuario = "root";
$contraseña = "";
$baseDeDatos = "ecofriendlycode";

$conexion = mysqli_connect($host, $usuario, $contraseña, $baseDeDatos);
if (!$conexion) {
    die("Connection failed: " . mysqli_connect_error());
}

?>