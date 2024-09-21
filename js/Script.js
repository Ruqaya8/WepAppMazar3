//A
var hotel=[
{name:'Arina',rooms:120,booked:79},
{name:'Hilton',rooms:500,booked:270},
{name:'Mrina',rooms:340,booked:105}];

function availableRoomes(totRomes,bookedRomes){
this.rooms=totRomes;
this.booked=bookedRomes;
return available=rooms-booked;
}


for(i=0;i<hotel.length;i++){
    var x = document.createElement("h1");
    var y = document.createTextNode((hotel[i]));
    x.appendChild(y);
    var pos=document.getElementsByTagName('div');
    pos.appendChild(x);

}


for(i=0;i<hotel.length;i++){
    document.getElementById('demo').innerHTML = 
    'Hotel name'+ hotel[0] +'Available Roomes'+availableRoomes();
}


//B

var arr= [BMW,Mecedes,Audi,Ford,Toyota];
for(i=0;i<arr.length;i++){
    var x = document.createElement("h1");
    var y = document.createTextNode((arr[i]));
    x.appendChild(y);
    var pos=document.getElementsByTagName('div');
    pos.appendChild(x);

}
