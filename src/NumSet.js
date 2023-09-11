import { useState } from "react";

const NumSet = () => {
    const [selectedNumSet, setSelectSelectedNumSet] = useState();
    const optionSelected = (event) => {
        setSelectSelectedNumSet(null);
        const selection = event.target.value;
        // console.log(selection);

        setTimeout(() => {
            setSelectSelectedNumSet(selection);
        }, 200);
    };

    return (
        <>
            <div className="NumSet">
                <div>
                    <h1 className="intro">Numbers 1 - 100</h1>
                </div>
                <div>
                    <h2 className="description">
                        Select the number set below on the left to see an
                        example on the right.
                    </h2>
                </div>
                <div className="row">
                    <div className="col">
                        <input
                            type="radio"
                            value="1-10"
                            onChange={optionSelected}
                            name="NumSet"
                        />
                        Numbers 1-10
                        <br />
                        <input
                            type="radio"
                            value="10-20plus"
                            onChange={optionSelected}
                            name="NumSet"
                        />
                        Numbers 10-20
                        <br />
                        <input
                            type="radio"
                            value="20-30"
                            onChange={optionSelected}
                            name="NumSet"
                        />
                        Numbers 20-30
                        <br />
                        <input
                            type="radio"
                            value="30-40"
                            onChange={optionSelected}
                            name="NumSet"
                        />
                        Numbers 30-40
                        <br />
                        <input
                            type="radio"
                            value="40-50"
                            onChange={optionSelected}
                            name="NumSet"
                        />
                        Numbers 40-50
                        <br />
                        <input
                            type="radio"
                            value="50-60"
                            onChange={optionSelected}
                            name="NumSet"
                        />
                        Numbers 50-60
                        <br />
                        <input
                            type="radio"
                            value="60-70"
                            onChange={optionSelected}
                            name="NumSet"
                        />
                        Numbers 60-70
                        <br />
                        <input
                            type="radio"
                            value="70-80"
                            onChange={optionSelected}
                            name="NumSet"
                        />
                        Numbers 70-80
                        <br />
                        <input
                            type="radio"
                            value="80-90"
                            onChange={optionSelected}
                            name="NumSet"
                        />
                        Numbers 80-90
                        <br />
                        <input
                            type="radio"
                            value="90-100"
                            onChange={optionSelected}
                            name="NumSet"
                        />
                        Numbers 90-100
                    </div>

                    <div className="col" id="mp4">
                        {selectedNumSet && (
                            <video
                                style={{ width: "100%" }}
                                muted={true}
                                controls
                            >
                                <source
                                    type="video/mp4"
                                    src={`/CapstoneASL-MP4/NumSet-${selectedNumSet}.mp4`}
                                />
                            </video>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default NumSet;
