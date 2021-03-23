var favouritestyle= prompt("what do you love classic or unique furniture?");

var getfavouritestyle = function(){while (favouritestyle !== 'classic' && favouritestyle !== 'unique')
{favouritestyle = prompt('please only write classic or unique');
}
if (favouritestyle=='classic'){
    document.write('<img src="pic/classicf.jpg"/>');
}
else if(favouritestyle=='unique'){
    document.write('<img src="pic/unique.jpg"/>');
}
}
getfavouritestyle(favouritestyle);

var age=prompt("How old are you?");
function getAge(userAge){
if (userAge >=20 && userAge<=50){
    alert('Enjoy in our world ');
  }else if(userAge<20|| userAge>50){
    alert('Go to this and enjoy "https://www.cartoonnetworkhq.com/games"');
  } else{
    alert('please input a number');
  }
}
getAge(age);
var enjoy=prompt(' did you enjoy in our website?');

if(enjoy =='yes') {
alert('Nice to hear it');
}else
{alert('Ooooh we are sorry!');
}

/*while (favouritestyle !== 'classic' && favouritestyle !== 'unique')
 {favouritestyle = prompt('please only write classic or unique');
}*/

// if(stars<=5) {star +='<img src="pic/star.png"/>';}

var stars= prompt('What star rating would you give us from 5');
var result='';
var star='<img src="pic/star.png"/>';

var number=1;

 for (var i= 0; i< stars; i++){
     document.write(star + number);
     number++
 }

