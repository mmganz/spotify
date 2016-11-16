angular.module('spotify')
    .component('tracks', {
        templateUrl: "music/app/components/tracks/tracks.html",
        controller: TracksController
    })

TracksController.$inject = ['$stateParams', 'Spotify']

function TracksController($stateParams, Spotify) {
    var tc = this
    var albumId = $stateParams.albumId
    var artistId = $stateParams.artistId
    // var artistId = tc.album.artists[0].id
    tc.getAlbum = function (albumId) {
        debugger

        Spotify.getAlbum(albumId).then(function (data) {
            tc.album = data
        //     tc.artistId = tc.album.artists[0].id
        //  console.log(tc.artistId)
        });
    }


    tc.getTracks = function (albumId) {


        Spotify.getAlbumTracks(albumId).then(function (data) {
            tc.tracks = data
            console.log(tc.tracks);
            var trackIds = tc.tracks.items.map(function (track) { return track.id }).join(',')
            tc.trackIds = 'https://embed.spotify.com/?uri=spotify:trackset:PREFEREDTITLE:'+trackIds
            // console.log(tc.trackIds)
        });
    }

tc.getRealted = function(artistId){
    debugger
    Spotify.getRelatedArtists(artistId).then(function (data) {
        tc.related = data
        console.log(tc.related);
});
}

    tc.getAlbum(albumId)

    tc.getTracks(albumId)
    
    tc.getRealted(artistId)

}








