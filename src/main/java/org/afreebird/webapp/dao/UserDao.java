package org.afreebird.webapp.dao;

import java.util.List;

import org.afreebird.webapp.pojo.User;

public interface UserDao {

	public List<User> getUser(Long userId);
	
	public int saveUser(User user);
}
