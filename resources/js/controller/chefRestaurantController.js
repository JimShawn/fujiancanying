var chef = angular.module('chef', []);


chef.controller('ChefRestaurantController', function ($scope,$http,$location,$rootScope,$state,restaurantList,chefList) {
	$scope.restaurantList = restaurantList;
	$scope.chefList = chefList;
});

chef.controller('RestaurantDetailController', function($scope,$stateParams) {
	$scope.restaurant = $stateParams.restaurant;
});

chef.controller('ChefDetailController', function($scope,$stateParams) {
	$scope.chef = $stateParams.chef;
});



chef.controller('manageFamousStoreController', function($scope, $http, $location, $rootScope, $state, httpService) {
   
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
        httpService.HttpGet('chef',queryObj).then(function(res) {
            console.log(res);
            $scope.data = res.data;
        }, function(err) {
            console.log(err);
        });
    };
    getList($scope.query);

    $scope.goToCreate = function(argument) {
        $state.go("manage.famousStoreCreate", { item: null });
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.famousStoreCreate", { item: item });
    };
    
    $scope.operate = function(item) {
        httpService.HttpDelete('chef/'+item.id).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    }
});



chef.controller('createFamousStoreController', ['$scope', '$http', '$location', 
	'$rootScope', '$state', 'httpService', '$stateParams', '$window', 'FileUploader',
	'commonProperty', function($scope, $http, $location, $rootScope, $state, httpService, 
		$stateParams, $window, FileUploader,commonProperty) {
    $(function() {
        $('#edit').froalaEditor({
            language: 'zh_cn',
            heightMin: 700,
            width: '800',
            imageUploadURL: 'http://www.fjcy.net/qa/api/upload/8?access_token=' + $window.sessionStorage["access_token"]

        });
    });
    var imageUploader = $scope.imageUploader = new FileUploader({
        url: commonProperty.serverHost + "upload/8?access_token=" + $window.sessionStorage["access_token"],
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
        
		var cuisineInt = 0;
		if ($scope.min) {cuisineInt+=1};
		if ($scope.hui) {cuisineInt+=2};
		if ($scope.yue) {cuisineInt+=2*2};
		if ($scope.xiang) {cuisineInt+=2*2*2};
		if ($scope.chuan) {cuisineInt+=2*2*2*2};
		if ($scope.lu) {cuisineInt+=2*2*2*2*2};
		if ($scope.su) {cuisineInt+=2*2*2*2*2*2};
		if ($scope.zhe) {cuisineInt+=2*2*2*2*2*2*2};
		var otherServiceInt = 0;
		if ($scope.car) {cuisineInt+=1};
		if ($scope.room) {cuisineInt+=2};
		if ($scope.takeout) {cuisineInt+=2*2};
		if ($scope.supper) {cuisineInt+=2*2*2};
		if ($scope.credit) {cuisineInt+=2*2*2*2};
		if ($scope.wlan) {cuisineInt+=2*2*2*2*2};
        var newsObj = {
		  "address": $scope.address,
		  "brief": $scope.brief,
		  "consumption": $scope.consumption,
		  "daytimeClose": $scope.startOur*3600+$scope.startMin*60,
		  "daytimeOpen": $scope.endOur*3600+$scope.endMin*60,
		  "detail": $('#edit').froalaEditor('html.get', true),
		  "environment": $scope.environment,
		  "features": $scope.features,
		  "flagCuisine": cuisineInt,
		  "flagService": otherServiceInt,
		  "name": $scope.name,
		  "tel": $scope.tel,
		  "transport": $scope.transport,
		  "type": $scope.type,
		  "image":$scope.image
		};
        if (selectedItem) {
            httpService.HttpPut('restaurant/'+selectedItem.id, newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.famousStroe');
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.HttpPost('restaurant',newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.famousStroe');
            }, function(err) {
                console.log(err);
            })
        }

    };
    $scope.cancel = function(argument) {
        $state.go('manage.famousStroe');
    }


    $('#edit').on('froalaEditor.initialized', function(e, editor) {

        // Do something here.

        if (selectedItem) {
            $scope.address = selectedItem.address;
            $scope.brief = selectedItem.brief;
            $scope.consumption = selectedItem.consumption;
            $scope.name = selectedItem.name;
            $scope.environment =  selectedItem.environment;
            $scope.features = selectedItem.features;
            $scope.consumption = selectedItem.consumption;
            $scope.tel = selectedItem.tel;
            $scope.transport =  selectedItem.transport;
            $scope.type =  selectedItem.type;
            $scope.image =  selectedItem.image;
            $scope.startOur = Math.floor(selectedItem.daytimeOpen/3600);
            $scope.startMin = (selectedItem.daytimeOpen%3600)/60;
            $scope.endOur = Math.floor(selectedItem.daytimeClose/3600);
            $scope.endMin = (selectedItem.daytimeClose%3600)/60;
            var cuisineStr = selectedItem.flagCuisine.toString(2);
            var otherServiceStr = selectedItem.flagService.toString(2);
            for(var i in cuisineStr){
            	switch (i){
            		case 0:
            		$scope.min = cuisineStr[i]==1;
            		break;
            		case 1:
            		$scope.hui = cuisineStr[i]==1;
            		break;
            		case 2:
            		$scope.yue = cuisineStr[i]==1;
            		break;
            		case 3:
            		$scope.xiang = cuisineStr[i]==1;
            		break;
            		case 4:
            		$scope.chuan = cuisineStr[i]==1;
            		break;
            		case 5:
            		$scope.lu = cuisineStr[i]==1;
            		break;
            		case 6:
            		$scope.su = cuisineStr[i]==1;
            		break;
            		case 7:
            		$scope.zhe = cuisineStr[i]==1;
            		break;
            	}
            };
            for(var i in otherServiceStr){
            	switch (i){
            		case 0:
            		$scope.car = otherServiceStr[i]==1;
            		break;
            		case 1:
            		$scope.room = otherServiceStr[i]==1;
            		break;
            		case 2:
            		$scope.takeout = otherServiceStr[i]==1;
            		break;
            		case 3:
            		$scope.supper = otherServiceStr[i]==1;
            		break;
            		case 4:
            		$scope.credit = otherServiceStr[i]==1;
            		break;
            		case 5:
            		$scope.wlan = otherServiceStr[i]==1;
            		break;
            	}
            };
            $scope.$apply();
            
            $('#edit').froalaEditor('html.set', selectedItem.detail);

        }
    });



}]);

chef.controller('manageFamousChiefController', function($scope, $http, $location, $rootScope, $state, httpService) {
   
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
        httpService.HttpGet('chef',queryObj).then(function(res) {
            console.log(res);
            $scope.data = res.data;
        }, function(err) {
            console.log(err);
        });
    };
    getList($scope.query);

    $scope.goToCreate = function(argument) {
        $state.go("manage.famousChiefCreate", { item: null });
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.famousChiefCreate", { item: item });
    };
    
    $scope.operate = function(item) {
        httpService.HttpDelete('chef/'+item.id).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    }
});



chef.controller('createFamousChiefController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', '$stateParams', '$window', 'FileUploader','commonProperty', function($scope, $http, $location, $rootScope, $state, httpService, $stateParams, $window, FileUploader,commonProperty) {
    $(function() {
        $('#edit').froalaEditor({
            language: 'zh_cn',
            heightMin: 700,
            width: '800',
            imageUploadURL: 'http://www.fjcy.net/qa/api/upload/7?access_token=' + $window.sessionStorage["access_token"]

        });

    });
    var imageUploader = $scope.imageUploader = new FileUploader({
        url: commonProperty.serverHost + "upload/7?access_token=" + $window.sessionStorage["access_token"],
        queueLimit: 1, //文件个数
    });

    imageUploader.onAfterAddingFile = function(fileItem) {
        imageUploader.uploadAll();
    };

    imageUploader.onSuccessItem = function(fileItem, response, status, headers) {
        imageUploader.clearQueue();
        console.log(response);
        $scope.avatar = response.link;

    };

    imageUploader.onErrorItem = function(fileItem, response, status, headers) {};
    imageUploader.onCompleteAll = function() {};
    var selectedItem = $stateParams.item;
    $scope.save = function(argument) {
        console.log($('#edit').froalaEditor('html.get', true));
        var newsObj = 
        {
		  "avatar": $scope.avatar,
		  "brief": $scope.brief,
		  "detail": $('#edit').froalaEditor('html.get', true),
		  "experience": $scope.experience,
		  "name": $scope.name,
		  "restaurantId": 0,
		  "restaurantName": $scope.restaurantName
		};
        if (selectedItem) {
            httpService.HttpPut('chef/'+selectedItem.id, newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.famousChief');
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.HttpPost('chef',newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.famousChief');
            }, function(err) {
                console.log(err);
            })
        }

    };
    $scope.cancel = function(argument) {
        $state.go('manage.famousChief');
    }


    $('#edit').on('froalaEditor.initialized', function(e, editor) {

        // Do something here.

        if (selectedItem) {
            $scope.brief = selectedItem.brief;
            $scope.experience = selectedItem.experience;
            $scope.bannerurl = selectedItem.avatar;
            $scope.name = selectedItem.name;
            $scope.restaurantName =  selectedItem.restaurantName
            $scope.$apply();
            
            $('#edit').froalaEditor('html.set', selectedItem.detail);

        }
    });



}]);




chef.controller('manageFamousSnackController', function($scope, $http, $location, $rootScope, $state, httpService) {
   
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
        $state.go("manage.famousSnackCreate", { item: null });
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.famousSnackCreate", { item: item });
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



chef.controller('createFamousSnackController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', '$stateParams', '$window', 'FileUploader','commonProperty', function($scope, $http, $location, $rootScope, $state, httpService, $stateParams, $window, FileUploader,commonProperty) {
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
        $scope.avatar = response.link;

    };

    imageUploader.onErrorItem = function(fileItem, response, status, headers) {};
    imageUploader.onCompleteAll = function() {};
    var selectedItem = $stateParams.item;
    $scope.save = function(argument) {
        console.log($('#edit').froalaEditor('html.get', true));
        console.log($scope.cuisine);
        return;
        var newsObj = 
        {
          "brief": $scope.brief,
          "classification": 2,
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
                $state.go('manage.famousSnack');
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.HttpPost('recipes',newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.famousSnack');
            }, function(err) {
                console.log(err);
            })
        }

    };
    $scope.cancel = function(argument) {
        $state.go('manage.famousSnack');
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