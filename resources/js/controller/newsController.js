var news = angular.module('news', []);


news.controller('NewsController', function ($scope,$http,$location,$rootScope,$state,commonUtil,httpService) {
	$scope.commonUtil = commonUtil;
	$scope.query = {
		page:0,
		size:10,
		articleType:0,
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
});
news.controller('manageNewsController', function ($scope,$http,$location,$rootScope,$state,httpService) {
	$scope.query = {
		page:0,
		size:10
	};
	$scope.newsStatuses = [
		{
			name:'全部',
			status:-1
		},
		{
			name:'已发布',
			status:0
		},
		{
			name:'未发布',
			status:1
		}
	];
	$scope.selectedStatus = $scope.newsStatuses[0];
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
		httpService.HttpGet('news',$scope.query).then(function (res) {
		console.log(res);
		$scope.data = res.data;
	},function (err) {
		console.log(err);
	});
	};
	$scope.changeStatus = function () {
		$scope.query.is_published = $scope.selectedStatus.status;
		getList($scope.query);
	}
	getList($scope.query);
	
    $scope.goToCreate = function(argument) {
        $state.go("manage.createNews",{item:null});
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.createNews",{item:item});
    };
    $scope.delete = function(item){
    	httpService.HttpDelete('news/'+item.id).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    };
    $scope.operate = function (item) {
    	httpService.HttpPatch('news/'+item.id,{is_published:!item.is_published}).then(function (res) {
    		console.log(res);
    		getList($scope.query);
    	},function (err) {
    		console.log(err);
    	})
    }
    });

news.controller('NewsDetailController', function($scope,$stateParams,httpService,commonUtil) {
	$scope.id = $stateParams.id;
	$scope.commonUtil = commonUtil;
	if ($scope.id) {
		httpService.getNewsById($scope.id).then(function (res) {
			$scope.news = res.data;
		},function (err) {
			console.log(err);
		});
	}
});
