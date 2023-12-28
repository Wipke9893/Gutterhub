package org.gutter.dao;

import org.gutter.model.User;
import org.gutter.model.RegisterUserDto;

import javax.validation.Valid;
import java.util.List;

public interface UserDao {

    List<User> getUsers();

    User getUserById(int id);

    User getUserByUsername(String username);

    User createUser(@Valid RegisterUserDto user);
}
