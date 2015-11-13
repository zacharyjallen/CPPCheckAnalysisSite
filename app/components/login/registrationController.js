/**
 * Created by user on 11/12/15.
 */
Parse.initialize("JlLvffl08QrBwOGUBp3RiSE0ppdWIR9dceOnx0r8",
    "5VjICKXhdqa1jIlqWEhcdILiTfIu8PFRa7tMvLsU");

angular.module('app', [])
    .run(['$rootScope', function($scope) {
        $scope.currentUser = Parse.User.current();

        $scope.register = function(form) {
            var user = new Parse.User();
            user.set("email", form.email);
            user.set("username", form.username);
            user.set("password", form.password);

            user.register(null, {
                success: function(user) {
                    $scope.currentUser = user;
                    $scope.$apply(); // Notify AngularJS to sync currentUser
                },
                error: function(user, error) {
                    alert("Unable to register:  " + error.code + " " + error.message);
                }
            });
        };

        $scope.logOut = function(form) {
            Parse.User.logOut();
            $scope.currentUser = null;
        };
    }]);