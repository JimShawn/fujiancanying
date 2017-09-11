var industryinfo = angular.module('industryinfo', []);

industryinfo.controller('IndustryinfoController', ['$scope', '$http','$location','$rootScope','$state','commonUtil','httpService','$stateParams',function ($scope,$http,$location,$rootScope,$state,commonUtil,httpService,$stateParams) {
    $scope.type = $stateParams.type;
    $scope.commonUtil = commonUtil;
    $scope.industryTypeArrays = [{
            name: '餐饮转让',
            type: 3
        },
        {
            name: '劳务信息',
            type: 4
        },
        {
            name: '食材对接',
            type: 5
        }
    ];
    $scope.selectedIndustryType = $scope.industryTypeArrays[0];
    for (var i = 0; i < $scope.industryTypeArrays.length; i++) {
        if ($scope.industryTypeArrays[i].type == $scope.type) {
            $scope.selectedIndustryType = $scope.industryTypeArrays[i];
        }
    }
    $scope.query = {
            page: 0,
            size: 10,
            articleType: $scope.selectedIndustryType.type
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
        httpService.getNewsList(queryObj).then(function(res) {
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
    $scope.changeType = function (type) {
        $scope.selectedIndustryType = type;
        $scope.query.articleType = type.type;
        getList($scope.query);
    }
    getList($scope.query);      
    $scope.transferDetail = function (item) {
        $state.go('main.transformInfo',{item:item});
    };
    $scope.labourDetail = function (item) {
        $state.go('main.labourInfo',{item:item});
    };
    $scope.foodDetail = function (item) {
        $state.go('main.foodInfo',{item:item});
    }


}]);
industryinfo.controller('TransforminfoController', ['$scope', '$http','$location','$rootScope','$state','$stateParams','commonUtil','httpService',function ($scope,$http,$location,$rootScope,$state,$stateParams,commonUtil,httpService) {
    $scope.commonUtil = commonUtil;
    $scope.id = $stateParams.id;
    if ($scope.id) {
        httpService.getNewsById($scope.id).then(function (res) {
            $scope.item = res.data;
        },function (err) {
            console.log(err);
        });
    }


}]);
industryinfo.controller('LabourinfoController', ['$scope', '$http','$location','$rootScope','$state','$stateParams','commonUtil','httpService',function ($scope,$http,$location,$rootScope,$state,$stateParams,commonUtil,httpService) {
    $scope.commonUtil = commonUtil;
    $scope.id = $stateParams.id;
    if ($scope.id) {
        httpService.getNewsById($scope.id).then(function (res) {
            $scope.item = res.data;
        },function (err) {
            console.log(err);
        });
    }


}]);
industryinfo.controller('FoodinfoController', ['$scope', '$http','$location','$rootScope','$state','$stateParams','commonUtil','httpService',function ($scope,$http,$location,$rootScope,$state,$stateParams,commonUtil,httpService) {
    $scope.commonUtil = commonUtil;
    $scope.id = $stateParams.id;
    if ($scope.id) {
        httpService.getNewsById($scope.id).then(function (res) {
            $scope.item = res.data;
        },function (err) {
            console.log(err);
        });
    }


}]);
industryinfo.controller('manageIndustryController', function($scope, $http, $location, $rootScope, $state, httpService) {
    
    $scope.industryTypeArrays = [{
            name: '餐饮转让',
            type: 3
        },
        {
            name: '劳务信息',
            type: 4
        },
        {
            name: '食材对接',
            type: 5
        }
    ];
    $scope.selectedIndustryType = $scope.industryTypeArrays[0];
    $scope.query = {
        page: 0,
        size: 10,
        articleType: $scope.selectedIndustryType.type
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
        httpService.getNewsList(queryObj).then(function(res) {
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
    $scope.changeType = function () {
        $scope.query.articleType = $scope.selectedIndustryType.type;
        getList($scope.query);
    }
    getList($scope.query);

    $scope.goToCreate = function(argument) {
        $state.go("manage.industryCreate", { item: null });
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.industryCreate", { item: item });
    };
    $scope.operate = function(item) {
        httpService.newsOperate(item.id, { is_public: !item.is_public }).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    }
});



industryinfo.controller('createIndustryController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', '$stateParams', '$window', 'FileUploader','commonProperty', function($scope, $http, $location, $rootScope, $state, httpService, $stateParams, $window, FileUploader,commonProperty) {
    $(function() {
        $('#edit').froalaEditor({
            language: 'zh_cn',
            heightMin: 700,
            width: '1000',
            imageUploadURL: 'http://www.fjcy.net/api/upload/3?access_token=' + $window.sessionStorage["access_token"]

        });

    });
    $scope.industryTypeArrays = [{
            name: '餐饮转让',
            type: 3
        },
        {
            name: '劳务信息',
            type: 4
        },
        {
            name: '食材对接',
            type: 5
        }
    ];
    var imageUploader = $scope.imageUploader = new FileUploader({
        url: commonProperty.serverHost + "upload/3?access_token=" + $window.sessionStorage["access_token"],
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
            "article_type": $scope.selectedIndustryType.type,
            "content": $('#edit').froalaEditor('html.get', true),
            "description": $scope.brief,
            "introduction": "",
            "thumbnails": $scope.bannerurl,
            "title": $scope.newsTitle
        };
        if (selectedItem) {
            httpService.newsUpdate(selectedItem.id, newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.industry');
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.newsCreate(newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.industry');
            }, function(err) {
                console.log(err);
            })
        }

    };
    $scope.cancel = function(argument) {
        $state.go('manage.industry');
    }


    $('#edit').on('froalaEditor.initialized', function(e, editor) {

        // Do something here.

        if (selectedItem) {
            $scope.brief = selectedItem.description;
            $scope.newsTitle = selectedItem.title;
            $scope.bannerurl = selectedItem.thumbnails;
            for (var i = 0; i < $scope.industryTypeArrays.length; i++) {
                if ($scope.industryTypeArrays[i].type == selectedItem.article_type) {
                    $scope.selectedIndustryType = $scope.industryTypeArrays[i];
                }
            }
            
            $('#edit').froalaEditor('html.set', selectedItem.content);

        }else{
            $scope.selectedIndustryType = $scope.industryTypeArrays[0];
        };
    });



}]);