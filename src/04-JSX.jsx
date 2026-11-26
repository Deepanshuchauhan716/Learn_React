// 📖 Chapter 4: Conditional Rendering (If-Else ka Alternative)

// 1. Problem kya hai? (Why we need this)
// Pichle chapter mein humne padha ki {} ke andar hum if-else nahi likh sakte.

// jsx
// ❌ GALAT
// <p>{ if (isLoggedIn) { "Welcome" } }</p>
// Lekin real life mein humein conditions lagani padti hain. Agar user logged in hai toh "Logout" button dikhao, warna "Login" button dikhao. Toh phir JSX mein yeh kaise karte hain?

// Iske liye hum JavaScript Expressions ka use karte hain. Do sabse popular tarike hain:


// Tarika 1: Ternary Operator (? :)
// Tarika 2: Logical AND (&&)


function ConditionalDemo(){

    const isLogin = true;
    const isAdmin = false;
    const HasNotification = true;

    return(
        <div style={{padding:"10px",border:"1px dashed #ccc"}}>
            <h1>Chapter 4 : Conditional rendering</h1>

            <h2>1 : Ternary operator</h2>
            <p>
                status : {isLogin ? "Online" : "Offline"}
            </p>

            <h2>Logical AND &&</h2>
            {isAdmin && <button style={{color:"red"}}>Delete Database</button>}

            <h3> 3.notification </h3>
            {HasNotification ? (<p>You have a new msg</p>) : (<p>You have no new message</p>)}
        </div>
    );

}

export {ConditionalDemo};
