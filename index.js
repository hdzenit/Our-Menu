const menu = [
    {
        id: 1,
        title: "Buttermilk pancakes",
        category: "breakfast",
        price: 15.99,
        img: "./images/1.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 2,
        title: "Diner double",
        category: "lunch",
        price: 13.99,
        img: "./images/2.jpg",
        desc: `Vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing marfa`,
    },
    {
        id: 3,
        title: "Godzila milkshake",
        category: "shakes",
        price: 6.99,
        img: "./images/3.jpg",
        desc: `Ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral`,
    },
    {
        id: 4,
        title: "Country delight",
        category: "breakfast",
        price: 20.99,
        img: "./images/4.jpg",
        desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreeditch. prism austin mlkshk truffaut`,
    },
    {
        id: 5,
        title: "Egg attack",
        category: "lunch",
        price: 22.99,
        img: "./images/5.jpg",
        desc: `Franzen vegan pabst bicycle rights kickstarter pintrest meditation farm to table 90's pop-up`,
    },
    {
        id: 6,
        title: "Oreo dream",
        category: "shakes",
        price: 18.99,
        img: "./images/6.jpg",
        desc: `Portland chicharrones ethical edion bulb, palo santro craft beer chia heirloom iPhone everyday`,
    },
    {
        id: 7,
        title: "Bacon overgflow",
        category: "shakes",
        price: 8.99,
        img: "./images/7.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 8,
        title: "American classic",
        category: "breakfast",
        price: 12.99,
        img: "./images/8.jpg",
        desc: `I'm baby woke mlkshk wolf bitters live-edge blue,hammock freegan copper mug whatever cold-pressed`,
    },
    {
        id: 9,
        title: "Steak Dinner",
        category: "Dinner",
        price: 16.99,
        img: "./images/9.jpeg",
        desc: `Skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    }
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container');


//load items
window.addEventListener('DOMContentLoaded', function() {
    displayMenuItems(menu);
    displayMenuButtons();
});





function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item){
        // console.log(item);
         return `<article class="menu-item">
         <img src="${item.img}" class="photo" alt=${item.title}">
         <div class="item-info">
             <header>
                 <h4>${item.title}</h4>
                 <h4 class="price">$${item.price}</h4>
             </header>
             <p class="item-text">
                 ${item.desc}
             </p>
         </div>
     </article>`;
});
displayMenu = displayMenu.join("");
sectionCenter.innerHTML = displayMenu;

};

function displayMenuButtons(){
    const categories = menu.reduce(
        function(values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
         }
    return values;
    },['all']);
    const categoryBtns = categories.map(function(category){
       return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>` 
    }).join("");
    container.innerHTML = categoryBtns;
    const filterBtn = container.querySelectorAll('.filter-btn');
    //filter items
filterBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
const category = e.currentTarget.dataset.id;
const menuCategory = menu.filter(function(menuItem){
    //console.log(menuItem.category);
    if (menuItem.category === category) {
        return menuItem;
    }
    
});
//console.log(menuCategory);
if (category === 'all'){
    displayMenuItems(menu);
}else {
    displayMenuItems(menuCategory);
}
});
});
}