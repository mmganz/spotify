angular
  .module('spotify', [
    'spotify',
    'ui.router',
    'ngSanitize'
  ])
  // .config(function (SpotifyProvider) {
  //   SpotifyProvider.setClientId('1d3d7645fbd64ae39e73297e348556ce');
  //   SpotifyProvider.setRedirectUri('http://localhost:8888/callback');
  //   SpotifyProvider.setScope('playlist-read-private');
  // })
