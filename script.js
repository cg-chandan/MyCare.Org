//Hospital List 
 
//  fetch('hospitals.json').then(datas=>datas.json()).then(data=>{
//     console.log(data)

// const selectlist=document.getElementById('pincode')
// const hospitallist=document.getElementById('tbody')
// const pincode_d = [];
// data.filter(element => {
//     pincode_d.push(element.pincode);
// })
// const pincodes = new Set(pincode_d);
// pincodes.forEach(element => {
//     selectlist.innerHTML +=
//     `
//     <option value="${element}">${element}</option>
    
//     `
// });

// selectlist.addEventListener("change",()=>{
//     hospitallist.innerHTML=""
//     data.filter(e=>{
//         if(selectlist.value==e.pincode){
//             hospitallist.innerHTML +=
            // `
            // <tr>
            // <td>${e.name}</td>
            // <td>${e.address}</td>
            // <td>${e.phonenumber}</td>
            // </tr>

            // `
            
//         }
//     })
//     })
// });
const search = document.getElementById('search');
if(search){
    
search.addEventListener("click", () =>{
    fetch('hospitals.json').then(data => data.json()).then(data =>{
        const pincode =document.getElementById('pincode');
        const hospitallist=document.getElementById('tbody');
        
        const pcode = data.filter(ele =>{
            return ele.pincode == parseInt(pincode.value)
        })
        hospitallist.innerHTML = "";


        if(pcode.length >0){
            pcode.forEach(e => {
                if(e.pincode == parseInt(pincode.value)){
                    return hospitallist.innerHTML += `
                    <tr>
                    <td>${e.name}</td>
                    <td>${e.address}</td>
                    <td>${e.phonenumber}</td>
                    </tr>`
                }
            })
    
        }
        else {
            hospitallist.innerHTML = `<tr>
                    <td>Invalid pincode</td>
                    </tr>`;
        }
    })
})
}


//Doctors List

 fetch('doctors.json').then(data => data.json()).then(data => {

const specialisation = document.getElementById('specialisation');
const doclist =document.getElementById('doclist');
const  special_d =  [];

data.filter(ele =>{
    special_d.push(ele.specialisation);
});

const special  = new Set(special_d); //avoid displaying duplicate values

special.forEach(e => {
    specialisation.innerHTML += `
    <option value="${e}">${e}</option>`
})

specialisation.addEventListener("change",() =>{
    doclist.innerHTML = "";
    data.filter(e =>{
        if(specialisation.value == e.specialisation){
            doclist.innerHTML += `
            <tr>
            <td>${e.doc_id}</td>
            <td>${e.doc_name}</td>
            <td>${e.specialisation}</td>
            <td>${e.doc_fees}</td>
            <td>${e.availability}</td>
            </tr>`
        }
    })
    if(specialisation.value == "All") {
        data.filter(e =>{
            
                doclist.innerHTML += `
                <tr>
                <td>${e.doc_id}</td>
                <td>${e.doc_name}</td>
                <td>${e.specialisation}</td>
                <td>${e.doc_fees}</td>
                <td>${e.availability}</td>
                </tr>`
        
        })
    }
})

})

//form validation

const book = document.getElementById('book-btn');

const inputs = document.getElementsByTagName("input");

const selects = document.getElementsByTagName("select");

const text = document.getElementsByTagName("textarea");

book.addEventListener("click", (e) =>  {
    e.preventDefault();
    console.log('hello');
   
     const error = [];
   for(let i =0 ; i < inputs.length; i++){
    if(inputs[i].value == ""){
        error.push("error");
    }
   }
   for(let i = 0; i< selects.length; i++){
    if(selects[i].value == ""){
        error.push("error");
    }
   } 
   if(text){
    for(let i = 0; i< text.length; i++){
        if(text[i].value == ""){
            error.push("error");
        }
       } 
   } 
   if(error.length > 0){
    alert("fill all fields");
   }
   else{
    alert("success");
   }
})


    
    