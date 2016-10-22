
angular.module('portfolio', ['duParallax', 'ui.bootstrap']).
  controller('HomeController', function($scope, parallaxHelper, $http){
    $scope.background = parallaxHelper.createAnimator(-0.3);

    $scope.experiencies = [];
    $scope.parallaxSrc = ['img/angular.png', 'img/docker.png', 'img/kubernetes.png',]

    $http.get('/json/experiences.json').then(function(response){
    	$scope.experiencies = response.data;
    }, function(response){
    	console.log(response)
    });

  }
);