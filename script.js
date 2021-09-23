//create the input element(date)
//create a pdiv element

var pdiv=document.createElement('div');
pdiv.setAttribute('style','padding-top:20px');

//create a date input field
var datelem=document.createElement('input');
datelem.setAttribute('type','date');
datelem.setAttribute('id','dob')
datelem.setAttribute('name','dob')

pdiv.appendChild(datelem);

//create a button element

var button=document.createElement('button');
button.innerHTML='Display Data';
button.setAttribute('class','btn btn-primary');
button.addEventListener('click',calculate);

pdiv.appendChild(button);

//display the data in the html
var dd=document.createElement('div');
dd.setAttribute('id','display'); //we can use document.getElementbyID later

function calculate(){
    var input=document.getElementById('dob').value;//i need the input value
    console.log(input); //input is the content of the input textbox
    //whether my input date is a valid date or not
    if(Date.parse(input)){
        //standard representation of the date
      var inputdate=new Date(input);
      console.log(inputdate);
      //today's date
      var currentdate=new Date();
      console.log(currentdate);  

      var millisecondsdiff=parseInt(currentdate.getTime())-parseInt(inputdate.getTime());
      console.log(millisecondsdiff);

      var secondsdiff=mathfloor(millisecondsdiff,1000);
      console.log(secondsdiff);

      var minutediff=mathfloor(secondsdiff,60);
      console.log(minutediff)

      var hourdiff=mathfloor(minutediff,60);
      console.log(hourdiff);

      var daydiff=mathfloor(hourdiff,24);
      console.log(daydiff);

      var yeardiff=getyear(inputdate,currentdate);
      console.log(yeardiff);

      var monthdiff=getmonth(inputdate,currentdate);
      console.log(monthdiff);

      dd.innerHTML=`given input date is : ${inputdate} <br>
      year: ${yeardiff}<br>
      month:${monthdiff} <br>
      day:${daydiff}<br>
      seconds:${secondsdiff}<br>
      minutes:${minutediff}<br>
      miliseconds:${millisecondsdiff}`
    }
    else{
        dd.innerHTML="invalid date";
    }
    document.body.appendChild(dd);
}


function mathfloor(value1,value2)
{
  return Math.floor(value1/value2);
}

function getyear(val1,val2){
    var date1=new Date(val1);
    var date2=new Date(val2);
    return date2.getFullYear()-date1.getFullYear();
}

function getmonth(val1,val2){
    var year=getyear(val1,val2);
    var month=(year*12)+(val2.getMonth()-val1.getMonth());
    return month;
}


document.body.append(pdiv);
