export default function Contact () {
    return (
        <>
        <section id="Contact" className="container py-5">
            <div className="text-center mb-5">
            <h2 className="fw-bold">Contact Us</h2>
            <p className="text-body-secondary">We’d love to hear from you</p>
            </div>
            <div className="row">
            <div className="col-md-6">
                <form className="p-4 border rounded-3 shadow-sm bg-light">
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" id="name" className="form-control" placeholder="Your name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea id="message" className="form-control" rows="4" placeholder="Write your message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
            <div className="col-md-6 d-flex align-items-center">
                <div>
                <h5>Address</h5>
                <p>123 Book Street, Jakarta, Indonesia</p>
                <h5>Email</h5>
                <p>support@bookstore.com</p>
                <h5>Phone</h5>
                <p>+62 812-3456-7890</p>
                </div>
            </div>
            </div>
        </section>
        </>
    )
}