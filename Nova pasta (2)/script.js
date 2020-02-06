function calcBasico(){
    var nm = window.document.getElementById('input_mm')
    var nt = window.document.getElementById('input_vt')
    var nr = window.document.getElementById('input_vr')
    
    
 
    
    
    //transforma em número
    var n1 = Number(nm.value)
    var n2 = Number(nt.value)
    var n3 = Number(nr.value)
    
    
    //calculo
    var cpp = n2 / n1
    var cm = cpp * n2
   
    
    //resposta
    alert(cpp)
    alert(cm)
    
    
   }
   
   
   
   function calcCompleto(){
     
   }