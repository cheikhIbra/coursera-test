(function(window){
  'use strict';

  angular.module('ShoppingListCheckOff',[])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService){
    var toBuyCtrl = this;
    toBuyCtrl.toBuyList = [
      {name:"cookies", quantity:"10"},
      {name:"cookies", quantity:"10"},
      {name:"cookies", quantity:"10"},
      {name:"cookies", quantity:"10"},
      {name:"cookies", quantity:"10"}
    ];

    toBuyCtrl.removeItem = function(index){
      console.log("removing at index: " + index);
      ShoppingListCheckOffService.addItem(toBuyCtrl.toBuyList[index]);
      toBuyCtrl.toBuyList.splice(index, 1);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService){
    var boughtCtrl = this;
    boughtCtrl.boughtList = ShoppingListCheckOffService.getItems();
  }

  function ShoppingListCheckOffService(){
    var service = this;
    var list = [];

    service.getItems = function(){
      return list;
    }
    service.addItem = function(item){
      list.push(item);
    }
  }

})(window)
