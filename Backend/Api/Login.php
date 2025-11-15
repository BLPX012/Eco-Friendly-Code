<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type, Authorization, X-Requested-With");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Credentials: true");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

include('../Config/Conexion.php');

$input = json_decode(file_get_contents('php://input'), true);

$usuario = $input['usuario'];
$contraseña = $input['password'];


$sql = "SELECT * FROM usuarios WHERE usuario = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("s", $usuario);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    $fila = $resultado->fetch_assoc();
    if (password_verify($contraseña, $fila['password'])) {
        echo json_encode([
            'status' => 'success',
            'message' => 'Login successful',
            'user' => [
                'id' => $fila['id'],
                'usuario' => $fila['usuario'],
                'nombre' => $fila['nombre']
            ]
        ]);
    } else {
        echo json_encode([
            'status' => 'error',
            'message' => 'Incorrect password'
        ]);
    }
} else {
    echo json_encode([
        'status' => 'error',
        'message' => 'User not found'.$usuario
    ]);
}$stmt->close();
$conexion->close();


?>