const fetchHandler = res => {    
  if(!res.ok) throw Error('Api error!');
  return res.json();
};

let pers = [];

  const  requisicao = () => fetch('https://rickandmortyapi.com/api/character/1')
  .then(response => {
    return response.json(); 
  })
  .then(data => {
    console.log(data);
    pers.push(data.name);
    
  })
  .catch(fetchHandler)

  const  requisicao2 = () => fetch(`https://rickandmortyapi.com/api/character/?name=${pers[0].split(" ")[0]}`)
  .then(response => {
    return response.json(); 
  })
  .then(data => {
    let info = data.results[0].image
    console.log(info);
    let modal = document.getElementById("modal");
    modal.innerHTML = "";
    let title = document.createElement('h2');
    title.classList.add("title");
    modal.appendChild(title);
    title.innerHTML = data.results[0].name;

    let img = document.createElement('img');
    img.src = info;
    modal.append(img);
  })
  .catch(fetchHandler)
  
async function callRick(){
  await console.log("Executando");
  await requisicao();
  console.log(pers)
  requisicao2();
  

}

document.getElementById("prom").addEventListener('click', callRick)