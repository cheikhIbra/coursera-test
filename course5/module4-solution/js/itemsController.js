(function(){
  'use strict;'
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['data'];
  function ItemsController(data){
    var ctrl = this;
    ctrl.itemsForCategory = data;
  }

})();
