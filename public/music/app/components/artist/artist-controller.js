angular.module('spotify')
    .component('artist', {
        templateUrl: "music/app/components/artist/artist.html",
        controller: ArtistController,
    })

ArtistController.$inject = ['$stateParams', 'Spotify']

function ArtistController($stateParams, Spotify) {
    var ac = this
    var artistId = $stateParams.artistId


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


    ac.getArtist(artistId)
    ac.getAlbums(artistId)



}
