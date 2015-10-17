//Starting the app module
var app = angular.module('Todo', []);
//Creating the main controller
app.controller('TodoController', function($scope) {
	//checking for localStorage data
	$scope.todos = JSON.parse(localStorage.getItem('todos'));
	//if none start with empty array
	if($scope.todos) {
		$scope.todos = [];
	}
	//set localstorage to array
	localStorage.setItem('todos', JSON.stringify($scope.todos));
	//adding todos to array, clearing input box after input and setting local storage to array
	$scope.addTodo = function() {
		
		$scope.todos.push({
			text:$scope.formTodoText,
			done:false
		});
		$scope.formTodoText = ' ';
		localStorage.setItem('todos', JSON.stringify($scope.todos));
	};
	//get length of todo array
	$scope.getTotalTodos = function() {
		return $scope.todos.length;
	};
	//delete todos when finished
	$scope.clearFinished = function() {
		$scope.todos.splice($scope.todos.indexOf($scope.todos), 1);
	};
});
