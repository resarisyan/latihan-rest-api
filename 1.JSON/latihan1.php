<?php

// $mahasiswa = [[
//                 "nama" => "Resa Auliana Risyan", 
//                 "NRP" => "55201200018", 
//                 "email" => "resarisyan77@gmail.com"
// ],
// [
//     "nama" => "Resa Auliana Risyan", 
//     "NRP" => "55201200018", 
//     "email" => "resarisyan77@gmail.com"
// ]
// ];


$dbh = new PDO('mysql:host=localhost;dbname=phpdasar','root','');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);
// var_dump($mahasiswa);
$data = json_encode($mahasiswa); //Function untuk mengubah array menjadi object di json
echo $data;


?>