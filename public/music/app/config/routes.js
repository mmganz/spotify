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
                url: '/home/:artist/:albumId',
                template: '<tracks></tracks>'         
            })
              .state({
                name: 'login',
                url: '/login',
                template: '<login></login>'         
            })

            .state({
                name: 'artist',
                url: '/home/:artist',
                template: '<artist></artist>'

            })

            .state({
                name: 'mypage',
                url: '/mypage',
                template: '<mypage></mypage>'
            })


            // $urlRouterProvider.otherwise('/home')
                })