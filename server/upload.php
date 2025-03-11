<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$uploadDir = __DIR__ . "/server/uploads/"; // Ensure this folder exists & is writable

if (!file_exists($uploadDir)) {
    mkdir($uploadDir, 0777, true); // Create the uploads folder if it doesn't exist
}

if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["file"])) {
    $fileName = uniqid("doc_", true) . ".pdf"; // Unique filename
    $uploadFile = $uploadDir . $fileName;

    if (move_uploaded_file($_FILES["file"]["tmp_name"], $uploadFile)) {
        echo json_encode(["success" => true, "fileUrl" => "http://fundi.au/server/uploads/" . $fileName]);
    } else {
        echo json_encode(["success" => false, "error" => "File upload failed"]);
    }
} else {
    echo json_encode(["success" => false, "error" => "Invalid request"]);
}
?>
