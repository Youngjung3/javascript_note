$(function(){
    $.ajax({
        url:'./MOCK_DATA.json', //파일위치
        dataType:'json', //파일형식
        success:function(data){
            if(data.length>0){ //데이터가 있을경우
                var tb=$("<table />");
                for(var i in data){
                    var $id=data[i].id;
                    var $first_name=data[i].first_name;
                    console.log(data[i]);
                    var $last_name=data[i].last_name;
                    var $email=data[i].email;
                    var $ip_address=data[i].ip_address;
                    var $gender=data[i].gender;
                    var row=$(`<tr/>`).append(
                        $('<td/>').text($id),
                        $('<td/>').text($first_name),
                        $('<td/>').text($last_name),
                        $('<td/>').text($email),
                        $('<td/>').text($gender),
                        $('<td/>').text($ip_address)
                    )
                    tb.append(row);
                }
                $('.wrap').append(tb);
            }
        }
    })
})