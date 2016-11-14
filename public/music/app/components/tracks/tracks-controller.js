angular.module('spotify')
.component('tracks', {
    templateUrl: "music/app/components/tracks/tracks.html",
    controller: TracksController
})

// TracksController.$inject['$stateParams', 'Spotify']

function TracksController($stateParams, Spotify){
    var tc = this
    var albumId = $stateParams.albumId

tc.search = function(query){
    debugger

Spotify.search(query,'album').then(function(data){
   tc.albums = data
console.log(data)
})
}

}




  



