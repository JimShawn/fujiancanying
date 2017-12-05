var create = angular.module('create', []);


create.controller('createNewsController', ['$scope', '$http','$location','$rootScope','$state','httpService','$stateParams','$window',function ($scope,$http,$location,$rootScope,$state,httpService,$stateParams,$window) {
        $(function() { 
            $('#edit').froalaEditor({
          language:'zh_cn',
          heightMin: 700,
          width:'800',
            imageUploadURL: 'http://www.fjcy.net/api/upload/0?access_token='+$window.sessionStorage["access_token"]

          });

        });
        var selectedItem = $stateParams.item;
        $scope.save = function (argument) {
            console.log($('#edit').froalaEditor('html.get', true));
            var newsObj = {
                  "brief": $scope.brief,
                  "content": $('#edit').froalaEditor('html.get', true),
                  "news_category": 0,
                  "sequence": $scope.sequence,
                  "title": $scope.title
                };
            if (selectedItem) {
                httpService.HttpPut('news/'+selectedItem.id,newsObj).then(function (res) {
                    console.log(res);
                    $state.go('manage.news');
                },function (err) {
                    console.log(err);
                })
            }else{
              httpService.HttpPost('news',newsObj).then(function (res) {
                    console.log(res);
                    $state.go('manage.news');
                },function (err) {
                    console.log(err);
                })
            }
            
        };
        $scope.cancel = function (argument) {
          $state.go('manage.news');
        }

        
        $('#edit').on('froalaEditor.initialized', function (e, editor) {
          
          // Do something here.
          
            if(selectedItem){
                $scope.brief = selectedItem.brief;
                $scope.sequence = selectedItem.sequence;
                $scope.title = selectedItem.title;
                $scope.news_category = selectedItem.news_category;
                $scope.$apply();
                $('#edit').froalaEditor('html.set', selectedItem.content);
                
            };
        });
        

    
}]);