var mySample = angular.module("mySample",[]);
mySample.controller("MyController", ['$scope','notify', function($scope,notify){
	$scope.callNotify = function(msgs){
		notify(msgs);
	}
	
}] );
mySample.factory("notify", ['$window',function(win){
	var messages = [];
	return function(msg){
		messages.push(msg);
		if(messages.length === 5){
			win.alert(msg);
			messages = [];
		}

	};
}]);