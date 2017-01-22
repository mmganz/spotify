angular.module('spotify')
.component('login', {
    templateUrl: "music/app/components/login/login.html",
    controller: LoginController
})

// LoginController.$inject= ['$stateParams', '$timeout', 'Spotify']

function LoginController($stateParams, $timeout, Spotify){
    var lc = this

lc.login = function () {
  Spotify.login().then(function(data){
      console.log(data)
            ready()
  }).catch(function(error){
      console.log(error)
  });

 


}




lc.getNewReleases = function(){
Spotify.getNewReleases({limit:8}).then(function (data) {
    lc.albums = data
  console.log(data);
});

}

lc.getFeaturedPlaylists = function(){
Spotify
  .getFeaturedPlaylists({limit: 8})
  .then(function (data) {
      console.log('featured playlists')
      lc.playlists = data
    console.log(data);
    lc.baseUrl = 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:'
    // var playlistIds = lc.playlists.playlists.items.map(function (playlist) { return playlist.id })
    // lc.playlistIds = 'https://embed.spotify.com/?uri=spotify:user:spotify:playlist:'+playlistIds+'&theme=white'
  });

}



function ready(){
lc.getNewReleases()
lc.getFeaturedPlaylists()
}



}