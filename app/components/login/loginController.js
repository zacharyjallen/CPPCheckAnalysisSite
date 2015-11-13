/**
 * Created by user on 11/11/15.
 */
Parse.initialize("JlLvffl08QrBwOGUBp3RiSE0ppdWIR9dceOnx0r8",
    "5VjICKXhdqa1jIlqWEhcdILiTfIu8PFRa7tMvLsU");

angular.module('app', [])
    .run(['$rootScope', function($scope) {
        $scope.currentUser = Parse.User.current();

        $scope.logIn = function(form) {
            Parse.User.logIn(form.username, form.password, {
                success: function(user) {
                    $scope.currentUser = user;
                    $scope.$apply();
                },
                error: function(user, error) {
                    alert("Unable to log in: " + error.code + " " + error.message);
                }
            });
        };

        $scope.logOut = function(form) {
            Parse.User.logOut();
            $scope.currentUser = null;
        };
    }]);