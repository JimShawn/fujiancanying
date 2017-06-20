var chef = angular.module('chef', []);

chef.controller('ChefRestaurantController', ['$scope', '$http','$location','$rootScope','$state',function ($scope,$http,$location,$rootScope,$state) {


        $scope.restaurantDetail = function (argument) {
            $state.go("main.restaurantDetail");
        };
        $scope.chefDetail = function (argument) {
            $state.go("main.chefDetail");
        };

}]);