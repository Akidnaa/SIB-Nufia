import { UserView } from "./modules/view.js";
import { UserController } from "./modules/controller.js";

// Inisialisasi MVC
const view = new UserView("dataContainer");
const controller = new UserController(view);

// Tambahkan minimal 2 user baru
controller.addUser({ nama: "Kevin", umur: 30, alamat: "Lampung", email: "kevin@mail.com" });
controller.addUser({ nama: "Lia", umur: 29, alamat: "Depok", email: "lia@mail.com" });

// Event listener untuk tombol "Tampilkan Data"
document.getElementById("btnShow").addEventListener("click", () => {
    view.showUsers(controller.model.getUsers(), controller);
});
