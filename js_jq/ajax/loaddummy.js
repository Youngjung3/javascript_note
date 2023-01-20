const url="https://dummyjson.com/products"
const req = new XMLHttpRequest();
let div=document.querySelector("div");
req.onload = () => {
  const datas = req.response; 
	for(data of datas.products){
  //object Destructuring
  //객체 디스트럭처링 (키값으로 매핑)
  	//let brand = data.brand;
    //let category = data.category;
    let { category,brand}=data
    let images = data.images;
    div.innerHTML+=`brand:${brand},<br> 카테고리:${category}<br><hr>`;
  }
};
req.open("GET", url);
req.responseType = "json";
req.send();
