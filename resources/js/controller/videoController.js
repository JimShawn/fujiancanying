var video = angular.module('video', []);
video.constant('videos', [
		{
			name:'佛跳墙',
			time:'2017/06/29 16:35:28',
			icon:'./resources/img/jiaoxue/33.jpg',
			url:'./resources/video/33佛跳墙.mp4'
		},{
			name:'南煎猪肝',
			time:'2017/06/29 15:12:46',
			icon:'./resources/img/jiaoxue/01.jpg',
			url:'./resources/video/01南煎猪肝.mp4'
		},{
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
		},{
			name:'荔枝肉',
			time:'2017/06/12 08:12:26',
			icon:'./resources/img/jiaoxue/06.jpg',
			url:'./resources/video/06荔枝肉.mp4'
		},{
			name:'蟹肉捣粉',
			time:'2017/06/12 15:12:34',
			icon:'./resources/img/jiaoxue/07.jpg',
			url:'./resources/video/07蟹肉捣粉.mp4'
		},{
			name:'鲟肉鸳鸯菜',
			time:'2017/06/18 12:43:09',
			icon:'./resources/img/jiaoxue/08.jpg',
			url:'./resources/video/08鲟肉鸳鸯菜.mp4'
		},{
			name:'瓜烧白菜',
			time:'2017/06/22 09:11:23',
			icon:'./resources/img/jiaoxue/09.jpg',
			url:'./resources/video/09瓜烧白菜.mp4'
		},{
			name:'软熘珠帘鱼',
			time:'2017/06/22 17:22:38',
			icon:'./resources/img/jiaoxue/10.jpg',
			url:'./resources/video/10软熘珠帘鱼.mp4'
		},{
			name:'红糟羊肉',
			time:'2017/06/23 10:33:55',
			icon:'./resources/img/jiaoxue/11.jpg',
			url:'./resources/video/11红糟羊肉.mp4'
		}
	]);
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
        httpService.getTutorialList(queryObj).then(function(res) {
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
        httpService.tutorialOperate(item.id, { is_public: !item.is_public }).then(function(res) {
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
        
    };

    imageUploader1.onSuccessItem = function(fileItem, response, status, headers) {
        imageUploader1.clearQueue();
        console.log(response);
        $scope.video = response.link;

    };

    imageUploader1.onErrorItem = function(fileItem, response, status, headers) {};
    imageUploader1.onCompleteAll = function() {
    	swal.close();
    };
    imageUploader1.onProgressItem  = function(item, progress){
    	swal({  title:'',
                text: "已上传"+progress+"%",
                type: "info",
                showConfirmButton: false
            });
    	console.log(progress);
    }

    var selectedItem = $stateParams.item;
    if (selectedItem) {
            $scope.video = selectedItem.video;
            $scope.newsTitle = selectedItem.title;
            $scope.image = selectedItem.image;
        };
    $scope.save = function(argument) {
        var newsObj = {
            "video":$scope.video,
            "image": $scope.image,
            "title": $scope.newsTitle
        };
        if (selectedItem) {
            httpService.tutorialUpdate(selectedItem.id, newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.tutorial');
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.tutorialCreate(newsObj).then(function(res) {
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