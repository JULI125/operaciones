const form = document.getElementById('form');
form.addEventListener('submit', (e)=>{
e.preventDefault();

})

// ('click', ()=>{
// })
function mayor(){
    let n1 = parseInt(document.getElementById('num1').value);
    let n2 = parseInt(document.getElementById('num2').value);
    while(n1 < 0 && n2 < 0){
        n1 *= -1;
        n2 *= -1;
        alert("Se ah hecho una conversion, los numeros quedaron positivos")
    }

    while(n1 > n2 && n1 < n2 ){
        alert(`El numero ${n1} es mayor que el numero ${n2}`)
    }
    alert(`El numero ${n2} es mayor que el numero ${n1}`)
    
    // while(n1 == n2 && n1 == n2){
    //     alert("El numero" + n1 + "y el numero" +n2 + "son iguales");
    // }
}


function igual(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    while(n1 < 0 && n2 < 0){
        n1 *= -1;
        n2 *= -1;
        alert("Se ah hecho una conversion, los numeros quedaron positivos")
    }
    while (n1 == n2){
        alert(`Los numeros ${n1} y ${n2} son iguales`);
    }
    alert(`Los numeros ${n1} y ${n2} son diferentes`);
}

function cambiar(){
    let n1 = parseInt(document.getElementById("num1").value);
    let n2 = parseInt(document.getElementById("num2").value);
    while(n1 < 0 && n2 < 0){
        n1 *= -1;
        n2 *= -1;
        alert("Se ah hecho una conversion, los numeros quedaron positivos");
    }
    while(n1 != n2){
        [n1, n2]=[n2, n1]
     alert(`Los numeros se han intercambiado ${n1} ${n2}`);
    }

}

function sumar(){
     n1 = parseInt(document.getElementById("num1").value);
     n2 = parseInt(document.getElementById("num2").value);
     let r;
    while(n1 < 0 && n2 < 0){
        numero *= -1;
        numero2 *= -1;
        alert("Se ah hecho una conversion, los numeros quedaron positivos");
    }
    while(n2 !=0){
      r = n1 & n2;
      n1 = n1 ^ n2;
      n2 = r << 1
    }

    alert(`El resultado de la suma es: ${n1}`)
//  const resul = sumar(n1)(n2)
// console.log(resul)
    
//      return function(n2){
//      return n1 + n2
//     // alert(`La suma entre ${n1} y  ${n2}  es: ${suma} `);
//     }
// }
// const resul = sumar (n1)(n2)
// alert(`El resultado de la suma es: ${resul}`)
}

 





  
