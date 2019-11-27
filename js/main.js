$(document).ready(function(){
    var minh = $(window).height() - ($('.navbar').height() + $('footer').height());
    $('section').css('min-height', minh + 'px');
    }
);
// $('#submit-form').click(function (e){
//     e.preventDefault();
//     $('.form-group input').each(function () {
//         console.log($(this).val());
//     })
// });


$('#submit-form').click(function(e){
    let name = $('#name-form').val();
    var mail = $('#mail-form').val();
    console.log($('#name-form').val());
    if (name != '' && mail !=''){
        $('#regbut').remove();
        $('.nav-item').last().html('<a><i class="far fa-user-circle"></i> ' + name + '</a>');
    }
});

// function submitData(){
//     const fs =require('fs');
//
//     let data = document.getElementById('exampleInputPassword1')+' '+document.getElementById('exampleInputEmail1');
//     fs.writeFile('login.txt',data, (err)=> {if(err)throw err;});
// }
