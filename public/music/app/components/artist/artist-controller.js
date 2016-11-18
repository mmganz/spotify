angular.module('spotify')
    .component('artist', {
        templateUrl: "music/app/components/artist/artist.html",
        controller: ArtistController,
    })

ArtistController.$inject = ['$stateParams', 'Spotify']

function ArtistController($stateParams, Spotify) {
    var ac = this
    Spotify.search($stateParams.artist, 'album').then(function (data) {
        ac.albums = data
        console.log(data)
        ac.artistId = ac.albums.albums.items[0].artists[0].id
        console.log(ac.artistId)
        ready()
    })
    //     var artistId = $stateParams.artistId


    ac.getArtist = function(artistId){
       Spotify.getArtist(artistId).then(function (data) {
      console.log('get artist')
      console.log(data)
          ac.artist = data
    });
    }

    ac.getAlbums = function(artistId){
    Spotify.getArtistAlbums(artistId).then(function (data) {
          console.log('getAlbums');
      console.log(data);
      ac.albums = data;
    });
}

function ready(){
    ac.getArtist(ac.artistId)
    ac.getAlbums(ac.artistId)
}



}
