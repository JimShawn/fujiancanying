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
    api.HttpGet = function (url,queryObj) {
        if (queryObj) {
            var paramUrl = "";
            $.each(queryObj,function(key,item){
                var link = '&' + key + "=" + item;
                paramUrl += link;                
            });
            url = url + "?" + paramUrl.substr(1);
        }
        var deferd = $q.defer();
        url =commonProperty.serverHost + url;
        
        
        $http.get(url).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.HttpPost = function (url,banner) {
        var deferd = $q.defer();
        url = commonProperty.serverHost + url+"?access_token=" + $window.sessionStorage["access_token"];
        $http.post(url,banner).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.HttpPut = function (url,banner) {
        var deferd = $q.defer();
        url = commonProperty.serverHost + url+"?access_token=" + $window.sessionStorage["access_token"];
        $http.put(url,banner).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.HttpPatch = function (url,banner) {
        var deferd = $q.defer();
        url = commonProperty.serverHost + url+"?access_token=" + $window.sessionStorage["access_token"];
        $http.patch(url,banner).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };
    api.HttpDelete = function (url) {
        var deferd = $q.defer();
        url = commonProperty.serverHost + url+"?access_token=" + $window.sessionStorage["access_token"];
        $http.delete(url).then(function (result) {
            deferd.resolve(result);
        },function (error) {
            deferd.reject(error);
        });
        return deferd.promise;
    };


    return api;
});

