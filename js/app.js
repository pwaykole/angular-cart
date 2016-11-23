var cartApp = angular.module('cartApp', ['ui.router','underscore','ngCart']);

cartApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            resolve:{
                products:['getProduct', function(getProduct){

                    return getProduct.getProducts();
                }]
            },
            templateUrl: 'pages/home.html',
            controller: 'prodDisplayController'
        })
         .state('cart', {
            url: '/cart',
            resolve:{
                products:['getProduct', function(getProduct){

                    return getProduct.getProducts();
                }]
            },
            templateUrl: 'pages/cart.html',
            controller: 'prodDisplayController'
        });

});