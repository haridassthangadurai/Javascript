let recipeObj = {
    title: "Tomato Pasta",
    imgSrc: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/recipe-img.png",
    ingredients: ["Pasta", "Oil", "Onions", "Salt", "Tomato Pasta Sauce", "Cheese"]
};



// for(var i of recipeObj.ingredients)
// {
//     let list=douument.createElement("li");
//     list.textContect=i;
//     ulli.appendChild(list);
// }



let h1=document.getElementById("hid");

let img=document.getElementById("imgid");
let ulli=document.getElementById("ull");

h1.textContent=recipeObj.title;

img.src=recipeObj.imgSrc;


