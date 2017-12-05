var banner = angular.module('banner', []);


banner.controller('bannerController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', function($scope, $http, $location, $rootScope, $state, httpService) {



    $scope.query = {
        page: 0,
        size: 10
    };
    $scope.changePageSizeFun = function(size) {
        $scope.query.page = $scope.data.number;
        $scope.query.size = size;
        getList($scope.query);
    };

    $scope.gotoPageFun = function(x) {
        $scope.query.page = x;
        $scope.query.size = $scope.data.size;
        getList($scope.query);
    };

    function getList(queryObj) {
        httpService.HttpGet('banner',queryObj).then(function(res) {
            console.log(res);
            $scope.data = res.data;
        }, function(err) {
            console.log(err);
        });
    };   
    getList($scope.query);
    $scope.add = function () {
        
        $state.go('manage.bannerNew',{item:null});
    };
    $scope.edit = function (item) {
        $state.go('manage.bannerNew',{item:item});
    };
    $scope.operate = function(item) {
        httpService.HttpDelete('banner/'+item.id).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    }



}]);
banner.controller('createBannerController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', '$stateParams','$window','FileUploader','commonProperty',function($scope, $http, $location, $rootScope, $state, httpService,$stateParams,$window,FileUploader,commonProperty) {
                var selectedItem = $stateParams.item;
                if(selectedItem){
                    $scope.url = selectedItem.url;
                    $scope.sequence = selectedItem.sequence;
                    $scope.title = selectedItem.title;
                    $scope.bannerurl = selectedItem.image;
                };
                var imageUploader = $scope.imageUploader = new FileUploader({
                        url: commonProperty.serverHost + "upload/1?access_token=" + $window.sessionStorage["access_token"],
                        queueLimit: 1, //文件个数
                    });

                imageUploader.onAfterAddingFile = function(fileItem) {
                        imageUploader.uploadAll();
                    };

                imageUploader.onSuccessItem = function(fileItem, response, status, headers) {
                    imageUploader.clearQueue(); 
                    console.log(response);
                    $scope.bannerurl = response.link;

                };
                
                imageUploader.onErrorItem = function(fileItem, response, status, headers) {
                };
                imageUploader.onCompleteAll = function () {
                };

                $scope.save = function () {
                    var newsObj = {
                          image: $scope.bannerurl,
                          sequence: $scope.sequence,
                          title: $scope.title,
                          url: $scope.url
                        };
                        if(selectedItem){
                            httpService.HttpPut('banner/'+selectedItem.id,newsObj).then(function (res) {
                            console.log(res);
                            $state.go("manage.banner");
                        },function (err) {
                            console.log(err);
                        });
                        }else{
                          httpService.HttpPost('banner',newsObj).then(function (res) {
                            console.log(res);
                            $state.go("manage.banner");
                        },function (err) {
                            console.log(err);
                        })  
                        }
                        
                };
                $scope.cancel = function (argument) {
                    $state.go("manage.banner");
                };

            }])