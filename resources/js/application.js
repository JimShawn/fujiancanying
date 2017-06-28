'use strict';

var app = angular.module('app', ['ui.router','main','homepage','news','chef']);

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
        params:{"news":null},
        url: "/newsDetail",
        templateUrl: 'news-detail.html'
        }

    ).state("main.chefRestaurant",{
        url: "/chefRestaurant",
        templateUrl: 'chef-restaurant.html'
        }

    ).state("main.restaurantDetail",{
        url: "/restaurantDetail",
        templateUrl: 'restaurant-detail.html'
        }

    ).state("main.chefDetail",{
        url: "/chefDetail",
        templateUrl: 'chef-detail.html'
        }

    ).state("main.video",{
        url: "/video",
        templateUrl: 'video.html'
        }

    ).state("main.industryInfo",{
        url: "/industryInfo",
        templateUrl: 'industryinfo.html'
        }

    ).state("main.map",{
        url: "/map",
        templateUrl: 'map.html'
        }

    );
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

