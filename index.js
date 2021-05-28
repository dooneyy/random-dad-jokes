const button = document.querySelector('.joke-button');
const spinner = document.querySelector('.spinner');
button.addEventListener('click', getJoke);
const url = "https://icanhazdadjoke.com/";
const options = { 
  method: 'GET',
  headers: {
    "Accept" : "application/json" 
  }
};

async function getJoke() {
   spinner.classList.remove('hidden');
   button.disabled = true;

   try{
       const response = await fetch(url, options);

       if(!response.ok) {
        throw Error(response.statusText)
    }   
        const json = await response.json();
        showQuote(json);
   
   } catch(err) {
       console.log("Error, can't fetch.")
       document.querySelector('.error').style.display = 'block';
       setTimeout(() => {
        document.querySelector('.error').style.display = 'none';
       }, 2000);

   } finally{
       spinner.classList.add('hidden');
       button.disabled = false;
   }
};

function showQuote(jokes) {
    const jokeText = document.querySelector('.jokes-result');
    jokeText.textContent = jokes.joke;
}