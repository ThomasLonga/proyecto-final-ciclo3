package com.example.demo.services;

import java.util.List;

import com.example.demo.model.Parqueadero;;

public interface ParqueaderoService {
	
	public Parqueadero save(Parqueadero parqueadero);

    public void delete(Integer id);

    public Parqueadero findById(Integer id);

    public List<Parqueadero> findAll();

}
