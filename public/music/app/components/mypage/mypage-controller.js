angular.module('spotify')
    .component('mypage', {
        templateUrl: "music/app/components/mypage/mypage.html",
        controller: MyPageController
    })

MyPageController.$inject = ['Spotify']

function MyPageController(Spotify) {
    let mpc = this
   


Spotify.getNewReleases({limit:8}).then(function (data) {
    mpc.albums = data
  console.log(data);
});


}