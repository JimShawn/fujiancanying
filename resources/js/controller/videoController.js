var video = angular.module('video', []);

video.controller('VideoController', ['$scope', '$http','$location','$rootScope','$state','videos','commonUtil','httpService',function ($scope,$http,$location,$rootScope,$state,videos,commonUtil,httpService) {
    $scope.videos = videos;
    $scope.commonUtil = commonUtil;
    $scope.gotoDetail = function (item) {
        $state.go('main.videoplay',{id:item.id});
    };
    $scope.query = {
        page: 0,
        size: 12
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
        httpService.getTutorialList(queryObj).then(function(res) {
            console.log(res);
            $scope.data = res.data;
        }, function(err) {
            console.log(err);
        });
    };
    getList($scope.query);


}]);
video.controller('VideoPlayController', ['$scope', '$http','$location','$rootScope','$state','$stateParams','httpService',function ($scope,$http,$location,$rootScope,$state,$stateParams,httpService) {
    $scope.id = $stateParams.id;
    if ($scope.id) {
        httpService.getTutorialById($scope.id).then(function (res) {
            $scope.tutorial = res.data;
        },function (err) {
            console.log(err);
        });
    }


}]);


video.controller('manageTutorialController', function($scope, $http, $location, $rootScope, $state, httpService) {
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
        httpService.HttpGet('tutorial',queryObj).then(function(res) {
            console.log(res);
            $scope.data = res.data;
        }, function(err) {
            console.log(err);
        });
    };
    $scope.changeStatus = function() {
        if ($scope.selectedStatus.status == 1) {
            $scope.query.isPublic = false;
        } else if ($scope.selectedStatus.status == 0) {
            $scope.query.isPublic = true;
        }
        getList($scope.query);
    }
    getList($scope.query);

    $scope.goToCreate = function(argument) {
        $state.go("manage.tutorialCreate", { item: null });
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.tutorialCreate", { item: item });
    };
    $scope.operate = function(item) {
        httpService.HttpDelete('tutorial/'+item.id, { is_public: !item.is_public }).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    }
});



video.controller('createTutorialController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', '$stateParams', '$window', 'FileUploader','commonProperty', function($scope, $http, $location, $rootScope, $state, httpService, $stateParams, $window, FileUploader,commonProperty) {
    
    var imageUploader = $scope.imageUploader = new FileUploader({
        url: commonProperty.serverHost + "upload/10?access_token=" + $window.sessionStorage["access_token"],
        queueLimit: 1, //文件个数
    });

    imageUploader.onAfterAddingFile = function(fileItem) {
        imageUploader.uploadAll();
    };

    imageUploader.onSuccessItem = function(fileItem, response, status, headers) {
        imageUploader.clearQueue();
        console.log(response);
        $scope.image = response.link;

    };

    imageUploader.onErrorItem = function(fileItem, response, status, headers) {};
    imageUploader.onCompleteAll = function() {};

	var imageUploader1 = $scope.imageUploader1 = new FileUploader({
        url: commonProperty.serverHost + "upload/10?access_token=" + $window.sessionStorage["access_token"],
        queueLimit: 1, //文件个数
    });

    imageUploader1.onAfterAddingFile = function(fileItem) {
        imageUploader1.uploadAll();
        $scope.isLoading = true;
        
    };

    imageUploader1.onSuccessItem = function(fileItem, response, status, headers) {
        imageUploader1.clearQueue();
        console.log(response);
        $scope.video = response.link;

    };

    imageUploader1.onErrorItem = function(fileItem, response, status, headers) {};
    imageUploader1.onCompleteAll = function() {
    	// swal.close();
        $scope.isLoading = false;
    };
    imageUploader1.onProgressItem  = function(item, progress){
    	// swal({  title:'',
     //            text: "已上传"+progress+"%",
     //            type: "info",
     //            showConfirmButton: false
     //        });
     $scope.tips = "已上传"+progress+"%";
    	console.log(progress);
    }

    var selectedItem = $stateParams.item;
    if (selectedItem) {
            $scope.video = selectedItem.video;
            $scope.title = selectedItem.title;
            $scope.image = selectedItem.image;
        };
    $scope.save = function(argument) {
        var newsObj = {
            "video":$scope.video,
            "image": $scope.image,
            "title": $scope.title
        };
        if (selectedItem) {
            httpService.HttpPut('tutorial/'+selectedItem.id, newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.tutorial');
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.HttpPost('tutorial',newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.tutorial');
            }, function(err) {
                console.log(err);
            })
        }

    };
    $scope.cancel = function(argument) {
        $state.go('manage.tutorial');
    }



        // Do something here.

        



}]);