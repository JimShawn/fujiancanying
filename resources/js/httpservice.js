/**
 * Created by 向麒 on 2017/1/5.
 */
'use strict';
var httpService = angular.module('httpService', ['commonProperty']);
httpService.factory('httpService',function ($http, $q, $window, commonProperty) {
    
    var api = {};
    api.login = function (name,password) {
        var deferd = $q.defer();
        var url = commonProperty.serverHost + "oauth/token?grant_type=password&username="+name+"&password="+password;
        $http.post(url,{},{
            headers : {
                'Authorization' : 'Basic YW5kcm9pZDphbmRyb2lkX3NlY3JldF9rZXk=',
                "Content-Type":"application/x-www-form-urlencoded"
        }
        }).then(function (result) {

            $window.sessionStorage["token_info"] = JSON.stringify(result);
            $window.sessionStorage["access_token"] = result.data.access_token;
            deferd.resolve(result);
            // var allMeUrl = commonProperty.serverHost + "users/me?access_token=" + $window.sessionStorage["access_token"];
            // $http.get(allMeUrl).then(function (res) {
            //     $window.sessionStorage["userInfo"] = JSON.stringify(res);
            //     deferd.resolve(res);
            // },function (error) {
            //     deferd.reject(error);
            // });

        },function(error){
            deferd.reject(error);
        });
        return deferd.promise;
    };

    api.logout = function () {
        var deferd = $q.defer();
        var logoutUrl = commonProperty.serverHost + "users/logout?access_token=" + $window.sessionStorage["access_token"];
        $http.delete(logoutUrl).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.bannerCreate = function (banner) {
        var deferd = $q.defer();
        var url = commonProperty.serverHost + "banner?access_token=" + $window.sessionStorage["access_token"];
        $http.post(url,banner).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.bannerUpdate = function (id,banner) {
        var deferd = $q.defer();
        var url = commonProperty.serverHost + "banner/"+id+"?access_token=" + $window.sessionStorage["access_token"];
        $http.put(url,banner).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.newsCreate = function (news) {
        var deferd = $q.defer();
        var url = commonProperty.serverHost + "news?access_token=" + $window.sessionStorage["access_token"];
        $http.post(url,news).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.tutorialCreate = function (news) {
        var deferd = $q.defer();
        var url = commonProperty.serverHost + "tutorial?access_token=" + $window.sessionStorage["access_token"];
        $http.post(url,news).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.newsUpdate = function (id,news) {
        var deferd = $q.defer();
        var url = commonProperty.serverHost + "news/"+id+"?access_token=" + $window.sessionStorage["access_token"];
        $http.put(url,news).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.tutorialUpdate = function (id,news) {
        var deferd = $q.defer();
        var url = commonProperty.serverHost + "tutorial/"+id+"?access_token=" + $window.sessionStorage["access_token"];
        $http.put(url,news).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.newsOperate = function (id,news) {
        var deferd = $q.defer();
        var url = commonProperty.serverHost + "news/"+id+"?access_token=" + $window.sessionStorage["access_token"];
        $http.patch(url,news).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.tutorialOperate = function (id,news) {
        var deferd = $q.defer();
        var url = commonProperty.serverHost + "tutorial/"+id+"?access_token=" + $window.sessionStorage["access_token"];
        $http.patch(url,news).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.bannerOperate = function (id,banner) {
        var deferd = $q.defer();
        var url = commonProperty.serverHost + "banner/"+id+"?access_token=" + $window.sessionStorage["access_token"];
        $http.patch(url,banner).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.getNewsList = function (queryObj) {
        var deferd = $q.defer();
        var url =commonProperty.serverHost + "news?";
        if(queryObj){
               url += "&size="+queryObj.size;
               url += "&page="+queryObj.page;
               if(queryObj.isPublic!=undefined){
                    url += "&isPublic="+queryObj.isPublic;
               }
               
                url += "&articleType="+queryObj.articleType;
        };
        
        
        $http.get(url).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.getNewsById = function (id) {
        var deferd = $q.defer();
        var url =commonProperty.serverHost + "news/"+id;
        
        
        $http.get(url).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.getTutorialById = function (id) {
        var deferd = $q.defer();
        var url =commonProperty.serverHost + "tutorial/"+id;
        
        
        $http.get(url).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.getTutorialList = function (queryObj) {
        var deferd = $q.defer();
        var url =commonProperty.serverHost + "tutorial?";
        if(queryObj){
               url += "&size="+queryObj.size;
               url += "&page="+queryObj.page;
               if(queryObj.isPublic!=undefined){
                    url += "&isPublic="+queryObj.isPublic;
               }
        };
        
        
        $http.get(url).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.getBannerList = function (queryObj) {
        var deferd = $q.defer();
        var url =commonProperty.serverHost + "banner?";
        if(queryObj){
               url += "&size="+queryObj.size;
               url += "&page="+queryObj.page;
               if(queryObj.isPublic!=undefined){
                    url += "&isPublic="+queryObj.isPublic;
               }
        };
        
        
        $http.get(url).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };


    return api;
});

