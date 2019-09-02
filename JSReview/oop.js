class User {
    constructor(email,name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login() {
        console.log(this.email, 'Just logged in');
        return this;
    }
    logout() {
        console.log(this.email, 'Just logged out');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email, 'Score is now', this.score);
        return this;
    }
}

// Admin only methods extending from User class
class Admin extends User{
    deleteUser(user){
        users = users.filter(u => {
            return u.email != user.email;
        })
    }
}

var userOne = new User('ryu@ninjas.com','Ryu');
var userTwo = new User('yoshi@ninjas.com','Yoshi');
var admin = new Admin('shaun@ninjas.com','shaun');

var users = [userOne,userTwo];
// Only admin user can use deleteUser method.
admin.deleteUser(userOne);
console.log(users);
// userOne.login().updateScore().logout();
// userOne.updateScore();
// userTwo.updateScore();
// userOne.logout();

// the 'new' keyword
// - creates a new empty object {}
// - sets the value of 'this' to be the new empty object
// - calls the constructor method