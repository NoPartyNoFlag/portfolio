
angular.module('portfolio', ['duParallax', 'ui.bootstrap']).
  controller('HomeController', function($scope, parallaxHelper, $http){
    $scope.background = parallaxHelper.createAnimator(-0.3);

    $scope.experiencies = [];
    $scope.parallaxSrc = [];

    $http.get('/json/experiences.json').then(function(response){
    	$scope.experiencies = response.data;
    }, function(response){
    	console.log(response)
    });

    $http.get('/json/images.json').then(function(response){
    	$scope.parallaxSrc = response.data;
    }, function(response){
    	console.log(response)
    });

    $http.get('/json/solutions.json').then(function(response){
    	$scope.solutions = response.data;
    }, function(response){
    	console.log(response)
    });

  }
);