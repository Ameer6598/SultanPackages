   

let papc = document.getElementById('pc');
var rs, sr, ct, rll, sl, ppc;
function total() {
   let lenght = parseFloat(document.getElementById("len").value);
   let width = parseFloat(document.getElementById('wid').value);
   let height = parseFloat(document.getElementById('hiet').value);
   let quantity= parseFloat(document.getElementById('qty').value);
   let plyy = parseFloat(document.getElementById('ply').value);
   let cutsheet = document.getElementById('cut');
   let rollsize = document.getElementById('ros')
   let sheetroll = document.getElementById('shr');
   let rolls_req = document.getElementById('rr');
   let Silicate = document.getElementById('sc');

   Cut_sht();
   roll_size();
   sheets_oner();
   rollsrequired();
   silicate();
   paper_cost();

   function Cut_sht() {
      ct = eval((lenght + width )*2+2);
      cutsheet.value = ct;
   }
   function roll_size() {
      rs = eval(width + height);
      rollsize.value = rs;
   }
   function sheets_oner() {
      sr = eval(2400 / ct)
      sheetroll.value = sr;
   }
   function rollsrequired() {
      rll = eval(quantity / sr);
      rolls_req.value = rll;
   }
   function silicate() {
      if (plyy == 5) {
         sl = eval((rs * ct * 0.00195 * 2) * quantity);
         Silicate.value = sl;
      }
      else if (plyy == 7) {
         sl = eval((rs * ct * 0.00195 * 3) * quantity);
         Silicate.value = sl;
      }
   }
   function paper_cost() {
      ppc = eval(((rs*ct*110*66)/15500/100)*quantity);
      papc.value = ppc;
   }
}

let Sht = document.getElementById('s1');
let Sht2 = document.getElementById('s2');
let A_tl, A_tl2;

function atl() {
   A_tl = eval(((rs*55)/sr));
   Sht.value = A_tl;
}
function l1() {
   A_tl = eval(((rs * 37) / sr));
   Sht.value = A_tl;
}
function flo() {
   A_tl = eval(((rs * 31) / sr));
   Sht.value = A_tl;
}
// second sheet formulas
function atl2() {
   A_tl2 = eval(((rs*55)/sr));
   Sht2.value = A_tl2;
}
function l12() {
   A_tl2 = eval(((rs * 37)/sr));
   Sht2.value = A_tl2;
}
function flo2() {
   A_tl2 = eval(((rs*31)/sr));
   Sht2.value = A_tl2;
}


let crco=document.getElementById('crct');
let carton_total;

function carton_cost(){
   carton_total=eval(A_tl+A_tl2+sl+ppc)
   crco.value=carton_total;
}




function clr() {
   document.getElementById('len').value = "";
   document.getElementById('wid').value = "";
   document.getElementById('hiet').value = "";
   document.getElementById('qty').value = "";
   document.getElementById('ply').value ="";
   document.getElementById('cut').value ="";
   document.getElementById('ros').value ="";
   document.getElementById('shr').value ="";
   document.getElementById('rr').value ="";
   document.getElementById('sc').value ="";
   document.getElementById('s1').value ="";
   document.getElementById('s2').value ="";
   document.getElementById('pc').value ="";
   document.getElementById('crct').value="";

}