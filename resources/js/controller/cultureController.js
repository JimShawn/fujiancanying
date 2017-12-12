var culture = angular.module('culture', []);

culture.controller('CultureController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', function($scope, $http, $location, $rootScope, $state, httpService) {

    $scope.query = {
            page:0,
            size:10,
            articleType:6,
            isPublic:true
        };   
    function getList(queryObj) {
        httpService.getNewsList(queryObj).then(function (res) {
        console.log(res);
        $scope.data = res.data;
    },function (err) {
        console.log(err);
    });
    };
    getList($scope.query);     

    $scope.gotoDetail = function(item) {
        $state.go('main.cultureDetail', { id: item.id });
    };
    $scope.videoObj = {
        name: '闽菜走天下',
        time: '05:49',
        icon: './resources/img/fujian_food_culture.jpg',
        url: './resources/video/闽菜文化.mp4'
    };
    $scope.gotoVideoDetail = function(item) {
        $state.go('main.videoplay', { item: item });
    };


}]);
culture.controller('CultureDetailController', ['$scope', '$http', '$location', '$rootScope', '$state', '$stateParams','httpService', function($scope, $http, $location, $rootScope, $state, $stateParams,httpService) {
    $scope.id = $stateParams.id;
    if ($scope.id) {
        httpService.getNewsById($scope.id).then(function (res) {
            $scope.item = res.data;
        },function (err) {
            console.log(err);
        });
    }    


}]);


culture.controller('manageCultureController', function($scope, $http, $location, $rootScope, $state, httpService) {
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
        httpService.HttpGet('culture',queryObj).then(function(res) {
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
        $state.go("manage.cultureCreate", { item: null });
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.cultureCreate", { item: item });
    };
    $scope.operate = function(item) {
        httpService.HttpDelete('culture/'+item.id).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    }
});



culture.controller('createCultureController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', '$stateParams', '$window', 'FileUploader','commonProperty', function($scope, $http, $location, $rootScope, $state, httpService, $stateParams, $window, FileUploader,commonProperty) {
    $(function() {
        $('#edit').froalaEditor({
            language: 'zh_cn',
            heightMin: 700,
            width: '800',
            imageUploadURL: 'http://www.fjcy.net/api/upload/4?access_token=' + $window.sessionStorage["access_token"]

        });

    });
    var imageUploader = $scope.imageUploader = new FileUploader({
        url: commonProperty.serverHost + "upload/4?access_token=" + $window.sessionStorage["access_token"],
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

    imageUploader.onErrorItem = function(fileItem, response, status, headers) {};
    imageUploader.onCompleteAll = function() {};
    var selectedItem = $stateParams.item;
    $scope.save = function(argument) {
        console.log($('#edit').froalaEditor('html.get', true));
        var newsObj = {
            "brief": $scope.brief,
            "content": $('#edit').froalaEditor('html.get', true),
            "title": $scope.title
        };
        if (selectedItem) {
            httpService.HttpPut('culture/'+selectedItem.id, newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.fujianCuisineCulture');
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.HttpPost('culture',newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.fujianCuisineCulture');
            }, function(err) {
                console.log(err);
            })
        }

    };
    $scope.cancel = function(argument) {
        $state.go('manage.fujianCuisineCulture');
    }


    $('#edit').on('froalaEditor.initialized', function(e, editor) {

        // Do something here.

        if (selectedItem) {
            $scope.brief = selectedItem.brief;
            $scope.title = selectedItem.title;
            $scope.$apply();
            $('#edit').froalaEditor('html.set', selectedItem.content);

        };
    });



}]);