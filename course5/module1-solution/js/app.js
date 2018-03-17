(function () {
  'use strict';
  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){
    $scope.controllMenu = function () {


      if($scope.menu == undefined || $scope.menu ==="" || $scope.menu ===" "){
        $scope.message = "Please enter data first";
        $scope.borderSettings = "solid 1px red";
        $scope.colorValue = "red";
        //console.log($scope.message);
        return;
      }
      var menu = $scope.menu.split(',');
      var cleanMenu = [];
      for(var i=0; i <menu.length; i++)
      {
        if(menu[i] && menu[i] != " "){
          cleanMenu.push(menu[i]);
        }
      }
      $scope.colorValue = "green";
      $scope.borderSettings = "solid 1px green";
      if(cleanMenu.length <= 3){
        $scope.message = "Enjoy!";
      }
      else{
          $scope.message = "Too much";
      }
    };
  }

})();
