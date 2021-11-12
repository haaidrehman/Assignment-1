// Get all the dropdown from document
document.querySelectorAll(".dropdown-toggle").forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {
  console.log(dropDown.classList.contains("click-dropdown"));

  if (dropDown.classList.contains("click-dropdown") === true) {
    dropDown.addEventListener("click", function (e) {
      e.preventDefault();

      if (
        this.nextElementSibling.classList.contains("dropdown-active") === true
      ) {
        // Close the clicked dropdown
        this.parentElement.classList.remove("dropdown-open");
        this.nextElementSibling.classList.remove("dropdown-active");
      } else {
        // Close the opend dropdown
        closeDropdown();

        // add the open and active class(Opening the DropDown)
        this.parentElement.classList.add("dropdown-open");
        this.nextElementSibling.classList.add("dropdown-active");
      }
    });
  }


}

// Listen to the doc click
window.addEventListener("click", function (e) {
  // Close the menu if click happen outside menu
  if (e.target.closest(".dropdown-container") === null) {
    // Close the opend dropdown
    closeDropdown();
  }
});

// Close the openend Dropdowns
function closeDropdown() {
  console.log("run");

  // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
  document
    .querySelectorAll(".dropdown-container")
    .forEach(function (container) {
      container.classList.remove("dropdown-open");
    });

  document.querySelectorAll(".dropdown-menu").forEach(function (menu) {
    menu.classList.remove("dropdown-active");
  });
}

// close the dropdown on mouse out from the dropdown list
document.querySelectorAll(".dropdown-menu").forEach(function (dropDownList) {
  // close the dropdown after user leave the list
  dropDownList.onmouseleave = closeDropdown;
});

let dishes = [];
document.querySelectorAll(".dropdown-menu ul li").forEach(function (element) {

  element.addEventListener('click', function(e){
    e.target.classList.add('list-active');
    // console.log(e.target.innerText, e.target.children[0].innerText);
    console.log(e);
      let key = element.childNodes[0].data;
      let value = element.childNodes[1].innerText;
          dishes.push({
            [key]:value 
          });
          
          console.log(dishes);
        });



  
});


let sumTotal = 0;

function displayItemList(){
    if(dishes.length){
       console.log(dishes);
        let orderList = document.querySelector('.yourOrder ul');
        let total = document.querySelector('.total p');
      
        dishes.forEach(function(e){
          console.log(e);
          for(let [k, v] of Object.entries(e)){
          console.log(k , v);
          sumTotal += parseInt(v);
          orderList.innerHTML += `<li><span>${k}</span> <span>Rs. ${v}</span></li>`;
          total.innerText = sumTotal;
          dishes = [];

          console.log(sumTotal);
        }
        
         
        });

        
    }
}
