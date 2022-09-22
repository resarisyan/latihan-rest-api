function searchMovie()
{
    //Setiap mencari, harus dihilangkan dulu setiap data yang pernah dicari sebelumnya
    $('#movie-list').html('');

    //$.getJSON(http://omdbapi.com?apikey=q31bbc&) kalau menggunakan ini terlalu panjang ditulis dalam satu baris, jadi bisa menggunakan fungsi aslinya yaitu fungsi ajax

    $.ajax({
        url: 'http://omdbapi.com',
        type: 'get',
        dataType: 'json',
        //Jika datanya lebih dari satu bisa menggunakan object {}
        data: {
            'apikey' : 'f69007f0',
            's' : $('#search-input').val() //mengambil data yang diinputkan user
        },
        success: function(result) {
            if(result.Response == "True"){
                let movies = result.Search
                $.each(movies, function(i, data){
                    $('#movie-list').append(`
                    <div class="col-md-4">
                        <div class="card mb-2 thumb-post">
                            <img src="`+ data.Poster +`" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">`+ data.Title +`</h5>
                                <h6 class="card-subtitle mb-2 text-muted">`+ data.Year +`</h6>
                                <a href="#" class="card-link see-detail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="`+ data.imdbID +`">See Detail</a>
                            </div>
                        </div>
                    </div>
                    `);
                });

                $('#search-input').val('');
            }else{
                //Text errornya bisa manual atau bisa mengambil dari pesan error api-nya
                // $('#movie-list').html('<h1 class="text-center">Movie Not Found</h1>')
                //Catatan: Jika menggunakan kutip satu ' textnya harus dibuat satu baris atau spasinya berpengaruh, cara mengatasinya bisa menggunakan backtick `
                $('#movie-list').html(`
                <div class="col">
                    <h1 class="text-center">`+ result.Error +`</h1>
                </div>
                `)
            }
        }
    });
}

//Connect setelah mengetikan sesuatu di search input, jadi ketika di klik tombol searchnya baru request ke rest servernya
$('#search-button').on('click', function(){
        searchMovie();
});
$('#search-input').on('keyup', function(e){
    if(e.which === 13)
    {
        searchMovie();
    }
});

$('#movie-list').on('click', '.see-detail', function()
{
    $.ajax({
        url: 'http://omdbapi.com',
        dataType: 'json',
        type: 'get',
        data: {
            'apikey' : 'f69007f0',
            'i' : $(this).data('id')
        },
        success: function(movie){
            if(movie.Response === "True"){
                $('.modal-body').html(`
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-4">
                            <img src="`+ movie.Poster +`" class="img-fluid">
                        </div>
                        <div class="col-md-8">
                           <ul class="list-group">
                            <li class="list-group-item"><h3>`+ movie.Title +`</h3></li>
                            <li class="list-group-item">Release : `+ movie.Released +`</li>
                            <li class="list-group-item">Genre : `+ movie.Genre +`</li>
                            <li class="list-group-item">Director : `+ movie.Director +`</li>
                            <li class="list-group-item">Actor : `+ movie.Actors +`</li>
                            </ul>
                        </div>
                    </div>
                </div>
                `);
            }
        }
    })
});