const homebtn  = document.getElementById('home');
const edubtn = document.getElementById('education');
const workbtn = document.getElementById('workexp');
const mbtn = document.getElementById('more');

const homecontent = document.querySelector('.homecontent');
const educationcontent = document.querySelector('.educationcontent');
const workcontent = document.querySelector('.workexpcontent');
const morecontent = document.querySelector('.morecontent');

const rotation = document.querySelector('.circle');

var degree = 0;

homebtn.addEventListener('click', () => {
    // scroller(degree);
    // degree+=90;
    rotation.style.transform = `rotate(-90deg)`;
    educationcontent.scrollIntoView({behavior:"smooth"});
    return degree;
});
edubtn.addEventListener('click', () => {
    // scroller(degree);
    // degree+=90;
    rotation.style.transform = `rotate(-180deg)`;
    workcontent.scrollIntoView({behavior: "smooth"});
    return degree;
});
workbtn.addEventListener('click',() => {
    // scroller(degree);
    // degree+=90;
    rotation.style.transform = `rotate(-270deg)`;
    morecontent.scrollIntoView({behavior:"smooth"});
    return degree;
});
mbtn.addEventListener('click',() => {
    // scroller(degree);
    // degree=0;
    rotation.style.transform = `rotate(0deg)`;
    homecontent.scrollIntoView({behavior:"smooth"});
    return degree;
});

function scroller(deg){

    switch(deg){
        case 0 : 
            rotation.style.transform = `rotate(-90deg)`;
            educationcontent.scrollIntoView({behavior:"smooth"});
            console.log(deg);
            break;
        case 90:
            rotation.style.transform = `rotate(-180deg)`;
            workcontent.scrollIntoView({behavior: "smooth"});
            console.log(deg);
            break;
        case 180:
            rotation.style.transform = `rotate(-270deg)`;
            morecontent.scrollIntoView({behavior:"smooth"});
            console.log(deg);
            break;
        case 270:
            rotation.style.transform = `rotate(0deg)`;
            homecontent.scrollIntoView({behavior:"smooth"});
            console.log(deg);
            break;
        default:
            console.log("Something broke, reached default switch!");
            break;
    } 
     
}



$(window).on("scroll",function() {
    if ($(document).scrollTop() > 0 && $(document).scrollTop()<2019) {
      rotation.style.transform = `rotate(0)`;
      console.log('called step1');
    }else if($(document).scrollTop()>=2018 && $(document).scrollTop()<3937){
        rotation.style.transform = `rotate(-90deg)`;
        console.log('called step2');
    }else if($(document).scrollTop() >= 3937 && $(document).scrollTop() < 5856){
        rotation.style.transform = `rotate(-180deg)`;
        console.log('called step3');
    }else if($(document).scrollTop()>=5856){
        rotation.style.transform = `rotate(-270deg)`;
        console.log('called step4');
    }else{
       rotation.style.transform = `rotate(0deg)`;
    }
    console.log($(document).scrollTop());
  });

