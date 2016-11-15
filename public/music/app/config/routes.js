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
                url: '/home/:albumId',
                // url: '/home/tracks',
                template: '<tracks></tracks>'         
            })
              .state({
                name: 'login',
                // url: '/home/:albumId',
                url: '/login',
                template: '<login></login>'         
            })


            $urlRouterProvider.otherwise('/home')
                })