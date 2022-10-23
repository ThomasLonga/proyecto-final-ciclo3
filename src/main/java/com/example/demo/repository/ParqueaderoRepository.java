package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.*;

import org.springframework.data.domain.Sort;

public interface ParqueaderoRepository extends JpaRepository<Parqueadero, Integer> {
	
	/*public List<Parqueadero> findByUser(User user, Sort sort);
	
	public Parqueadero findByUserAndId(User user, Integer id);*/
	
	//

}
