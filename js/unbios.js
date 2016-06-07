/*! unbios.js v1.00.00 | (c) 2016 unbios.com */

'use strict';

/* 

static persitent global vars * global functions 
server side events functions
client side events functions

*/

/*! jsTimezoneDetect - v1.0.5 - 2013-04-01 */
window.jstz=function(){var b=function(a){a=-a.getTimezoneOffset();return null!==a?a:0},c=function(){return b(new Date(2010,0,1,0,0,0,0))},f=function(){return b(new Date(2010,5,1,0,0,0,0))},e=function(){var a=c(),d=f(),b=c()-f();return new jstz.TimeZone(jstz.olson.timezones[0>b?a+",1":0<b?d+",1,s":a+",0"])};return{determine_timezone:function(){"undefined"!==typeof console&&console.log("jstz.determine_timezone() is deprecated and will be removed in an upcoming version. Please use jstz.determine() instead.");
return e()},determine:e,date_is_dst:function(a){var d=5<a.getMonth()?f():c(),a=b(a);return 0!==d-a}}}();jstz.TimeZone=function(b){var c=null,c=b;"undefined"!==typeof jstz.olson.ambiguity_list[c]&&function(){for(var b=jstz.olson.ambiguity_list[c],e=b.length,a=0,d=b[0];a<e;a+=1)if(d=b[a],jstz.date_is_dst(jstz.olson.dst_start_dates[d])){c=d;break}}();return{name:function(){return c}}};jstz.olson={};
jstz.olson.timezones={"-720,0":"Etc/GMT+12","-660,0":"Pacific/Pago_Pago","-600,1":"America/Adak","-600,0":"Pacific/Honolulu","-570,0":"Pacific/Marquesas","-540,0":"Pacific/Gambier","-540,1":"America/Anchorage","-480,1":"America/Los_Angeles","-480,0":"Pacific/Pitcairn","-420,0":"America/Phoenix","-420,1":"America/Denver","-360,0":"America/Guatemala","-360,1":"America/Chicago","-360,1,s":"Pacific/Easter","-300,0":"America/Bogota","-300,1":"America/New_York","-270,0":"America/Caracas","-240,1":"America/Halifax",
"-240,0":"America/Santo_Domingo","-240,1,s":"America/Asuncion","-210,1":"America/St_Johns","-180,1":"America/Godthab","-180,0":"America/Argentina/Buenos_Aires","-180,1,s":"America/Montevideo","-120,0":"America/Noronha","-120,1":"Etc/GMT+2","-60,1":"Atlantic/Azores","-60,0":"Atlantic/Cape_Verde","0,0":"Etc/UTC","0,1":"Europe/London","60,1":"Europe/Berlin","60,0":"Africa/Lagos","60,1,s":"Africa/Windhoek","120,1":"Asia/Beirut","120,0":"Africa/Johannesburg","180,1":"Europe/Moscow","180,0":"Asia/Baghdad",
"210,1":"Asia/Tehran","240,0":"Asia/Dubai","240,1":"Asia/Yerevan","270,0":"Asia/Kabul","300,1":"Asia/Yekaterinburg","300,0":"Asia/Karachi","330,0":"Asia/Kolkata","345,0":"Asia/Kathmandu","360,0":"Asia/Dhaka","360,1":"Asia/Omsk","390,0":"Asia/Rangoon","420,1":"Asia/Krasnoyarsk","420,0":"Asia/Jakarta","480,0":"Asia/Shanghai","480,1":"Asia/Irkutsk","525,0":"Australia/Eucla","525,1,s":"Australia/Eucla","540,1":"Asia/Yakutsk","540,0":"Asia/Tokyo","570,0":"Australia/Darwin","570,1,s":"Australia/Adelaide",
"600,0":"Australia/Brisbane","600,1":"Asia/Vladivostok","600,1,s":"Australia/Sydney","630,1,s":"Australia/Lord_Howe","660,1":"Asia/Kamchatka","660,0":"Pacific/Noumea","690,0":"Pacific/Norfolk","720,1,s":"Pacific/Auckland","720,0":"Pacific/Tarawa","765,1,s":"Pacific/Chatham","780,0":"Pacific/Tongatapu","780,1,s":"Pacific/Apia","840,0":"Pacific/Kiritimati"};
jstz.olson.dst_start_dates={"America/Denver":new Date(2011,2,13,3,0,0,0),"America/Mazatlan":new Date(2011,3,3,3,0,0,0),"America/Chicago":new Date(2011,2,13,3,0,0,0),"America/Mexico_City":new Date(2011,3,3,3,0,0,0),"Atlantic/Stanley":new Date(2011,8,4,7,0,0,0),"America/Asuncion":new Date(2011,9,2,3,0,0,0),"America/Santiago":new Date(2011,9,9,3,0,0,0),"America/Campo_Grande":new Date(2011,9,16,5,0,0,0),"America/Montevideo":new Date(2011,9,2,3,0,0,0),"America/Sao_Paulo":new Date(2011,9,16,5,0,0,0),"America/Los_Angeles":new Date(2011,
2,13,8,0,0,0),"America/Santa_Isabel":new Date(2011,3,5,8,0,0,0),"America/Havana":new Date(2011,2,13,2,0,0,0),"America/New_York":new Date(2011,2,13,7,0,0,0),"Asia/Gaza":new Date(2011,2,26,23,0,0,0),"Asia/Beirut":new Date(2011,2,27,1,0,0,0),"Europe/Minsk":new Date(2011,2,27,2,0,0,0),"Europe/Helsinki":new Date(2011,2,27,4,0,0,0),"Europe/Istanbul":new Date(2011,2,28,5,0,0,0),"Asia/Damascus":new Date(2011,3,1,2,0,0,0),"Asia/Jerusalem":new Date(2011,3,1,6,0,0,0),"Africa/Cairo":new Date(2010,3,30,4,0,0,
0),"Asia/Yerevan":new Date(2011,2,27,4,0,0,0),"Asia/Baku":new Date(2011,2,27,8,0,0,0),"Pacific/Auckland":new Date(2011,8,26,7,0,0,0),"Pacific/Fiji":new Date(2010,11,29,23,0,0,0),"America/Halifax":new Date(2011,2,13,6,0,0,0),"America/Goose_Bay":new Date(2011,2,13,2,1,0,0),"America/Miquelon":new Date(2011,2,13,5,0,0,0),"America/Godthab":new Date(2011,2,27,1,0,0,0)};
jstz.olson.ambiguity_list={"America/Denver":["America/Denver","America/Mazatlan"],"America/Chicago":["America/Chicago","America/Mexico_City"],"America/Asuncion":["Atlantic/Stanley","America/Asuncion","America/Santiago","America/Campo_Grande"],"America/Montevideo":["America/Montevideo","America/Sao_Paulo"],"Asia/Beirut":"Asia/Gaza Asia/Beirut Europe/Minsk Europe/Helsinki Europe/Istanbul Asia/Damascus Asia/Jerusalem Africa/Cairo".split(" "),"Asia/Yerevan":["Asia/Yerevan","Asia/Baku"],"Pacific/Auckland":["Pacific/Auckland",
"Pacific/Fiji"],"America/Los_Angeles":["America/Los_Angeles","America/Santa_Isabel"],"America/New_York":["America/Havana","America/New_York"],"America/Halifax":["America/Goose_Bay","America/Halifax"],"America/Godthab":["America/Miquelon","America/Godthab"]};
  
window.isbrowser = {Useragent: function() {return navigator.userAgent;},Any: function() {return (isbrowser.Useragent() );}}
window.isplatform = {
    Android: function() {return navigator.userAgent.match(/Android/i) ? 'Android' : false;},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i) ? 'BlackBerry' : false;},
    iPhone: function() {return navigator.userAgent.match(/iPhone/i) ? 'iPhone' : false;},
    iPad: function() {return navigator.userAgent.match(/iPad/i) ? 'iPad' : false;},
    iPod: function() {return navigator.userAgent.match(/iPod/i) ? 'iPod' : false;},
    IEMobile: function() {return navigator.userAgent.match(/IEMobile/i) ? 'IEMobile' : false;},
    OS: function() {return navigator.platform;},
    Any: function() {return (isplatform.Android() || isplatform.BlackBerry() || isplatform.iPhone() || isplatform.iPad() || isplatform.iPod() || isplatform.IEMobile() || isplatform.OS() );}};

window.process = [];

window.cstate = 'start';
window.repedo = 0;
window.chick = 0;
window.cluck = 0;
window.newegg = '';
window.fwdstate = 0;

window.docwidth = '';
window.docheight = '';


/* client side events * functions */

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
     checkurlvalue();
  }
}


function checkurlvalue() {
  if ( (window.location.search.substring(1).toString().split('=')[1]) !== 'terms' ) {
      console.log ('no url param detected !');
      document.getElementById('mrglynthomas').style.display = 'block'; 
      document.getElementById('mrlegal').style.display = 'none';
      cstate = 'start';

  } else {
      console.log ('url param detected !');
      document.getElementById('mrglynthomas').style.display = 'none'; 
      document.getElementById('mrlegal').style.display = 'block';
      cstate = 'legal';
  }

  timtoggle('toggle'); timtoggle('resume'); 

}

// window.onload = function() {}

window.onscroll = function() {  
//docwidth = Math.max(document.documentElement["clientWidth"], document.body["scrollWidth"], document.documentElement["scrollWidth"], document.body["offsetWidth"], document.documentElement["offsetWidth"]);
docwidth = ( document.body.scrollWidth || document.documentElement.scrollWidth );
docheight = ( document.body.scrollTop || document.documentElement.scrollTop );
/* console.log('width : ' + docwidth + ' : ' + ' height : ' + docheight); */

};

/*
ref : http://stackoverflow.com/questions/8917921/cross-browser-javascript-not-jquery-scroll-to-top-animation

scrollTo:
e = element to scroll to or top position in pixels
d = time to scroll in ms

scrollToX:
e = scrollable element
a = initiall scrollable element position (from)
b = height to scroll to (to)
t = lerp from a to b (0 - 1)
v = speed. input 1 / time to scroll
s = repeat every 's' miliseconds
*/

function scrollTo(e,d){if(d>=0){var h=document.documentElement;if(h.scrollTop===0){var t=h.scrollTop;++h.scrollTop;h=t+1===h.scrollTop--?h:document.body}typeof e==="object"&&(e=e.offsetTop);scrollToX(h,h.scrollTop,e,0,1/d,20)}}function scrollToX(e,a,b,t,v,s){function F(){var k='';t<0||t>1||v<=0||(k=t-1,e.scrollTop=a-(a-b)*(k*k*k+1),t+=v*s,setTimeout(F,s))} F() }


document.onmouseover = function mouseover(event) {

 var elem = (event.target) ? event.target : event.srcElement;

 try { var tagclass = elem.className.split(" ")[0]; } catch(e) { var tagclass = null; }
 var tagid = elem.id;

 var tagclass = elem.className.toString().split(" ")[0];

 //console.log('mouseover here : '+ tagclass);

 switch(true) {

  case (tagclass === 'profile'):

  break;

 }
}

document.onmouseout = function mouseover(event) {

 var elem = (event.target) ? event.target : event.srcElement;

 try { var tagclass = elem.className.split(" ")[0]; } catch(e) { var tagclass = null; }
 var tagid = elem.id;

 var tagclass = elem.className.toString().split(" ")[0];

 switch(true) {
  case (tagclass === 'profile'):    
  break;

 }
}

document.onclick = function keyClick(event) {

  var elem = (event.target) ? event.target : event.srcElement;
 
  try { var tagclass = elem.className.split(" ")[0]; } catch(e) { var tagclass = null; }
  var tagid = elem.id;

  var tagclass = elem.className.toString().split(" ")[0];
  var tagtype = elem.tagName.toLowerCase();

  console.log(tagid);
  console.log(tagclass);
  /*console.log(tagtype);*/

  switch (true) {

   case (tagclass === 'profile'):
         // clicksound.playclip();
         timtoggle('stop');
         clickchat('intro');
         // document.getElementById('normal').style.display = 'none'; document.getElementById('love').style.display = 'block';

   break;

   case (tagid === 'chicken'):
         // console.log('NOTHING HERE BUT US CHICKENS');
         clearTimeout(chick);clearTimeout(cluck);
         clickchat('chicken');
   break;
   case (tagid === 'egg'):
         clearTimeout(chick);clearTimeout(cluck);
         if (fwdstate !== 3) { boilegg(); } else { console.log('egg timer already called!'); clearInterval(newegg); clickchat('egg');}
   break;

   case (tagclass === 'profilelegal'):
         // clicksound.playclip();
         clickchat('legal');
   break;
   case (tagclass === 'privacyfooter'):

        switch (true) {

          case (docwidth > 1000):
               scrollTo((8533), 700);
          break;

          case (docwidth > 850):
               scrollTo((8526), 700);
          break;

          case (docwidth > 800):
               scrollTo((8536), 700);
          break;

          case (docwidth > 750):
               scrollTo((9042), 700);
          break;

          case (docwidth > 650):
               scrollTo((8449), 700);
          break;

          case (docwidth > 600):
               scrollTo((8656), 700);
          break;

          case (docwidth > 550):
               scrollTo((9547), 700);
          break;

          case (docwidth > 500):
               scrollTo((10040), 700);
          break;

          case (docwidth > 450):
               scrollTo((11184), 700);
          break;

          case (docwidth > 400):
               scrollTo((12605), 700);
          break;

          case (docwidth > 350):
               scrollTo((12908), 700);
          break;

          case (docwidth > 345):
               scrollTo((14720), 700);
          break;

          case (docwidth === 335):
               scrollTo((15228), 700);
          break;

        }

   break;
   case (tagclass === 'termsfooter'):
         scrollTo(0, 700);
   break;

  }

  elem = null;tagclass = null;tagid = null;tagtype = null;

}


function clickchat(begin) {
  switch (begin) {
    case ('intro'):
         if (fwdstate === 0) {
         setTimeout( function() { document.getElementById('normal').style.display = 'none'; document.getElementById('saythings').style.display = 'block';} , 50 );
         setTimeout( function() { set_html_id('saythings','hello'); } , 500 );
         setTimeout( function() { set_html_id('saythings','we'); } , 700 );
         setTimeout( function() { set_html_id('saythings','are'); } , 900 );
         setTimeout( function() { set_html_id('saythings','a'); } , 1100 );
    
         setTimeout( function() { set_html_id('saythings','small'); } , 1300 );
         setTimeout( function() { document.getElementById('egg').style.display = 'block'; document.getElementById('saythings').style.display = 'none';} , 1500 );
         setTimeout( function() { document.getElementById('egg').style.display = 'none'; document.getElementById('saythings').style.display = 'block';} , 1700 );
         setTimeout( function() { set_html_id('saythings','small'); } , 1900 );
         
         setTimeout( function() { set_html_id('saythings','Technical'); } , 2100 );
         setTimeout( function() { document.getElementById('coffee').style.display = 'block'; document.getElementById('saythings').style.display = 'none';} , 2300 );
         setTimeout( function() { document.getElementById('coffee').style.display = 'none'; document.getElementById('saythings').style.display = 'block';} , 2500 );
         setTimeout( function() { set_html_id('saythings','Technical'); } , 2700 );

         setTimeout( function() { set_html_id('saythings','Consultancy'); } , 2900 );
         setTimeout( function() { set_html_id('saythings','we'); } , 3100 );
  
         setTimeout( function() { set_html_id('saythings','Love'); } , 3300 );
         setTimeout( function() { document.getElementById('love').style.display = 'block'; document.getElementById('saythings').style.display = 'none';} , 3500 );
         setTimeout( function() { document.getElementById('love').style.display = 'none'; document.getElementById('saythings').style.display = 'block';} , 3700 );
         setTimeout( function() { set_html_id('saythings','Love'); } , 3900 );

         setTimeout( function() { set_html_id('saythings','Creating'); } , 4100 );
         setTimeout( function() { document.getElementById('brainburn').style.display = 'block'; document.getElementById('saythings').style.display = 'none';} , 4300 );
         setTimeout( function() { document.getElementById('brainburn').style.display = 'none'; document.getElementById('saythings').style.display = 'block';} , 4500 );
         setTimeout( function() { set_html_id('saythings','Creating'); } , 4700 );

         setTimeout( function() { set_html_id('saythings','Solutions'); } , 4900 );
         setTimeout( function() { document.getElementById('brain').style.display = 'block'; document.getElementById('saythings').style.display = 'none';} , 5200 );
         setTimeout( function() { document.getElementById('brain').style.display = 'none'; document.getElementById('saythings').style.display = 'block';} , 5400 );
         setTimeout( function() { set_html_id('saythings','Solutions'); } , 5600 );
  
         setTimeout( function() { set_html_id('saythings','Adding'); } , 5800 );

         setTimeout( function() { set_html_id('saythings','Value'); } , 6000 );
         setTimeout( function() { document.getElementById('money').style.display = 'block'; document.getElementById('saythings').style.display = 'none';} , 6200 );
         setTimeout( function() { document.getElementById('money').style.display = 'none'; document.getElementById('saythings').style.display = 'block';} , 6400 );
         setTimeout( function() { set_html_id('saythings','Value'); } , 6600 );
        
         setTimeout( function() { set_html_id('saythings','To Your'); } ,6800 );
   
         setTimeout( function() { set_html_id('saythings','Business!'); } , 7000 );
         setTimeout( function() { document.getElementById('approve').style.display = 'block'; document.getElementById('saythings').style.display = 'none';} , 7200 );
         setTimeout( function() { document.getElementById('approve').style.display = 'none'; document.getElementById('saythings').style.display = 'block';} , 7400 );
         setTimeout( function() { set_html_id('saythings','Business!'); } , 7600 );

         setTimeout( function() { set_html_id('saythings','Trying to make'); } , 7800 );
         setTimeout( function() { set_html_id('saythings','the impossible'); } , 8200 );

         setTimeout( function() { set_html_id('saythings','Possible'); } , 8600 );
 
         setTimeout( function() { document.getElementById('chicken').style.display = 'block'; document.getElementById('saythings').style.display = 'none'; set_html_id('saythings','');} , 8800 );
         
         fwdstate = 1;
         setTimeout( function() { chickencook(); } , 9000 );
  
         }
    break;
    case ('egg'):
         setTimeout( function() { document.getElementById('egg').style.display = 'none'; document.getElementById('saythings').style.display = 'none'; set_html_id('saythings',''); set_html_id('eggtimer','');} , 100 );
         set_css_id('saythings','margin-top','0px');

    case ('chicken'):
         setTimeout( function() { document.getElementById('chicken').style.display = 'none';document.getElementById('saythings').style.display = 'block';} , 500 );
      
         setTimeout( function() { set_html_id('saythings','I.T. Strategy'); } , 700 );
         setTimeout( function() { set_html_id('saythings','I.T. Security'); } , 900 );
         setTimeout( function() { set_html_id('saythings','Web Apps'); } , 1100 );
         setTimeout( function() { set_html_id('saythings','Digital Branding'); } , 1200 );
         setTimeout( function() { set_html_id('saythings','App Security'); } , 1400 );
         setTimeout( function() { set_html_id('saythings','Mobile Apps'); } , 1600 );
         setTimeout( function() { set_html_id('saythings','Tech'); } , 1800 );
         setTimeout( function() { set_html_id('saythings','Investment'); } , 2000 );
         setTimeout( function() { set_html_id('saythings','Advisors'); } , 2200 );
         setTimeout( function() { set_html_id('saythings','Contact us'); } , 2400 );
         setTimeout( function() { set_html_id('saythings','On'); } , 2600 );

         setTimeout( function() { set_html_id('saythings','Email'); } , 2800 );
         setTimeout( function() { document.getElementById('email').style.display = 'block'; document.getElementById('saythings').style.display = 'none';} , 3000 );
         setTimeout( function() { document.getElementById('email').style.display = 'none'; document.getElementById('saythings').style.display = 'block';} , 3200 );
         setTimeout( function() { set_html_id('saythings','Email'); } , 3400 );
    
         setTimeout( function() { set_html_id('saythings','Or'); } , 3600 );

         setTimeout( function() { set_html_id('saythings','Twitter'); } , 3800 );
         setTimeout( function() { document.getElementById('twitter').style.display = 'block'; document.getElementById('saythings').style.display = 'none';} , 4000 );
         setTimeout( function() { document.getElementById('twitter').style.display = 'none'; document.getElementById('saythings').style.display = 'block';} , 4200 );
         setTimeout( function() { set_html_id('saythings','Twitter'); } , 4400 );

         setTimeout( function() { document.getElementById('details').style.display = 'block';} , 4600 );
         setTimeout( function() { scrollTo(document.body.scrollHeight, 0); } , 4800 );
         setTimeout( function() { scrollTo(document.body.scrollHeight, 500); } , 5000 );
         setTimeout( function() { document.getElementById('begin').style.display = 'none'; } , 5200 );
         setTimeout( function() { document.getElementById('logo-alt').style.display = 'none'; document.getElementById('logo-default').style.display = 'block'; } , 5400 );
         setTimeout( function() { scrollTo(0, 400) } , 5600 );
         setTimeout( function() { timtoggle('stop');} , 5800 );
    break;
    case ('start'):
         if (fwdstate === 0) {
         setTimeout( function() { document.getElementById('normal').style.display = 'none'; document.getElementById('saythings').style.display = 'block';} , 50 );
         setTimeout( function() { set_html_id('saythings','hello'); } , 500 );
         setTimeout( function() { set_html_id('saythings','I\'m Glyn'); } , 700 );
         setTimeout( function() { set_html_id('saythings','Freelance'); } , 900 );
         setTimeout( function() { set_html_id('saythings','Creative'); } , 1100 );
         setTimeout( function() { set_html_id('saythings','Developer'); } , 1300 );
         setTimeout( function() { set_html_id('saythings','Project'); } , 1500 );
         setTimeout( function() { set_html_id('saythings','Manager'); } , 1700 );
         setTimeout( function() { set_html_id('saythings','Tech'); } , 1900 );
         setTimeout( function() { set_html_id('saythings','Consultant'); } , 2100 );
         setTimeout( function() { set_html_id('saythings','Maybe'); } , 2400 );
         setTimeout( function() { set_html_id('saythings','I'); } , 2600 );
         setTimeout( function() { set_html_id('saythings','can'); } , 2800 );
         setTimeout( function() { set_html_id('saythings','help'); } , 3000 );
         // setTimeout( function() { set_html_id('saythings','you'); } , 3200 );
         setTimeout( function() { set_html_id('saythings','?'); } , 3400 );
         setTimeout( function() { document.getElementById('details').style.display = 'block';} , 3600 );
         setTimeout( function() { scrollTo(document.body.scrollHeight, 0); } , 3700 );
         setTimeout( function() { scrollTo(document.body.scrollHeight, 500); } , 3800 );
         setTimeout( function() { document.getElementById('begin').style.display = 'none'; } , 3900 );
         setTimeout( function() { document.getElementById('logo-alt').style.display = 'none'; document.getElementById('logo-default').style.display = 'block'; } , 4700 );
         setTimeout( function() { scrollTo(0, 400) } , 4800 );
         setTimeout( function() { timtoggle('stop');} , 5000 );
         fwdstate = 1;
         }
    break;
        case ('legal'):
         if (fwdstate === 0) {
         setTimeout( function() { document.getElementById('surpriselegal').style.display = 'none'; document.getElementById('saythings').style.display = 'block';} , 50 );
         setTimeout( function() { set_html_id('saythings','hello'); } , 500 );
         setTimeout( function() { set_html_id('saythings','these'); } , 700 );
         setTimeout( function() { set_html_id('saythings','are'); } , 900 );
         setTimeout( function() { set_html_id('saythings','the'); } , 1100 );
         setTimeout( function() { set_html_id('saythings','Terms'); } , 1300 );
         setTimeout( function() { set_html_id('saythings','of'); } , 1500 );
         setTimeout( function() { set_html_id('saythings','Service'); } , 1700 );
         setTimeout( function() { set_html_id('saythings','&'); } , 1900 );
         setTimeout( function() { set_html_id('saythings','Use'); } , 2100 );
         setTimeout( function() { set_html_id('saythings','and'); } , 2400 );
         setTimeout( function() { set_html_id('saythings','Privacy'); } , 2600 );
         setTimeout( function() { set_html_id('saythings','for'); } , 2800 );
         setTimeout( function() { set_html_id('saythings','Unbios.com'); } , 3000 );
         setTimeout( function() { document.getElementById('legal').style.display = 'block';} , 3600 );
         setTimeout( function() { scrollTo(document.body.scrollHeight, 0); } , 3700 );
         setTimeout( function() { scrollTo(document.body.scrollHeight, 10); } , 3800 );
         setTimeout( function() { document.getElementById('begin').style.display = 'none'; } , 3900 );
         setTimeout( function() { document.getElementById('legal-logo-alt').style.display = 'none'; document.getElementById('legal-logo-default').style.display = 'block'; } , 4700 );
         setTimeout( function() { scrollTo(0, 700) } , 4800 );
         setTimeout( function() { timtoggle('stop');} , 5000 );
         fwdstate = 1;
         }
    break;

  }
}

function chicken() {
 if ( fwdstate === 1 ) {
  switch (true) {
    case (fwdstate !== 1):
    break;
    case (document.getElementById('chicken').style.display === 'block'):
          cluck = setTimeout( function() { document.getElementById('chicken').style.display = 'none'; document.getElementById('egg').style.display = 'block'; } , 1000 );
          console.log('chicken check!');
    break; 
    case (document.getElementById('egg').style.display === 'block'):
          cluck = setTimeout( function() { document.getElementById('egg').style.display = 'none'; document.getElementById('chicken').style.display = 'block'; } , 1000 );
          console.log('egg check!');
    break; 

  }
 }
}


function chickencook() {
 if ( fwdstate === 1 ) {
  repedo = repedo + 1;
  if (repedo < 6) {
  chicken();
  chick = setTimeout( function() { chickencook(); } , 1000 );
  } else { clickchat('egg'); }
 }
}


function boilegg() {
 fwdstate = 3;
 setTimeout( function() { document.getElementById('egg').style.display = 'block'; document.getElementById('chicken').style.display = 'none'; } , 1000 );
 document.getElementById('eggtimer').style.display = 'block';
 starttimer((60 * 4), document.querySelector('#eggtimer') );
}


function starttimer(duration, display) {
 var timer = duration, minutes, seconds;
  newegg = setInterval(function () {
  minutes = parseInt(timer / 60, 10)
  seconds = parseInt(timer % 60, 10);

  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  display.textContent = minutes + ":" + seconds;

  if (--timer < 0) { timer = duration;clearInterval(newegg); console.log('timer completed :)');clickchat('egg'); }

 }, 1000);

}


function unscroll(state) {

  switch (state) {
    case ('start'):
          clear_css_class('body','unscroll');
    break;
    case ('stop'):
          setTimeout( function() { clear_css_class('body',''); } , 500 );
    break;
  }
}


function isvalid(html) {

  if (html === null || html === "") { return false; }

  var unchars = "!@#$%^&*()+=-[]\\\';/{}|\":<>?";

  for (var i = 0; i < html.length; i++) {
    if (unchars.indexOf( html.charAt(i)) != -1 ) {
    /* alert ("Your username has special characters. \nThese are not allowed.\n Please remove them and try again."); */
    return false;
    unchars = null;
    }
  }
}


function istimezone() {
  var tz = jstz.determine(); var response_text = '';
  if (typeof (tz) === 'undefined') {
      response_text = 'No timezone found';
  } else {
      response_text = tz.name(); 
  }
  return response_text;
  tz = null; response_text = null;
}


function stripnotes(msg) {
  
  msg = msg.replace(/<br>/gi, "\n");
  msg = msg.replace(/\s+$/, '');
  return msg;

}

function randomnumber(min, max) {

  /* ref: http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range */
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function isodd(num) { return num % 2;}

function changeimg() {

  var totalCount = 3;
  var num = Math.ceil( Math.random() * totalCount );
  var ext = 'jpg';
  if (isodd(num)) {ext = 'gif';} else {ext = 'jpg';}
  // console.log('number image : ' + num + '.' + ext);
  document.getElementsByTagName("body")[0].style.backgroundImage = 'url(img/background/'+num+'.'+ext+')';
  document.body.style.backgroundSize="cover";
  document.body.style.backgroundRepeat="fixed";

}

function contactmsg() {
  var data = [[0, 11, "Good morning"], [12, 17, "Good afternoon"],[18, 24, "Good night"]],hr = new Date().getHours();
  for(var i = 0; i < data.length; i++){
    if(hr >= data[i][0] && hr <= data[i][1]){
       console.log(data[i][2]);
    }
  }
  data = null;
}


function timtoggle(ctrl) {

  switch(ctrl) {

    case ('stop'):
          ustop();
    break;

    case ('pause'):
          switch (true) {
     
            case (un.ts[0] === 0):
                  upause();
            break;

          }

    break;

    case ('resume'):
          switch (true) {
    
            case (typeof un.ts[0] === 'undefined'):
                  ustart();
            break;
    
            case (un.ts[0] === 1):
                  uresume();
            break;

          }

    break;

    case ('toggle'):

          switch (true) {
    
            case (typeof un.ts[0] === 'undefined'):
                  ustart();
            break;
    
            case (un.ts[0] === 1):
                  uresume();
            break;
          
            case (un.ts[0] === 0):
                  upause();
            break;

          }

    break;

  }
}

function gifcntrl(state) {

  switch (state) {

    case ('start'):
          // clear_css_class('jumbo', 'jumbotron'); 
    break;

    case ('stop'):
          // imgload("/vid/background_spaceman.png");
          // clear_css_class('jumbo', 'jumbotroff');
    break;

    case ('toggle'):

    break;
    
  }
}

function imgcntrl(state) {

  if (visible_css_id('findmore')) {

    switch (state) {

      case ('uncolor'):
           clear_css_class('imgmore', 'greyscale');     
      break;

      case ('color'):
           clear_css_class('imgmore', 'imgscale');    
      break;

    }
  }
}

/* audio */

//** Usage: Instantiate script by calling: var uniquevar=createsoundbite("soundfile1", "fallbackfile2", "fallebacksound3", etc)
//** Call: uniquevar.playclip() to play sound

/*
var html5_audiotypes={ //define list of audio file extensions and their associated audio types. Add to it if your specified audio file isn't on this list:
  "mp3": "audio/mpeg",
  "mp4": "audio/mp4",
  "ogg": "audio/ogg",
  "wav": "audio/wav"
}
function createsoundbite(sound){
  var html5audio=document.createElement('audio')
  if (html5audio.canPlayType){ //check support for HTML5 audio
    for (var i=0; i<arguments.length; i++){
      var sourceel=document.createElement('source')
      sourceel.setAttribute('src', arguments[i])
      if (arguments[i].match(/\.(\w+)$/i))
        sourceel.setAttribute('type', html5_audiotypes[RegExp.$1])
      html5audio.appendChild(sourceel)
    }
    html5audio.load()
    html5audio.playclip=function(){
      html5audio.pause()
      html5audio.currentTime=0
      html5audio.play()
    }
    return html5audio
  }
  else{
    return {playclip:function(){throw new Error("Your browser doesn't support HTML5 audio unfortunately")}}
  }
}
var mouseoversound=createsoundbite("/aud/whistle.ogg", "/aud/whistle.mp3");
var clicksound=createsoundbite("/aud/click.ogg", "/aud/click.mp3");
var beepsound=createsoundbite("/aud/beep.ogg", "/aud/beep.mp3");
*/

// console.log('Hello fellow developer, the console is temporarily disabled, See https://en.wikipedia.org/wiki/Self-XSS for more information.');
// window.console.log = function(){console.error('The developer console is temporarily disabled; See https://en.wikipedia.org/wiki/Self-XSS for more information.');window.console.log = function() {return false;}}
/* console.log('trigger disable message'); */