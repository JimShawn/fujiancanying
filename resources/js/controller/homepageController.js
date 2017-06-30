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
    };
    $scope.videoList = [{
            name:'淡糟香螺片',
            time:'2017/06/29 13:33:54',
            icon:'./resources/img/jiaoxue/02.jpg',
            url:'./resources/video/92sucai.mp4'
        },{
            name:'爆炒双脆',
            time:'2017/06/29 17:33:25',
            icon:'./resources/img/jiaoxue/03.jpg',
            url:'./resources/video/92sucai.mp4'
        },{
            name:'注油鳗鱼',
            time:'2017/06/10 17:32:12',
            icon:'./resources/img/jiaoxue/04.jpg',
            url:'./resources/video/92sucai.mp4'
        },{
            name:'全节黄瓜鱼',
            time:'2017/06/11 14:44:21',
            icon:'./resources/img/jiaoxue/05.jpg',
            url:'./resources/video/92sucai.mp4'
        }];
    $scope.gotoDetail = function (item) {
        $state.go('main.videoplay',{item:item});
    };
});