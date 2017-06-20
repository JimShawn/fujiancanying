var authors = angular.module('main', []);

authors.controller('MainController', ['$scope', '$http','$location','$rootScope','$state',function ($scope,$http,$location,$rootScope,$state) {



    $scope.manManagement = function () {//切换到人员管理页面
        console.log("manManagement");
        $state.go("main.manmanagement");
    };


}]);