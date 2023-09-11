const Contact = () => {
    return (
        <>
            <div>
                <h1 className="intro">Contact Me</h1>
            </div>
            <div>
                <section id="contact">
                    <h1> </h1>
                    <div className="row">
                        <div className="col-6">
                            <p>
                                Want to get in touch? Shoot me an{" "}
                                <a href="mailto:BrandiTayler.me@gmail.com">
                                    email
                                </a>{" "}
                                or fill out the form.
                            </p>
                        </div>
                        <div className="col">
                            <form>
                                <div className="row">
                                    <div className="col-3">
                                        <label>First Name:</label>
                                    </div>
                                    <div className="col">
                                        <input
                                            className="inputBox"
                                            type="text"
                                            placeholder="First Name"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label>Last Name: </label>
                                    </div>
                                    <div className="col-1">
                                        <input
                                            className="inputBox"
                                            type="text"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label>Email: </label>
                                    </div>
                                    <div className="col-1">
                                        <input
                                            className="inputBox"
                                            id="email"
                                            type="email"
                                            placeholder="Email address"
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label>Lets Chat </label>
                                    </div>
                                    <div className="col-1">
                                        <textarea
                                            className="textBoxWidth"
                                            placeholder="What would you like to talk about with me?"
                                        ></textarea>
                                        <button
                                            type="button"
                                            className="btn btn-primary text-nowrap"
                                        >
                                            📤 Let's Chat Soon! 📥
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default Contact;
