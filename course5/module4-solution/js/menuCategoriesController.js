(function(){
  'use strict;'
  angular.module('MenuApp')
  .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ['data'];
  function MenuCategoriesController(data){
    var ctrl = this;
    ctrl.categories = data;
  }

})();
