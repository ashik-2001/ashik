var url = 'https://script.google.com/macros/s/AKfycbx2GEJ30oPYHK9g-CFiVj_xqsSfYi6DlrgfVuApP2Hlm_C5vYyK2KAHc_1jSvgh_Qd-/exec'

var data = $('#contact-form');

/*$(document).ready(function(){
    $('#submit-form').click(
        function(e){
            e.preventDefault();
            var fname = $("#fname").val();
            var lname = $("#lname").val();
            var email = $("#email1").val();
            var num = $("#number1").val();
            var country = $("#country").val();
            var message = $("#message1").val();
            console.log(fname, lname, email, num, country, message);
            var url1 = url+'?First_Name='+fname; 
            $.ajax({
                type: "GET",
                url: url1,
                success: function (response) {
                    alert("Send");
                }
            });

            });
});*/

/*var $form = $('#contact-form'),
    url = 'https://script.google.com/macros/s/AKfycbx2GEJ30oPYHK9g-CFiVj_xqsSfYi6DlrgfVuApP2Hlm_C5vYyK2KAHc_1jSvgh_Qd-/exec?callback=googleDocCallback'

$('#submit-form').on('click', function(e) {
  window.googleDocCallback = function () { return true; };
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeArray()
  }).success(
    alert(data)
  );
})*/