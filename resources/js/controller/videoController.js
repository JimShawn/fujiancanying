var video = angular.module('video', []);
video.constant('videos', [
		{
			name:'蟹肉冬瓜茸',
			time:'2017/06/29 16:35:28',
			icon:'./resources/img/jiaoxue/22.jpg',
			url:'./resources/video/92sucai.mp4'
		},{
			name:'南煎猪肝',
			time:'2017/06/29 15:12:46',
			icon:'./resources/img/jiaoxue/01.jpg',
			url:'./resources/video/92sucai.mp4'
		},{
			name:'淡糟香螺片',
			time:'2017/06/29 13:33:54',
			icon:'./resources/img/jiaoxue/02.jpg',
			url:'./resources/video/92sucai.mp4'
		},{
			name:'爆炒双脆',
			time:'2017/06/29 17:33:25',
			icon:'./resources/img/jiaoxue/03.jpg',
			url:'./resources/video/92sucai.mp4'
		},{
			name:'注油鳗鱼',
			time:'2017/06/10 17:32:12',
			icon:'./resources/img/jiaoxue/04.jpg',
			url:'./resources/video/92sucai.mp4'
		},{
			name:'全节黄瓜鱼',
			time:'2017/06/11 14:44:21',
			icon:'./resources/img/jiaoxue/05.jpg',
			url:'./resources/video/92sucai.mp4'
		},{
			name:'荔枝肉',
			time:'2017/06/12 08:12:26',
			icon:'./resources/img/jiaoxue/06.jpg',
			url:'./resources/video/92sucai.mp4'
		},{
			name:'蟹肉捣粉',
			time:'2017/06/12 15:12:34',
			icon:'./resources/img/jiaoxue/07.jpg',
			url:'./resources/video/92sucai.mp4'
		},{
			name:'鲟肉鸳鸯菜',
			time:'2017/06/18 12:43:09',
			icon:'./resources/img/jiaoxue/08.jpg',
			url:'./resources/video/92sucai.mp4'
		},{
			name:'瓜烧白菜',
			time:'2017/06/22 09:11:23',
			icon:'./resources/img/jiaoxue/09.jpg',
			url:'./resources/video/92sucai.mp4'
		},{
			name:'软帘珠帘鱼',
			time:'2017/06/22 17:22:38',
			icon:'./resources/img/jiaoxue/10.jpg',
			url:'./resources/video/92sucai.mp4'
		},{
			name:'红糟羊肉',
			time:'2017/06/23 10:33:55',
			icon:'./resources/img/jiaoxue/11.jpg',
			url:'./resources/video/92sucai.mp4'
		}
	]);
video.controller('VideoController', ['$scope', '$http','$location','$rootScope','$state','videos',function ($scope,$http,$location,$rootScope,$state,videos) {
    $scope.videos = videos;
    $scope.gotoDetail = function (item) {
        $state.go('main.videoplay',{item:item});
    };


}]);
video.controller('VideoPlayController', ['$scope', '$http','$location','$rootScope','$state','$stateParams',function ($scope,$http,$location,$rootScope,$state,$stateParams) {
    $scope.item = $stateParams.item;


}]);