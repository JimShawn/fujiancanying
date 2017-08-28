var create = angular.module('create', []);


create.controller('createController', ['$scope', '$http','$location','$rootScope','$state',function ($scope,$http,$location,$rootScope,$state) {
        $scope.save = function (argument) {
            console.log($('#edit').froalaEditor('html.get', true));
        }

    
}]);