
var fullName = document.getElementById("name");
var phoneNumber = document.getElementById("phone");
var email = document.getElementById("email");
var address = document.getElementById("address");
var group = document.getElementById("group");
var notes = document.getElementById("floatingTextarea");
var favorite = document.getElementById("favorite");
var emergency = document.getElementById("emergency");
var search = document.getElementById("search");

var modal = document.getElementById("contactModal");


var total = document.getElementById("total");
var fav = document.getElementById("fav");
var eme = document.getElementById("emergen");
  

var numberList= [];

if(localStorage.getItem("numbers")!= null){
numberList= JSON.parse(localStorage.getItem("numbers"));
  displayPersons();
}



// var favContacts=[];
// if(localStorage.getItem("favourites")!= null){
//       favContacts = JSON.parse(localStorage.getItem("favourites"));
//       displayFavorites(i);
// }




function addNumber(){


  var person={
      name: fullName.value,
      phone: phoneNumber.value,
      email: email.value,
      address: address.value,
      group: group.value,
      notes: notes.value,
      favorite: favorite.checked,
      emergency: emergency.checked,
  };

  numberList.push(person);
  localStorage.setItem("numbers", JSON.stringify(numberList));
  Swal.fire({
    title: "Added!",
    text: "That contact has been added successfully.",
    icon: "success"
  });
  displayPersons();
  closeModal();

}


function deletePeron(i) {


  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      numberList.splice(i,1);
      localStorage.setItem("numbers", JSON.stringify(numberList));
      displayPersons();
      Swal.fire({
      
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }});


}


function handleSearch(){
  var temp='';

  // debounce
  setTimeout(()=>{

    for(var i =0; i< numberList.length; i++){
      if(numberList[i].name.toLowerCase().includes(search.value.toLowerCase())){
       
        temp+=  `<div class="person col-12 col-md-6 ">
        <div class="data-required d-flex gap-3">
              <div class="img contact-avatar ${numberList[i].favorite &&" favorite"} ${numberList[i].emergency &&" emergency"} bg-danger">
              ${numberList[i].name.split(' ')[0][0]} ${numberList[i].name.split(' ')[1]?.[0] ||''}
              </div>
             
              <div class="data mb-2 ">
                  <h4 class="fw-semibold text-truncate">${numberList[i].name}</h4>
                  
                  <div class="numberIcon d-flex gap-2">
                      <div class="icon rounded-2 d-flex align-items-center justify-content-center">
                        <i class="fa-solid fa-phone"></i>
                      </div>
                      
                      <div class="number">
                          <span class="text-truncate">${numberList[i].phone}</span>
                      </div>
  
                  </div>
              </div>
        </div>
  
        <div class="email d-flex mb-2 gap-2">
  
           <div class="icon rounded-2 d-flex align-items-center justify-content-center">
              <i class="fa-solid fa-envelope"></i>
           </div>
            <p>${numberList[i].email}</p>
        </div>
  
  
        <div class="address mb-2 d-flex gap-2">
             
            <div class="icon rounded-2 d-flex align-items-center justify-content-center">
               <i class="fa-solid fa-location-dot"></i>
            </div>
  
          <p >${numberList[i].address}</p>
       </div>
  
        <div class="groupAemergency d-flex gap-2 mb-2">
            <span  class="fw-medium text-capitalize">${numberList[i].group}</span>
            ${numberList[i].emergency? '<span class="tag bg-danger text-white px-2 rounded-2 emergency"><i class="fas fa-heartbeat"></i> Emergency</span>':""}
  
        </div>
  
      
  
        <div class="contact-actions">
        <button class="contact-action call" title="Call">
          <i class="fas fa-phone"></i>
        </button>
        <button class="contact-action email" title="Email">
          <i class="fas fa-envelope"></i>
        </button>
        <button class="contact-action ${numberList[i].favorite &&" active"} favorite" title="Favorite">
          <i class="far fa-star"></i>
        </button>
        <button class="contact-action ${numberList[i].emergency &&" active"} emergency" title="Emergency">
          <i class="far fa-heart"></i>
        </button>
        <button class="contact-action" title="Edit">
          <i class="fas fa-edit"></i>
        </button>
        <button onclick="deletePeron(${i})" class="contact-action delete" title="Delete">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    </div>
          `
      
      }
    }
  
       
    document.getElementById("number").innerHTML= temp;
   
  } ,700);
 
}



  //  var displayfav=""; 

  //  function addFavorites(){
  //   var countFav= 0;

  //   for(var i =0; i<favContacts.length; i++){


  //     if(numberList[i].favorite){
  //       countFav++;
  //        favContacts.push(numberList[i]);
  //       localStorage.setItem("favourites", JSON.stringify(favContacts));
  //       } 

  //       else { 
  //         countFav = countFav;
  //       }
      
  //  }
  //  displayFavorites();
  // }



//   function  displayFavorites(){
    
//      for(var i =0; i<favContacts.length; i++){


     
//           displayfav+= `    <!-- List Item Template -->
//           <!-- <div class="sidebar-contact-card">
//             <div class="sidebar-contact-avatar" style="background: #3b82f6">
//               SG
//             </div>
//             <div class="sidebar-contact-info">
//               <h5>Stephanie Gaines</h5>
//               <p>01050079305</p>
//             </div>
//             <button class="sidebar-call-btn favorites-call">
//               <i class="fas fa-phone"></i>
//             </button>
//           </div> -->
// `;

      
//       }

//       document.getElementById("favoritesList").innerHTML = displayfav;
    
//   }

//   var emeContacts= [];

//   if(localStorage.getItem("emergencies")!= null){
//     emeContacts = JSON.parse(localStorage.getItem("emergencies"));
//     displayEmergencies(i);
// }
// var displayeme=""; 
// function  displayEmergencies(i){
//  for(var i =0; i<emeContacts.length; i++){
  
//       displayeme+= `    
//       <!-- List Item Template --> 
//       <!-- <div class="sidebar-contact-card">
//         <div class="sidebar-contact-avatar" style="background: #3b82f6">
//           SG
//         </div>
//         <div class="sidebar-contact-info">
//           <h5>Stephanie Gaines</h5>
//           <p>01050079305</p>
//         </div>
//         <button class="sidebar-call-btn favorites-call">
//           <i class="fas fa-phone"></i>
//         </button>
//       </div> -->
//   `;
  
//   }

//   document.getElementById("emergencyList").innerHTML = displayeme;

// }

function displayPersons(){

  var countFav = 0;
  var countEmergency = 0;
  var temp="";
   if(numberList.length===0){
    temp+=`
     <p class="alert alert-danger text-center w-100">No contacts found</p> 
`   

   }
   

  var displayfav=""; 
  var displayeme="";
    for(var i =0; i<numberList.length; i++){
      

      if(numberList[i].favorite){
        countFav++ 
        //  emeContacts.push(numberList[i]);
         displayfav+= `   <!-- List Item Template -->
          <div class="sidebar-contact-card">
           <div class="sidebar-contact-avatar" style="background: #3b82f6">
           ${numberList[i].name.split(' ')[0][0]} ${numberList[i].name.split(' ')[1]?.[0] ||''}
           </div>
           <div class="sidebar-contact-info">
             <h5>${numberList[i].name}</h5>
             <p>${numberList[i].phone}</p>
           </div>
           <button class="sidebar-call-btn favorites-call">
             <i class="fas fa-phone"></i>
           </button>
         </div> 
`
        //  localStorage.setItem("emergencies", JSON.stringify(emeContacts));
        } 

        else { 
          countFav= countFav;
        }
     

        if(numberList[i].emergency){
          countEmergency++ 
          //  emeContacts.push(numberList[i]);
           displayeme+= `        <!-- List Item Template -->
            <div class="sidebar-contact-card">
             <div class="sidebar-contact-avatar" style="background: #3b82f6">
             ${numberList[i].name.split(' ')[0][0]} ${numberList[i].name.split(' ')[1]?.[0] ||''}
             </div>
             <div class="sidebar-contact-info">
               <h5>${numberList[i].name}</h5>
               <p>${numberList[i].phone}</p>
             </div>
             <button class="sidebar-call-btn favorites-call">
               <i class="fas fa-phone"></i>
             </button>
           </div> 

`
          //  localStorage.setItem("emergencies", JSON.stringify(emeContacts));
          } 
  
          else { 
            countEmergency= countEmergency;
          }
   
      temp+=  `<div class="person col-12 col-md-6 ">
      <div class="data-required d-flex gap-3">
            <div class="img contact-avatar ${numberList[i].favorite &&" favorite"} ${numberList[i].emergency &&" emergency"} bg-danger">
            ${numberList[i].name.split(' ')[0][0]} ${numberList[i].name.split(' ')[1]?.[0] ||''}
            </div>
           
            <div class="data mb-2 ">
                <h4 class="fw-semibold text-truncate">${numberList[i].name}</h4>
                
                <div class="numberIcon d-flex gap-2">
                    <div class="icon rounded-2 d-flex align-items-center justify-content-center">
                      <i class="fa-solid fa-phone"></i>
                    </div>
                    
                    <div class="number">
                        <span class="text-truncate">${numberList[i].phone}</span>
                    </div>

                </div>
            </div>
      </div>

      <div class="email d-flex mb-2 gap-2">

         <div class="icon rounded-2 d-flex align-items-center justify-content-center">
            <i class="fa-solid fa-envelope"></i>
         </div>
          <p>${numberList[i].email}</p>
      </div>


      <div class="address mb-2 d-flex gap-2">
           
          <div class="icon rounded-2 d-flex align-items-center justify-content-center">
             <i class="fa-solid fa-location-dot"></i>
          </div>

        <p >${numberList[i].address}</p>
     </div>

      <div class="groupAemergency d-flex gap-2 mb-2">
          <span  class="fw-medium text-capitalize">${numberList[i].group}</span>
          ${numberList[i].emergency? '<span class="tag bg-danger text-white px-2 rounded-2 emergency"><i class="fas fa-heartbeat"></i> Emergency</span>':""}

      </div>

    

      <div class="contact-actions">
      <button class="contact-action call" title="Call">
        <i class="fas fa-phone"></i>
      </button>
      <button class="contact-action email" title="Email">
        <i class="fas fa-envelope"></i>
      </button>
      <button class="contact-action ${numberList[i].favorite &&" active"} favorite" title="Favorite">
        <i class="far fa-star"></i>
      </button>
      <button class="contact-action ${numberList[i].emergency &&" active"} emergency" title="Emergency">
        <i class="far fa-heart"></i>
      </button>
      <button class="contact-action" title="Edit">
        <i class="fas fa-edit"></i>
      </button>
      <button onclick="deletePeron(${i})" class="contact-action delete" title="Delete">
        <i class="fas fa-trash"></i>
      </button>
    </div>
  </div>
        `
    }
     
    total.innerHTML= numberList.length;
    fav.innerHTML= countFav;
    eme.innerHTML= countEmergency;
   
    document.getElementById("number").innerHTML= temp;
    document.getElementById("favoritesList").innerHTML = displayfav;
    console.log(document.getElementById("favoritesList"));
    document.getElementById("emergencyList").innerHTML = displayeme;

}




function clear(){

   fullName.value= "";
   phoneNumber.value= "";
   email.value= "";
   address.value= "";
   group.value= "";
   notes.value= "";
  favorite.checked= false;
  emergency.checked= false;

}


function  closeModal(){

  clear()
  var modalObj = bootstrap.Modal.getInstance(modal);
  modalObj.hide();
}