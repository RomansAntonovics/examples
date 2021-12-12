function showHide(element_id) {
  
    let a=mercedesId;
    let b=redbull_id;
   let c=alphatauri_id;
   let d=alpharomeo_id;
   let e=ferrari_id;
   let f=astonmartin_id;
     
         let cars=[a,b,c,d,e,f];
     
     if (document.getElementById(cars)) { 
         //Записываем ссылку на элемент в переменную obj
         let obj = document.getElementById(cars); 
         //Если css-свойство display не block, то: 
         if (obj.style.display != "block") { 
             obj.style.display = "block"; //Показываем элемент
         }
         else obj.style.display = "none"; //Скрываем элемент
     }
     //Если элемент с id-шником element_id не найден, то выводим сообщение
     else alert("Элемент с id: " + element_id + " не найден!"); 
     
    /* cars forEach(showHide[1]){
       style.display = "block";
       console.log()
     }
     
     //Если элемент с id-шником element_id существует
     if (document.getElementById(element_id)) { 
         //Записываем ссылку на элемент в переменную obj
         let obj = document.getElementById(element_id); 
         //Если css-свойство display не block, то: 
         if (obj.style.display != "block") { 
             obj.style.display = "block"; //Показываем элемент
         }
         else obj.style.display = "none"; //Скрываем элемент
     }
     //Если элемент с id-шником element_id не найден, то выводим сообщение
     else alert("Элемент с id: " + element_id + " не найден!"); 
   }   */
     }