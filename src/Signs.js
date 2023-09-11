import { useState } from "react";
const Signs = () => {
    const [selectedSign, setSelectSelectedSign] = useState();
    const optionSelected = (event) => {
        setSelectSelectedSign(null);
        const selection = event.target.value;
        // console.log(selection);

        setTimeout(() => {
            setSelectSelectedSign(selection);
        }, 200);
    };

    return (
        <>
            <div>
                <h1 className="intro signs">Signs</h1>
            </div>
            <div>
                <h2 className="description">
                    Select the word or phrase below on the left to see an
                    example on the right
                </h2>
            </div>
            <div className="row">
                <div className="col">
                    <input
                        type="radio"
                        value="howareyou"
                        onChange={optionSelected}
                        name="signs"
                    />
                    How are you?
                    <br />
                    <input
                        type="radio"
                        value="nicemeetyou"
                        onChange={optionSelected}
                        name="signs"
                    />
                    Nice to meet you!
                    <br />
                    <input
                        type="radio"
                        value="younamewhat"
                        onChange={optionSelected}
                        name="signs"
                    />
                    What's your name?
                </div>

                <div className="col" id="mp4">
                    {selectedSign && (
                        <video style={{ width: "100%" }} muted={true} controls>
                            <source
                                type="video/mp4"
                                src={`/CapstoneASL-MP4/signs-${selectedSign}.mp4`}
                            />
                        </video>
                    )}
                </div>
            </div>
        </>
    );
};

export default Signs;
