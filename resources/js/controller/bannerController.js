var banner = angular.module('banner', []);


banner.controller('bannerController', ['$scope', '$http', '$location', '$rootScope', '$state', function($scope, $http, $location, $rootScope, $state) {

    

    $scope.data = {
        content: [{
            id: 0,
            des: '第一张图片',
            url: 'www.baidu.com'
        }, {
            id: 0,
            des: '第二张图片',
            url: 'www.baidu.com'
        }, {
            id: 0,
            des: '第三张图片',
            url: 'www.baidu.com'
        }]
    }


}]);