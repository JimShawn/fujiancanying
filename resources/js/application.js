'use strict';

var app = angular.module('app', ['ui.router','main','homepage','angularFileUpload','news','chef','snack','industryinfo','culture','video','create','banner','manage','commonProperty','commonUtil','httpService','footer']);

app.config(function ($stateProvider,$urlRouterProvider) {
    $stateProvider.state("main",{
        url: "/main",
        templateUrl: 'main.html'
        }

    ).state("main.homepage",{
        url: "/homepage",
        templateUrl: 'homepage.html'
        }

    ).state("main.news",{
        url: "/news",
        templateUrl: 'news.html'
        }

    ).state("main.newsDetail",{
        params:{"id":null},
        url: "/newsDetail",
        templateUrl: 'news-detail.html'
        }

    ).state("main.chefRestaurant",{
        url: "/chefRestaurant",
        templateUrl: 'chef-restaurant.html'
        }

    ).state("main.restaurantDetail",{
        params:{"restaurant":null},
        url: "/restaurantDetail",
        templateUrl: 'restaurant-detail.html'
        }

    ).state("main.chefDetail",{
        params:{"chef":null},
        url: "/chefDetail",
        templateUrl: 'chef-detail.html'
        }

    ).state("main.video",{
        url: "/video",
        templateUrl: 'video.html'
        }

    ).state("main.videoplay",{
        url: "/videoplay",
        templateUrl: 'video-play.html',
        params:{id:null}
        }

    ).state("main.industryInfo",{
        url: "/industryInfo",
        templateUrl: 'industryinfo.html',
        params:{type:null}
        }        
        

    ).state("main.map",{
        url: "/map",
        templateUrl: 'map.html'
        }
    ).state("main.caipu",{
        url: "/caipu",
        templateUrl: 'cookbook.html'
        }
    ).state("main.snackDetail",{
        params:{"snackTitle":null,"id":null},
        url: "/snackDetail",
        templateUrl: 'snack-detail.html'
        }

    ).state("main.transformInfo",{
            url: "/transformInfo",
            templateUrl: 'transforminfo.html',
            params:{id:null}
        }

    ).state("main.labourInfo",{
            url: "/labourInfo",
            templateUrl: 'labourinfo.html',
            params:{id:null}
        }

    ).state("main.foodInfo",{
            url: "/foodInfo",
            templateUrl: 'foodinfo.html',
            params:{id:null}
        }

    ).state("main.culture",{
            url: "/culture",
            templateUrl: 'culture.html'
        }

    ).state("main.cultureDetail",{
            url: "/cultureDetail",
            templateUrl: 'culturedetail.html',
            params:{id:null}
        }

    ).state("manage.createNews",{
            url: "/createNews",
            templateUrl: 'create-news.html'
        }

    ).state("manage",{
            url: "/manage",
            templateUrl: 'manage.html',
             params:{'item':null}
        }

    ).state("manage.banner",{
            url: "/manageBanner",
            templateUrl: 'manageBanner.html'
        }

    ).state("manage.news",{
            url: "/manageNews",
            templateUrl: 'manageNews.html'
        }

    ).state("manage.bannerNew",{
        url:"/bannerNew",
        templateUrl:'bannerNew.html',
        params:{
            'item':null
        }
    }).state("manage.fujianCuisineCulture",{
        url:"/fujianCuisineCulture",
        templateUrl:'fujianCuisineCulture.html'
    }).state("manage.cultureCreate",{
        url:"/cultureCreate",
        templateUrl:'create-culture.html',
        params:{
                    'item':null
                }           
    }).state("manage.recipes",{
        url:"/recipes",
        templateUrl:'recipes.html'
    }).state("manage.recipesCreate",{
        url:"/recipesCreate",
        templateUrl:'create-recipes.html',
        params:{
                    'item':null
                }           
    }).state("manage.famousChief",{
        url:"/famousChief",
        templateUrl:'famous-chief.html'
    }).state("manage.famousChiefCreate",{
        url:"/famousChiefCreate",
        templateUrl:'create-chief-famous.html',
        params:{
                    'item':null
                }           
    }).state("manage.famousSnack",{
        url:"/famousSnack",
        templateUrl:'famous-snack.html'
    }).state("manage.famousSnackCreate",{
        url:"/famousSnackCreate",
        templateUrl:'create-snack-famous.html',
        params:{
                    'item':null
                }           
    }).state("manage.famousSotre",{
        url:"/famousSotre",
        templateUrl:'famous-store.html'
    }).state("manage.famousStoreCreate",{
        url:"/famousStoreCreate",
        templateUrl:'create-store-famous.html',
        params:{
                    'item':null
                }           
    }).state("manage.transfer",{
        url:"/transfer",
        templateUrl:'transfer.html'
    }).state("manage.transferCreate",{
        url:"/transferCreate",
        templateUrl:'create-transfer.html',
        params:{
                    'item':null
                }           
    }).state("manage.labour",{
        url:"/labour",
        templateUrl:'labour.html'
    }).state("manage.labourCreate",{
        url:"/labourCreate",
        templateUrl:'create-labour.html',
        params:{
                    'item':null
                }           
    }).state("manage.foodCompany",{
        url:"/foodCompany",
        templateUrl:'food-company.html'
    }).state("manage.foodCompanyCreate",{
        url:"/foodCompanyreate",
        templateUrl:'create-food-company.html',
        params:{
                    'item':null
                }           
    }).state("manage.myFood",{
        url:"/myFood",
        templateUrl:'my-food.html',
        params:{
                    'companyId':null,
                    'companyName':null
                }           
    }).state("manage.myFoodCreate",{
        url:"/myFoodCeate",
        templateUrl:'create-my-food.html',
        params:{
                    'item':null,
                    'companyId':null,
                    'companyName':null
                }           
    }).state("manage.tutorial",{
        url:"/tutorial",
        templateUrl:'tutorial.html'
    }).state("manage.tutorialCreate",{
        url:"/tutorialCreate",
        templateUrl:'create-tutorial.html',
        params:{
                    'item':null
                }           
    });
    $urlRouterProvider.otherwise('/main');

});

// app.controller('NavController', ['$scope', '$rootScope', '$route', function ($scope, $rootScope, $route) {
//     $rootScope.route = $route;
//     $rootScope.isLogin = false;
// }]);
//

app.factory('sessionInjector',['$rootScope','$window','$q', '$injector',function ($rootScope,$window,$q,$injector) {
    var sessionInjector = {
        // request: function(config){
        //     var userInfo = $window.sessionStorage['userInfo'];
        //     console.log(userInfo);
        //     console.log(config);
        //     if (!$rootScope.isLogin){
        //         return config;
        //     }
        //     var userInfoObj = JSON.parse(userInfo);
        //     if(userInfoObj.data.access_token){
        //         config.headers['token'] = userInfoObj.data.access_token;
        //     }
        //     return config;
        // },
        responseError : function(response) {
            if(response.status == 401){
                var $state = $injector.get('$state');
                return $state.go('login');
            }
            return $q.reject(response);
        }
    };

    return sessionInjector;
}]);
app.config(['$httpProvider',function ($httpProvider) {
    console.log($httpProvider);
    $httpProvider.interceptors.push('sessionInjector');
}]);

