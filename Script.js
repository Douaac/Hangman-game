const motE1=document.getElementById('mot');
const mauvaiseLettres=document.getElementById('mauvaises-lettres');
const rejouerBtn=document.getElementById('input');
const popup=document.getElementById('popup-contenant');
const notification=document.getElementById('notification-contenant');
const messageFinal=document.getElementById('message-final');


const figurePartie=document.querySelectorAll('.figure-partie');

const mots=['internet', 'siteweb', 'processus', 'ordinateur', 'application', 'composante', 'interface', 'css', 'javascript', 'html', 'web', 'programmation', 'java','ram','rom','pcportable','intel','catregraphique',"guitar","oxygen","mountain","painting","astronomy","football","chocolate",
"butterfly",
 "history",
"pizza",
"jazz",
"camera",
"diamond",
"adventure",
"science",
"bicycle",
"sunset",
"coffee",
"dance",
"galaxy",
"orchestra",
"volcano",
"novel",
"sculpture",
"symphony",
"technology",
"language",
"desert",
"sunflower",
"photography"];
let motSelection=mots[Math.floor(Math.random()*mots.length)];
console.log(motSelection)
const bonneslettresArr=[];
const mauvaisesLettresArr=[];
function afficherMot(){
    motE1.innerHTML= `
    ${motSelection
        .split('')
        .map(
            lettre=> `
            <span class="lettre">
            ${bonneslettresArr.includes(lettre) ? lettre :
            ''}
            </span>
            `
        )
        .join('')

    }
    `;
const motinterne=motE1.innerText.replace(/\n/g,'');
console.log(motE1.innerText,motinterne);
if(motinterne===motSelection){
    messageFinal.innerText='Bravo tu as gagné';
    popup.style.display='flex';
}

}
function updateMauvaiseLettre(){
    //afficher le mauvaise lettres
    mauvaiseLettres.innerHTML=`
    ${mauvaisesLettresArr.map(lettre=>`<span>${lettre}</span>`) }`

    //afficher le bonhomme
    figurePartie.forEach((partie,index)=>{
       const erreurs=mauvaisesLettresArr.length;
       if(index< erreurs){
        partie.style.display='block';
       }else{
        partie.style.display='none';
       }
    })   

    //verifier si on a perdu
    if(mauvaisesLettresArr.length===figurePartie.length){
        messageFinal.textContent='Malheureusement, tu as perdu!!!'
        popup.style.display='flex'
    }
}
//Afficher la notification
function afficherNotification(){
    notification.classList.add('afficher');
    setTimeout(() => {
        notification.classList.add('afficher')
        notification.classList.remove('afficher')}
    ,2000);

}
//event listeners
window.addEventListener('keydown',e=>{
    //console.log(e.keyCode);
    if(e.keyCode>=65 && e.keyCode<=90){
        const lettre= e.key;
        //console.log(lettre);
        if(motSelection.includes(lettre)){
            if(!bonneslettresArr.includes(lettre)){
                bonneslettresArr.push(lettre)
                afficherMot()
            }else{
                afficherNotification();
            }
        }else{
            if(!mauvaisesLettresArr.includes(lettre)){
                mauvaisesLettresArr.push(lettre);
                updateMauvaiseLettre();
            }else{
                afficherNotification();

            }
        }

    }

});
//rejouer
rejouerBtn.addEventListener("click", ()=>{

    bonneslettresArr.splice(0);
    mauvaisesLettresArr.splice(0);
    
        // Sélectionner un nouveau mot aléatoire
    motSelection = mots[Math.floor(Math.random() * mots.length)];
    
        // Réinitialiser l'affichage du mot
    afficherMot();
    
        // Réinitialiser l'affichage des lettres incorrectes
    updateMauvaiseLettre();
    
        // Cacher le message final
    popup.style.display = 'none';
    });

// Ajouter un écouteur d'événements au bouton de rejouer



afficherMot();



