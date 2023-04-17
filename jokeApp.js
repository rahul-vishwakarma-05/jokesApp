
// ----------------- js for english jokes ---------------------------

// const api = "https://icanhazdadjoke.com/";
// const jokes_p = document.querySelector('.jokes');
// let realData = "";

// const btn = document.querySelector('.joke_outerBody > button');
// const Newjokes = () => {
//     jokes_p.innerText = realData.joke;
// };

// btn.addEventListener('click', () => {
//     jokes();
// });



// const jokes = async () => {
//     try {

//         const setHeader = {
//             headers: {
//                 Accept: "application/json"
//             }
//         }
//         const apiData = await fetch(api, setHeader);
//         realData = await apiData.json();


//         Newjokes();

//     } catch (error) {
//         alert('Some thing error');
//     }
// };

// jokes();


// ----------------- js for hindi jokes ---------------------------


const api       = 'https://hindi-jokes-api.onrender.com/jokes/2?api_key=60fa6dd31a93f28f70ce492b964b';
let realData    = '';
const joke_box  = document.querySelector('.jokes');
const btn       = document.querySelector('.joke_outerBody > button');


console.log(realData);


const newJokes = () => {

  joke_box.innerText = `${realData.data[0].jokeContent}`;
}

const jokes = async () => {

    try {

        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }
        const apiData = await fetch(api, setHeader);
        realData = await apiData.json();


        newJokes();

    } catch (error) {
        alert(error);
    }

}

jokes();

btn.addEventListener('click' , () =>{
  jokes();
});