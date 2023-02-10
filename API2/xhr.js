/* Javascript 샘플 코드 */

var xhr = new XMLHttpRequest();
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
  "&" + encodeURIComponent("nx") + "=" + encodeURIComponent("55"); /**/
queryParams +=
  "&" + encodeURIComponent("ny") + "=" + encodeURIComponent("127"); /**/
xhr.open("GET", url + queryParams);
xhr.onreadystatechange = function () {
  if (this.readyState == 4) {
    alert(
      "Status: " +
        this.status +
        "nHeaders: " +
        JSON.stringify(this.getAllResponseHeaders()) +
        "nBody: " +
        this.responseText
    );
  }
};

xhr.send("");
