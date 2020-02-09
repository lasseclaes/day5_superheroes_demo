//notes: errors 1. somebody spelled it "nemesis" (instead of "nemeses"), 2. Someboody wrote "Power" w capital P 3. someone added "color", 4. strings instead of array. 5 Someone lefft out e.g. Selfie

//code improvement: might use the <figure>-element?

let counter = 0;

superheroes.forEach(showSuperhero);

function showSuperhero(superhero) {
  //debugger;
  counter++;
  //console.table(superhero);

  //  console.log(`Name: ${superhero.name}`);
  //  console.log(`Name: ${superhero.alias}`);
  //  console.log(`Name: ${superhero.power}`);
  //
  const template = document.querySelector('template').content;

  const clone = template.cloneNode(true);

  clone.querySelector('h2').textContent = counter + ". " + superhero.alias;

  const selfieImg = clone.querySelector('img');
  //console.log(selfieImg);
  selfieImg.src = superhero.selfie;
  selfieImg.alt = superhero.alias;

  clone.querySelector('h4').textContent = superhero.name;

  const powers = superhero.power;
  console.log("array length: " + powers.length);

  for (i = 0; i < powers.length; i++) {
    const elementLi = document.createElement("li");
    elementLi.textContent = powers[i];
    clone.querySelector('.powers').appendChild(elementLi);
  }

  clone.querySelector('.weakness').textContent = superhero.weakness;

  superhero.nemeses.forEach(function (nemesis) {
    const elementDt = document.createElement("dt");
    elementDt.textContent = "Enemy name: " + nemesis.name;
    clone.querySelector(".enemies").appendChild(elementDt);
    const elementDd = document.createElement("dd");
    elementDd.textContent = "Enemy power: " + nemesis.power;
    clone.querySelector(".enemies").appendChild(elementDd)
  });

  //
  //  superhero.nemeses.forEach(function (elem) {
  //    const elementLi = document.createElement("li")
  //    elementLi.textContent = elem.name;
  //    clone.querySelector(".enemies").appendChild(elementLi)
  //  });

  document.querySelector('main').appendChild(clone);
}
