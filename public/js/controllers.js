angular.module('app.controllers', [])

//Constrola a inserção dos usuarios na lista nomes.txt feitas na pagina insertUsers.html
.controller('insertController', function($scope, $rootScope, $route, $http, SETTINGS_SYSTEM){

	$scope.msg = "";
	$scope.vehicle = {
		marcao : '',
		modelo: '',
		cor: '',
		ano: '',
		preco: 0.00,
		descricao: '',
		novo: true,
		dataCadastro: 'dd-MM-yyyy',
		dataAlteracao: 'dd-MM-yyyy'
	}

	$scope.saveVehicle = function(){
		var body = {
				vehicle : $scope.vehicle
		}

		$http.post(vehiclesApi, body ).then(function(result) {
    			if (result.data.status) {
						$location.url("/list");
          } else {
            $scope.msg = "Ops!";
          }
        });
	}

})

//Constrola a lista de usuarios mostrado na pagina listUsers.html
.controller('listController', function($scope, $http, $rootScope,SETTINGS_SYSTEM){

	$scope.vehicles = [];

	$http({method: 'GET',url: SETTINGS_SYSTEM.vehiclesApi}).then(function(response){
	 	  console.log(response.data);
	 	  $scope.vehicles = response.data;
	   },function(error){
         console.log("erro ao buscar lista de veiculos [err]: "+error);
       })

});
