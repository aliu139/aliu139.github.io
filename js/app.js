var app = angular.module('main', ['ctrls', 'ngRoute', 'ngAnimate', "firebase"]);

//Generates the $firebaseAuth instance
app.factory("Auth", ["$firebaseAuth", function($firebaseAuth) {
  var ref = new Firebase("https://glowing-fire-6134.firebaseio.com/");
  return $firebaseAuth(ref);
}]);

//redirects to homepage if $requireAuth rejects
app.run(["$rootScope", "$location", function($rootScope, $location) {
  $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
    if (error === "AUTH_REQUIRED") {
      $location.url("/contact");
    }
  });
}]);

app.filter("trustUrl", ['$sce', function ($sce) {
        return function (recordingUrl) {
            return $sce.trustAsResourceUrl(recordingUrl);
        };
    }]);

app.config(function($routeProvider){
  $routeProvider.when("/",
    {
      templateUrl: "templates/main.html",
      controller: "main.ctrl"
    })
  .when("/about", 
  {
  	templateUrl: "templates/about.html",
  	controller: "about.ctrl"
  })
  .when("/contact", 
  {
  	templateUrl: "templates/contact.html",
  	controller: "contact.ctrl"
  })
  .when("/experience",
  {
  	templateUrl: "templates/experience.html",
  	controller: "experience.ctrl"
  })
  .when("/projects",
  {
  	templateUrl: "templates/projects.html",
  	controller: "projects.ctrl"
  })
  .when("/whatdoyouseek",
  {
    templateUrl: "templates/secret.html",
    controller: "secret.ctrl"
  })
  .when("/redpill",
  {
    templateUrl: "templates/redpill.html",
    controller: "redpill.ctrl",
    resolve: {
      "currentAuth": ["Auth", function(Auth) {
        return Auth.$requireAuth();
      }]
    }
  })
  .when("/magic",
  {
    templateUrl: "templates/magic.html",
    controller: "magic.ctrl"
  })
  ;
});