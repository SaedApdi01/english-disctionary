const input = document.getElementById('input');
const infotext = document.getElementById('info-text');
const meaning  = document.getElementById('meaning-container');
const wordtitle = document.getElementById('title')
const wordmeaning = document.getElementById('meaning')
const wordaudio = document.getElementById('audio');
const wordexample = document.getElementById('example')

 async function fetchApi(event){
  const Url = `https://api.dictionaryapi.dev/api/v2/entries/en/${event}`
  try{
    const result = await fetch(Url)
    const data = await result.json()
    console.log(data)
    infotext.style.display =  'none';
    meaning.style.display = 'block';

    wordtitle.innerText = `${data[0].word}`;
    wordmeaning.innerText = `${data[0].meanings[0].definitions[0].definition}`;
    wordexample.innerText = `${data[0].meanings[0].definitions[0].example}`
    wordaudio.src = data[0].phonetics[0].audio;
  }catch(error){
    console.log(error)
  }
}


input.addEventListener("keyup", (event) =>{
  if(event.target.value && event.key === 'Enter'){
    fetchApi(event.target.value);
  }
})