// CONTROLLER
cartApp.controller('prodDisplayController', ['$scope','_', 'getProduct','products','ngCart', function($scope, _, getProduct, products, ngCart) {
   //products filtered from array of products whose isVisible property is true
   $scope.displayProd = _.where(products.data, {isVisible: true});
   //set tax and shipping rate
    ngCart.setTaxRate(7.5);
    ngCart.setShipping(2.99);
}]);