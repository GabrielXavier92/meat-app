"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined &&
            another.email === this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "gabriel@gmail.com": new User('gabriel@gmail.com', 'Gabriel', '123456'),
    "luiz@gmail.com": new User('luiz@gmail.com', 'Luiz', '123456')
};
