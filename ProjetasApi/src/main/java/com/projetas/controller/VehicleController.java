package com.projetas.controller;

import java.io.Serializable;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.projetas.model.Vehicle;
import com.projetas.service.VehicleService;

/*
 * RESPONSÁVEL POR ABASTECER O CRUD DE VEICULOS DO FRONT END
 * */
@RestController
@RequestMapping("/vehicles")
public class VehicleController implements Serializable{


	private static final long serialVersionUID = 1L;
	
	@Autowired
	private VehicleService service;
 
	@RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    public List<Vehicle> findAll() {
        return service.findAll();
    }
 
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ResponseBody
    public Vehicle findOne(@PathVariable("id") int id) {
        return service.findById(id);
    }
 
    @RequestMapping(method = RequestMethod.POST)
    @ResponseStatus(HttpStatus.CREATED)
    @ResponseBody
    public int create(@Valid @RequestBody Vehicle vehicle) {
        return service.save(vehicle).getId();
    }
  
    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    @ResponseStatus(HttpStatus.OK)
    public void update(@PathVariable( "id" ) int id,@Valid @RequestBody Vehicle vehicle) {
        vehicle.setId(id);
        service.save(vehicle);
    }
  
    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ResponseStatus(HttpStatus.OK)
    public void delete(@PathVariable("id") int id) {
        service.deleteById(id);
    }
}
