package com.projetas.service;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.projetas.model.Vehicle;

@Service
public class VehicleService implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public Long save(Vehicle vehicle) {
		Long idVehicle  = 0l;
		
		return idVehicle;
	}
	
	
	public List<Vehicle> findAll(){
		List<Vehicle> vehicles = new ArrayList<Vehicle>();
		
		
		return vehicles;
	}


	public Vehicle findById(Long id) {
		Vehicle v = new Vehicle();
		
		
		
		return v;
	}


	public void deleteById(Long id) {
		
	}
	
	
}
