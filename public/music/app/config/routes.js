angular.module('spotify')
    .config(function($stateProvider, $sceProvider, $urlRouterProvider) {

        $sceProvider.enabled(false);

            $stateProvider
            .state({
                name: 'home',
                url: '/home',
                template: '<home></home>' //Get the right component here and go look at your page
            })

            .state({
                name: 'tracks',
                url: '/home/tracks',
                template: '<tracks></tracks>'         
            })


            $urlRouterProvider.otherwise('/home')
                })