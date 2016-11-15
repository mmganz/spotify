angular.module('spotify')
    .component('tracks', {
        templateUrl: "music/app/components/tracks/tracks.html",
        controller: TracksController
    })

TracksController.$inject = ['$stateParams', 'Spotify']

function TracksController($stateParams, Spotify) {
    var tc = this
    var albumId = $stateParams.albumId

    tc.getAlbum = function (albumId) {

        Spotify.getAlbum(albumId).then(function (data) {
            tc.album = data
            console.log(tc.album);
        });
    }

    tc.getTracks = function (albumId) {


        Spotify.getAlbumTracks(albumId).then(function (data) {
            tc.tracks = data
            console.log(tc.tracks);
            var trackIds = tc.tracks.items.map(function (track) { return track.id }).join(',')
            tc.trackIds = 'https://embed.spotify.com/?uri=spotify:trackset:PREFEREDTITLE:'+trackIds
            console.log(tc.trackIds)
        });
    }


    tc.getAlbum(albumId)

    tc.getTracks(albumId)

}








