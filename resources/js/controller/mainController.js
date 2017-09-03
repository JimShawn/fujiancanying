var main = angular.module('main', []);

main.filter('htmlContent', ['$sce', function($sce) {
    return function(input) {
        return $sce.trustAsHtml(input);
    }
}]);

app.filter('slice', function() {
    return function(arr, start, end) {
        return (arr || []).slice(start, end);
    };
});

main.controller('MainController', ['$scope', '$http', '$location', '$rootScope', '$state', 'httpService', function($scope, $http, $location, $rootScope, $state, httpService) {



    $state.go("main.homepage");
    $scope.goToNews = function(argument) {
        $state.go("main.news");
    };
    $scope.goToChefRestaurant = function(argument) {
        $state.go("main.chefRestaurant");
    };
    $scope.goToVideo = function(argument) {
        $state.go("main.video");
    };
    $scope.goToIndustryInfo = function(argument) {
        $state.go("main.industryInfo");
    };
    $scope.goToMap = function(argument) {
        $state.go("main.map");
    };
    $scope.goToHomepage = function(argument) {
        $state.go("main.homepage");
    };
    $scope.goToMenu = function(argument) {
        $state.go("main.caipu", argument);
    };
    $scope.goToCulture = function() {
        $state.go("main.culture");
    };
    
    $scope.login = function() {
        if (!$scope.userName || $scope.userName.length < 4 || $scope.userName.length > 20) {
            swal({  title:'',
                text: "账号格式不对",
                timer: 1000,
                type: "warning",
                showConfirmButton: false
            });   
            return;     
        };
        if (!$scope.password || $scope.password.length < 4 || $scope.password.length > 20) {
            swal({  title:'',
                text: "密码格式不对",
                timer: 1000,
                type: "warning",
                showConfirmButton: false
            });
            return;     
        };

        httpService.login('fjcy', 'f4j7c3y6').then(function(res) {
            console.log(res);
            $state.go("manage.banner");
        }, function(err) {
            swal({  title:'',
                text: err,
                timer: 1000,
                type: "warning",
                showConfirmButton: false
            });
        })
    }
}]);