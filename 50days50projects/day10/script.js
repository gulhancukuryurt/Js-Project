const getJoke = document.querySelector(".btn");
const jokes = document.querySelector(".jokes");

getJoke.addEventListener('click', getJokeGenerate);

getJokeGenerate()

async function getJokeGenerate() {
   const jokeRes = await 
   fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
   });

   const joke = await jokeRes.json()
   jokes.innerText = joke.joke;
}