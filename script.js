window.onload = function () {
    var tab = document.querySelectorAll('.tab');
    tab.forEach(function (lv1) {
        var menu = lv1.querySelector('.tabnav').querySelectorAll('li'),
        cont = lv1.querySelector('.tabcon').querySelectorAll('.portfolio-wrap');
        menu.forEach(function (lv2, i) {
            lv2.addEventListener('click', function () {
                menu.forEach(function (lv3) {
                    lv3.classList.remove('active');
                });
                lv2.classList.add('active');
                cont.forEach(function (lv4) {
                    lv4.classList.remove('active');
                });
                cont[i].classList.add('active');
            });
        });
    });

    var menu = document.querySelector('.menu').querySelectorAll('li');
    menu.forEach(function (li, i) {
        li.addEventListener('click', function (e) {
            e.preventDefault();
            var blocktop = li.querySelectorAll('a')[0].hash.slice(1);
            var top = document.getElementById(blocktop).offsetTop - 95;
            scrollIt(top);
            menu.forEach(function (lv1) {
                lv1.classList.remove('active');
            });
            li.classList.add('active');
        });
    });

    var protfolioblock = document.querySelectorAll('.portfolio-block');
    protfolioblock.forEach(function (block, i) {
        block.addEventListener('click', function (e) {
            protfolioblock.forEach(function (lv1) {
                lv1.classList.remove('active');
            });
            block.classList.add('active');
        });
    });

    document.querySelector('.quote_form').addEventListener('submit' , function(e){
        e.preventDefault();
        var text = document.getElementById('formtext').value,
        subject = document.getElementById('subject').value;
        if(!text){
            text = 'Без описания';
        }else{
            text = 'Описание:'+ text;
        }
        if(!subject){
            subject = 'Без темы';
        }else{
            subject = 'Тема:'+ subject;
        }
        var fultext = 'Письмо отправлено <p>'+subject+'</p><p>'+text+'</p>';
        console.log(fultext);
        document.getElementById('forminfo').innerHTML = fultext;
        document.querySelector('.popup_wrap').style.display = 'block';
    });

    document.getElementById('closepopup').addEventListener('click', function (e) {
         document.querySelector('.popup_wrap').style.display = 'none';   
    });
};

function scrollIt(top) {
    window.scrollTo({
        'top': top
    });
}

var slideIndex = 1;

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function togglephone(block) {
    block.classList.toggle("active");
}