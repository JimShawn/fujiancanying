var snack = angular.module('snack', []);


snack.controller('SnackController', function ($scope,$http,$location,$rootScope,$state,snackList,httpService,commonUtil) {
	$scope.snackList = snackList;
	$scope.commonUtil = commonUtil;
	$scope.query = {
		page:0,
		size:10,
		articleType:1,
		isPublic:true
	};
	$scope.changePageSizeFun = function (size) {
        $scope.query.page = $scope.data.number;
        $scope.query.size = size;
        getList($scope.query);
    };

    $scope.gotoPageFun = function (x) {
        $scope.query.page = x;
        $scope.query.size = $scope.data.size;
        getList($scope.query);
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
	$scope.gotoSnackDetail = function (city) {
		title = $(".snack[name='"+city+"'] .title").html();
        $state.go("main.snackDetail", {snackTitle:title});
    };
});

snack.controller('SnackDetailController', function($scope,$stateParams,snackList,commonUtil,httpService) {
	$scope.snackTitle = $stateParams.snackTitle;
	$scope.id = $stateParams.id;
	$scope.commonUtil = commonUtil;
	if ($scope.id) {
		httpService.getNewsById($scope.id).then(function (res) {
			$scope.snack = res.data;
		},function (err) {
			console.log(err);
		});
	}
	for (i in snackList) {
		if (snackList[i].title == $scope.snackTitle) {
			$scope.snack = snackList[i];
			break;
		}
	} 
});

snack.controller('manageRecipesController', function($scope, $http, $location, $rootScope, $state, httpService) {
    
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
        httpService.HttpGet('recipes',queryObj).then(function(res) {
            console.log(res);
            $scope.data = res.data;
        }, function(err) {
            console.log(err);
        });
    };
    getList($scope.query);

    $scope.goToCreate = function(argument) {
        $state.go("manage.recipesCreate", { item: null });
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.recipesCreate", { item: item });
    };
    
    $scope.operate = function(item) {
        httpService.HttpDelete('recipes/'+item.id).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    }
});



snack.controller('createRecipesController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', '$stateParams', '$window', 'FileUploader','commonProperty', function($scope, $http, $location, $rootScope, $state, httpService, $stateParams, $window, FileUploader,commonProperty) {
   $(function() {
        $('#edit').froalaEditor({
            language: 'zh_cn',
            heightMin: 700,
            width: '800',
            imageUploadURL: 'http://www.fjcy.net/qa/api/upload/6?access_token=' + $window.sessionStorage["access_token"]

        });

    });
    var imageUploader = $scope.imageUploader = new FileUploader({
        url: commonProperty.serverHost + "upload/6?access_token=" + $window.sessionStorage["access_token"],
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
    var selectedItem = $stateParams.item;
    $scope.save = function(argument) {
        var newsObj = 
        {
          "brief": $scope.brief,
          "classification": 1,
          "cuisine": $scope.cuisine,
          "detail": $('#edit').froalaEditor('html.get', true),
          "district": $scope.cuisine,
          "image": $scope.image,
          "name": $scope.name,
          "restaurantId": 0,
          "restaurantName": $scope.restaurantName,
          "thumbnails": $scope.image
        };
        if (selectedItem) {
            httpService.HttpPut('recipes/'+selectedItem.id, newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.recipes');
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.HttpPost('recipes',newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.recipes');
            }, function(err) {
                console.log(err);
            })
        }

    };
    $scope.cancel = function(argument) {
        $state.go('manage.recipes');
    }
    $scope.cuisine = 1;
            $scope.district = 1;

    $('#edit').on('froalaEditor.initialized', function(e, editor) {

        // Do something here.

        if (selectedItem) {

            $scope.brief = selectedItem.brief;
            $scope.cuisine = selectedItem.cuisine;
            $scope.district = selectedItem.district;
            $scope.image = selectedItem.image;
            $scope.name = selectedItem.name;
            $scope.restaurantName =  selectedItem.restaurantName
            $scope.$apply();
            
            $('#edit').froalaEditor('html.set', selectedItem.detail);

        }else{
            $scope.cuisine = 1;
            $scope.district = 1;
            $scope.$apply();
        }
    });



}]);