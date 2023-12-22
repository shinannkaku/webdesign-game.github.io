var url = "https://sheets.googleapis.com/v4/spreadsheets/1Hd9tQOUIkcPFLgo2BkzC61qKKF5xZ_wppxJxJIIMKbc/values/Sheet1?alt=json&key=AIzaSyB1ja51HOOIp0wgT-3nEz2P50zkb_zUASQ";
//const form = document.forms['userForm'];
$.getJSON(url, function(json) {
    var values = json.values;// 所有試算表資料
    var text = document.querySelector('.htmltext');
    //將留言顯示在網頁上
    values.slice(1).forEach((value) =>{
        text.innerHTML += "<div class='d-flex mb-4'><div class='flex-shrink-0'><img class='rounded-circle' src='https://dummyimage.com/50x50/ced4da/6c757d.jpg' alt='...' /></div><div class='ms-3'><div class='fw-bold'>" + value[0] + "</div>" + value[1] + "</div>";
    });
});