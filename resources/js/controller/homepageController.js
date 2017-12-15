var homepage = angular.module('homepage', []);

homepage.controller('HomePageController', function ($scope,$http,$location,$rootScope,$state,httpService,commonUtil) {

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
        size: 2
    };
    httpService.HttpGet('banner',$scope.queryBanner).then(function(res) {
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
        classification:1
    };
    httpService.HttpGet('recipes',$scope.queryRecipes).then(function (res) {
        $scope.dataRecipeContents = res.data.content;
    },function (err) {
        console.log(err);
    });
    //获取新闻列表
    $scope.queryNews = {
        page: 0,
        size: 2
    };
    httpService.HttpGet('news',$scope.queryNews).then(function (res) {
        $scope.dataNewsContents = res.data.content;
    },function (err) {
        console.log(err);
    });
    //获取教学视频list
    $scope.queryTutorial = {
        page: 0,
        size: 4
    };
    httpService.HttpGet('tutorial',$scope.queryTutorial).then(function(res) {
            console.log(res);
            $scope.dataTutorialContents = res.data.content;
        }, function(err) {
            console.log(err);
        });
    //获取转让list
    $scope.queryTransform = {
        page: 0,
        size: 7
    };
    httpService.HttpGet('transfer',$scope.queryTransform).then(function(res) {
            console.log(res);
            $scope.dataTransformContents = res.data.content;
        }, function(err) {
            console.log(err);
        });
    //获取转让list
    $scope.queryLabor = {
        page: 0,
        size: 7
    };
    httpService.HttpGet('labor',$scope.queryLabor).then(function(res) {
            console.log(res);
            $scope.dataLaborContents = res.data.content;
        }, function(err) {
            console.log(err);
        });
    //获取转让list
    $scope.queryFood = {
        page: 0,
        size: 7
    };
    httpService.HttpGet('ingredientsCompany',$scope.queryFood).then(function(res) {
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
    $scope.gotoDetail = function (id) {
        $state.go('main.videoplay',{id:id});
    };
});