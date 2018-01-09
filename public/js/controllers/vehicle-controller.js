angular.module('app.controllers', [])

//insert.html
.controller('saveController', function($scope, $location, dataService, $routeParams, $rootScope, $route, $http, SETTINGS_SYSTEM){

	$scope.msg = "";

	var getVehicle = function(){
		return {
			id: $routeParams.idVehicle | 0 ,
			marcao : '',
			modelo: '',
			cor: '',
			ano: '',
			preco: 0.00,
			descricao: '',
			novo: true
		}
	}

	var init = function(){
		$scope.vehicle = getVehicle()
		if($scope.vehicle.id != 0 ){

      dataService.vehicle.findById($scope.vehicle.id).then(function(response){
					$scope.vehicle = response.data;
				},function(error){
					console.log("erro ao buscar veiculo "+$scope.vehicle.id+"[err]: " + error);
			});

		}
	}

	$scope.save = function(){
		dataService.vehicle.save($scope.vehicle).then(function(result) {
    		if (result.data > 0) {
					$location.url("/list");
        }
      },function(erro){
				console.log("ERRO ao salvar veiculo->"+erro)
		});
	}

	$scope.go = function ( path ) {
	  $location.path( path );
	};

	init();
})



//list.html
.controller('listController', function($scope, $location, $http, dataService, $rootScope,SETTINGS_SYSTEM){

	$scope.vehicles = [];

	$scope.navegateToForm = function(novo,idVehicle){
	 	 if(novo){
	 		 	$location.url("/save");
	 	 }else{
	 		 	$location.url("/save/" + idVehicle);
	 	 }
  }

  $scope.delete = function(idVehicle){
    dataService.vehicle.delete(idVehicle).then(function(response){
		 	  console.log("Deletado" );
        loadVehicles();
		  },function(error){
	      console.log("erro deletar veiculo [err]: " + error);
	  });
  }

	var loadVehicles = function(){
    dataService.vehicle.findAll().then(function(response){
		 	  $scope.vehicles = response.data;
		  },function(error){
	      console.log("erro ao buscar lista de veiculos [err]: " + error);
	  });
	}

	loadVehicles();

	$scope.go = function ( path ) {
	  $location.path( path );
	};
});
