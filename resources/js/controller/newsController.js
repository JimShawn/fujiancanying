var news = angular.module('news', []);

news.controller('NewsController', ['$scope', '$http','$location','$rootScope','$state',function ($scope,$http,$location,$rootScope,$state) {


        $scope.newsDetail = function (argument) {
            $state.go("main.newsDetail");
        }

}]);