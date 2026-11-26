// 📖 Chapter 5: Lists aur key ka Raaz
// 1. Problem kya hai? (Why we need this)
// Maan lo aapke paas JavaScript mein ek Array hai:

// javascript
// const fruits = ["Apple", "Banana", "Mango"];
// Ab aapko inko screen par list ki tarah dikhana hai. Aap seedha {fruits} nahi likh sakte, kyunki JavaScript array ko screen par direct nahi dikha sakte.


// 2. Solution: .map() Function
// JavaScript ka .map() function array ke har ek item par jaata hai, aur usko ek naye element (JSX tag) mein badal deta hai.

function MovieList(){

    const Movies = ["3 Idiots", "Interstellar", "Inception", "Dangal"];

    return(
        <div style={{padding:"20px",border:"1px dashed black",borderRadius:"8px"}}>
            <h2>Favourite Movies</h2>

            <ul>
                {Movies.map((movie,index) => (
                    <li key={index} style={{fontSize: "18px", margin: "5px 0"}}>
                        {movie}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export {MovieList};
