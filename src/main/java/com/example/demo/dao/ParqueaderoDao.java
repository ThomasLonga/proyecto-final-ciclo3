package com.example.demo.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Parqueadero;


//@Repository
public interface ParqueaderoDao extends CrudRepository<Parqueadero,Integer> {

}
