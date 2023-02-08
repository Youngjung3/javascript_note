// 스크립트를 적용할 요소를 상수에 저장
const postContainer=document.querySelector('#posts-container'),loading=document.querySelector(".loader"),filter=document.querySelector("#filter");

let limit=5, page=1;


//API에서 게시글을 fetch로 통신하는 함수
async function getPosts(){
    const res=await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);
    const data=await res.json();
    return data;
}

showPosts();
// DOM에 보여주는 함수
async function showPosts(){
    // console.log("열려라",getPosts());
    const posts=await getPosts();
    posts.forEach((post)=>{
        // console.log(post);
        const postEl=document.createElement('div');
        postEl.classList.add('post');
        postEl.innerHTML=`
            <div class="number">${post.id}</div>
            <div class="post-info">
                <h2 class="post-title">${post.title}</h2>
                <p class="post-body">${post.body}</p>
            </div>
        `
        // console.log(postEl);
        postContainer.appendChild(postEl);
    })
}

// loader 애니메이션 함수
function showLoading(){
    loading.classList.add('show');
    setTimeout(()=>{
        loading.classList.remove('show');
        setTimeout(()=>{
            page++;
            showPosts();
        },300)
    },1000);
}
// window-scroll
window.addEventListener('scroll',()=>{
    /**
     * scrollTop: 요소의 수직스크롤
     * scrollHeight: 스크롤높이
     * clientHeight: 
     */
    const obj=document.documentElement;
    /* 
    const a={
        scrollTop:obj.scrollTop,
        scrollHeight:obj.scrollHeight,
        clientHeight:obj.clientHeight,
    } 
    */
   
//    console.log(document.documentElement.scrollTop);
//    console.log(document.documentElement.scrollHeight);
//    console.log(document.documentElement.clientHeight);
   const {scrollTop,scrollHeight,clientHeight}=document.documentElement;

    // console.log("디시트럭쳐링",scrollTop,scrollHeight,clientHeight);
    if(scrollTop+clientHeight>=scrollHeight-5){
        showLoading();
    }
})

// 검색키워드 필터링 함수
function filterPosts(e){
    const term=e.target.value.toUpperCase();
    posts=document.querySelectorAll(".post");
    posts.forEach((post)=>{
        const title=post.querySelector(".post-title").innerText.toUpperCase();
        const body=post.querySelector(".post-body").innerText.toUpperCase();
        //filter
        //indexOf 같은 문자열 1. 없으면 -1
        if(title.indexOf(term)>-1 || body.indexOf(term)>-1){
            post.style.display='flex';
        }else{
            post.style.display='none';
        }
    })
    // console.log(term);
    
}

// filter 값을 넣으면 받아오기
filter.addEventListener('input',filterPosts)