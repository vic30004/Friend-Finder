const value = document.querySelectorAll("input");
const select = document.querySelectorAll("select");
const button = document.querySelector("button");
const closeModal = document.querySelector("#modal .modal-content .close");
const modal = document.querySelector("#modal")
const queryUrl = "http://localhost:8080/api/friends";

console.log(closeModal);
button.addEventListener("click", function (e) {
            e.preventDefault();

    if (value[0].value === "" || value[1].value === "" || select[0].value === "" ||
        select[1].value === "" || select[2].value === "" ||
        select[3].value === "" || select[4].value === "" ||
        select[5].value === "" || select[6].value === "" ||
        select[7].value === "" || select[8].value === "" ||
        select[9].value === ""
    ) {


        alert("Please fill out all the fields!")
    }

    let newFriends = {
        name: value[0].value,
        photo: value[1].value,
        score: [
            select[0].value,
            select[1].value,
            select[2].value,
            select[3].value,
            select[4].value,
            select[5].value,
            select[6].value,
            select[7].value,
            select[8].value,
            select[9].value
        ]
    }


    // fetch("/api/friends",newFriends).then(function(res){
    //     return res.json()
    // }).then(function(data){
    //     console.log(data)
    // })


    getInfo("api/friends", newFriends).then(function (data) {
        console.log(data)
        let content= document.createElement("div");
        content.className="modal-content";

        let closeBtn= document.createElement("span");
        closeBtn.textContent=`x`;
        closeBtn.className="closeBtn";
        content.appendChild(closeBtn);

        let userName = document.createElement("h1");
        userName.textContent=data.name;
        userName.className="text-center";
        console.log(userName);
        content.appendChild(userName);

        let userPic = document.createElement("img");
        userPic.setAttribute("src",data.photo);
        content.appendChild(userPic);
        console.log(content);

        modal.appendChild(content);
        modal.style.display="block";

        value.forEach((data)=>{
            data.value="";
        })

        select.forEach((data)=>{
            data.value="";
        })

        closeBtn.addEventListener("click",function(){
            modal.style.display="none";
            
        })
         
        // content.appendChild(userName);
        // userName.className="text-center";
        // let userPic = document.createElement("img");
        // userPic.setAttribute("src",data.photo);
        // let test = content.appendChild(userPic);
        // modal.appendChild(test);
        // modal.style.display ="block";
    })
})
    // modal.className="modal";
    // let useName= document.createElement("h1");
    // let userPic = document.createElement("img");
    // userPic.setAttribute("src",)
// });


// closeModal.addEventListener("click",function(){

// })

function getInfo(url, info) {
    
         return fetch(url, {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(info),
        headers: new Headers({
        'Content-Type': 'application/json'
        }),
    }).then(response => response.json())
    
     }
