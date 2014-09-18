var app = angular.module("sampleApp", ["firebase"]);

app.controller("SampleCtrl", ["$scope", "$location", "$anchorScroll", "$firebase", function($scope, $location, $anchorScroll, $firebase) {
  var ref = new Firebase("https://resplendent-fire-4324.firebaseio.com/messages");
  var sync = $firebase(ref);

  /*
  var setTitle = function() {
    var title = document.title;
    document.title = (title == "nova" ? "mensagem" : "nova");
  }

  var handler = ref.on("child_added", function(snap) {
    setInterval(setTitle, 1000);
  });

  var activeMethod = (function() {
    clearInterval(setTitle);
    document.title = "Chat's On Fire!";
  });

  window.onclick = activeMethod;
  window.onmousemove = activeMethod;
  window.onmouseenter = activeMethod;
  window.onkeydown = activeMethod;
  window.onscroll = activeMethod;
  window.onmousewheel = activeMethod;
  */

  $scope.messages = sync.$asArray();

  $scope.addMessage = function(text) {
    $scope.messages.$add({text: text});
    $scope.newMessageText = null;
    $scope.goToBottom();
  };

  $scope.goToBottom = function() {
    $location.hash('scroll-bottom');
    $anchorScroll();
  };
}]);
