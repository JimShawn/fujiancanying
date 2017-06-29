var homepage = angular.module('homepage', []);

homepage.controller('HomePageController', function ($scope,$http,$location,$rootScope,$state,snackList,newsList) {
    $scope.snackList = snackList;
    $scope.newsList = newsList;
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
    

    $scope.manManagement = function () {//切换到人员管理页面
        console.log("manManagement");
        $state.go("main.manmanagement");
    };
    $scope.productManagement =function () {
        $state.go("main.productmanagement");
    };
    $scope.subProductManagement =function () {
        $state.go("main.subproductmanagement");
    };
    $scope.positionManagement =function () {
        $state.go("main.positionmanagement");
    };
    $scope.deptManagement = function () {
        $state.go("main.deptmanagement");
    };
    $scope.LoanPreliminary = function () {
        $state.go("main.loanpreliminary");
    };
    $scope.setPricing = function () {
        $state.go("main.carpricinglist");
    };
    $scope.loanRecheck = function () {
        $state.go("main.loanrecheck");
    };
    $scope.signManagement = function () {
        $state.go("main.signmanagement");
    };
    $scope.giveupList = function () {
        $state.go("main.giveuplist");
    };


});