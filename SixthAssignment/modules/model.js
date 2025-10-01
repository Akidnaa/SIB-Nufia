import { initialUsers } from "./data.js";

export class UserModel {
    constructor() {
        this.users = [...initialUsers]; // salin data awal
    }

    getUsers() {
        return this.users;
    }

    addUser(user) {
        this.users.push(user);
    }

    deleteUser(email) {
        // Hapus menggunakan filter (simple syntax)
        this.users = this.users.filter(u => u.email !== email);
    }
}
