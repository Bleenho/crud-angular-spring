package com.projetas.service;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.projetas.model.Vehicle;
import com.projetas.repository.IVehicleRepository;
import com.projetas.repository.VehicleMock;

/**
 * BUSINESS RULES
 */

@Service
public class VehicleService implements Serializable{

	private static final long serialVersionUID = 1L;

	private	IVehicleRepository dao = VehicleMock.getInstance();

	@Autowired
    public VehicleService() {
        super();
    }
	public int save(Vehicle vehicle) {
		vehicle.setDataAtualizacao(new Date());
		if(vehicle.getId() == 0) {
			vehicle.setDataCadastro(new Date());
		}
		return dao.save(vehicle);
	}
	
	
	public List<Vehicle> findAll(){
		return dao.findAll();
	}


	public Vehicle findById(int id) {
		return dao.findById(id);
	}


	public void deleteById(int id) {
		dao.remove(id);
	}
	
	
}
