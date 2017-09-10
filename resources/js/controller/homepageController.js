var homepage = angular.module('homepage', []);

homepage.controller('HomePageController', function ($scope,$http,$location,$rootScope,$state,snackList,chefList,restaurantList,info,httpService,commonUtil) {
    $scope.snackList = snackList;
    $scope.chefList = chefList;
    $scope.restaurantList = restaurantList;
    $scope.infoList = info;
    $scope.famousChef = true;
    $scope.famousHotel = false;
    $scope.famousSnack = false;
    $scope.commonUtil = commonUtil;
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
    };
    //获取banner数据
    $scope.queryBanner = {
        page: 0,
        size: 3,
        isPublic:true
    };
    httpService.getBannerList($scope.queryBanner).then(function(res) {
            console.log(res);
            $scope.dataBannerContents = res.data.content;
            $scope.banner1 = $scope.dataBannerContents[0].image;
            $scope.banner2 = $scope.dataBannerContents[1].image;
        }, function(err) {
            console.log(err);
        });
    //获取名菜数据
    $scope.queryRecipes = {
        page: 0,
        size: 5,
        isPublic:true,
        articleType:1
    };
    httpService.getNewsList($scope.queryRecipes).then(function (res) {
        $scope.dataRecipeContents = res.data.content;
    },function (err) {
        console.log(err);
    });
    //获取新闻列表
    $scope.queryRecipes = {
        page: 0,
        size: 2,
        isPublic:true,
        articleType:0
    };
    httpService.getNewsList($scope.queryRecipes).then(function (res) {
        $scope.dataNewsContents = res.data.content;
    },function (err) {
        console.log(err);
    });
    //获取教学视频list
    $scope.queryTutorial = {
        page: 0,
        size: 4,
        isPublic:true
    };
    httpService.getTutorialList($scope.queryTutorial).then(function(res) {
            console.log(res);
            $scope.dataTutorialContents = res.data.content;
        }, function(err) {
            console.log(err);
        });
    //获取转让list
    $scope.queryTransform = {
        page: 0,
        size: 7,
        isPublic:true,
        articleType:3
    };
    httpService.getNewsList($scope.queryTransform).then(function(res) {
            console.log(res);
            $scope.dataTransformContents = res.data.content;
        }, function(err) {
            console.log(err);
        });
    //获取转让list
    $scope.queryLabor = {
        page: 0,
        size: 7,
        isPublic:true,
        articleType:4
    };
    httpService.getNewsList($scope.queryLabor).then(function(res) {
            console.log(res);
            $scope.dataLaborContents = res.data.content;
        }, function(err) {
            console.log(err);
        });
    //获取转让list
    $scope.queryFood = {
        page: 0,
        size: 7,
        isPublic:true,
        articleType:5
    };
    httpService.getNewsList($scope.queryFood).then(function(res) {
            console.log(res);
            $scope.dataFoodContents = res.data.content;
        }, function(err) {
            console.log(err);
        });
    $scope.goNewsDetail = function (id) {
        $state.go("main.newsDetail",{id:id});
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
            url:'./resources/video/02淡糟香螺片.mp4'
        },{
            name:'爆炒双脆',
            time:'2017/06/29 17:33:25',
            icon:'./resources/img/jiaoxue/03.jpg',
            url:'./resources/video/03爆炒双脆.mp4'
        },{
            name:'注油鳗鱼',
            time:'2017/06/10 17:32:12',
            icon:'./resources/img/jiaoxue/04.jpg',
            url:'./resources/video/04注油鳗鱼.mp4'
        },{
            name:'全节黄瓜鱼',
            time:'2017/06/11 14:44:21',
            icon:'./resources/img/jiaoxue/05.jpg',
            url:'./resources/video/05全节黄瓜鱼.mp4'
        }];
    $scope.gotoDetail = function (id) {
        $state.go('main.videoplay',{id:id});
    };
});