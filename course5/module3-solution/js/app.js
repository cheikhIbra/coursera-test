(function(){
  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems', FoundItemsDirective);

//directive
  function FoundItemsDirective(){
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items:'<found',
        onRemove:'='
      }
    };
    return ddo;
  }

//Controller
  NarrowItDownController.$inject = ['MenuSearchService', '$element'];
  function NarrowItDownController(MenuSearchService, element){
    var loader = element.find("div.loader");

    var message = element.find("span");

    var ctrl = this;
    ctrl.searchTerm ="";

    ctrl.search = function(){
      ctrl.found = [];
      if(!ctrl.searchTerm){
        message.show();
        return;
      }
      loader.show();
      console.log(ctrl.searchTerm);
      var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
      promise.then(function(response){
        ctrl.found = response;
        console.log(ctrl.found);
        if(!ctrl.found || ctrl.found.length == 0){
          message.show();
        }
        else{
          message.hide();
        }
        loader.hide();
      });
    };

    ctrl.remove = function(index){
      console.log("removing: "+index);
      ctrl.found.splice(index, 1);
    }
  }

//Service
  MenuSearchService.$inject=['$http'];
  function MenuSearchService($http){
    var service = this;

    service.getMatchedMenuItems = function (searchTerm){
      var found = [];
      return $http.get("https://davids-restaurant.herokuapp.com/menu_items.json")
      .then(function(response){
        var menu_items = response.data.menu_items;
        // console.log(response.data.menu_items);
        for(var i=0; i< menu_items.length; i++){
          if(menu_items[i].name.toLowerCase().indexOf(searchTerm) != -1)
            found.push(menu_items[i]);
        }
        return found;
      });
    };
  }

})();
