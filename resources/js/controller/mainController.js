var main = angular.module('main', []);

main.filter('htmlContent',['$sce', function($sce) {
  return function(input) {
    return $sce.trustAsHtml(input);
  }
}]);

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
    $scope.goToMap = function (argument) {
        $state.go("main.map");
    };
    $scope.goToHomepage = function (argument) {
        $state.go("main.homepage");
    };
    $scope.goToMenu = function (argument) {
        $state.go("main.caipu");
    };


}]);