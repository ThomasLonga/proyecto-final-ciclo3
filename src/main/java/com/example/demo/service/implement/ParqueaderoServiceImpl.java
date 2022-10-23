package com.example.demo.service.implement;

import java.util.List;

import org.springframework.transaction.annotation.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.ParqueaderoDao;
import com.example.demo.model.Parqueadero;
import com.example.demo.services.ParqueaderoService;

@Service
public class ParqueaderoServiceImpl implements ParqueaderoService {
	
	@Autowired
    private ParqueaderoDao parqueaderoDao;

	@Override
	@Transactional(readOnly = false)
	public Parqueadero save(Parqueadero parqueadero) {
		// TODO Auto-generated method stub
		return parqueaderoDao.save(parqueadero);
	}

	@Override
	//@Transactional(readOnly = false)
	public void delete(Integer id) {
		// TODO Auto-generated method stub
		parqueaderoDao.deleteById(id);
		
	}

	@Override
	//@Transactional(readOnly = true)
	public Parqueadero findById(Integer id) {
		// TODO Auto-generated method stub
		return parqueaderoDao.findById(id).orElse(null);
	}

	@Override
	//@Transactional(readOnly = true)
	public List<Parqueadero> findAll() {
		// TODO Auto-generated method stub
		return (List<Parqueadero>) parqueaderoDao.findAll();
	}

}
