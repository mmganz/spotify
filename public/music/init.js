angular
  .module('spotify', [
    'spotify',
    'ui.router',
    'ngSanitize'
  ])
  .config(function (SpotifyProvider) {
    SpotifyProvider.setClientId('1d3d7645fbd64ae39e73297e348556ce');
    SpotifyProvider.setRedirectUri('http://localhost:8888/callback.html');
    SpotifyProvider.setScope('user-read-private playlist-read-private playlist-modify-private playlist-modify-public');
  })
