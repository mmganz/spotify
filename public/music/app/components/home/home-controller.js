angular.module('spotify')
    .component('home', {
        templateUrl: "music/app/components/home/home.html",
        controller: HomeController,
    })

HomeController.$inject = ['Spotify']

function HomeController(Spotify) {
    var hc = this
    // var albumId = $stateParams.albumId


    // Spotify.getAlbum('0sNOF9WDwhWunNAHPD3Baj').then(function (data) {
    //     hc.albums = data
    //     console.log(hc.albums)
    // });

    // Spotify
    //   .getAlbums('41MnTivkwTO3UUJ8DrqEJJ,6JWc4iAiJ9FjyK0B59ABb4,6UXCm6bOO4gFlDQZV5yL37')
    //   .then(function (data) {
    //       hc.albums = data
    //     console.log(hc.albums);
    //   });

    // Spotify.getArtist('0LcJLqbBmaGUft1e9Mm8HV').then(function (data) {
    //   console.log(data);
    //   hc.albums = data;
    // });

    hc.search = function (query) {

        Spotify.search(query, 'album').then(function (data) {
            hc.albums = data
            console.log(data)
        })
    }

    // hc.search('1989');

}





