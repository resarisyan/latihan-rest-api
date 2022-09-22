// Mengambil json menggunakan ajax
// JQUERY mempunyai $.getJSON sebuah method untuk menyingkat $.ajax
// Mengambil object di php menggunakan [] di javascript menggunakan .
function tampilkanSemuaMenu(){
$.getJSON('data/pizza.json', function(data){
    let menu = data.menu; //Mengambil object di javascript
    //Di JQUERY ada sebuah method untuk melakukan pengulangan namanya $.each, kalau di php foreach
    $.each(menu, function(i, data){
        console.log(i);
        console.log(data);
        // akan looping 14 kali karena datanya ada 14
        $('#daftar-menu').append('<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>');
        });
    });
}
console.log($(this));
tampilkanSemuaMenu();

$('.nav-link').on('click', function(){
    $('.nav-link').removeClass('active');
    $(this).addClass('active');

    let kategori = $(this).html();
    $('h1').html(kategori);

    if(kategori == 'All Menu'){
        tampilkanSemuaMenu();
        return; // Supaya dia keluar dari function
    }

    $.getJSON('data/pizza.json', function(data){
        let menu = data.menu;
        let content = '';

        $.each(menu, function(i, data){
            if(data.kategori == kategori.toLowerCase()){
                content += '<div class="col-md-4"><div class="card mb-3" style="width: 18rem;"><img src="img/menu/'+ data.gambar +'" class="card-img-top"><div class="card-body"><h5 class="card-title">'+ data.nama +'</h5><p class="card-text">'+ data.deskripsi +'</p><h5 class="card-title">'+ data.harga +'</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
            }
        });
        $('#daftar-menu').html(content);
    });
});