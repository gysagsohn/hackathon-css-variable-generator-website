import { useEffect, useState } from "react";
import { useBaseColourGlobalData, useBaseColourGlobalDispatch } from "../contexts/baseColourContext";
import { Sketch } from "@uiw/react-color";

export default function GeneratorPage() {
    // Base Colour from form
    let [formBaseColour, setFormBaseColour] = useState("#000000");

    // Base colour from global state
    let baseColourGlobal = useBaseColourGlobalData();
    let setBaseColourGlobal = useBaseColourGlobalDispatch();

    // On component mount, set local form value to global state value
    useEffect(() => {
        setFormBaseColour(baseColourGlobal);
    }, [baseColourGlobal]);

    useEffect(() => {
        setBaseColourGlobal(formBaseColour);
    }, [formBaseColour]);

    // Function to handle form input change
    const handleInputChange = (e) => {
        const newColour = e.target.value;
        setFormBaseColour(newColour);
        setBaseColourGlobal(newColour);
    };

    return (
        <div>
            {/* Base colour input form */}
            <h1>Base Colour: {formBaseColour}</h1>
            {/* <input 
                type="color" 
                value={formBaseColour} 
                onChange={handleInputChange} 
            /> */}
			<Sketch color={formBaseColour} onChange={(colour) => setFormBaseColour(colour.hex)} />
            {/* CSS theme display component */}
        </div>
    );
}
