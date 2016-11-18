angular.module('spotify')
    .component('tracks', {
        templateUrl: "music/app/components/tracks/tracks.html",
        controller: TracksController
    })

TracksController.$inject = ['$stateParams', 'Spotify']

function TracksController($stateParams, Spotify) {
    var tc = this
    var albumId = $stateParams.albumId
    // var artistId = $stateParams.artistId
    // tc.artistID = $stateParams.artistId
    
    // var artistId = tc.album.artists[0].id
    tc.getAlbum = function (albumId) {

        Spotify.getAlbum(albumId).then(function (data) {
            tc.album = data
            tc.artistId = tc.album.artists[0].id
        //  console.log(tc.artistId)
            tc.getRealted(tc.artistId)
        });
    }


    tc.getTracks = function (albumId) {


        Spotify.getAlbumTracks(albumId).then(function (data) {
            tc.tracks = data
            console.log(tc.tracks);
            var trackIds = tc.tracks.items.map(function (track) { return track.id }).join(',')
            tc.trackIds = 'https://embed.spotify.com/?uri=spotify:trackset:%20:'+trackIds+'&theme=white'

            // console.log(tc.trackIds)
        });
    }

tc.getRealted = function(artistId){
    Spotify.getRelatedArtists(tc.artistId).then(function (data) {
        tc.related = data
        console.log(tc.related);
        // tc.query = tc.related.artists[0].name
});
}

tc.search = function(query){
        Spotify.search(tc.query, 'album').then(function (data) {
            console.log(data)
    })
}


    tc.getAlbum(albumId)

    tc.getTracks(albumId)
    
    // tc.getRealted(artistId)

}








