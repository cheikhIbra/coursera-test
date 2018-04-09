(function(){
  'use strict;'
  angular.module('MenuApp')
  .controller('MenuCategoriesController', MenuCategoriesController);

  MenuCategoriesController.$inject = ['MenuDataService'];
  function MenuCategoriesController(MenuDataService){
    var ctrl = this;

    MenuDataService.getAllCategories()
      .then(function(result){
        console.log(result.data);
        ctrl.categories = result.data;
      })
      .catch(function(error){
        console.log(error);
      });

  }

})();
