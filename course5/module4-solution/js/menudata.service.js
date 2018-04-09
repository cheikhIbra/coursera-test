(function(){
  'use strict;'
  angular.module('data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http){
    var service = this;
    service.getAllCategories = function(){
      console.log("getAllCategories called");
      var result = $http.get('https://davids-restaurant.herokuapp.com/categories.json');

      return result;
    };

    service.getItemsForCategory = function(categoryShortName){
      console.log("getItemsForCategory called");
      var res= undefined;
      return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName)
      .then(function(result){
        res = result.data;
        console.log(res);
        return res;
      });
    };
  }

})();
