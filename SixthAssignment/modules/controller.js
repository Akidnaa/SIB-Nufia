import { UserModel } from "./model.js";

export class UserController {
    constructor(view) {
        this.model = new UserModel();
        this.view = view;
    }

    addUser(user) {
        if (user.nama && user.email) {
            this.model.addUser(user);
            this.view.showUsers(this.model.getUsers(), this);
        }
    }

    deleteUser(email) {
        this.model.deleteUser(email);
        this.view.showUsers(this.model.getUsers(), this);
    }
}
