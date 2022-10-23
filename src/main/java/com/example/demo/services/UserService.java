package com.example.demo.services;

import java.util.ArrayList;
import java.util.List;

import org.aspectj.apache.bcel.classfile.Code;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.example.demo.*;

import com.example.demo.repository.UserRepository;

@Service
public class UserService implements UserDetailsService {

	@Autowired
	private UserRepository userRepository;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		com.example.demo.model.User userFound = this.userRepository.findByUsername(username);
		 List<GrantedAuthority> roles = new ArrayList<>(); // roles here, or search from db the asociated roles
		 UserDetails userDtails = new User(userFound.getUsername(), userFound.getPassword(), roles);
		 return userDtails;
	}
        
        public com.example.demo.model.User getUser(String username) throws UsernameNotFoundException{
        	com.example.demo.model.User userFound = this.userRepository.findByUsername(username);
            return userFound;
        }

}
