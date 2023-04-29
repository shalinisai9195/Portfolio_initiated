function SendMail(event){
    event.preventDefault() 
    emailjs.init('nVHOH2oG6GwI4Pdc7');
    let parms = {
    
        from_name : document.getElementById("fullName").value,
        email_id : document.getElementById("email_id").value,
        message : document.getElementById("message").value
    }
    emailjs.send("service_3ywvtgh","template_243rb0i",parms).then(function (res){
        document.getElementById("fullName").value ="";
        document.getElementById("email_id").value="";
        document.getElementById("message").value="";

        console.log(res);
        alert("success!"+res.status);
    }).catch((err)=>{
       console.log(err);
    })
    
    }



let menu1 = document.getElementById('menu');
let headers1 = document.querySelector('header');

menu1.onclick=()=>{
    menu1.classList.toggle('fa-times');
    headers1.classList.toggle('active');
}
window.onscroll=()=>{
    menu1.classList.remove('fa-times');
    headers1.classList.toggle('active');
}
let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});










// $(document).ready(function(){
// $('#menu').click(function(){
//   $(this).toggleClass('fa-times');
//   $('header').toggleClass('active');    

// });
// $(window).on('scroll load',function(){
//     $('#menu').removeClass('fa-times');
//     $('header').removeClass('toggle');

// })

// //smooth scrolling
// $('a[href*=#]').on('click',function(e){
//     e.preventDefault();
  
//     $('html,body').animate({
//       scrollTop:$($(this).artt('href')).offset().top,
  
//     },
//     500,
//     'linear'
    
//     );
//   });

// });
// function contact(){
//     let shown = document.getElementById('contect')
//     console.log(shown);
// }
