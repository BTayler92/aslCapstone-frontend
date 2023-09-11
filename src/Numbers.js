import { useState } from "react";
const Numbers = () => {
    return (
        <>
            <div>
                <h1 className="intro">Digits</h1>
            </div>
            <div className="digits">
                <div className="row">
                    <div className="col">
                        <img
                            className="img-fluid imgNum"
                            src="/CapstoneASL-IMG/num-0.jpg"
                            alt="ASL handshape for the Digit Zero (0)"
                        />
                    </div>
                    <div className="col">
                        <img
                            className="img-fluid imgNum"
                            src="/CapstoneASL-IMG/num-1.jpg"
                            alt="ASL handshape for the Digit One (1)"
                        />
                    </div>
                    <div className="col">
                        <img
                            className="img-fluid imgNum"
                            src="/CapstoneASL-IMG/num-2.jpg"
                            alt="ASL handshape for the Digit Two (2)"
                        />
                    </div>
                    <div className="col">
                        <img
                            className="img-fluid imgNum"
                            src="/CapstoneASL-IMG/num-3.jpg"
                            alt="ASL handshape for the Digit Three (3)"
                        />
                    </div>
                    <div className="col">
                        <img
                            className="img-fluid imgNum"
                            src="/CapstoneASL-IMG/num-4.jpg"
                            alt="ASL handshape for the Digit Four (4)"
                        />
                    </div>
                </div>
                <div className="row imgRow">
                    <div className="col">
                        <img
                            className="img-fluid imgNum"
                            src="/CapstoneASL-IMG/num-5.jpg"
                            alt="ASL handshape for the Digit Five (5)"
                        />
                    </div>
                    <div className="col">
                        <img
                            className="img-fluid imgNum"
                            src="/CapstoneASL-IMG/num-6.jpg"
                            alt="ASL handshape for the Digit Six (6)"
                        />
                    </div>
                    <div className="col">
                        <img
                            className="img-fluid imgNum"
                            src="/CapstoneASL-IMG/num-7.jpg"
                            alt="ASL handshape for the Digit Seven (7)"
                        />
                    </div>
                    <div className="col">
                        <img
                            className="img-fluid imgNum"
                            src="/CapstoneASL-IMG/num-8.jpg"
                            alt="ASL handshape for the Digit Eight (8)"
                        />
                    </div>
                    <div className="col">
                        <img
                            className="img-fluid imgNum"
                            src="/CapstoneASL-IMG/num-9.jpg"
                            alt="ASL handshape for the Digit Nine (9)"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Numbers;
