// Rules in jsx

// 📖 Rule 1: class nahi, className likho

import './index.css';

function Rule1(){
    return(
        <div>
            <h2>Rule 1 : className</h2>

            <div className="my-box">Iam a new box</div>
        </div>
    )
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

    )
}
export {Rule1,Rule2};
