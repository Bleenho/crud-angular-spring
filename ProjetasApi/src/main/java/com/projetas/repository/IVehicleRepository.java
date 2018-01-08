package com.projetas.repository;

import java.util.List;

import com.projetas.model.Vehicle;


public interface IVehicleRepository {

	int save(Vehicle vehicle);

	Vehicle findById(int id);

	List<Vehicle> findAll();

	Vehicle remove(int id);

}
