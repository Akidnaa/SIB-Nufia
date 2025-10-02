export default function Hero () {
    return (
        <>  
            <div className="container my-4">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-4 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="fw-bold lh-1 text-body-emphasis fs-2">
                    IKIGAI: The thing that makes life worth living
                    </h1>
                    <p className="lead">
                    Easy and approved way for developing good habits and getting rid of bad habits
                    </p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-3">
                    <button type="button" className="btn btn-warning btn-lg px-4 me-md-2 fw-bold">
                        Buy Now!
                    </button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">
                        Detail
                    </button>
                    </div>
                </div>

                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img
                    className="rounded-lg-3"
                    src="https://picsum.photos/720/600"
                    alt="Hero"
                    width="720"
                    />
                </div>
                </div>
            </div>
        </>
    )
}