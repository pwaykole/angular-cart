// SERVICE
cartApp.service('getProduct', [ '$http', function($http) {

    //get all products from product.json
    this.getProducts = function() {
        return $http.get('../../product.json');
    };

}]);