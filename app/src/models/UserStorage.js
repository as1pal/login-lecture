"use strict";

class UserStorage {
    static #users = {
        id: ["IT", "개발", "김"],
        password: ["123", "1231", "123124"],
        name: ["wj", "apple"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }
}

module.exports = UserStorage;