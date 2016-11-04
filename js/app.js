
angular.module('portfolio', ['duParallax', 'ui.bootstrap']).
    config(function($locationProvider) {
        $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
    }).
    controller('HomeController', function($scope, parallaxHelper, $http, $location){
        $scope.background = parallaxHelper.createAnimator(-0.3);

        $scope.experiencies = [];
        $scope.parallaxSrc = [];

        var getLang = function(){
            var lang = $location.search().lang;

            if(lang == 'en'){
                lang = lang + '/';
            }else{
                lang = '';
            }

            return lang
        }

        $scope.loadTextByLang = function(lang){
            if(lang === undefined){
                lang = getLang();
            }

            $http.get('/json/' + lang + 'experiences.json').then(function(response){
                $scope.experiencies = response.data;
            }, function(response){
                console.log(response)
            });

            $http.get('/json/' + lang + 'images.json').then(function(response){
                $scope.parallaxSrc = response.data;
            }, function(response){
                console.log(response)
            });

            $http.get('/json/' + lang + 'solutions.json').then(function(response){
                $scope.solutions = response.data;
            }, function(response){
                console.log(response)
            });

            $http.get('/json/' + lang + 'layout.json').then(function(response){
                $scope.layout = response.data;
            }, function(response){
                console.log(response)
            });
        }

        $scope.loadTextByLang();

    }
);