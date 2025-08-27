<?php
header('Content-Type: application/json');

$portfolio_id = isset($_GET['id']) ? $_GET['id'] : '';
$portfolio_dir = "images/portfolio/portfolio{$portfolio_id}";

$images = array();

if (is_dir($portfolio_dir)) {
    $files = scandir($portfolio_dir);
    foreach ($files as $file) {
        if ($file != "." && $file != ".." && in_array(strtolower(pathinfo($file, PATHINFO_EXTENSION)), ['jpg', 'jpeg', 'png', 'gif'])) {
            $images[] = $portfolio_dir . '/' . $file;
        }
    }
}

echo json_encode($images);
?> 