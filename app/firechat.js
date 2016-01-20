var firechat = angular.module("firechat",["firebase"]);

firechat.controller("myController",["$scope","$firebaseArray", function($scope,$firebaseArray){

    var db = new Firebase("https://brilliant-heat-5654.firebaseIO.com");

    $scope.messages = $firebaseArray(db);

    $scope.addMessage = function(e){
        if(e.keyCode === 13 && $scope.content){
            var username = $scope.username || "anonymous";
            $scope.messages.$add({
                username: username,
                content: $scope.content
            });
            $scope.content = "";
        }
    }

}]);