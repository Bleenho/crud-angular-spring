angular.module('app.controllers', [])

//insert.html
.controller('saveController', function($scope, $location, dataService, $routeParams, $rootScope, $route, $http, SETTINGS_SYSTEM){

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
	

	var loadVehicle = function(){
		$scope.vehicle = getVehicle()
		if($scope.vehicle.id != 0 ){
      		dataService.vehicle.findById($scope.vehicle.id).then(function(response){
					$scope.vehicle = response.data;
				},function(error){
					if(error.status == 404){
						alert("Não foi possivel localizar API -> "+ SETTINGS_SYSTEM.vehiclesApi)
					}else{
						alert("Erro HttpResponse["+error.status+"]-> "+ error.message)	
					}
				});
		}
	}
	$scope.saveValidation = function(){
		var retorno = {
			status: true,
 			msg: []
		}
		if($scope.vehicle.ano <= new Date().getFullYear+1){
			retorno.status = false
			retorno.msg.push("Ano-> Ano do veículo inválido")
		}
		if($scope.vehicle.preco <= 0){
			retorno.status = false
			retorno.msg.push("Preço-> Deve conter valor positivo")
		}

		return retorno
	}

	$scope.save = function(){
		var valid = $scope.saveValidation()
		if(valid.status){
			dataService.vehicle.save($scope.vehicle).then(function(result) {
				if (result.data > 0) {
					$location.url("/list");
				}
			},function(erro){
				if(erro.status == 404){
					alert("Não foi possivel localizar API -> "+ SETTINGS_SYSTEM.vehiclesApi)
				}else{
					alert("Erro HttpResponse["+erro.status+"]-> "+ error.message)	
				}
			});
		}else{
			var msgErro = ""
			valid.msg.forEach(function(erro){
				msgErro = msgErro + erro+'\n'
			})
			alert(msgErro)
		}
	}

	$scope.go = function ( path ) {
	  $location.path( path );
	};

	loadVehicle();
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
			if(error.status == 404){
				alert("Não foi possivel localizar API -> "+ SETTINGS_SYSTEM.vehiclesApi)
			}else{
				alert("Erro HttpResponse["+error.status+"]-> "+ error.message)	
			}
	  });
  	}

	var loadVehicles = function(){
    dataService.vehicle.findAll().then(function(response){
		 	  $scope.vehicles = response.data;
		},function(error){
			if(error.status == 404){
				alert("Não foi possivel localizar API -> "+ SETTINGS_SYSTEM.vehiclesApi)
			}else{
				alert("Erro HttpResponse["+error.status+"]-> "+ error.message)	
			}
	  	});
	}

	loadVehicles();

	$scope.go = function ( path ) {
	  $location.path( path );
	};
});
