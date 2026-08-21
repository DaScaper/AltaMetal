(function(){"use strict";
var b=document.getElementById("burger"),m=document.getElementById("mobileNav");
if(b&&m){b.addEventListener("click",function(){var o=m.classList.toggle("open");
b.setAttribute("aria-expanded",o?"true":"false");b.setAttribute("aria-label",o?"إغلاق القائمة":"فتح القائمة");});
m.addEventListener("click",function(e){if(e.target.tagName==="A"){m.classList.remove("open");b.setAttribute("aria-expanded","false");}});}

/* RFQ -> WhatsApp. No backend needed.
   To use an email service later, replace the window.open(...) line with a
   fetch() POST to Formspree / Web3Forms and keep the rest. */
var WA="966551128670";
var f=document.getElementById("rfq"),d=document.getElementById("done");
if(f){f.addEventListener("submit",function(e){e.preventDefault();
if(!f.reportValidity())return;
var v=function(id){var el=document.getElementById(id);return el?(el.value||"").trim():"";};
var rows=[["الاسم",v("f-name")],["الشركة",v("f-company")],["الجوال",v("f-phone")],
["المدينة",v("f-city")],["المنتج",v("f-product")],["الكمية",v("f-qty")],["المواصفات المطلوبة",v("f-specs")]];
var msg="طلب عرض سعر — التا ميتال\n————————————\n";
rows.forEach(function(r){if(r[1])msg+=r[0]+": "+r[1]+"\n";});
window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(msg),"_blank","noopener");
if(d){d.classList.add("show");d.scrollIntoView({block:"nearest"});}});}

/* prefill the product select from ?p= */
var p=new URLSearchParams(location.search).get("p");
if(p){var s=document.getElementById("f-product");
if(s)for(var i=0;i<s.options.length;i++){if(s.options[i].value===p||s.options[i].text===p){s.selectedIndex=i;break;}}}
})();