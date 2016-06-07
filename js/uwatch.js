
/*! uwatch.js v1.00.00 | (c) 2016 unbios.com */

/**
 *
 * Implements cookie-less JavaScript session variables
 *
 * set a session value/object
 * usession.set(name, object);
 *
 * get a session value/object
 * usession.get(name);
 *
 * clear all session data
 * usession.clear();
 *
 * dump session data
 * usession.dump();
 *
 */

'use strict';


if (JSON && JSON.stringify && JSON.parse) var usession = usession || (function () {   
/* if (JSON && JSON.stringify && JSON.parse) var Session = Session || (function () { */
    /* window object */
    var win = window.top || window;
    /* session store */
    var store = (win.name ? JSON.parse(win.name) : {});
    /* save store on page unload */

    function Save() {
        win.name = JSON.stringify(store);
    };

    /* page unload event */

    if (window.addEventListener) window.addEventListener("unload", Save, false);

    else if (window.attachEvent) window.attachEvent("onunload", Save);

    else window.onunload = Save;

    /* public methods */
    return {
        /* set a session variable */
        set: function (name, value) {
            store[name] = value;
        },
        /* get a session value */
        get: function (name) {
            return (store[name] ? store[name] : undefined);
        },
        /* clear session */
        clear: function () {
            store = {};
        },
        /* dump session data */
        dump: function () {
            return JSON.stringify(store);
        }
    };

})();

/* other global uwatch vars */

window.tidcc = null;           /* timeout ID for global cc watch */
window.timemark = new Date();  /* reference time mark */
window.timeleft = 0;           /* relative time left */
window.freq = 1000;            /* 1000 == 1 second */

window.lm = 1;                 /* load more (backward polling api hits) couple of seconds delay added to to request */
window.mp = 0;                 /* more page (mp - more page flag) */

window.ll = 1;                 /* load local delay */
window.ml = 0;                 /* more local page (ml - more local page flag) */

window.apihits = 0;            /* api hits   */
window.calhits = 0;            /* local hits */
window.flameon = 0;            /* flameon * signin completed flag */

window.apimsg = '';            /* tmp gloabl var for display purposes only */  


/* initialize application defaults */
 
window.un = usession.get('un') || {
 
  tg: [],  /* global time (15 mins) :: 900 */
  tp: [],  /* api time (get more fwd content) (every 3 mins or so ...) :: 120 */
  ts: [],  /* global timer status, start === 1, stop (reset) === 0, pause === 2, disable === 3 */
  vi:  0,  /* visits */
  //ti: [],  /* time */
  cs: [],  /* colorswatch count */
  ws: [],  /* wordswitch count */
  ls: [],  /* sessionStorage character count */
  tm: [],  /* temporary session store */

};

/* onload */
window.onload = function() {

  /* update previous visits */
  //var d = new Date();
  un.vi++;
  //un.ti.push(Pad(d.getHours()) + ":" + Pad(d.getMinutes()) + ":" + Pad(d.getSeconds()));
  //if (un.ti.length > 10) un.ti = un.ti.slice(1);

  /* update page */
  /*
  document.getElementById("visits").firstChild.nodeValue = un.vi + " time" + (un.vi == 1 ? "" : "s");
  var t = "";
  for (var i = un.ti.length-1; i >= 0; i--) t += un.ti[i] + "\n";
  document.getElementById("times").firstChild.nodeValue = t;
  */
  /* store value in session */
  usession.set("un", un);

  /* add leading zeros */
  function Pad(n) {
  n = "00" + n;
  return n.substr(n.length-2);
  }

};


function init_cc() {

    un.ts[0] = 0;
    un.ls[0] = 0;
    ustart();            
}

function load_more() {

  switch (true) {

    case (apihits > 6):
          apimsg = 'reached';
          console.log('dynamic api hits reached, 7 static hits left (less than 15 in 15 mins)');
          return false;
    break;

    case (apihits < 6):
          /* --bak api hit-- */            
            
          mp = 1;

          /* --------------- */
    break;         

    case (apihits > 2 ):
          /* --bak api hit slow request-- */            
           
          lm = 2;
          mp = 1;

          /* ---------------------------- */
    break;
    
  }
}

function load_local() {ml = 1;}

function ustop() {
    
    if (typeof un.ts[0] === "undefined") { un.ts[0] = 1;}
    un.ts[0] = 1;
    clearTimeout(tidcc);
    un.tg[0] = un.tg[0] +1;
}

function ustart() {

    var mi = Math.floor( un.tg[0] / 60);
    var se = un.tg[0] - mi * 60;
    var apimsg = 'normal';
    freq = 1000;                            /* 1000 == 1 second */
    switch (true) {

      case (un.tg[0] === 0):

             console.log('are we here !!');
      
            /* optional refresh * currently disabled * need to check code for any suspect memory leaks */
            // window.location.href = window.location.href;

            clickchat('intro');
            
            un.tg[0] = 6;                   /* global time (6 secs) */
            un.tp[0] = 3;                   /* api time (get more fwd content) (every 3 secs or so ...) */

            apihits = 0;
            freq = 900;                     /* 1000 == 1 second */
            if (apihits > 0) {apihits = 0};
            apimsg = 'normal';
      break;

      case (lm === 0):
            /* --bak api hit-- */
            console.log('bak api hit * currently enabled !');
            
            // get_in_bkobj();
            // wordswitch();
                     
            /* --------------- */
            lm = 1;
            apihits = apihits + 1
            mp = 0;
      break;

      case (ll === 0):
            /* --bak local hit-- */
            console.log('bak local hit * currently enabled !');

            // read_unin_obj(un.sp[0]);
            // wordswitch();
            clickchat('intro');

            /* --------------- */
            ll = 1;
            calhits = calhits + 1
            ml = 0;
      break;

      case (un.tp[0] === 3):
            /* --fwd api hit-- */
            console.log('fwd api hit * currently enabled !');
            
            un.ts[0] = 3                  /* disable more arrow down button in order to prevent timing clash issue */
            
            // get_in_fwobj();
            // colorswitch();
            clickchat('intro');
     
            un.ts[0] = 0                  /* enable more arrow down button */

            /* --------------- */
            apihits = apihits + 1
      break;

      case (un.tp[0] === 0):
            /* --fwd api hit-- */
            console.log('fwd api hit * curently enabled !');
            
            un.ts[0] = 3                  /* disable more arrow down button in order to prevent timing clash issue */

            // get_in_fwobj();
            // colorswitch();
            clickchat('intro');

            un.ts[0] = 0                  /* enable more arrow down button */

            /* --------------- */
            apihits = apihits + 1
            un.tp[0] = 30;
      break;

    }

    if (typeof un.tg[0] === "undefined" || un.tg[0] === "ccc") {    /* api timer init */

        console.log('we are init!');

        un.tg[0] = 6;                                              /* global time (6 secs) */
        un.tp[0] = 3;                                              /* api time (get more fwd content) (every 3 secs or so ...) */
        un.ls[0] = 0;
        un.ts[0] = 0;
        un.cs[0] = 0;                                              /* default colors */
        un.ws[0] = 0;                                              /* default words */
        apihits = 0;
        freq = 1000;

        //if (apihits > 0) {apihits = 0};
        apimsg = 'normal';
    } 
  
    switch (true) {
    
      case (mp === 1):
            lm--;
      break;

    }

    switch (true) {
    
      case (ml === 1):
            ll--;
      break;

    }

    switch (true) {

      case (un.ts[0] === 1):
           
            // set_html_id('ccwatch', mi+':'+se+':'+un.tp[0]+':'+lm+':'+apihits+':'+apimsg+':'+ll+':local:'+calhits+':store:'+ un.ls[0]);

            console.log('anything at all?');
            return false;
      break;

      case (un.ts[0] === 0):

            un.tp[0]--;
            un.tg[0]--;

            /* // set_html_id('uwatch', mi+':'+se+':'+un.tp[0]+':'+lm+':'+apihits+':'+apimsg+':'+ll+':local:'+calhits+':store:'+ un.ls[0]); */

            // set_html_id('uwatch', mi+':'+se+':'+un.tp[0]+':'+lm+':'+apihits+':'+apimsg+':'+ll+':local:'+calhits+':colorswitch:'+ un.cs + ':wordswitch:'+ un.ws +':visits:' + un.vi);        

            tidcc = setTimeout( function() { ustart(); } ,freq );

            /* tidcc = setTimeout( startcc, freq ); // or try this ... */

            //if ( typeof (sessionStorage.getItem('_cc.fi.0')) !== 'undefined' && (sessionStorage.getItem('_cc.fi.0')) !== null ) {
            //     window.flameon = 1;
            //}

            //if ( sessionStorage.length === 0 && window.flameon === 1 ) {
            //     console.log('we think session has been cleared while signed in !');
            //     exitcc();
            //    _signout();   
            //}          
      break;
    }

}


function upause() {
  /* instantiate the timeLeft variable to be the same as the amount of time the timer initially had */
  un.ts[0] = 1;
  timeleft = freq;  
  timeleft -= new Date() - timemark;
  /* clear the timer */
  clearTimeout( tidcc );
  console.log(timeleft);
}


function uresume() {
  
  if (un.ts[0] !== 0) { 
      un.ts[0] = 0;
   if( !timeleft ) { timeleft = freq; }  
   tidcc = setTimeout( function() { ustart(); }, timeleft );
  }
  console.log(timeleft);
}


function ureset() {
  un.ts[0] = 0;
  un.tg[0] = 120;
  un.tp[0] = 30;
  lm = 1;
  apihits = 0;
  apimsg = 'normal';
  /* clear the timer */
  clearTimeout(tidcc);  
  /* set_html_id('ccwatch', '00:00:00:0:0:normal'); */

}

function uexit() {
  un.ts[0] = 0;
  un.tg[0] = 120;
  un.tp[0] = 30;
  lm = 1;
  apihits = 0;
  apimsg = 'normal';
  /* clear the timer IDs */
  clearTimeout(tidcc);
  clearTimeout(tidcs);
  window.tidcc = null;
  window.tidcs = null;   
}


function utest() {

console.log('we are testing the uneet message')

message_('message_close', 'now');
// msgtmr_('close');

}

/*
function testcc() {
  tidcs = setTimeout( function(){ ahole(); } , 3000);
  // or tids = setTImeout (ahole, 3000); without anon function
}
function ahole() {
  alert('we are aholes!');
  clearTimeout(tidcs);
  tidcs = null;
}
*/

