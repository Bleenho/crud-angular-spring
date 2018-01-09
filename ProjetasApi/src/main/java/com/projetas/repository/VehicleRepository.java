package com.projetas.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.projetas.model.Vehicle;


@Repository
public interface VehicleRepository extends CrudRepository<Vehicle, Integer> {

}
