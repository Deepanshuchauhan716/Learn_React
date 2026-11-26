// 📖 Chapter 3: JSX mein JavaScript ka Jaadu ({})

const name = "Rahul";
const age = 20;

function User(){
    return(
        <div>
            <h1>my name is {name.toUpperCase()}</h1>
            <p>my age is {age + 2}</p>
        </div>
    )
}

function CurlyBraces(){
    const name2 = "Anuuu";
    const age2 = 17;
    const skill = ["HTML","CSS","JavaScript"];
    const user = {
        role : "Developer",
        city : "Delhi"
    };

    return(
        <div style={{padding:"20px",height:"300px",width:"300px",border:"1px solid black"}}>
            <h1>Chapter 3 : Curly braces</h1>
            <p>1 : My name is {name2}</p>
            <p>2 : next year my age : {age2 + 1}</p>
            <p>3 : Total skill : {skill.length}</p>
            <p>4 : user city : {user.city}</p>
        </div>
    )
}

export {User,CurlyBraces};
