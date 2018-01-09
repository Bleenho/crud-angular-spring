package com.projetas.repository;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

import com.projetas.model.Vehicle;

/*
 * Singleton Pattern 
 * 
 * */
public class VehicleMock implements IVehicleRepository{

	private static VehicleMock instance = new VehicleMock();
	private HashMap<Integer,Vehicle> vehicles = new HashMap<>();
	
	public static VehicleMock getInstance(){
      return instance;
   }
	
	private void loadData() {
		Vehicle veic = new Vehicle();
		veic.setId(1);
		veic.setCor("Vermelha");
		veic.setAno(2019);
		veic.setDataAtualizacao(new Date());
		veic.setDataCadastro(new Date());
		veic.setDescricao("Carro completo");
		veic.setMarca("Volkswagen");
		veic.setModelo("Polo 2.0");
		veic.setNovo(true);
		veic.setPreco(new BigDecimal("60000.00"));
		this.vehicles.put(1, veic);
		
		veic = new Vehicle();
		veic.setId(2);
		veic.setCor("Preto");
		veic.setAno(2001);
		veic.setDataAtualizacao(new Date());
		veic.setDataCadastro(new Date());
		veic.setDescricao("Ar,Direção");
		veic.setMarca("Volkswagen");
		veic.setModelo("Gol");
		veic.setNovo(false);
		veic.setPreco(new BigDecimal("10000.00"));
		this.vehicles.put(2, veic);
	}
	
	private VehicleMock() {
		this.loadData();
	}
	 
	@Override
	public int save(Vehicle vehicle) {
		int idVehicle = vehicle.getId();
		if(idVehicle == 0 ) {
			Vehicle v = this.vehicles.get(this.vehicles.size());
			idVehicle = v.getId() + 1;
			vehicle.setId(idVehicle);
		}
		this.vehicles.put(idVehicle,vehicle);
		return idVehicle;
	}
	@Override
	public Vehicle findById(int id) {
		return this.vehicles.get(id);
	}
	@Override
	public List<Vehicle> findAll() {
		List<Vehicle> vehicles = new ArrayList<Vehicle>();
		
		for(Vehicle v: this.vehicles.values()){
			vehicles.add(v);
		}
		
		return vehicles;
	}
	@Override
	public Vehicle remove(int id) {
		return this.vehicles.remove(id);
	}
	
	
	
}
