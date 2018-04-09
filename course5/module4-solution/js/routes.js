(function(){
  'use strict;'
  angular.module('MenuApp')
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider){
    console.log("routes config");

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url:'/',
      templateUrl:'templates/home.template.html'
    })
    .state('categories', {
      url:'/categories',
      controller: 'MenuCategoriesController as ctrl',
      templateUrl:'templates/categories-view.template.html'
    })
    .state('items', {
      url:'/items/{categoryShortName}',
      templateUrl:'templates/items-view.template.html',
      controller: 'ItemsController as itCtrl',
      resolve: {
        data: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService ){
          return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
        }]
      }
    });
  }

})();
