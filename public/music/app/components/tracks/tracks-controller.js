angular.module('spotify')
.component('tracks', {
    templateUrl: "music/app/components/tracks/tracks.html",
    controller: TracksController
})

// TracksController.$inject['$stateParams', 'Spotify']

function TracksController($stateParams, Spotify){
    var tc = this
    // var albumId = $stateParams.albumId

tc.getAlbum = function(albumId){

Spotify.getAlbum(albumId).then(function (data) {
  tc.album = data
  console.log(tc.album);
});
}  

tc.getTracks = function(albumId){


Spotify.getAlbumTracks(albumId).then(function (data) {
    tc.tracks = data
  console.log(tc.tracks);
});
}

tc.getAlbum('2UJwKSBUz6rtW4QLK74kQu')

tc.getTracks('2UJwKSBUz6rtW4QLK74kQu')

}




  



