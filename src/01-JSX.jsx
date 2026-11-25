// ⚛️ React kya hota hai? (Ekdum Basic)
// 1. Simple Definition
// React ek JavaScript library hai jiska use karke hum website ka "UI" (User Interface - jo screen par dikhta hai) banate hain.

// Matlab, jo bhi aapko website par dikhta hai—buttons, forms, navbar, images—woh sab React ki madad se banaya ja sakta hai.



// 🟢 JSX kya hota hai?
// 1. Ek line mein definition
// JSX ka matlab hai JavaScript XML. Yeh React mein UI (screen par dikhne wali cheezein) likhne ka ek tarika hai jo bilkul HTML jaisa dikhta hai, lekin hota JavaScript hai.

// 2. Problem kya thi? (Kyun JSX banaya gaya?)
// Normal JavaScript mein agar aapko screen par ek heading dikhani ho, toh aapko aisa likhna padta tha:

// const heading = document.createElement('h1');
// heading.innerText = 'Hello World';

// React ne socha: "Kyun na JavaScript ke andar hi HTML jaisa likhne ki permission de di jaye?"
// Bas wahi hai JSX. Yeh HTML jaisa dikhta hai, par iske andar JavaScript ki power hoti hai.

// 3. JSX dikhta kaisa hai?

// const element = <h1>Hello React!</h1>;

// JSX ka sabse bada fayda yahi hai. Aap HTML ke beech mein {} (curly braces) laga kar koi bhi JavaScript code chala sakte ho.

function MyJSXPractice(){

    const name = "Deepanshu";
    const age = 20;

    const element = (
        <div>
            <h1>my name is {name}</h1>
            <h1>my age is {age}</h1>
        </div>
    );

    return (
        <div style={{border : "2px solid green",padding:"10px",margin:"10px"}}>
            <h2>1 jsx output</h2>
            {element}
        </div>
    );
}

export default MyJSXPractice;

// Chapter 2: JSX ke 3 Sunehri Rules (The "Rules")

// Rule 1: class nahi, className likho

// HTML mein hum <div class="box"> likhte hain. Par JavaScript mein class ek reserved keyword hai (jo classes banane ke liye use hota hai). Isliye React ne iska naam badal diya.

// HTML: <div class="box">

// JSX: <div className="box"> ✅

// Rule 2: Ek hi Parent  hona chahiye
// Aap ek component se ek saath do alag-alag tags return nahi kar sakte. Unko ek parent ke andar lapetna padega.


// Rule 3: Har tag band hona chahiye (Self-Closing)
// HTML mein <img>, <br>, <input> bina band kiye chalte hain. Par JSX mein har tag ko band karna zaroori hai. Agar uske andar kuch nahi hai, toh slash lagao.

// HTML: <img src="pic.jpg">

// JSX: <img src="pic.jpg" /> ✅


