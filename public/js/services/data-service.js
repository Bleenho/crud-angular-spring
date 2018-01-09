angular.module('myApp').service('dataService',function(SETTINGS_SYSTEM,$http){

  this.vehicle = {
    findAll : function(){
      return $http({method: 'GET',url: SETTINGS_SYSTEM.vehiclesApi});
    },
    findById : function(id){
      return $http({method: 'GET',url: SETTINGS_SYSTEM.vehiclesApi+"/"+id});
    },
    save : function(vehicle){
      return $http.post(SETTINGS_SYSTEM.vehiclesApi, vehicle);
    },
    delete : function(idVehicle){
      return $http.delete(SETTINGS_SYSTEM.vehiclesApi+"/"+idVehicle );
    }
  }
})
