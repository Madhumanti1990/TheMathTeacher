 var myApp = angular.module("myapp", []);
 myApp.controller("HelloController", ['$scope', function HelloController($scope) {
        $scope.contacts = ["abcd@gmail.com", "abcd@yahoo.co.in"];
        $scope.helloTo = {};
        $scope.helloTo.title = "Sample angular js";

        $scope.add = function() {
            $scope.contacts.push($scope.newcontact);
            $scope.newcontact = "";

        };
        $scope.updateMessage = function(title){
			$scope.helloTo.title = title;
        };
    }]);

myApp.controller('DoubleController', ['$scope', function DoubleController($scope) {
  $scope.double = function(value) { 
  	return value * 2; 
  };
  $scope.square = function(value) { 
  	return value * value; 
  };
  $scope.cube = function(value) { 
  	return value * value * value; 
  };
}]);

myApp.controller('MainController', ['$scope', function($scope) {
  $scope.timeOfDay = 'morning';
  $scope.name = 'Nikki';
}]);
myApp.controller('ChildController', ['$scope', function($scope) {
  $scope.name = 'Mattie';
}]);
myApp.controller('GrandChildController', ['$scope', function($scope) {
  $scope.timeOfDay = 'evening';
  $scope.name = 'Gingerbread Baby';
}]);

myApp.factory("messages", function(){
	var messages = {};
	messages.list = [];
	messages.add = function(message){
		messages.list.push({id:messages.list.length , text:message});

	}
	return messages;
});

myApp.controller('ListCntrl', function(messages){
var self = this;

  self.messages = messages.list;
});

myApp.controller('PostMsgCntrl', ['messages',function(messages){
	var self = this;
	self.newMessage = 'Hello World!';


  self.addMessage = function(message){
    messages.add(message);
    self.newMessage = '';

  };

}]);