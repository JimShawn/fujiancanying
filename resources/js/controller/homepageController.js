var homepage = angular.module('homepage', []);

homepage.controller('HomePageController', function ($scope,$http,$location,$rootScope,$state,snackList) {
    $scope.snackList = snackList;

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