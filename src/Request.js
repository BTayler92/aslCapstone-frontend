import APIURL from "./APIURL";

const Request = () => {
    const sendRequest = async (event) => {
        event.preventDefault();
        await fetch(`${APIURL}/request`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: event.target.elements.name.value,
                email: event.target.elements.email.value,
                details: event.target.elements.details.value,
            }),
        });
    };

    return (
        <>
            <div>
                <div>
                    <h1 className="makeRequest">Make a Request!</h1>
                    <p className="makeRequest">
                        Use the form below to put in a request for a specific
                        Sign, Phrase, or other idea!
                    </p>
                </div>
                <div>
                    <form onSubmit={sendRequest}>
                        <div className="row mb-3">
                            <label
                                for="inputName3"
                                className="col-sm-2 col-form-label"
                            >
                                Name
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                for="inputEmail3"
                                className="col-sm-2 col-form-label"
                            >
                                Email
                            </label>
                            <div className="col-sm-10">
                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label
                                for="inputEmail3"
                                className="col-sm-2 col-form-label"
                            >
                                Request Details
                            </label>
                            <div className="col-sm-10">
                                <textarea
                                    className="form-control"
                                    name="details"
                                />
                            </div>
                        </div>
                        {/* <div className="row mb-3">
                            <div className="col-sm-10 offset-sm-2">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="gridCheck1"
                                    />
                                    <label
                                        className="form-check-label"
                                        for="gridCheck1"
                                        id="requestCheckbox"
                                    >
                                        *Make me into something useful already!*
                                    </label>
                                </div>
                            </div>
                        </div> */}
                        <button type="submit" className="btn btn-primary">
                            Make a Request
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Request;
