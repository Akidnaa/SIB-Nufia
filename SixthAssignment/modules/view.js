export class UserView {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
    }

    showUsers(users, controller) {
        this.container.innerHTML = "";

        const listHTML = users.map(u => `
            <li>
                <strong>Nama:</strong> ${u.nama}, 
                <strong>Umur:</strong> ${u.umur}, 
                <strong>Alamat:</strong> ${u.alamat}, 
                <strong>Email:</strong> ${u.email} 
                <button data-email="${u.email}">Hapus</button>
            </li>
        `).join("");

        this.container.innerHTML = `<ul>${listHTML}</ul>`;

        // Tambahkan event listener untuk tombol hapus
        this.container.querySelectorAll("button").forEach(btn => {
            btn.addEventListener("click", () => {
                controller.deleteUser(btn.dataset.email);
            });
        });
    }
}
