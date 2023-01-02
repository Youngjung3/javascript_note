/* 1- 객체 생성 */
var dog=new Object();
dog={
    /* property */
    /* 키 : value */
    name:"망고",
    features:"말티즈"
};
// arr.length
console.log(dog.name);
document.write(`<h2>${dog.name}</h2>`);

/* 2- 객체 생성 */
const baby={name:"망고", features:"말티즈"};
document.write(`<h2>${baby.features}</h2>`);

/* 3 - method */
const pet={
    // 객체안에서의 this는 객체를 가르킴
    name:"망고",
    eat:function(food){
        document.write(`<h2>${this.name}는 ${food}를 좋아해요</h2>`);
    }
}

pet.eat('연어')
pet.eat('닭가슴살')
