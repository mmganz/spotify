angular.module('spotify')
.component('login', {
    templateUrl: "music/app/components/login/login.html",
    controller: LoginController
})

LoginController.$inject= ['$stateParams', 'Spotify']

function LoginController($stateParams, Spotify){
    var lc = this

lc.login = function () {
  Spotify.login().then(function(data){
      console.log(data)
  }).catch(function(error){
      console.log(error)
  });
};



}