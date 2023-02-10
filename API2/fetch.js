// 오늘날짜생성
let date=new Date();
// YYYYMMDD
let year=String(date.getFullYear());
let month=String(date.getMonth()+1.).padStart(2,"0");
let day=String(date.getDate()).padStart(2,"0");
let now=year+month+day;
console.log(now);



var url =
  "http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst";
/*URL*/
var queryParams =
  "?" +
  encodeURIComponent("serviceKey") +
  "=" +
  "selMHZVUuZStmVQq9fGNK9oUN%2F%2B6HlnOTSorSUNn%2BVS3NpidZ4VMlp5ee%2BPjg88zxbjlg6ixLbtPQxPwz98lbw%3D%3D"; /*Service Key*/
queryParams +=
  "&" + encodeURIComponent("pageNo") + "=" + encodeURIComponent("1"); /**/
queryParams +=
  "&" + encodeURIComponent("numOfRows") + "=" + encodeURIComponent("1000"); /**/
queryParams +=
  "&" + encodeURIComponent("dataType") + "=" + encodeURIComponent("JSON"); /**/
queryParams +=
  "&" + encodeURIComponent("base_date") + "=" + encodeURIComponent(now); /**/
queryParams +=
  "&" + encodeURIComponent("base_time") + "=" + encodeURIComponent("0600"); /**/
queryParams +=
  "&" + encodeURIComponent("nx") + "=" + encodeURIComponent("102"); /**/
queryParams +=
  "&" + encodeURIComponent("ny") + "=" + encodeURIComponent("115"); /**/


  async function getPosts(){
    const res=await fetch(`${url}${queryParams}`);
    // res에 값이 담겨있으니까 res에 json()
    const data=await res.json(); //json, text
    return data;
  }

  async function setPosts(){
    const posts=await getPosts();
    const datas=posts.response.body.items.item;
    console.log(posts,datas);
    datas.forEach(data=>{
        console.log(data);
        const postEl=document.createElement("div");
        postEl.classList.add("post");
        postEl.innerHTML=`  
            <div class="area">지역: 경상 울진군</div>
            <div class="number">측정시간: ${data.baseTime}</div>
            <h2 class="post-title">카테고리: ${data.category}</h2>
            <div class="post-body">측정값: ${data.obsrValue}</div>
            <hr>
        `;
        document.body.appendChild(postEl);

    })
  };
  setPosts();