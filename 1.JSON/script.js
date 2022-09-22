//Dari Javascript Ke JSON
// let mahasiswa = {
//     nama: "Resa Auliana Risyan",
//     nrp: "5520120018",
//     email: "resarisyan77@gmail.com"
// }

// console.log(JSON.stringify(mahasiswa));

//Dari JSON Ke Javascirpt Menggunakan AJAX
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200)
//     {
//         let mahasiswa = JSON.parse(this.responseText);
//         console.log(mahasiswa);
//     }
// }

//menjalankan ajaxnya
// xhr.open('GET', 'coba.json', true);
// xhr.send();

//Dari JSON Ke Javascirpt Menggunakan JQUERY
$.getJSON('coba.json', function(data)
{
    console.log(data);
});