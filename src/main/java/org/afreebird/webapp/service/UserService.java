package org.afreebird.webapp.service;

import java.util.List;

import org.afreebird.webapp.dao.UserDao;
import org.afreebird.webapp.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

	@Autowired
	private UserDao dao;
	
	public List<User> getUser(Long userId) {
		return dao.getUser(userId);
	}
	
	public int saveUser(User user) {
		return dao.saveUser(user);
	}
	
}
