package com.apus.greeting.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.apus.greeting.domain.Greeting;
import com.apus.greeting.domain.User;

@Controller
public class GreetingController {

	@RequestMapping(value="/greeting", method = RequestMethod.POST)
	public @ResponseBody Greeting greeting(
			@RequestBody User user, Model model){
		
		Greeting greeting = new Greeting();
		greeting.setId("my id");
		String userName = user.getName(); 
		if( userName == null || userName.isEmpty() ) {
			userName = "Mundo";
		}
		greeting.setMessage("Hola ".concat(userName));
		
		return greeting;
		
	}
}
