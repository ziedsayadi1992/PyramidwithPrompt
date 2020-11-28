

function createPyramid(num)
{
    if((num<1 || num>24)){
       console.log('il faut un nombre naturel entre 1 et 24')
    }
    else {
        for (let i = 0; i < num; i++) {
            let result = '';
            for (let j = 0; j < num - i; j++) result += ' ';
            for (let k = 0; k <= i; k++) result += '# ';
            console.log(result)
     }
    } 
}


let num = window.prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")
if((num<1 || num>24)){
  num= window.prompt('il faut un nombre naturel entre 1 et 24 , essayez encore')
  console.log('voici la pyramide : ')
 createPyramid(num)
}else{
 console.log('voici la pyramide : ')
 createPyramid(num)
}






