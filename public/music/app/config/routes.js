angular.module('spotify')
    .config(function($stateProvider, $sceProvider, $urlRouterProvider) {

        $sceProvider.enabled(false);

            $stateProvider
            .state({
                name: 'home',
                url: '/home',
                template: '<home></home>' 
            })

            .state({
                name: 'tracks',
                url: '/home/:artistId/:albumId',
                template: '<tracks></tracks>'         
            })
              .state({
                name: 'login',
                url: '/login',
                template: '<login></login>'         
            })

            .state({
                name: 'artist',
                url: '/home/:artistId',
                template: '<artist></artist>'

            })


            // $urlRouterProvider.otherwise('/home')
                })