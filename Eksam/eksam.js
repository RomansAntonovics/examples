chooseTheCar = () => {
  let a = login();
  let b = pass();

  if (a && b) { window.location.href = "eksam4.html"; }
  else { alert("Check!"); window.location.href = "eksam3.html"; }


};


login = () => {
  let clientName = document.getElementById("loginId").value;
  let loginPattern = new RegExp("^([A-Za-z]+\\s)+?[A-Za-z]+$", 'g');
  let a = loginPattern.test(clientName);
  console.log(a);

  //if (a) { document.getElementById("loginId").style.borderColor = "green"; }
  //else { document.getElementById("loginId").style.borderColor = "red"; }

  return a;

};

pass = () => {
  let password = document.getElementById("passId").value;
  let passPattern = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/);
  let b = passPattern.test(password);
  console.log(b);

  //if (b) { document.getElementById("passId").style.borderColor = "green"; }
  //else { document.getElementById("passId").style.borderColor = "red"; }
  return b;
};

// let showPassword = document.querySelectorAll('#showPassword');

// showPassword.forEach(item =>
//     item.addEventListener('click', toggleType)
// );
// console.log(showPassword);

// function toggleType() {
//     let input = this.closest('.inputs').querySelector('.changeColor');
//     if (input.type === 'password') {
//         input.type = 'text';
//     } else {
//         input.type = 'password';
//     }
// }
// $('a').webuiPopover(options);

// window.onload = showHideId (); {
//    let infoAboutCar = document.querySelector('#showHideId');
//    infoAboutCar.onmouseout = showHide(e);   {

//     document.getElementById("showHideId").style.display="none";
// }
// infoAboutCar.onmouseover = showHide(e); {
// document.getElementById("#windowMercedes").style.display="block";
// };

// }


/*$('#select').on('change', function(){
  if ($(this).val() == 2) {
    alert('Выбрана 2-ая опция')
  }
});*/







/* toggleType = () => {
  let input = this.closest('.inputs').querySelector('.showPassword');
  if (input.type === 'password') {
    input.type = 'text';
  } else {
    input.type = 'password';
  }
}; */

toggleType=()=> {
  let input = document.getElementById("passId");
  if (input.type === "password") {
      input.type = "text";
  } else {
      input.type = "password";
  }
}


dataSave = () => {
  let forma = $('#welcomeId');
  let obj = { name: null, mail: null, phone: null, day: null };
  obj.name = $('#nameId').val();
  obj.mail = $('#mailId').val();
  obj.phone = $('#phoneId').val();
  obj.day = $('#calendarId').val();
  if (forma.length > 0) {
    let td = $('td');
    let haveDuplicate = false;
    if (td.length > 0) {
      for (let i = 0; i < td.length; i++) {
        if (td[i].innerText == obj.name)
          haveDuplicate = true;

        if (td[i].innerText == obj.mail)
          haveDuplicate = true;

        if (td[i].innerText == obj.phone)
          haveDuplicate = true;

        if (td[i].innerText == obj.day)
          haveDuplicate = true;
      }
    }
    if (!haveDuplicate)
      forma.append(`<tr><td><p>${obj.name}</p></td><td><p>${obj.mail}</p></td><td><p>${obj.phone}</p></td><td><p>${obj.day}</p></td></tr>`);
    else
      alert('Check your data!');
  }

};



// let wer = null;
// function showHide1(_id) {
//   let div = document.getElementsByClassName('flip');
//   if(wer)
//   wer.style.display='none';
//   wer = document.getElementById('redbull_id');
//   {wer.style.display='block';}
//   else wer.style.display='none';
  
  
function showHide(){
  //let div = document.getElementsById('element_id');
  //Если элемент с id-шником element_id существует
    if (document.getElementById('mercId')) { 
        //Записываем ссылку на элемент в переменную obj
        obj = document.getElementById('mercId'); 
        console.log('mercId');
        //Если css-свойство display не block, то: 
        if (obj.style.display != "block") { 
            obj.style.display = "block"; //Показываем элемент
            console.log('mercId2');
        }
        else obj.style.display = "none"; //Скрываем элемент
        console.log('mercId3');
    }
   
  }

function showHide1(){
  if (document.getElementById('redbullId')) { 
      //Записываем ссылку на элемент в переменную obj
      obj = document.getElementById('redbullId'); 
      //Если css-свойство display не block, то: 
      if (obj.style.display != "block") { 
          obj.style.display = "block"; //Показываем элемент
      }
      else obj.style.display = "none"; //Скрываем элемент
  }
 
}


function showHide2(){
  
    if (document.getElementById("alphatauriId")) { 
        
        obj = document.getElementById("alphatauriId"); 
        
        if (obj.style.display != "block") { 
            obj.style.display = "block"; 
        }
        else obj.style.display = "none"; 
    }
   
  }

  function showHide3(){
  
    if (document.getElementById("alpharomeoId")) { 
        
        obj = document.getElementById("alpharomeoId"); 
        
        if (obj.style.display != "block") { 
            obj.style.display = "block"; 
        }
        else obj.style.display = "none"; 
    }
   
  }

  function showHide4(){
  
    if (document.getElementById("ferrariId")) { 
        
        obj = document.getElementById("ferrariId"); 
        
        if (obj.style.display != "block") { 
            obj.style.display = "block"; 
        }
        else obj.style.display = "none"; 
    }
   
  }

  function showHide5(){
  
    if (document.getElementById("astonmartinId")) { 
        
        obj = document.getElementById("astonmartinId"); 
        
        if (obj.style.display != "block") { 
            obj.style.display = "block"; 
        }
        else obj.style.display = "none"; 
    }
   
  }

  // function typeWriter() {
  //   if (i < txt.length) {
  //     document.getElementById("").innerHTML += txt.charAt(i);
  //     i++;
  //     setTimeout(typeWriter, speed);
  //   }
  // }
  



// let bolid = showHide2();
// let yourBolid = bolid.getBolid();
// switch (yourBolid)
// {case 0: yourBolid.style.display = 'redbull_id';
// case 1: yourBolid.style.display = 'alphatauri_id'
// }
  /*
  if (document.getElementById(element_id))
  if (obj.style.display != "block") { 
    obj.style.display = "block"; //Показываем элемент
}
else obj.style.display = "none"; //Скрываем элемент

//Если элемент с id-шником element_id не найден, то выводим сообщение
else alert("Элемент с id: " + element_id + " не найден!"); 

  document.getElementById().style.display='block';

  
  
  {let a='mercedes_id';
  let b='redbull_id';
  let c='alphatauri_id';
  let d='alpharomeo_id';
  let e='ferrari_id';
  let f='astonmartin_id';
  let arr = [a,b,c,d,e,f];

  let obj = document.getElementById();

  for (let i=obj; i<arr.length; i++)
  if (arr[i] = obj) {console.log(arr[i]);
  }
    
    {obj.style.display = 'none'
    ;}
  else obj.style.display = 'none';
}

    let i = document.getElementById();

  

*/


