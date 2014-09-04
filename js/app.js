var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", ["$scope", "$firebase", function($scope, $firebase) {
  var ref = new Firebase("https://resplendent-fire-4324.firebaseio.com/messages");
  var sync = $firebase(ref);

  $scope.messages = sync.$asArray();

  $scope.addMessage = function(text) {
    $scope.messages.$add({text: text});
    $scope.newMessageText = null;
  }
}]);
