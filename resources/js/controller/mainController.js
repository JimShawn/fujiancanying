var main = angular.module('main', []);

main.controller('MainController', ['$scope', '$http','$location','$rootScope','$state',function ($scope,$http,$location,$rootScope,$state) {



    $state.go("main.homepage");
    $scope.goToNews = function (argument) {
    	$state.go("main.news");
    };
    $scope.goToChefRestaurant = function (argument) {
    	$state.go("main.chefRestaurant");
    };
    $scope.goToVideo = function (argument) {
    	$state.go("main.video");
    };
    $scope.goToIndustryInfo = function (argument) {
    	$state.go("main.industryInfo");
    };


}]);