<?php
require 'vendor/autoload.php';

use GuzzleHttp\Client;

$client = new Client();
//Parameter pertama adalah method, yang kedua URL, yang ketiga adalah parameter bebas.
$response = $client->request('GET', 'http://omdbapi.com', [
    'query' => [
        'apikey' => 'f69007f0',
        's' => 'transformers'
    ]
]);
//var_dump($response->getBody()->getContents());
$result = json_decode($response->getBody()->getContents(), TRUE);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php foreach($result['Search'] as $movie) :?>
    <ul>
        <li>Title : <?= $movie['Title']; ?></li>
        <li>Year : <?= $movie['Year']; ?></li>
        <li><img src="<?= $movie['Poster']; ?>" width=80;></li>
    </ul>
    <?php endforeach;?>
</body>
</html>