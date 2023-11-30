let tueur = "jason";
let pointdevietueur = 100;

let nomArray = ["Bob", "Kevin", "Tracer", "Johny", "Francois"];
let caractéristiqueArray = ["Costaud", "Nerd", "Colérique", "Sanguinaire", "Mignon"];

let survivants = []; //  tableau pour stocker les surviants
let morts = []; //  tableau pour stocker les noms des morts

function characteres() {
  const randomname = Math.floor(Math.random() * nomArray.length);
  let nom = nomArray[randomname];
  nomArray.splice(randomname, 1);

  const randomchara = Math.floor(Math.random() * caractéristiqueArray.length);
  let caractéristique = caractéristiqueArray[randomchara];
  caractéristiqueArray.splice(randomchara, 1);

  let mortalite = Math.floor((Math.random() * 10)) / 10;
  let frappe = Math.floor((Math.random() * (1 - mortalite) * 10)) / 10;
  let mortfrappe = (1 - mortalite - frappe).toFixed(1);
  let vie = 1;

  return [nom, caractéristique, mortalite, frappe, mortfrappe, vie];
}

for (let i = 0; i < 5; i++) {
  survivants.push(characteres());
  let surv = survivants[i];
  console.log("Un nouveau personnage est apparu : " + surv[0] + " le " + surv[1] +
    " mortalité : " + surv[2] +
    " frappe et esquive : " + surv[3] +
    " frappe et mort : " + surv[4] +
    " points de vie : " + surv[5]);
}

while (pointdevietueur > 0 && survivants.length > 0) {
  let surv = survivants[0];
  let nom = surv[0];
  let caractéristique = surv[1];
  let mortalite = surv[2];
  let frappe = surv[3];
  let mortfrappe = surv[4];
  let vie = surv[5];

  const frappeJason = Math.random();

  if (frappeJason < frappe) {
    console.log(nom + " a esquivé et a infligé 10 dégâts à Jason, il reste " + pointdevietueur + " points de vie à Jason");
    pointdevietueur -= 10;
  } else {
    if (frappeJason > mortalite) {
      console.log("Jason a tué " + nom + ", il reste " + pointdevietueur + " points de vie à Jason");
      survivants.shift();
      morts.push(nom); // Ajouter le nom du survivant au tableau des morts
    } else {
      pointdevietueur -= 15;
      console.log(nom + " a infligé 15 dégâts à Jason mais il a été tué par Jason, il reste " + pointdevietueur + " points de vie à Jason");
      survivants.shift();
      morts.push(nom); // Ajouter le nom du survivant au tableau des morts
    }
  }
}

if (pointdevietueur <= 0) {
  console.log("les survivants ont gagné mais R.I.P " + morts.join(", ") )  ;
} else {
  console.log("R.I.P " + morts.join(", ") + " Jason a tué tout le monde!"); // Afficher les noms des morts précédés de "R.I.P"
}
