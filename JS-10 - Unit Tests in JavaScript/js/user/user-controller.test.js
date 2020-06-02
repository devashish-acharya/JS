const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('user is not in list', () => {
    let user = new User(1234,"dev", "dev@generation.org");  
    expect(userController.users).not.toContain(user);
  });
  
  test('user is not in list with remove', () => {
    let user = new User(1234,"dev", "dev@generation.org"); 
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  test('find by email', () => {
    let  user = new User(1234,"Santiago", "santiago@generation.org");
    let email = "santiago@generation.org";
    expect(userController.findByEmail(email)).toEqual(user);
  });

  test('find by email not there', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    let email = "thedev96@gmail.com";
    expect(userController.findByEmail(email)).not.toEqual(user);
  });

  test('find by id', () => {
    let user = new User(1234, "Santiago", "santiago@generation.org");
    let id = 1234;
    expect(userController.findById(id)).toEqual(users);
  });