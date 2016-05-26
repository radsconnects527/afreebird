package org.afreebird.webapp.dao.impl;

import java.util.List;

import org.afreebird.webapp.dao.MainDao;
import org.afreebird.webapp.dao.UserDao;
import org.afreebird.webapp.pojo.User;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl extends MainDao implements UserDao {
	
	@Value("#{userQueries['getAllUsers']}")
	private String getAllUsers;
	
	@Value("#{userQueries['createUser']}")
	private String createUser;

	public List<User> getUser(Long userId) {
		List<User> cards = jdbcTemplate.query(getAllUsers, new BeanPropertyRowMapper<User>(User.class));
		return cards;
	}
	
	public int saveUser(User user) {
		return jdbcTemplate.update(createUser, 
				new Object[]{user.getFirstName(), user.getLastName(), user.getEmailId(), user.getUserPassword()});
	}
}
