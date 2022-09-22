<?php

$data = file_get_contents('coba.json');
$mahasiswa = json_decode($data, true);//jika tidak menggunakan true data akan berubah menjadi object, jika menggunakan true data berubah menjadi array
var_dump($mahasiswa);
// echo $mahasiswa[0]->{'pembingbing'}->{'pembingbing1'};
// echo $mahasiswa[0]["pembingbing"]["pembingbing1"];
?>