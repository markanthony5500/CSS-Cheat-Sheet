//Making sidebar items clickable for page navigation

//create array of all sidebar items
let sidebarItems = document.querySelectorAll('.sidebarItem');

//all elements that need navigated too
let navElements = document.querySelectorAll('.navElement');
console.log(navElements);
//iterate through each node adding an event listener
sidebarItems.forEach(function(sidebarItem , index){
    //add click event to navigate page and navigate to current navElement
    sidebarItem.addEventListener("click" , function(){
        navigatePage(navElements[index])
    });
})

let card2 = document.getElementById('card2');

//function to navigate user to certain location on page
function navigatePage(navElement){
    //get the top cord of element relative to the viewport
    //add card3.scrollTop to account for card3 allready being scrolled
    let y = navElement.getBoundingClientRect().top + card2.scrollTop - card2.getBoundingClientRect().top - 15;
    //scroll to the target element smoothly
    card2.scrollTo({
        top: y,
        behavior: 'smooth'
     });
}

