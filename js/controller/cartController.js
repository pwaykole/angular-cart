cartApp.controller('myCtrl', ['$scope', 'ngCart', function($scope, ngCart) {
  ngCart.setTaxRate(7.5);
  ngCart.setShipping(2.99);
}]);
