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
            isPublic:true,
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
    $scope.goToInfo = function (id) {
        if($scope.selectedIndustryType.type == 3){
            $state.go('main.transformInfo',{id:id});
        }else if ($scope.selectedIndustryType.type == 4) {
            $state.go('main.labourInfo',{id:id});
        }else if ($scope.selectedIndustryType.type == 5) {
            $state.go('main.foodInfo',{id:id});
        }
        
    };
    


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
industryinfo.controller('manageTransferController', function($scope, $http, $location, $rootScope, $state, httpService) {
    
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
        httpService.HttpGet('transfer',queryObj).then(function(res) {
            console.log(res);
            $scope.data = res.data;
        }, function(err) {
            console.log(err);
        });
    };
    getList($scope.query);

    $scope.goToCreate = function(argument) {
        $state.go("manage.transferCreate", { item: null });
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.transferCreate", { item: item });
    };
    $scope.operate = function(item) {
        httpService.HttpDelete('transfer/'+item.id).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    }
});



industryinfo.controller('createTransferController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', '$stateParams', '$window', 'FileUploader','commonProperty', function($scope, $http, $location, $rootScope, $state, httpService, $stateParams, $window, FileUploader,commonProperty) {
    
    
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
        $scope.images = response.link;

    };

    imageUploader.onErrorItem = function(fileItem, response, status, headers) {};
    imageUploader.onCompleteAll = function() {};
    var selectedItem = $stateParams.item;
    if (selectedItem) {
                $scope.address = selectedItem.address;
                $scope.area = selectedItem.area;
                $scope.business = selectedItem.business;
                $scope.contact_mobile = selectedItem.contact_mobile;
                $scope.contact_name = selectedItem.contact_name;
                $scope.district = selectedItem.district;                
                $scope.images = selectedItem.images;
                $scope.price = selectedItem.price;
                $scope.rent = selectedItem.rent;                
                $scope.restaurant_name = selectedItem.restaurant_name;
                $scope.title = selectedItem.title;
                $scope.type = selectedItem.type;     
            }           
    $scope.save = function(argument) {
        var newsObj = {
                          "address": $scope.address,
                          "area": $scope.area,
                          "business": $scope.business,
                          "contact_mobile": $scope.contact_mobile,
                          "contact_name": $scope.contact_name,
                          "district": $scope.district,
                          "images": $scope.images,
                          "price": $scope.price,
                          "rent": $scope.rent,
                          "restaurant_id": 0,
                          "restaurant_name": $scope.restaurant_name,
                          "title": $scope.title,
                          "type": $scope.type
                        };
        if (selectedItem) {
            httpService.HttpPut('transfer/'+selectedItem.id, newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.transfer');
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.HttpPost('transfer',newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.transfer');
            }, function(err) {
                console.log(err);
            })
        }

    };
    $scope.cancel = function(argument) {
        $state.go('manage.transfer');
    }





}]);


industryinfo.controller('manageLabourController', function($scope, $http, $location, $rootScope, $state, httpService) {
    
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
        httpService.HttpGet('labor',queryObj).then(function(res) {
            console.log(res);
            $scope.data = res.data;
        }, function(err) {
            console.log(err);
        });
    };
    getList($scope.query);

    $scope.goToCreate = function(argument) {
        $state.go("manage.labourCreate", { item: null });
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.labourCreate", { item: item });
    };
    $scope.operate = function(item) {
        httpService.HttpDelete('labor/'+item.id).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    }
});



industryinfo.controller('createLabourController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', '$stateParams', '$window', 'FileUploader','commonProperty', function($scope, $http, $location, $rootScope, $state, httpService, $stateParams, $window, FileUploader,commonProperty) {
    
    

    var selectedItem = $stateParams.item;
    if (selectedItem) {
                $scope.contact = selectedItem.contact;
                $scope.contact_mobile = selectedItem.contact_mobile;
                $scope.description = selectedItem.description;
                $scope.recruitment_method = selectedItem.recruitment_method;
                $scope.remuneration = selectedItem.remuneration;
                $scope.requirements = selectedItem.requirements;                
                $scope.responsibilities = selectedItem.responsibilities;
                $scope.restaurant_name = selectedItem.restaurant_name;
                $scope.title = selectedItem.title;                
                $scope.work_address = selectedItem.work_address;  
            }           
    $scope.save = function(argument) {
        var newsObj = {
                          "contact": $scope.contact,
                          "contact_mobile": $scope.contact_mobile,
                          "description": $scope.description,
                          "recruitment_method": $scope.recruitment_method,
                          "remuneration": $scope.remuneration,
                          "requirements": $scope.requirements,
                          "responsibilities": $scope.responsibilities,
                          "restaurant_name": $scope.restaurant_name,
                          "restaurant_id": 0,
                          "title": $scope.title,
                          "work_address": $scope.work_address
                        };
                        
        if (selectedItem) {
            httpService.HttpPut('labor/'+selectedItem.id, newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.labour');
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.HttpPost('labor',newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.labour');
            }, function(err) {
                console.log(err);
            })
        }

    };
    $scope.cancel = function(argument) {
        $state.go('manage.labour');
    }





}]);



industryinfo.controller('manageFoodCompanyController', function($scope, $http, $location, $rootScope, $state, httpService) {
    
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
        httpService.HttpGet('ingredientsCompany',queryObj).then(function(res) {
            console.log(res);
            $scope.data = res.data;
        }, function(err) {
            console.log(err);
        });
    };
    getList($scope.query);

    $scope.goToCreate = function(argument) {
        $state.go("manage.foodCompanyCreate", { item: null });
    };
    $scope.goToMyFood = function(item){
        $state.go("manage.myFood", { 
                    'companyId':item.id,
                    'companyName':item.name                
        });
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.myFoodCreate", { 
                'companyId':item.id,
                'companyName':item.name,
                'item': item ,
        });
    };
    $scope.operate = function(item) {
        httpService.HttpDelete('ingredientsCompany/'+item.id).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    }
});



industryinfo.controller('createFoodCompanyController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', '$stateParams', '$window', 'FileUploader','commonProperty', function($scope, $http, $location, $rootScope, $state, httpService, $stateParams, $window, FileUploader,commonProperty) {
    $(function() {
        $('#edit').froalaEditor({
            language: 'zh_cn',
            heightMin: 700,
            width: 700,
            imageUploadURL: 'http://www.fjcy.net/api/upload/3?access_token=' + $window.sessionStorage["access_token"]

        });

    });
    

    var selectedItem = $stateParams.item;
              
    $scope.save = function(argument) {
        var newsObj = {
                      "address": $scope.address,
                      "contact": $scope.contact,
                      "description": $scope.description,
                      "email": $scope.email,
                      "fax": $scope.fax,
                      "intro": $('#edit').froalaEditor('html.get', true),
                      "name": $scope.name,
                      "tel": $scope.tel,
                      "website": $scope.website
                    };
        if (selectedItem) {
            httpService.HttpPut('ingredientsCompany/'+selectedItem.id, newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.foodCompany');
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.HttpPost('ingredientsCompany',newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.foodCompany');
            }, function(err) {
                console.log(err);
            })
        }

    };
    $scope.cancel = function(argument) {
        $state.go('manage.foodCompany');
    }
    $('#edit').on('froalaEditor.initialized', function(e, editor) {

            // Do something here.

            if (selectedItem) {
                $scope.address = selectedItem.address;
                $scope.contact = selectedItem.contact;
                $scope.description = selectedItem.description;
                $scope.email = selectedItem.email;
                $scope.fax = selectedItem.fax;
                $scope.name = selectedItem.name;
                $scope.tel = selectedItem.tel;
                $scope.website = selectedItem.website;
                $scope.$apply();
                $('#edit').froalaEditor('html.set', selectedItem.intro);

            };
        });




}]);



industryinfo.controller('manageMyFoodController', function($scope, $http, $location, $rootScope, $state, httpService,$stateParams) {
    console.log($stateParams.companyId);
    console.log($stateParams.companyName);

    var companyId = $stateParams.companyId;
    var companyName = $stateParams.companyName;
    $scope.query = {
        page: 0,
        size: 10,
        ingredients_company_id:companyId
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
        httpService.HttpGet('ingredients',queryObj).then(function(res) {
            console.log(res);
            $scope.data = res.data;
        }, function(err) {
            console.log(err);
        });
    };
    getList($scope.query);

    $scope.goToCreate = function(argument) {
        $state.go("manage.myFoodCreate", { 
            item:null,
            companyId:companyId,
            companyName:companyName
        });
    };
    $scope.goToEdit = function(item) {
        $state.go("manage.myFoodCreate", { 
            item: item ,
            companyId:companyId,
            companyName:companyName
        });
    };
    $scope.operate = function(item) {
        httpService.HttpDelete('ingredients/'+item.id).then(function(res) {
            console.log(res);
            getList($scope.query);
        }, function(err) {
            console.log(err);
        })
    }
});



industryinfo.controller('createMyFoodController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', '$stateParams', '$window', 'FileUploader','commonProperty', function($scope, $http, $location, $rootScope, $state, httpService, $stateParams, $window, FileUploader,commonProperty) {
    $(function() {
        $('#edit').froalaEditor({
            language: 'zh_cn',
            heightMin: 700,
            width: 700,
            imageUploadURL: 'http://www.fjcy.net/api/upload/2?access_token=' + $window.sessionStorage["access_token"]

        });

    });
    

    var selectedItem = $stateParams.item;
    var companyId = $stateParams.companyId;
    var companyName = $stateParams.companyName;    
              
    $scope.save = function(argument) {
        var newsObj ={
                      "cooking_methods": $scope.cooking_methods,
                      "detail": $('#edit').froalaEditor('html.get', true),
                      "english_name": $scope.english_name,
                      "ingredients_company_id": $scope.ingredients_company_id,
                      "ingredients_company_name": $scope.ingredients_company_name,
                      "intro": $scope.intro,
                      "name": $scope.name,
                      "specification": $scope.specification
                    };
        if (selectedItem) {
            httpService.HttpPut('ingredients/'+selectedItem.id, newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.myFood',{ 
                    'companyId':ingredients_company_id,
                    'companyName':ingredients_company_name               
        });
            }, function(err) {
                console.log(err);
            })
        } else {
            httpService.HttpPost('ingredients',newsObj).then(function(res) {
                console.log(res);
                $state.go('manage.myFood',{ 
                    'companyId':ingredients_company_id,
                    'companyName':ingredients_company_name               
        });
            }, function(err) {
                console.log(err);
            })
        }

    };
    $scope.cancel = function(argument) {
        $state.go('manage.myFood',{ 
                    'companyId':ingredients_company_id,
                    'companyName':ingredients_company_name               
        });
    }
    $('#edit').on('froalaEditor.initialized', function(e, editor) {

            // Do something here.

            if (selectedItem) {
                $scope.cooking_methods = selectedItem.cooking_methods;
                $scope.english_name = selectedItem.english_name;
                $scope.ingredients_company_id = selectedItem.ingredients_company_id;
                $scope.ingredients_company_name = selectedItem.ingredients_company_name;
                $scope.intro = selectedItem.intro;
                $scope.name = selectedItem.name;
                $scope.specification = selectedItem.specification;
                $scope.$apply();
                $('#edit').froalaEditor('html.set', selectedItem.detail);

            }else{
                $scope.ingredients_company_id = companyId;
                $scope.ingredients_company_name = companyName;                
            };
        });




}]);
