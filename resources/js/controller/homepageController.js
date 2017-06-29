var homepage = angular.module('homepage', []);

homepage.controller('HomePageController', function ($scope,$http,$location,$rootScope,$state,snackList,newsList,chefList,restaurantList,info) {
    $scope.snackList = snackList;
    $scope.newsList = newsList;
    $scope.chefList = chefList;
    $scope.restaurantList = restaurantList;
    $scope.infoList = info;
    $scope.famousChef = true;
    $scope.famousHotel = false;
    $scope.famousSnack = false;
    $scope.changeTab = function (type) {
        switch(type){
            case 1:
                $scope.famousChef = true;
                $scope.famousHotel = false;
                $scope.famousSnack = false;
                break;
            case 2:
                $scope.famousChef = false;
                $scope.famousHotel = true;
                $scope.famousSnack = false;
                break;
            case 3:
                $scope.famousChef = false;
                $scope.famousHotel = false;
                $scope.famousSnack = true;
                break;
        }
    }
    $scope.gotoFamous = function() {
        if ($scope.famousHotel || $scope.famousChef) {
            $state.go("main.chefRestaurant");
        }
        if ($scope.famousSnack) {
            $state.go("main.map");   
        }
    }
});