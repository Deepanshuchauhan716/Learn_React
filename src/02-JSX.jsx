// Rules in jsx

// 📖 Rule 1: class nahi, className likho

import './index.css';

function Rule1(){
    return(
        <div>
            <h2>Rule 1 : className</h2>

            <div className="my-box">Iam a new box</div>
        </div>
    );
}

// 📖 Rule 2: Ek hi Parent hona chahiye

function Rule2(){
    return(
        <>
        <h2>Rule 2 : only one parent</h2>
        <p>Iam first paragrapg</p>
        <p>iam second paragraph</p>

        <div style={{border:"1px solid black",padding:"10px",marginTop:"10px"}}>
            <h2>iam in the div</h2>
            <p>all children are safe </p>
        </div>
        </>

    );
}


// 📖 Rule 3: Har tag band hona chahiye (Self-Closing)

function Rule3(){
    return(
        <>
            <h1>Rule 3</h1>
            <img src="photo.jpg" alt="Profile photo" />
            <input type="text" />
        </>
    );
}
export {Rule1,Rule2,Rule3};
