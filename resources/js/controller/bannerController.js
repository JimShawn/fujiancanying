var banner = angular.module('banner', []);


banner.controller('bannerController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', function($scope, $http, $location, $rootScope, $state, httpService) {



    $scope.query = {
        page: 0,
        size: 10
    };
    $scope.newsStatuses = [{
            name: '全部',
            status: -1
        },
        {
            name: '已发布',
            status: 0
        },
        {
            name: '未发布',
            status: 1
        }
    ];
    $scope.selectedStatus = $scope.newsStatuses[0];
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
        httpService.getBannerList(queryObj).then(function(res) {
            console.log(res);
            $scope.data = res.data;
        }, function(err) {
            console.log(err);
        });
    };
    $scope.changeStatus = function () {
        if ($scope.selectedStatus.status==1) {
            $scope.query.isPublic = false;
        }else if ($scope.selectedStatus.status==0) {
            $scope.query.isPublic = true;
        }
        getList($scope.query);
    }    
    getList($scope.query);
    $scope.add = function () {
        
        $state.go('manage.bannerNew',{item:null});
    };
    $scope.edit = function (item) {
        $state.go('manage.bannerNew',{item:item});
    };
    $scope.operate = function(item) {
        httpService.bannerOperate(item.id, { is_public: !item.is_public }).then(function(res) {
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
                    $scope.bannerurl = selectedItem.url;
                    $scope.bannerorder = selectedItem.sequence;
                    $scope.desc = selectedItem.title;
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
                          isPublic: false,
                          sequence: $scope.bannerorder,
                          title: $scope.desc,
                          url: $scope.bannerurl
                        };
                        if(selectedItem){
                            httpService.bannerUpdate(selectedItem.id,newsObj).then(function (res) {
                            console.log(res);
                            $state.go("manage.banner");
                        },function (err) {
                            console.log(err);
                        });
                        }else{
                          httpService.bannerCreate(newsObj).then(function (res) {
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
                $scope.changeStatus = function () {
                    if ($scope.selectedStatus.status==1) {
                        $scope.query.isPublic = false;
                    }else if ($scope.selectedStatus.status==0) {
                        $scope.query.isPublic = true;
                    }
                    getList($scope.query);
                }

            }])