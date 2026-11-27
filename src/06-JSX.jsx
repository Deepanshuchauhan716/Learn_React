// 📖 Chapter 6: State & useState (React ka Jaadu)

// const { useState } = require("react");

// 1. State kya hota hai? (What is State?)
// State matlab "Halat" ya "Data" jo badal sakta hai.

// Maan lo aapke paas ek Light Switch (Button) hai aur ek Bulb.

// Shuru mein switch OFF hai (Bulb nahi jal raha).

// Aapne switch dabaya (Click).

// Ab switch ON ho gaya (Bulb jal gaya).

// Yahan switch ki halat (state) ON se OFF aur OFF se ON ho rahi hai. React mein hum is data ko track karte hain taaki UI uske hisaab se update ho.

import { useState } from "react";

function LightSwitch() {

    const [isOn, setIson] = useState(false);


    return (
        <div style={{ padding: "30px", textAlign: "center", fontFamily: "Arial" }}>
            <h2>Light Switch practical</h2>


            <div style={{ fontSize: "60px", margin: "20px" }}>
                {isOn ? "💡" : "🌑"}
            </div>

            <h3 style={{ color: isOn ? "green" : "red" }}>
                Light is {isOn ? "ON" : "OFF"}
            </h3>

            <button
                onClick={() => setIson(!isOn)}
                style={{
                    padding: "10px 20px",
                    fontSize: "16px",
                    cursor: "pointer",
                    backgroundColor: isOn ? "red" : "green",
                    color: "white",
                    border: "none",
                    borderRadius: "5px"
                }}
            >
                {isOn ? "Turn OFF" : "Turn ON"}
            </button>
        </div>
    )
}

export { LightSwitch };
