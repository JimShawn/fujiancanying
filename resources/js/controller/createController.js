var create = angular.module('create', []);


create.controller('createController', ['$scope', '$http','$location','$rootScope','$state','httpService','$stateParams','$window',function ($scope,$http,$location,$rootScope,$state,httpService,$stateParams,$window) {
        $(function() { 
            $('#edit').froalaEditor({
          language:'zh_cn',
          heightMin: 700,
          width:'1000',
            imageUploadURL: 'http://www.fjcy.net/api/upload/0?access_token='+$window.sessionStorage["access_token"]

          });

        });
        var selectedItem = $stateParams.item;
        $scope.save = function (argument) {
            console.log($('#edit').froalaEditor('html.get', true));
            var newsObj = {
                  "article_type": 0,
                  "content": $('#edit').froalaEditor('html.get', true),
                  "description": $scope.brief,
                  "introduction": "",
                  "thumbnails": "",
                  "title": $scope.newsTitle
                };
            if (selectedItem) {
                httpService.newsUpdate(selectedItem.id,newsObj).then(function (res) {
                    console.log(res);
                    $state.go('manage.news');
                },function (err) {
                    console.log(err);
                })
            }else{
              httpService.newsCreate(newsObj).then(function (res) {
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
                $('#edit').froalaEditor('html.set', selectedItem.content);
                $scope.brief = selectedItem.description;
                $scope.newsTitle = selectedItem.title;
            };
        });
        

    
}]);