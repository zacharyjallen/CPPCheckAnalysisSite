/**
 * Created by user on 11/11/15.
 */
var app = angular.module('app');
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: "/home"
        })
        .when('/home', {
            controller: "HomeController",
            templateUrl: "app/components/home/homeView.html"
        })
        .when('/logout', {
            controller: "LogOutController",
            templateUrl: "app/components/login/logOutView.html"
        })
        .when('/login', {
            controller: "LoginController",
            templateUrl: "app/components/login/loginView.html"
        })
        .when('/cppAnalysis', {
            controller: "cppAnalysisController",
            templateUrl: "app/components/analysis/cppAnalysisView.html"
    });
});