var canvas =document.querySelector('canvas');
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
var ctx = canvas.getContext('2d');



var x=Math.random()*innerWidth;
var y=Math.random()*innerHeight;
var dx=(Math.random()-0.5)*2;
var dy=(Math.random()-0.5)*4;
var x1=Math.random()*innerWidth;
var y1=Math.random()*innerHeight;
var dx1=(Math.random()-0.5)*8;
var dy1=(Math.random()-0.5)*5;
var x2=Math.random()*innerWidth;
var y2=Math.random()*innerHeight;
var dx2=(Math.random()-0.5)*9;
var dy2=(Math.random()-0.5)*9;
var x3=Math.random()*innerWidth;
var y3=Math.random()*innerHeight;
var dx3=(Math.random()-0.5)*4;
var dy3=(Math.random()-0.5)*8;
var x4=Math.random()*innerWidth;
var y4=Math.random()*innerHeight;
var dx4=(Math.random()-0.5)*8;
var dy4=(Math.random()-0.5)*19;
var x5=Math.random()*innerWidth;
var y5=Math.random()*innerHeight;
var dx5=(Math.random()-0.5)*9;
var dy5=(Math.random()-0.5)*8;
var x6=Math.random()*innerWidth;
var y6=Math.random()*innerHeight;
var dx6=(Math.random()-0.5)*8;
var dy6=(Math.random()-0.5)*5;
var x7=Math.random()*innerWidth;
var y7=Math.random()*innerHeight;
var dx7=(Math.random()-0.5)*4;
var dy7=(Math.random()-0.5)*6;
var x8=Math.random()*innerWidth;
var y8=Math.random()*innerHeight;
var dx8=(Math.random()-0.5)*6;
var dy8=(Math.random()-0.5)*9;
var x9=Math.random()*innerWidth;
var y9=Math.random()*innerHeight;
var dx9=(Math.random()-0.5)*1;
var dy9=(Math.random()-0.5)*7;
var x10=Math.random()*innerWidth;
var y10=Math.random()*innerHeight;
var dx10=(Math.random()-0.5)*5;
var dy10=(Math.random()-0.5)*8;
var x11=Math.random()*innerWidth;
var y11=Math.random()*innerHeight;
var dx11=(Math.random()-0.5)*2;
var dy11=(Math.random()-0.5)*6;
var x12=Math.random()*innerWidth;
var y12=Math.random()*innerHeight;
var dx12=(Math.random()-0.5)*6;
var dy12=(Math.random()-0.5)*7;
var x13=Math.random()*innerWidth;
var y13=Math.random()*innerHeight;
var dx13=(Math.random()-0.5)*5;
var dy13=(Math.random()-0.5)*4;
var x14=Math.random()*innerWidth;
var y14=Math.random()*innerHeight;
var dx14=(Math.random()-0.5)*4;
var dy14=(Math.random()-0.5)*6;
var x15=Math.random()*innerWidth;
var y15=Math.random()*innerHeight;
var dx15=(Math.random()-0.5)*6;
var dy15=(Math.random()-0.5)*7;

var x16=Math.random()*innerWidth;
var y16=Math.random()*innerHeight;
var dx16=(Math.random()-0.5)*6;
var dy16=(Math.random()-0.5)*7;
var x17=Math.random()*innerWidth;
var y17=Math.random()*innerHeight;
var dx17=(Math.random()-0.5)*5;
var dy17=(Math.random()-0.5)*4;
var x18=Math.random()*innerWidth;
var y18=Math.random()*innerHeight;
var dx18=(Math.random()-0.5)*4;
var dy18=(Math.random()-0.5)*6;
var x19=Math.random()*innerWidth;
var y19=Math.random()*innerHeight;
var dx19=(Math.random()-0.5)*6;
var dy19=(Math.random()-0.5)*7;
var x20=Math.random()*innerWidth;
var y20=Math.random()*innerHeight;
var dx20=(Math.random()-0.5)*6;
var dy20=(Math.random()-0.5)*7;




radius =3;


function animate(){
 requestAnimationFrame(animate);
 ctx.clearRect(0,0,innerWidth,innerHeight);

 //bouncing balls

 ctx.beginPath();
 ctx.arc(x,y,radius,0,Math.PI*2,true);
 ctx.strokeStyle="red";
 ctx.fillStyle="red";
 ctx.fill();
 ctx.stroke();
 x-=dx;
 if(x + radius > innerWidth||x-radius<0){
  dx = -dx;}
  y-=dy;
 if(y + radius > innerHeight || y-radius<0){
  dy = -dy;
 }

 ctx.beginPath();
 ctx.arc(x1,y1,radius,0,Math.PI*2,true);
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();
 x1+=dx1;
 if(x1 + radius > innerWidth || x1-radius<0){
  dx1 = -dx1;
 }
 y1+=dy1;
 if(y1 + radius > innerHeight || y1-radius<0){
  dy1 = -dy1;
 }

 ctx.beginPath();
 ctx.arc(x2,y2,radius,0,Math.PI*2,true);
 ctx.strokeStyle="skyblue";
 ctx.fillStyle=" skyblue";
 ctx.fill();
 x2-=dx2;
 if(x2 + radius > innerWidth || x2-radius<0){
  dx2 = -dx2;
 }
 y2-=dy2;
 if(y2 + radius > innerHeight || y2-radius<0){
  dy2 = -dy2;
 }

 ctx.beginPath();
 ctx.arc(x3,y3,radius,0,Math.PI*2,true);
 ctx.strokeStyle="rgb(27, 79, 114)";
 ctx.fillStyle="rgb(27, 79, 114)";
 ctx.fill();
 x3+=dx3;
 if(x3 + radius > innerWidth || x3-radius<0){
  dx3 = -dx3;
 }
 y3+=dy3;
 if(y3 + radius > innerHeight || y3-radius<0){
  dy3 = -dy3;
 }

 ctx.beginPath();
 ctx.arc(x4,y4,radius,0,Math.PI*2,true);
 ctx.strokeStyle="pink";
 ctx.fillStyle="pink";
 ctx.fill();
 x4-=dx4;
 if(x4 + radius > innerWidth || x4-radius<0){
  dx4 = -dx4;
 }
 y4-=dy4;
 if(y4 + radius > innerHeight || y4-radius<0){
  dy4 = -dy4;
 }

 ctx.beginPath();
 ctx.arc(x5,y5,radius,0,Math.PI*2,true);
 ctx.strokeStyle="rgb(241, 196, 105)";
 ctx.fillStyle="rgb(241, 196, 105)";
 ctx.fill();
 x5+=dx5;
 if(x5 + radius > innerWidth || x5-radius<0){
  dx5 = -dx5;
 }
 y5+=dy5;
 if(y5 + radius > innerHeight || y5-radius<0){
  dy5 = -dy5;
 }

 ctx.beginPath();
 ctx.arc(x6,y6,radius,0,Math.PI*2,true);
 ctx.strokeStyle="orange";
 ctx.fillStyle="orange";
 ctx.fill();
 x6-=dx6;
 if(x6 + radius > innerWidth || x6-radius<0){
  dx6 = -dx6;
 }
 y6-=dy6;
 if(y6 + radius > innerHeight || y6-radius<0){
  dy6 = -dy6;
 }

 ctx.beginPath();
 ctx.arc(x7,y7,radius,0,Math.PI*2,true);
 ctx.strokeStyle="green";
 ctx.fillStyle="green";
 ctx.fill();
 x7+=dx7;
 if(x7 + radius > innerWidth || x7-radius<0){
  dx7 = -dx7;
 }
 y7+=dy7;
 if(y7 + radius > innerHeight || y7-radius<0){
  dy7 = -dy7;
 }

 ctx.beginPath();
 ctx.arc(x8,y8,radius,0,Math.PI*2,true);
 ctx.strokeStyle="red";
 ctx.fillStyle="red";
 ctx.fill();
 x8-=dx8;
 if(x8 + radius > innerWidth || x8-radius<0){
  dx8= -dx8;
 }
 y8-=dy8;
 if(y8 + radius > innerHeight || y8-radius<0){
  dy8 = -dy8;
 }

 ctx.beginPath();
 ctx.arc(x9,y9,radius,0,Math.PI*2,true);
 ctx.strokeStyle="brown";
 ctx.fillStyle="brown";
 ctx.fill();
 x9+=dx9;
 if(x9 + radius > innerWidth || x9-radius<0){
  dx9= -dx9;
 }
 y8+=dy8;
 if(y9 + radius > innerHeight || y9-radius<0){
  dy9 = -dy9;
 }

 ctx.beginPath();
 ctx.arc(x10,y10,radius,0,Math.PI*2,true);
 ctx.strokeStyle="darkorchid";
 ctx.fillStyle="darkorchid";
 ctx.fill();
 x10+=dx10;
 if(x10 + radius > innerWidth || x10-radius<0){
  dx10= -dx10;
 }
 y10-=dy10;
 if(y10 + radius > innerHeight || y10-radius<0){
  dy10 = -dy10;
 }

 ctx.beginPath();
 ctx.arc(x11,y11,radius,0,Math.PI*2,true);
 ctx.strokeStyle="darkcyan";
 ctx.fillStyle="darkcyan";
 ctx.fill();
 x11-=dx11;
 if(x11 + radius > innerWidth || x11-radius<0){
  dx11= -dx11;
 }
 y11+=dy11;
 if(y11 + radius > innerHeight || y11-radius<0){
  dy11 = -dy11;
 }

 ctx.beginPath();
 ctx.arc(x12,y12,radius,0,Math.PI*2,true);
 ctx.strokeStyle="violet";
 ctx.fillStyle="violet";
 ctx.fill();
 x12-=dx12;
 if(x12 + radius > innerWidth || x12-radius<0){
  dx12= -dx12;
 }
 y12-=dy12;
 if(y12 + radius > innerHeight || y12-radius<0){
  dy12 = -dy12;
 }

 ctx.beginPath();
 ctx.arc(x13,y13,radius,0,Math.PI*2,true);
 ctx.strokeStyle="slateblue";
 ctx.fillStyle="slateblue";
 ctx.fill();
 x13+=dx13;
 if(x13 + radius > innerWidth || x13-radius<0){
  dx13= -dx13;
 }
 y13+=dy13;
 if(y13 + radius > innerHeight || y13-radius<0){
  dy13= -dy13;
 }

 ctx.beginPath();
 ctx.arc(x14,y14,radius,0,Math.PI*2,true);
 ctx.strokeStyle="tomato";
 ctx.fillStyle="tomato";
 ctx.fill();
 x14+=dx14;
 if(x14 + radius > innerWidth || x14-radius<0){
  dx14= -dx14;
 }
 y14+=dy14;
 if(y14 + radius > innerHeight || y14-radius<0){
  dy14 = -dy14;
 }

 ctx.beginPath();
 ctx.arc(x15,y15,radius,0,Math.PI*2,true);
 ctx.strokeStyle="blue";
 ctx.fillStyle="blue";
 ctx.fill();
 x15+=dx15;
 if(x15 + radius > innerWidth || x15-radius<0){
  dx15= -dx15;
 }
 y15+=dy15;
 if(y15 + radius > innerHeight || y15-radius<0){
  dy15 = -dy15;
 }

 ctx.beginPath();
 ctx.arc(x16,y16,radius,0,Math.PI*2,true);
 ctx.strokeStyle="pink";
 ctx.fillStyle="pink";
 ctx.fill();
 x16+=dx16;
 if(x16 + radius > innerWidth || x16-radius<0){
  dx16= -dx16;
 }
 y16+=dy16;
 if(y16 + radius > innerHeight || y16-radius<0){
  dy16 = -dy16;
 }

 ctx.beginPath();
 ctx.arc(x17,y17,radius,0,Math.PI*2,true);
 ctx.strokeStyle="rga(128, 54, 124)";
 ctx.fillStyle="rga(12, 54, 14)";
 ctx.fill();
 x17+=dx17;
 if(x16 + radius > innerWidth || x16-radius<0){
  dx17= -dx17;
 }
 y17+=dy17;
 if(y17 + radius > innerHeight || y17-radius<0){
  dy17 = -dy17;
 }

 ctx.beginPath();
 ctx.arc(x18,y18,radius,0,Math.PI*2,true);
 ctx.strokeStyle="rga(244, 246, 247 )";
 ctx.fillStyle="black";
 ctx.fill();
 x18+=dx18;
 if(x18 + radius > innerWidth || x18-radius<0){
  dx18= -dx18;
 }
 y18+=dy18;
 if(y18 + radius > innerHeight || y18-radius<0){
  dy18 = -dy18;
 }

 ctx.beginPath();
 ctx.arc(x19,y19,radius,0,Math.PI*2,true);
 ctx.strokeStyle="rga(244, 246, 247 )";
 ctx.fillStyle="white";
 ctx.fill();
 x19+=dx19;
 if(x19 + radius > innerWidth || x19-radius<0){
  dx19= -dx19;
 }
 y19+=dy19;
 if(y19 + radius > innerHeight || y19-radius<0){
  dy19 = -dy19;
 }

 ctx.beginPath();
 ctx.arc(x20,y20,radius,0,Math.PI*2,true);
 ctx.strokeStyle="rga(244, 246, 266 )";
 ctx.fillStyle="white";
 ctx.fill();
 x20+=dx20;
 if(x20 + radius > innerWidth || x20-radius<0){
  dx20= -dx20;
 }
 y20+=dy20;
 if(y20 + radius > innerHeight || y20-radius<0){
  dy20 = -dy20;
 }



 //circle 

 ctx.beginPath();
 ctx.arc(975,450,350,0,Math.PI*2,true);
 ctx.strokeStyle="lavenderblush";
 ctx.fillStyle="peachpuff";
 ctx.fill();

 //face 
 
 //eyebrows

 //right eyebrows 

 ctx.beginPath();
 ctx.moveTo(1000,300);
 ctx.lineTo(1025,297);
 ctx.lineTo(1070,270);
 ctx.lineTo(1060,265);

 ctx.moveTo(1050,275);
 ctx.lineTo(1110,280);
 ctx.lineTo(1150,275);
 ctx.lineTo(1060,265);

 //left eyebrows strips
 
 ctx.moveTo(920,320);
 ctx.lineTo(915,308);
 ctx.lineTo(850,282);
 ctx.lineTo(835,300);
 
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();


//around circles
     
//right eye circle strips

 ctx.beginPath();
 ctx.lineTo(1020,347);
 ctx.lineTo(1070,322);
 ctx.lineTo(1070,327);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.lineTo(1080,322);
 ctx.lineTo(1080,327);
 ctx.lineTo(1110,332);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.lineTo(1024,345);
 ctx.lineTo(1080,339);
 ctx.lineTo(1110,332);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.lineTo(1020,335);
 ctx.lineTo(1060,313);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.lineTo(1060,313);
 ctx.lineTo(1100,320);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 //left eye circle strips

 ctx.beginPath();
 ctx.lineTo(840,365);
 ctx.lineTo(887,346);
 ctx.lineTo(888,350);
 ctx.lineTo(841,365);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.lineTo(895,347);
 ctx.lineTo(914,360);
 ctx.lineTo(895,350);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.lineTo(914,360);
 ctx.lineTo(892,365);
 ctx.lineTo(892,362);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.lineTo(892,362);
 ctx.lineTo(892,365);
 ctx.lineTo(842,364);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.lineTo(844,348);
 ctx.lineTo(892,336);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.lineTo(892,336);
 ctx.lineTo(912,348);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();


 // hair strips


 ctx.beginPath();
 ctx.moveTo(950,130);
 ctx.lineTo(950,125);
 ctx.lineTo(840,150);
 ctx.lineTo(840,155);
 ctx.stroke();
 ctx.strokeStyle="crimson";
 ctx.fillStyle="crimson";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(980,135);
 ctx.lineTo(980,130);
 ctx.lineTo(870,165);
 ctx.lineTo(870,170);
 ctx.stroke();
 ctx.strokeStyle="rgba(0,0,0,0.5)";
 ctx.fillStyle="rgba(0,0,0,0.5)";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(870,175);
 ctx.lineTo(870,172);
 ctx.lineTo(830,195);
 ctx.lineTo(830,200);
 ctx.stroke();
 ctx.strokeStyle="crimson";
 ctx.fillStyle="crimson";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(770,276);
 ctx.lineTo(770,272);
 ctx.lineTo(800,195);
 ctx.lineTo(800,200);
 ctx.stroke();
 ctx.strokeStyle="crimson";
 ctx.fillStyle="crimson";
 ctx.fill();


 ctx.beginPath();
 ctx.moveTo(800,165);
 ctx.lineTo(806,167);
 ctx.lineTo(754,245);
 ctx.lineTo(750,240);
 ctx.stroke();
 // ctx.strokeStyle="chocolate";
 ctx.fillStyle="chocolate";
 ctx.fill();


 ctx.beginPath();
 ctx.moveTo(800,270);
 ctx.lineTo(790,280);
 ctx.lineTo(780,300);
 ctx.lineTo(785,305);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(801,388);
 ctx.lineTo(800,380);
 ctx.lineTo(810,500);
 ctx.lineTo(811,503);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(825,588);
 ctx.lineTo(824,585);
 ctx.lineTo(840,650);
 ctx.lineTo(841,655);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 // ctx.beginPath();
 // ctx.moveTo(735,578);
 // ctx.lineTo(734,570);
 // ctx.lineTo(740,630);
 // ctx.lineTo(741,635);
 // ctx.stroke();
 // ctx.strokeStyle="black";
 // ctx.fillStyle="black";
 // ctx.fill();


 // ctx.beginPath();
 // ctx.moveTo(705,478);
 // ctx.lineTo(704,470);
 // ctx.lineTo(720,550);
 // ctx.lineTo(721,555);
 // ctx.stroke();
 // ctx.strokeStyle="black";
 // ctx.fillStyle="black";
 // ctx.fill();

 // ctx.beginPath();
 // ctx.moveTo(750,458);
 // ctx.lineTo(751,450);
 // ctx.lineTo(780,580);
 // ctx.lineTo(783,585);
 // ctx.stroke();
 // ctx.strokeStyle="black";
 // ctx.fillStyle="black";
 // ctx.fill();

 ctx.beginPath();
 ctx.moveTo(750,358);
 ctx.lineTo(751,350);
 ctx.lineTo(780,480);
 ctx.lineTo(778,485);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(790,452);
 ctx.lineTo(799,550);
 ctx.lineTo(785,530);
 ctx.lineTo(785,442);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 // ctx.beginPath();
 // ctx.moveTo(780,552);
 // ctx.lineTo(778,550);
 // ctx.lineTo(765,650);
 // ctx.lineTo(767,632);
 // ctx.stroke();
 // ctx.strokeStyle="black";
 // ctx.fillStyle="black";
 // ctx.fill();

 ctx.beginPath();
 ctx.moveTo(770,592);
 ctx.lineTo(772,590);
 ctx.lineTo(784,630);
 ctx.lineTo(783,652);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(770,392);
 ctx.lineTo(772,390);
 ctx.lineTo(764,430);
 ctx.lineTo(763,432);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();


 // ctx.beginPath();
 // ctx.moveTo(770,292);
 // ctx.lineTo(772,290);
 // ctx.lineTo(764,430);
 // ctx.lineTo(763,430);
 // ctx.stroke();
 // ctx.strokeStyle="black";
 // ctx.fillStyle="black";
 // ctx.fill();

 // ctx.beginPath();
 // ctx.moveTo(700,292);
 // ctx.lineTo(702,290);
 // ctx.lineTo(714,430);
 // ctx.lineTo(713,430);
 // ctx.stroke();
 // ctx.strokeStyle="black";
 // ctx.fillStyle="black";
 // ctx.fill();

 ctx.beginPath();
 ctx.moveTo(725,280);
 ctx.lineTo(730,290);
 ctx.lineTo(730,450);
 ctx.lineTo(723,450);
 ctx.stroke();
 ctx.strokeStyle="rgba(266,25,21,0.5)";
 ctx.fillStyle="rgba(266,25,21,0.5)";
 ctx.fill();

 // ctx.beginPath();
 // ctx.moveTo(720,442);
 // ctx.lineTo(718,450);
 // ctx.lineTo(714,520);
 // ctx.lineTo(723,550);
 // ctx.stroke();
 // ctx.strokeStyle="rrgba(266,25,21,0.5)";
 // ctx.fillStyle="rgba(266,25,21,0.5)";
 // ctx.fill();

 ctx.beginPath();
 ctx.moveTo(735,215);
 ctx.lineTo(748,220);
 ctx.lineTo(736,350);
 ctx.lineTo(730,350);
 ctx.stroke();
 ctx.strokeStyle="rgba(266,25,21,0.5)";
 ctx.fillStyle="rgba(266,25,21,0.5)";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(725,455);
 ctx.lineTo(738,460);
 ctx.lineTo(775,590);
 ctx.lineTo(766,600);
 ctx.stroke();
 ctx.strokeStyle="rgba(266,25,21,0.5)";
 ctx.fillStyle="rgba(266,25,21,0.5)";
 ctx.fill();

 // ctx.beginPath();
 // ctx.moveTo(735,455);
 // ctx.lineTo(748,460);
 // ctx.lineTo(795,590);
 // ctx.lineTo(816,610);
 // ctx.stroke();
 // ctx.strokeStyle="rrgba(266,200,21,0.5)";
 // ctx.fillStyle="rgba(266,200,0,0.5)";
 // ctx.fill();

 ctx.beginPath();
 ctx.moveTo(780,300);
 ctx.lineTo(785,470);
 ctx.lineTo(795,490);
 ctx.lineTo(790,300);
 ctx.lineTo(850,150);
 ctx.stroke();
 ctx.strokeStyle="rgba(266,200,21,0.5)";
 ctx.fillStyle="rgba(266,200,0,0.5)";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(760,235);
 ctx.lineTo(770,485);
 ctx.lineTo(780,490);
 ctx.lineTo(770,250);
 ctx.lineTo(850,125);
 ctx.stroke();
 ctx.strokeStyle="rgba(266,200,250,0.8)";
 ctx.fillStyle="rgba(266,170,250,0.8)";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(800,320);
 ctx.lineTo(800,600);
 ctx.lineTo(810,600);
 ctx.lineTo(810,330);
 ctx.lineTo(850,150);
 ctx.stroke();
 ctx.strokeStyle="rgba(266,200,250,0.8)";
 ctx.fillStyle="rgba(226,100,200,0.8)";
 ctx.fill();


 ctx.beginPath();
 ctx.moveTo(840,192);
 ctx.lineTo(842,190);
 ctx.lineTo(850,285);
 ctx.lineTo(823,310);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(1125,192);
 ctx.lineTo(1102,170);
 ctx.lineTo(1175,335);
 ctx.lineTo(1150,310);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(1190,290);
 ctx.lineTo(1144,270);
 ctx.lineTo(1240,400);
 ctx.lineTo(1150,310);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(1266,400);
 ctx.lineTo(1245,380);
 ctx.lineTo(1180,500);
 ctx.lineTo(1220,410);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(1180,500);
 ctx.lineTo(1205,510);
 ctx.lineTo(1235,550);
 // ctx.lineTo(1230,460);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(990,140);
 ctx.lineTo(980,130);
 ctx.lineTo(1105,172);
 ctx.lineTo(1105,175);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(1080,150);
 ctx.lineTo(1120,200);
 ctx.lineTo(1180,190);
 ctx.lineTo(1090,180);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(1080,145);
 ctx.lineTo(1200,250);
 ctx.lineTo(1200,240);
 ctx.lineTo(1095,139);
 ctx.lineTo(990,109);
 ctx.lineTo(990,118);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(1220,245);
 ctx.lineTo(1270,520);
 ctx.lineTo(1280,510);
 ctx.lineTo(1235,239);
 ctx.lineTo(1103,128);
 ctx.lineTo(1100,130);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(990,120);
 ctx.lineTo(1080,150);
 ctx.lineTo(998,135);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="rgba(26,85,75,1)";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(1200,200);
 ctx.lineTo(1220,220);
 ctx.lineTo(1250,325);
 ctx.lineTo(1240,325);
 ctx.stroke();
 ctx.strokeStyle="rgba(126,227,175,0.8)";
 ctx.fillStyle="rgba(26,85,75,1)";
 ctx.fill();

 
 ctx.beginPath();
 ctx.moveTo(1230,300);
 ctx.lineTo(1220,320);
 ctx.lineTo(1250,500);
 ctx.lineTo(1235,570);
 ctx.stroke();
 ctx.strokeStyle="rgba(26,85,75,1)";
 ctx.fillStyle="rgba(126,227,175,0.8)";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(1180,240);
 ctx.lineTo(1190,240);
 ctx.lineTo(1250,400);
 ctx.lineTo(1240,400);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="rgba(226,185,125,0.8)";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(1260,300);
 ctx.lineTo(1270,300);
 ctx.lineTo(1300,405);
 ctx.lineTo(1290,400);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="rgba(106,105,12,0.8)";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(1260,270);
 ctx.lineTo(1245,260);
 ctx.lineTo(1280,550);
 ctx.lineTo(1288,550);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="rgba(206,105,125,0.8)";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(820,292);
 ctx.lineTo(835,290);
 ctx.lineTo(809,388);
 ctx.lineTo(812,410);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();

 ctx.beginPath();
 ctx.moveTo(808,388);
 // ctx.lineTo(805,390);
 ctx.lineTo(855,600);
 ctx.lineTo(886,660);
 ctx.stroke();
 ctx.strokeStyle="black";
 ctx.fillStyle="black";
 ctx.fill();


//face circles

ctx.beginPath();
ctx.arc(960,315,3.3,0,Math.PI*2,true);
ctx.strokeStyle="black";
ctx.fillStyle="black";
ctx.fill();

ctx.beginPath();
ctx.arc(890,355,10,0,Math.PI*2,true);
ctx.strokeStyle="black";
ctx.fillStyle="black";
ctx.fill();

ctx.beginPath();
ctx.arc(890,355,1.5,0,Math.PI*2,true);
ctx.strokeStyle="white";
ctx.fillStyle="white";
ctx.fill();

ctx.beginPath();
ctx.arc(1075,330,10,0,Math.PI*2,true);
ctx.strokeStyle="black";
ctx.fillStyle="black";
ctx.fill();

ctx.beginPath();
ctx.arc(1075,330,1.5,0,Math.PI*2,true);
ctx.strokeStyle="white";
ctx.fillStyle="white";
ctx.fill();

// nose

// ctx.beginPath();
// ctx.moveTo(959,351);
// ctx.lineTo(946,358);
// ctx.lineTo(944,445);
// // ctx.strokeStyle="rgba(0,0,0,0.2)";
// ctx.fillStyle="rgba(0,0,0,0.2)";
// ctx.fill();

ctx.beginPath();
ctx.moveTo(944,444);
ctx.lineTo(950,510);
ctx.lineTo(940,490);
// ctx.strokeStyle="rgba(0,0,0,0.7)";
ctx.fillStyle="rgba(0,0,0,0.2)";
ctx.fill();

ctx.beginPath();
ctx.moveTo(975,350);
ctx.lineTo(990,400);
ctx.lineTo(1018,506);
ctx.lineTo(995,498);
ctx.stroke();
ctx.strokeStyle="rgba(0,0,0,0.5)";
ctx.fillStyle="rgba(0,0,0,0.3)";
ctx.fill();

ctx.beginPath();
ctx.moveTo(972,510);
ctx.lineTo(995,498);
ctx.lineTo(1007,503);
ctx.lineTo(975,521);
ctx.lineTo(948,508);
ctx.lineTo(950,494);
ctx.stroke();
// ctx.strokeStyle="rgba(0,0,0,0.4)";
ctx.fillStyle="rgba(0,0,0,0.3)";
ctx.fill();

ctx.beginPath();
ctx.moveTo(958,352);
ctx.lineTo(975,352);
ctx.lineTo(992,445);
ctx.lineTo(944,445);
ctx.stroke();
// ctx.strokeStyle="rgba(0,0,0,0.5)";
ctx.fillStyle="rgba(0,0,0,0.7)";
ctx.fill();

ctx.beginPath();
ctx.moveTo(995,497);
ctx.lineTo(992,445);
ctx.lineTo(944,445);
ctx.lineTo(950,494);
ctx.stroke();
// ctx.strokeStyle="rgba(0,0,0,0.6)";
ctx.fillStyle="rgba(0,0,0,0.7)";
ctx.fill();

ctx.beginPath();
ctx.moveTo(992,516);
ctx.lineTo(1004,512);
ctx.lineTo(1018,504);
ctx.lineTo(1005,502);
ctx.lineTo(980,518);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle="black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(970,518);
ctx.lineTo(950,512);
ctx.lineTo(945,500);
ctx.stroke();
ctx.strokeStyle="black";
ctx.fillStyle="black";
ctx.fill();


ctx.beginPath();
ctx.moveTo(995,497);
ctx.lineTo(972,510);
ctx.lineTo(950,494);
ctx.stroke();
// ctx.strokeStyle="rgba(0,0,0,0.7)";
ctx.fillStyle="rgba(0,0,0,0.7)";
ctx.fill();

// ctx.beginPath();
// ctx.moveTo(995,497);
// ctx.lineTo(985,355);
// ctx.lineTo(975,352);
// ctx.stroke();
// // ctx.strokeStyle="rgba(0,0,0,0.8)";
// ctx.fillStyle="rgba(0,0,0,0.8)";
// ctx.fill();



//mouth

ctx.beginPath();
ctx.moveTo(900,559);
ctx.lineTo(900,560);
ctx.stroke();
ctx.strokeStyle="rgba(260,0,0,0)";
ctx.fillStyle="cream";
ctx.fill();


ctx.beginPath();
ctx.moveTo(955,560);
ctx.lineTo(925,570);
ctx.lineTo(915,575);
ctx.lineTo(953,572);
ctx.lineTo(967,577);
ctx.lineTo(966,562);
ctx.stroke();
ctx.strokeStyle="rgba(260,0,0,0.7)";
ctx.fillStyle="rgba(260,0,0,0.7)";
ctx.fill();

ctx.beginPath();
ctx.moveTo(985,559);
ctx.lineTo(1045,566);
ctx.lineTo(1035,568);
ctx.lineTo(985,575);
ctx.lineTo(967,577);
ctx.lineTo(966,562);
ctx.stroke();
ctx.strokeStyle="rgba(260,0,0,0.7)";
ctx.fillStyle="rgba(260,0,0,0.7)";
ctx.fill();


ctx.beginPath();
ctx.moveTo(920,574);
ctx.lineTo(955,572);
ctx.lineTo(965,577);
ctx.lineTo(917,576);
ctx.stroke();
ctx.strokeStyle="rgba(260,0,0,0.7)";
ctx.fillStyle="rgba(260,0,0,0.7)";
ctx.fill();

ctx.beginPath();
ctx.arc(978,495,100,0.8,Math.PI*0.69,false);
ctx.strokeStyle="rgba(260,0,0,0.7)";
ctx.fillStyle="rgba(260,0,0,0.7)";
ctx.fill();


}
animate()
