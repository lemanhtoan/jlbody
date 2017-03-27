
function openWindow(url,name, width, height) {
var popupWin;
	// if a window already exists, destroy it.
	if (popupWin && !popupWin.closed) {
               popupWin.close();
	}
	var attr = 'scrollbars=yes,status=yes,width=' + width + ',height= ' + height  +',left=1,top=1,resizable=1';
   	popupWin = window.open(url, name, attr);
	popupWin.focus();
}

function openWindow2(url,name, width, height) {
var popupWin;
	// if a window already exists, destroy it.
	
	var attr = 'scrollbars=yes,status=yes,width=' + width + ',height= ' + height  +',left=1,top=1,resizable=1';
   	popupWin = window.open(url, name, attr);
	popupWin.focus();
}



function OpenCoupon(couponid,couponwidth,couponheight)
{
if (couponwidth == undefined ){
var couponwidth=couponwidthdefault;
}
if ( couponheight == undefined ){
var couponheight=couponheightdefault;
}
if ( couponid == undefined ){
var couponid=couponiddefault;
}



	var cgi = new Object();
      cgi.http_host = location.host;
      cgi.http_user_agent = navigator.userAgent;
      cgi.http_cookie = document.cookie;
      cgi.https = (location.protocol == 'https:\/\/') ? 'on' : 'off';
      cgi.path_info = (location.pathname.indexOf('?') != -1) ?
location.pathname.substring(0, location.pathname.indexOf('?')) :
location.pathname;
      cgi.query_string = (location.search) ?
((location.search.indexOf('#') != -1) ? location.search.substring(1,
location.search.indexOf('#')) : location.search.substring(1)) : '';
      cgi.script_name = cgi.path_info;
      cgi.http_referer = document.referrer;
		var LinkLocation =
"https://www.etnasystems.com/coupon/?COUPONID=" + couponid + "&OriginalReferer=" +
getCookie("JSREF") + "&OriginalPage=" + cgi['script_name'] + "&OriginalSite=" + cgi['http_host'] + "&utm_source=" + getCookie("UTM_SOURCE") + "&campaign_name=" + getCookie("CAMPAIGN_NAME") + "&utm_term=" + getCookie("UTM_TERM") + "&utm_medium=" + getCookie("UTM_MEDIUM") + "&utm_content=" + getCookie("UTM_CONTENT");

//alert("link=" + LinkLocation);
	//openWindow(LinkLocation, 'Coupon', '358', '480');
	openWindow(LinkLocation, 'Coupon', couponwidth, couponheight);
}

// -------------------------------------------------------------------------- //
// referrerCookie.js
//
// Sets a cookie on the client recording the referrer
//
// -------------------------------------------------------------------------- //


/////////////////////////////////////////////////////////////
//
// setCookie()
//
// DESC:	Creates/overwrites a cookie
//
// USAGE:	setCookie(name, value, expires, path, domain, secure);
//
// INPUT:	name		- Name of the cookie
//			value		- Value of the cookie
//			[expires]	- Expiration date of the cookie (defaults to end of the current session)
//			[path]		- Path to which the cookie applies (defaults to entire domain)
//			[domain]	- Domain to which the cookies applies (defaults to current domain)
//			[secure]	- Boolean specifying if a secure connection is required (defaults to false)
//
// OUTPUT:	None
//
// CHANGED:	document.cookie
//
/////////////////////////////////////////////////////////////

function setCookie(name, value, expires, path, domain, secure)
{
	var curCookie = name + "=" + escape(value) +
		((expires) ? "; expires=" + expires.toGMTString() : "") +
		"; path=/" +
		((domain) ? "; domain=" + domain : "") +
		((secure) ? "; secure" : "");
	document.cookie = curCookie;
}


/////////////////////////////////////////////////////////////
//
// getCookie()
//
// DESC:	Returns the value of the specified cookie or NULL
//			if the specified cookie is undefined.
//
// USAGE:	value = getCookie(name);
//
// INPUT:	name		- Name of the cookie to be retrieved
//
// OUTPUT:	Value of the specified cookie or NULL
//
// CHANGED:	None
//
/////////////////////////////////////////////////////////////

function getCookie(name)
{
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1)
	{
		begin = dc.indexOf(prefix);
		if (begin != 0) return null;
	} else {
		begin += 2;
	}
	var end = document.cookie.indexOf(";", begin);
	if (end == -1)
	{
		end = dc.length;
	}
	return unescape(dc.substring(begin + prefix.length, end));
}


/////////////////////////////////////////////////////////////
//
// deleteCookie()
//
// DESC:	Deletes the specified cookie
//
// USAGE:	deleteCookie(name, path, domain);
//
// INPUT:	name		- Name of the cookie to be deleted
//			[path]		- Path of the cookie to be deleted
//			[domain]	- Domain of the cookie to be deleted
//
// OUTPUT:	None
//
// CHANGED:	document.cookie
//
/////////////////////////////////////////////////////////////

function deleteCookie(name, path, domain)
{
	if ( getCookie(name) )
	{
		document.cookie = name + "=" + 
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
	}
}


//
// Set referrer cookie if it doesn't already exist
//
if ( ! getCookie("JSREF") )
{
	// Set expiration date of 3 days
	var currDate = new Date();
	currDate.setTime(currDate.getTime() + 3 * 24 * 60 * 60 * 1000);

	// Set cookie
	setCookie("JSREF", document.referrer, currDate);
}

function checkMe(obj) {
	// declare errorstring
	var errorString ="";
	// email must have  and '@' and a '.' and cannot have any spaces
	if ((obj.Email.value.indexOf("@")==-1) || (obj.Email.value.indexOf(".")==-1) || (obj.Email.value.indexOf(" ")!=-1)) {
		errorString = errorString + "'" + obj.Email.value + "' is not a valid email address.\nPlease re-enter your email address.\n\n";
		}
	// if we've set the errorstring, lets yell at them and return false
	if (errorString != "") {
		alert(errorString);
		return false;
	}
	
	return true;
}

function isEmailAddr(email)
{
  var result = false;
  var theStr = new String(email);
  var index = theStr.indexOf("@");
  if (index > 0)
  {
    var pindex = theStr.indexOf(".",index);
    if ((pindex > index+1) && (theStr.length > pindex+1))
	result = true;
  }
  return result;
}

function validRequired(formField,fieldLabel)
{
	var result = true;
	
	if (formField.value == "")
	{
		alert('Please enter a value for the "' + fieldLabel +'" field.');
		formField.focus();
		result = false;
	}
	
	return result;
}

function validFirstName(formField,fieldLabel)
{
	var result = true;
	
	if (formField.value == "First Name" || formField.value == "" || formField.value == "first name")
	{
		alert('Please enter your First Name.');
		formField.focus();
		result = false;
	}
	
	return result;
}

function validLastName(formField,fieldLabel)
{
	var result = true;
	
	if (formField.value == "Last Name" || formField.value == "" || formField.value == "last name")
	{
		alert('Please enter your Last Name.');
		formField.focus();
		result = false;
	}
	
	return result;
}

function allDigits(str)
{
	return inValidCharSet(str,"0123456789");
}

function inValidCharSet(str,charset)
{
	var result = true;

	// Note: doesn't use regular expressions to avoid early Mac browser bugs	
	for (var i=0;i<str.length;i++)
		if (charset.indexOf(str.substr(i,1))<0)
		{
			result = false;
			break;
		}
	
	return result;
}


function validEmail(formField,fieldLabel,required){
	var result=true;
	if (required && !validRequired(formField,fieldLabel))
		result = false;
		
	var str=formField.value;
	var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
	
	if (filter.test(str)){
		result=true
	}else{
		alert("Please enter a valid email address, for example: yourname@domain.com")
		formField.focus();
		result=false
	}
	return result;
}

//function validEmail(formField,fieldLabel,required)
//{
	//var result = true;
	//if (required && !validRequired(formField,fieldLabel))
		//result = false;

	//if (result && ((formField.value.length < 3) || !isEmailAddr(formField.value)) )
	//{
		//alert("Please enter a valid email address, for example: yourname@domain.com");
		//formField.focus();
		//result = false;
	//}
   
  //return result;

//}

function validNum(formField,fieldLabel,required)
{
	var result = true;

	if (required && !validRequired(formField,fieldLabel))
		result = false;
  
 	if (result)
 	{
 		if (!allDigits(formField.value))
 		{
 			alert('Please enter a number for the "' + fieldLabel +'" field.');
			formField.focus();		
			result = false;
		}
	} 
	
	return result;
}


function validInt(formField,fieldLabel,required)
{
	var result = true;
	
	if (required && !validRequired(formField,fieldLabel))
		result = false;
  
 	if (result)
 	{
 		var num = parseInt(formField.value,10);
 		if (isNaN(num))
 		{
 			alert('Please enter a number for the "' + fieldLabel +'" field.');
			formField.focus();		
			result = false;
		}
	} 
	
	return result;
}


function validDate(formField,fieldLabel,required)
{
	var result = true;

	if (required && !validRequired(formField,fieldLabel))
		result = false;
  
 	if (result)
 	{
 		var elems = formField.value.split("/");
 		
 		result = (elems.length == 3); // should be three components
 		
 		if (result)
 		{
 			var month = parseInt(elems[0],10);
  			var day = parseInt(elems[1],10);
 			var year = parseInt(elems[2],10);
			result = allDigits(elems[0]) && (month > 0) && (month < 13) &&
					 allDigits(elems[1]) && (day > 0) && (day < 32) &&
					 allDigits(elems[2]) && ((elems[2].length == 2) || (elems[2].length == 4));
 		}
 		
  		if (!result)
 		{
 			alert('Please enter a date in the format MM/DD/YYYY for the "' + fieldLabel +'" field.');
			formField.focus();		
		}
	} 
	
	return result;
}

var skipurchin;

//alert('in=' + skipurchin);
if (skipurchin == undefined)
{
//alert('got here');
//-- Google Analytics Urchin Module
//-- Copyright 2007 Google, All Rights Reserved.

//-- Urchin On Demand Settings ONLY
var _uacct="";			// set up the Urchin Account
var _userv=0;			// service mode (0=local,1=remote,2=both)

//-- UTM User Settings
var _ufsc=1;			// set client info flag (1=on|0=off)
var _udn="auto";		// (auto|none|domain) set the domain name for cookies
var _uhash="on";		// (on|off) unique domain hash for cookies
var _utimeout="1800";   	// set the inactive session timeout in seconds
var _ugifpath="/__utm.gif";	// set the web path to the __utm.gif file
var _utsp="|";			// transaction field separator
var _uflash=1;			// set flash version detect option (1=on|0=off)
var _utitle=1;			// set the document title detect option (1=on|0=off)
var _ulink=0;			// enable linker functionality (1=on|0=off)
var _uanchor=0;			// enable use of anchors for campaign (1=on|0=off)
var _utcp="/";			// the cookie path for tracking
var _usample=100;		// The sampling % of visitors to track (1-100).

//-- UTM Campaign Tracking Settings
var _uctm=1;			// set campaign tracking module (1=on|0=off)
var _ucto="15768000";		// set timeout in seconds (6 month default)
var _uccn="utm_campaign";	// name
var _ucmd="utm_medium";		// medium (cpc|cpm|link|email|organic)
var _ucsr="utm_source";		// source
var _uctr="utm_term";		// term/keyword
var _ucct="utm_content";	// content
var _ucid="utm_id";		// id number
var _ucno="utm_nooverride";	// don't override

//-- Auto/Organic Sources and Keywords
var _uOsr=new Array();
var _uOkw=new Array();
_uOsr[0]="google";	_uOkw[0]="q";
_uOsr[1]="yahoo";	_uOkw[1]="p";
_uOsr[2]="msn";		_uOkw[2]="q";
_uOsr[3]="aol";		_uOkw[3]="query";
_uOsr[4]="aol";		_uOkw[4]="encquery";
_uOsr[5]="lycos";	_uOkw[5]="query";
_uOsr[6]="ask";		_uOkw[6]="q";
_uOsr[7]="altavista";	_uOkw[7]="q";
_uOsr[8]="netscape";	_uOkw[8]="query";
_uOsr[9]="cnn";	_uOkw[9]="query";
_uOsr[10]="looksmart";	_uOkw[10]="qt";
_uOsr[11]="about";	_uOkw[11]="terms";
_uOsr[12]="mamma";	_uOkw[12]="query";
_uOsr[13]="alltheweb";	_uOkw[13]="q";
_uOsr[14]="gigablast";	_uOkw[14]="q";
_uOsr[15]="voila";	_uOkw[15]="rdata";
_uOsr[16]="virgilio";	_uOkw[16]="qs";
_uOsr[17]="live";	_uOkw[17]="q";
_uOsr[18]="baidu";	_uOkw[18]="wd";
_uOsr[19]="alice";	_uOkw[19]="qs";
_uOsr[20]="yandex";	_uOkw[20]="text";
_uOsr[21]="najdi";	_uOkw[21]="q";
_uOsr[22]="aol";	_uOkw[22]="q";
_uOsr[23]="club-internet"; _uOkw[23]="q";
_uOsr[24]="mama";	_uOkw[24]="query";
_uOsr[25]="seznam";	_uOkw[25]="q";
_uOsr[26]="search";	_uOkw[26]="q";
_uOsr[27]="szukaj";	_uOkw[27]="szukaj";
_uOsr[28]="szukaj";	_uOkw[28]="qt";
_uOsr[29]="netsprint";	_uOkw[29]="q";
_uOsr[30]="google.interia";	_uOkw[30]="q";
_uOsr[31]="szukacz";	_uOkw[31]="q";
_uOsr[32]="yam";	_uOkw[32]="k";
_uOsr[33]="pchome";	_uOkw[33]="q";


//-- Auto/Organic Keywords to Ignore
var _uOno=new Array();
//_uOno[0]="urchin";
//_uOno[1]="urchin.com";
//_uOno[2]="www.urchin.com";

//-- Referral domains to Ignore
var _uRno=new Array();
//_uRno[0]=".urchin.com";

//-- **** Don't modify below this point ***
var _uff,_udh,_udt,_ubl=0,_udo="",_uu,_ufns=0,_uns=0,_ur="-",_ufno=0,_ust=0,_ubd=document,_udl=_ubd.location,_udlh="",_uwv="1";
var _ugifpath2="http://www.google-analytics.com/__utm.gif";
if (_udl.hash) _udlh=_udl.href.substring(_udl.href.indexOf('#'));
if (_udl.protocol=="https:") _ugifpath2="https://ssl.google-analytics.com/__utm.gif";
if (!_utcp || _utcp=="") _utcp="/";
function urchinTracker(page) {
 if (_udl.protocol=="file:") return;
 if (_uff && (!page || page=="")) return;
 var a,b,c,xx,v,z,k,x="",s="",f=0;
 var nx=" expires="+_uNx()+";";
 var dc=_ubd.cookie;
 _udh=_uDomain();
 if (!_uVG()) return;
 _uu=Math.round(Math.random()*2147483647);
 _udt=new Date();
 _ust=Math.round(_udt.getTime()/1000);
 a=dc.indexOf("__utma="+_udh);
 b=dc.indexOf("__utmb="+_udh);
 c=dc.indexOf("__utmc="+_udh);
 if (_udn && _udn!="") { _udo=" domain="+_udn+";"; }
 if (_utimeout && _utimeout!="") {
  x=new Date(_udt.getTime()+(_utimeout*1000));
  x=" expires="+x.toGMTString()+";";
 }
 if (_ulink) {
  if (_uanchor && _udlh && _udlh!="") s=_udlh+"&";
  s+=_udl.search;
  if(s && s!="" && s.indexOf("__utma=")>=0) {
   if (!(_uIN(a=_uGC(s,"__utma=","&")))) a="-";
   if (!(_uIN(b=_uGC(s,"__utmb=","&")))) b="-";
   if (!(_uIN(c=_uGC(s,"__utmc=","&")))) c="-";
   v=_uGC(s,"__utmv=","&");
   z=_uGC(s,"__utmz=","&");
   k=_uGC(s,"__utmk=","&");
   xx=_uGC(s,"__utmx=","&");
   if ((k*1) != ((_uHash(a+b+c+xx+z+v)*1)+(_udh*1))) {_ubl=1;a="-";b="-";c="-";xx="-";z="-";v="-";}
   if (a!="-" && b!="-" && c!="-") f=1;
   else if(a!="-") f=2;
  }
 }
 if(f==1) {
  _ubd.cookie="__utma="+a+"; path="+_utcp+";"+nx+_udo;
  _ubd.cookie="__utmb="+b+"; path="+_utcp+";"+x+_udo;
  _ubd.cookie="__utmc="+c+"; path="+_utcp+";"+_udo;
 } else if (f==2) {
  a=_uFixA(s,"&",_ust);
  _ubd.cookie="__utma="+a+"; path="+_utcp+";"+nx+_udo;
  _ubd.cookie="__utmb="+_udh+"; path="+_utcp+";"+x+_udo;
  _ubd.cookie="__utmc="+_udh+"; path="+_utcp+";"+_udo;
  _ufns=1;
 } else if (a>=0 && b>=0 && c>=0) {
  _ubd.cookie="__utmb="+_udh+"; path="+_utcp+";"+x+_udo;
 } else {
  if (a>=0) a=_uFixA(_ubd.cookie,";",_ust);
  else a=_udh+"."+_uu+"."+_ust+"."+_ust+"."+_ust+".1";
  _ubd.cookie="__utma="+a+"; path="+_utcp+";"+nx+_udo;
  _ubd.cookie="__utmb="+_udh+"; path="+_utcp+";"+x+_udo;
  _ubd.cookie="__utmc="+_udh+"; path="+_utcp+";"+_udo;
  _ufns=1;
 }
 if (_ulink && xx && xx!="" && xx!="-") {
   xx=_uUES(xx);
   if (xx.indexOf(";")==-1) _ubd.cookie="__utmx="+xx+"; path="+_utcp+";"+nx+_udo;
 }
 if (_ulink && v && v!="" && v!="-") {
  v=_uUES(v);
  if (v.indexOf(";")==-1) _ubd.cookie="__utmv="+v+"; path="+_utcp+";"+nx+_udo;
 }
 _uInfo(page);
 _ufns=0;
 _ufno=0;
 if (!page || page=="") _uff=1;
}
function _uInfo(page) {
 var p,s="",dm="",pg=_udl.pathname+_udl.search;
 if (page && page!="") pg=_uES(page,1);
 _ur=_ubd.referrer;
 if (!_ur || _ur=="") { _ur="-"; }
 else {
  dm=_ubd.domain;
  if(_utcp && _utcp!="/") dm+=_utcp;
  p=_ur.indexOf(dm);
  if ((p>=0) && (p<=8)) { _ur="0"; }
  if (_ur.indexOf("[")==0 && _ur.lastIndexOf("]")==(_ur.length-1)) { _ur="-"; }
 }
 s+="&utmn="+_uu;
 if (_ufsc) s+=_uBInfo();
 if (_uctm) s+=_uCInfo();
 if (_utitle && _ubd.title && _ubd.title!="") s+="&utmdt="+_uES(_ubd.title);
 if (_udl.hostname && _udl.hostname!="") s+="&utmhn="+_uES(_udl.hostname);
 s+="&utmr="+_ur;
 s+="&utmp="+pg;
 if ((_userv==0 || _userv==2) && _uSP()) {
  var i=new Image(1,1);
  i.src=_ugifpath+"?"+"utmwv="+_uwv+s;
  i.onload=function() {_uVoid();}
 }
 if ((_userv==1 || _userv==2) && _uSP()) {
  var i2=new Image(1,1);
  i2.src=_ugifpath2+"?"+"utmwv="+_uwv+s+"&utmac="+_uacct+"&utmcc="+_uGCS();
  i2.onload=function() { _uVoid(); }
 }
 return;
}
function _uVoid() { return; }
function _uCInfo() {
 if (!_ucto || _ucto=="") { _ucto="15768000"; }
 if (!_uVG()) return;
 var c="",t="-",t2="-",t3="-",o=0,cs=0,cn=0,i=0,z="-",s="";
 if (_uanchor && _udlh && _udlh!="") s=_udlh+"&";
 s+=_udl.search;
 var x=new Date(_udt.getTime()+(_ucto*1000));
 var dc=_ubd.cookie;
 x=" expires="+x.toGMTString()+";";
 if (_ulink && !_ubl) {
  z=_uUES(_uGC(s,"__utmz=","&"));
  if (z!="-" && z.indexOf(";")==-1) { _ubd.cookie="__utmz="+z+"; path="+_utcp+";"+x+_udo; return ""; }
 }
 z=dc.indexOf("__utmz="+_udh);
 if (z>-1) { z=_uGC(dc,"__utmz="+_udh,";"); }
 else { z="-"; }
 t=_uGC(s,_ucid+"=","&");
 t2=_uGC(s,_ucsr+"=","&");
 t3=_uGC(s,"gclid=","&");
 if ((t!="-" && t!="") || (t2!="-" && t2!="") || (t3!="-" && t3!="")) {
  if (t!="-" && t!="") c+="utmcid="+_uEC(t);
  if (t2!="-" && t2!="") { if (c != "") c+="|"; c+="utmcsr="+_uEC(t2); }
  if (t3!="-" && t3!="") { if (c != "") c+="|"; c+="utmgclid="+_uEC(t3); }
  t=_uGC(s,_uccn+"=","&");
  if (t!="-" && t!="") c+="|utmccn="+_uEC(t);
  else c+="|utmccn=(not+set)";
  t=_uGC(s,_ucmd+"=","&");
  if (t!="-" && t!="") c+="|utmcmd="+_uEC(t);
  else  c+="|utmcmd=(not+set)";
  t=_uGC(s,_uctr+"=","&");
  if (t!="-" && t!="") c+="|utmctr="+_uEC(t);
  else { t=_uOrg(1); if (t!="-" && t!="") c+="|utmctr="+_uEC(t); }
  t=_uGC(s,_ucct+"=","&");
  if (t!="-" && t!="") c+="|utmcct="+_uEC(t);
  t=_uGC(s,_ucno+"=","&");
  if (t=="1") o=1;
  if (z!="-" && o==1) return "";
 }
 if (c=="-" || c=="") { c=_uOrg(); if (z!="-" && _ufno==1)  return ""; }
 if (c=="-" || c=="") { if (_ufns==1)  c=_uRef(); if (z!="-" && _ufno==1)  return ""; }
 if (c=="-" || c=="") {
  if (z=="-" && _ufns==1) { c="utmccn=(direct)|utmcsr=(direct)|utmcmd=(none)"; }
  if (c=="-" || c=="") return "";
 }
 if (z!="-") {
  i=z.indexOf(".");
  if (i>-1) i=z.indexOf(".",i+1);
  if (i>-1) i=z.indexOf(".",i+1);
  if (i>-1) i=z.indexOf(".",i+1);
  t=z.substring(i+1,z.length);
  if (t.toLowerCase()==c.toLowerCase()) cs=1;
  t=z.substring(0,i);
  if ((i=t.lastIndexOf(".")) > -1) {
   t=t.substring(i+1,t.length);
   cn=(t*1);
  }
 }
 if (cs==0 || _ufns==1) {
  t=_uGC(dc,"__utma="+_udh,";");
  if ((i=t.lastIndexOf(".")) > 9) {
   _uns=t.substring(i+1,t.length);
   _uns=(_uns*1);
  }
  cn++;
  if (_uns==0) _uns=1;
  _ubd.cookie="__utmz="+_udh+"."+_ust+"."+_uns+"."+cn+"."+c+"; path="+_utcp+"; "+x+_udo;
 }
 if (cs==0 || _ufns==1) return "&utmcn=1";
 else return "&utmcr=1";
}
function _uRef() {
 if (_ur=="0" || _ur=="" || _ur=="-") return "";
 var i=0,h,k,n;
 if ((i=_ur.indexOf("://"))<0) return "";
 h=_ur.substring(i+3,_ur.length);
 if (h.indexOf("/") > -1) {
  k=h.substring(h.indexOf("/"),h.length);
  if (k.indexOf("?") > -1) k=k.substring(0,k.indexOf("?"));
  h=h.substring(0,h.indexOf("/"));
 }
 h=h.toLowerCase();
 n=h;
 if ((i=n.indexOf(":")) > -1) n=n.substring(0,i);
 for (var ii=0;ii<_uRno.length;ii++) {
  if ((i=n.indexOf(_uRno[ii].toLowerCase())) > -1 && n.length==(i+_uRno[ii].length)) { _ufno=1; break; }
 }
 if (h.indexOf("www.")==0) h=h.substring(4,h.length);
 return "utmccn=(referral)|utmcsr="+_uEC(h)+"|"+"utmcct="+_uEC(k)+"|utmcmd=referral";
}
function _uOrg(t) {
 if (_ur=="0" || _ur=="" || _ur=="-") return "";
 var i=0,h,k;
 if ((i=_ur.indexOf("://")) < 0) return "";
 h=_ur.substring(i+3,_ur.length);
 if (h.indexOf("/") > -1) {
  h=h.substring(0,h.indexOf("/"));
 }
 for (var ii=0;ii<_uOsr.length;ii++) {
  if (h.toLowerCase().indexOf(_uOsr[ii].toLowerCase()) > -1) {
   if ((i=_ur.indexOf("?"+_uOkw[ii]+"=")) > -1 || (i=_ur.indexOf("&"+_uOkw[ii]+"=")) > -1) {
    k=_ur.substring(i+_uOkw[ii].length+2,_ur.length);
    if ((i=k.indexOf("&")) > -1) k=k.substring(0,i);
    for (var yy=0;yy<_uOno.length;yy++) {
     if (_uOno[yy].toLowerCase()==k.toLowerCase()) { _ufno=1; break; }
    }
    if (t) return _uEC(k);
    else return "utmccn=(organic)|utmcsr="+_uEC(_uOsr[ii])+"|"+"utmctr="+_uEC(k)+"|utmcmd=organic";
   }
  }
 }
 return "";
}
function _uBInfo() {
 var sr="-",sc="-",ul="-",fl="-",cs="-",je=1;
 var n=navigator;
 if (self.screen) {
  sr=screen.width+"x"+screen.height;
  sc=screen.colorDepth+"-bit";
 } else if (self.java) {
  var j=java.awt.Toolkit.getDefaultToolkit();
  var s=j.getScreenSize();
  sr=s.width+"x"+s.height;
 }
 if (n.language) { ul=n.language.toLowerCase(); }
 else if (n.browserLanguage) { ul=n.browserLanguage.toLowerCase(); }
 je=n.javaEnabled()?1:0;
 if (_uflash) fl=_uFlash();
 if (_ubd.characterSet) cs=_uES(_ubd.characterSet);
 else if (_ubd.charset) cs=_uES(_ubd.charset);
 return "&utmcs="+cs+"&utmsr="+sr+"&utmsc="+sc+"&utmul="+ul+"&utmje="+je+"&utmfl="+fl;
}
function __utmSetTrans() {
 var e;
 if (_ubd.getElementById) e=_ubd.getElementById("utmtrans");
 else if (_ubd.utmform && _ubd.utmform.utmtrans) e=_ubd.utmform.utmtrans;
 if (!e) return;
 var l=e.value.split("UTM:");
 var i,i2,c;
 if (_userv==0 || _userv==2) i=new Array();
 if (_userv==1 || _userv==2) { i2=new Array(); c=_uGCS(); }

 for (var ii=0;ii<l.length;ii++) {
  l[ii]=_uTrim(l[ii]);
  if (l[ii].charAt(0)!='T' && l[ii].charAt(0)!='I') continue;
  var r=Math.round(Math.random()*2147483647);
  if (!_utsp || _utsp=="") _utsp="|";
  var f=l[ii].split(_utsp),s="";
  if (f[0].charAt(0)=='T') {
   s="&utmt=tran"+"&utmn="+r;
   f[1]=_uTrim(f[1]); if(f[1]&&f[1]!="") s+="&utmtid="+_uES(f[1]);
   f[2]=_uTrim(f[2]); if(f[2]&&f[2]!="") s+="&utmtst="+_uES(f[2]);
   f[3]=_uTrim(f[3]); if(f[3]&&f[3]!="") s+="&utmtto="+_uES(f[3]);
   f[4]=_uTrim(f[4]); if(f[4]&&f[4]!="") s+="&utmttx="+_uES(f[4]);
   f[5]=_uTrim(f[5]); if(f[5]&&f[5]!="") s+="&utmtsp="+_uES(f[5]);
   f[6]=_uTrim(f[6]); if(f[6]&&f[6]!="") s+="&utmtci="+_uES(f[6]);
   f[7]=_uTrim(f[7]); if(f[7]&&f[7]!="") s+="&utmtrg="+_uES(f[7]);
   f[8]=_uTrim(f[8]); if(f[8]&&f[8]!="") s+="&utmtco="+_uES(f[8]);
  } else {
   s="&utmt=item"+"&utmn="+r;
   f[1]=_uTrim(f[1]); if(f[1]&&f[1]!="") s+="&utmtid="+_uES(f[1]);
   f[2]=_uTrim(f[2]); if(f[2]&&f[2]!="") s+="&utmipc="+_uES(f[2]);
   f[3]=_uTrim(f[3]); if(f[3]&&f[3]!="") s+="&utmipn="+_uES(f[3]);
   f[4]=_uTrim(f[4]); if(f[4]&&f[4]!="") s+="&utmiva="+_uES(f[4]);
   f[5]=_uTrim(f[5]); if(f[5]&&f[5]!="") s+="&utmipr="+_uES(f[5]);
   f[6]=_uTrim(f[6]); if(f[6]&&f[6]!="") s+="&utmiqt="+_uES(f[6]);
  }
  if ((_userv==0 || _userv==2) && _uSP()) {
   i[ii]=new Image(1,1);
   i[ii].src=_ugifpath+"?"+"utmwv="+_uwv+s;
   i[ii].onload=function() { _uVoid(); }
  }
  if ((_userv==1 || _userv==2) && _uSP()) {
   i2[ii]=new Image(1,1);
   i2[ii].src=_ugifpath2+"?"+"utmwv="+_uwv+s+"&utmac="+_uacct+"&utmcc="+c;
   i2[ii].onload=function() { _uVoid(); }
  }
 }
 return;
}
function _uFlash() {
 var f="-",n=navigator;
 if (n.plugins && n.plugins.length) {
  for (var ii=0;ii<n.plugins.length;ii++) {
   if (n.plugins[ii].name.indexOf('Shockwave Flash')!=-1) {
    f=n.plugins[ii].description.split('Shockwave Flash ')[1];
    break;
   }
  }
 } else if (window.ActiveXObject) {
  for (var ii=10;ii>=2;ii--) {
   try {
    var fl=eval("new ActiveXObject('ShockwaveFlash.ShockwaveFlash."+ii+"');");
    if (fl) { f=ii + '.0'; break; }
   }
   catch(e) {}
  }
 }
 return f;
}
function __utmLinker(l,h) {
 if (!_ulink) return;
 var p,k,a="-",b="-",c="-",x="-",z="-",v="-";
 var dc=_ubd.cookie;
 if (!l || l=="") return;
 var iq = l.indexOf("?"); 
 var ih = l.indexOf("#"); 
 if (dc) {
  a=_uES(_uGC(dc,"__utma="+_udh,";"));
  b=_uES(_uGC(dc,"__utmb="+_udh,";"));
  c=_uES(_uGC(dc,"__utmc="+_udh,";"));
  x=_uES(_uGC(dc,"__utmx="+_udh,";"));
  z=_uES(_uGC(dc,"__utmz="+_udh,";"));
  v=_uES(_uGC(dc,"__utmv="+_udh,";"));
  k=(_uHash(a+b+c+x+z+v)*1)+(_udh*1);
  p="__utma="+a+"&__utmb="+b+"&__utmc="+c+"&__utmx="+x+"&__utmz="+z+"&__utmv="+v+"&__utmk="+k;
 }
 if (p) {
  if (h && ih>-1) return;
  if (h) { _udl.href=l+"#"+p; }
  else {
   if (iq==-1 && ih==-1) _udl.href=l+"?"+p;
   else if (ih==-1) _udl.href=l+"&"+p;
   else if (iq==-1) _udl.href=l.substring(0,ih-1)+"?"+p+l.substring(ih);
   else _udl.href=l.substring(0,ih-1)+"&"+p+l.substring(ih);
  }
 } else { _udl.href=l; }
}
function __utmLinkPost(f,h) {
 if (!_ulink) return;
 var p,k,a="-",b="-",c="-",x="-",z="-",v="-";
 var dc=_ubd.cookie;
 if (!f || !f.action) return;
 var iq = f.action.indexOf("?"); 
 var ih = f.action.indexOf("#"); 
 if (dc) {
  a=_uES(_uGC(dc,"__utma="+_udh,";"));
  b=_uES(_uGC(dc,"__utmb="+_udh,";"));
  c=_uES(_uGC(dc,"__utmc="+_udh,";"));
  x=_uES(_uGC(dc,"__utmx="+_udh,";"));
  z=_uES(_uGC(dc,"__utmz="+_udh,";"));
  v=_uES(_uGC(dc,"__utmv="+_udh,";"));
  k=(_uHash(a+b+c+x+z+v)*1)+(_udh*1);
  p="__utma="+a+"&__utmb="+b+"&__utmc="+c+"&__utmx="+x+"&__utmz="+z+"&__utmv="+v+"&__utmk="+k;
 }
 if (p) {
  if (h && ih>-1) return;
  if (h) { f.action+="#"+p; }
  else {
   if (iq==-1 && ih==-1) f.action+="?"+p;
   else if (ih==-1) f.action+="&"+p;
   else if (iq==-1) f.action=f.action.substring(0,ih-1)+"?"+p+f.action.substring(ih);
   else f.action=f.action.substring(0,ih-1)+"&"+p+f.action.substring(ih);
  }
 }
 return;
}
function __utmSetVar(v) {
 if (!v || v=="") return;
 if (!_udo || _udo == "") {
  _udh=_uDomain();
  if (_udn && _udn!="") { _udo=" domain="+_udn+";"; }
 }
 if (!_uVG()) return;
 var r=Math.round(Math.random() * 2147483647);
 _ubd.cookie="__utmv="+_udh+"."+_uES(v)+"; path="+_utcp+"; expires="+_uNx()+";"+_udo;
 var s="&utmt=var&utmn="+r;
 if ((_userv==0 || _userv==2) && _uSP()) {
  var i=new Image(1,1);
  i.src=_ugifpath+"?"+"utmwv="+_uwv+s;
  i.onload=function() { _uVoid(); }
 }
 if ((_userv==1 || _userv==2) && _uSP()) {
  var i2=new Image(1,1);
  i2.src=_ugifpath2+"?"+"utmwv="+_uwv+s+"&utmac="+_uacct+"&utmcc="+_uGCS();
  i2.onload=function() { _uVoid(); }
 }
}
function _uGCS() {
 var t,c="",dc=_ubd.cookie;
 if ((t=_uGC(dc,"__utma="+_udh,";"))!="-") c+=_uES("__utma="+t+";+");
 if ((t=_uGC(dc,"__utmb="+_udh,";"))!="-") c+=_uES("__utmb="+t+";+");
 if ((t=_uGC(dc,"__utmc="+_udh,";"))!="-") c+=_uES("__utmc="+t+";+");
 if ((t=_uGC(dc,"__utmx="+_udh,";"))!="-") c+=_uES("__utmx="+t+";+");
 if ((t=_uGC(dc,"__utmz="+_udh,";"))!="-") c+=_uES("__utmz="+t+";+");
 if ((t=_uGC(dc,"__utmv="+_udh,";"))!="-") c+=_uES("__utmv="+t+";");
 if (c.charAt(c.length-1)=="+") c=c.substring(0,c.length-1);
 return c;
}
function _uGC(l,n,s) {
 if (!l || l=="" || !n || n=="" || !s || s=="") return "-";
 var i,i2,i3,c="-";
 i=l.indexOf(n);
 i3=n.indexOf("=")+1;
 if (i > -1) {
  i2=l.indexOf(s,i); if (i2 < 0) { i2=l.length; }
  c=l.substring((i+i3),i2);
 }
 return c;
}
function _uDomain() {
 if (!_udn || _udn=="" || _udn=="none") { _udn=""; return 1; }
 if (_udn=="auto") {
  var d=_ubd.domain;
  if (d.substring(0,4)=="www.") {
   d=d.substring(4,d.length);
  }
  _udn=d;
 }
 _udn = _udn.toLowerCase(); 
 if (_uhash=="off") return 1;
 return _uHash(_udn);
}
function _uHash(d) {
 if (!d || d=="") return 1;
 var h=0,g=0;
 for (var i=d.length-1;i>=0;i--) {
  var c=parseInt(d.charCodeAt(i));
  h=((h << 6) & 0xfffffff) + c + (c << 14);
  if ((g=h & 0xfe00000)!=0) h=(h ^ (g >> 21));
 }
 return h;
}
function _uFixA(c,s,t) {
 if (!c || c=="" || !s || s=="" || !t || t=="") return "-";
 var a=_uGC(c,"__utma="+_udh,s);
 var lt=0,i=0;
 if ((i=a.lastIndexOf(".")) > 9) {
  _uns=a.substring(i+1,a.length);
  _uns=(_uns*1)+1;
  a=a.substring(0,i);
  if ((i=a.lastIndexOf(".")) > 7) {
   lt=a.substring(i+1,a.length);
   a=a.substring(0,i);
  }
  if ((i=a.lastIndexOf(".")) > 5) {
   a=a.substring(0,i);
  }
  a+="."+lt+"."+t+"."+_uns;
 }
 return a;
}
function _uTrim(s) {
  if (!s || s=="") return "";
  while ((s.charAt(0)==' ') || (s.charAt(0)=='\n') || (s.charAt(0,1)=='\r')) s=s.substring(1,s.length);
  while ((s.charAt(s.length-1)==' ') || (s.charAt(s.length-1)=='\n') || (s.charAt(s.length-1)=='\r')) s=s.substring(0,s.length-1);
  return s;
}
function _uEC(s) {
  var n="";
  if (!s || s=="") return "";
  for (var i=0;i<s.length;i++) {if (s.charAt(i)==" ") n+="+"; else n+=s.charAt(i);}
  return n;
}
function __utmVisitorCode(f) {
 var r=0,t=0,i=0,i2=0,m=31;
 var a=_uGC(_ubd.cookie,"__utma="+_udh,";");
 if ((i=a.indexOf(".",0))<0) return;
 if ((i2=a.indexOf(".",i+1))>0) r=a.substring(i+1,i2); else return "";  
 if ((i=a.indexOf(".",i2+1))>0) t=a.substring(i2+1,i); else return "";  
 if (f) {
  return r;
 } else {
  var c=new Array('A','B','C','D','E','F','G','H','J','K','L','M','N','P','R','S','T','U','V','W','X','Y','Z','1','2','3','4','5','6','7','8','9');
  return c[r>>28&m]+c[r>>23&m]+c[r>>18&m]+c[r>>13&m]+"-"+c[r>>8&m]+c[r>>3&m]+c[((r&7)<<2)+(t>>30&3)]+c[t>>25&m]+c[t>>20&m]+"-"+c[t>>15&m]+c[t>>10&m]+c[t>>5&m]+c[t&m];
 }
}
function _uIN(n) {
 if (!n) return false;
 for (var i=0;i<n.length;i++) {
  var c=n.charAt(i);
  if ((c<"0" || c>"9") && (c!=".")) return false;
 }
 return true;
}
function _uES(s,u) {
 if (typeof(encodeURIComponent) == 'function') {
  if (u) return encodeURI(s);
  else return encodeURIComponent(s);
 } else {
  return escape(s);
 }
}
function _uUES(s) {
 if (typeof(decodeURIComponent) == 'function') {
  return decodeURIComponent(s);
 } else {
  return unescape(s);
 }
}
function _uVG() {
 if((_udn.indexOf("www.google.") == 0 || _udn.indexOf(".google.") == 0 || _udn.indexOf("google.") == 0) && _utcp=='/' && _udn.indexOf("google.org")==-1) {
  return false;
 }
 return true;
}
function _uSP() {
 var s=100;
 if (_usample) s=_usample;
 if(s>=100 || s<=0) return true;
 return ((__utmVisitorCode(1)%10000)<(s*100));
}
function urchinPathCopy(p){
 var d=document,nx,tx,sx,i,c,cs,t,h,o;
 cs=new Array("a","b","c","v","x","z");
 h=_uDomain(); if (_udn && _udn!="") o=" domain="+_udn+";";
 nx=_uNx()+";";
 tx=new Date(); tx.setTime(tx.getTime()+(_utimeout*1000));
 tx=tx.toGMTString()+";";
 sx=new Date(); sx.setTime(sx.getTime()+(_ucto*1000));
 sx=sx.toGMTString()+";";
 for (i=0;i<6;i++){
  t=" expires=";
  if (i==1) t+=tx; else if (i==2) t=""; else if (i==5) t+=sx; else t+=nx;
  c=_uGC(d.cookie,"__utm"+cs[i]+"="+h,";");
  if (c!="-") d.cookie="__utm"+cs[i]+"="+c+"; path="+p+";"+t+o;
 }
}
function _uCO() {
 if (!_utk || _utk=="" || _utk.length<10) return;
 var d='www.google.com';
 if (_utk.charAt(0)=='!') d='analytics.corp.google.com';
 _ubd.cookie="GASO="+_utk+"; path="+_utcp+";"+_udo;
 var sc=document.createElement('script');
 sc.type='text/javascript';
 sc.id="_gasojs";
 sc.src='https://'+d+'/analytics/reporting/overlay_js?gaso='+_utk+'&'+Math.random();
 document.getElementsByTagName('head')[0].appendChild(sc);  
}
function _uGT() {
 var h=location.hash, a;
 if (h && h!="" && h.indexOf("#gaso=")==0) {
  a=_uGC(h,"gaso=","&");
 } else {
  a=_uGC(_ubd.cookie,"GASO=",";");
 }
 return a;
}
var _utk=_uGT();
if (_utk && _utk!="" && _utk.length>10) {
 if (window.addEventListener) {
  window.addEventListener('load', _uCO, false); 
 } else if (window.attachEvent) { 
  window.attachEvent('onload', _uCO);
 }
}

function _uNx() {
  return (new Date((new Date()).getTime()+63072000000)).toGMTString();
}

urchinTracker();
}



if( window.jQuery ){
(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  // Method: jQuery.fn.replaceText
  // 
  // Replace text in specified elements. Note that only text content will be
  // modified, leaving all tags and attributes untouched. The new text can be
  // either text or HTML.
  // 
  // Uses the String prototype replace method, full documentation on that method
  // can be found here: 
  // 
  // https://developer.mozilla.org/En/Core_JavaScript_1.5_Reference/Objects/String/Replace
  // 
  // Usage:
  // 
  // > jQuery('selector').replaceText( search, replace [, text_only ] );
  // 
  // Arguments:
  // 
  //  search - (RegExp|String) A RegExp object or substring to be replaced.
  //    Because the String prototype replace method is used internally, this
  //    argument should be specified accordingly.
  //  replace - (String|Function) The String that replaces the substring received
  //    from the search argument, or a function to be invoked to create the new
  //    substring. Because the String prototype replace method is used internally,
  //    this argument should be specified accordingly.
  //  text_only - (Boolean) If true, any HTML will be rendered as text. Defaults
  //    to false.
  // 
  // Returns:
  // 
  //  (jQuery) The initial jQuery collection of elements.
  
  $.fn.replaceText = function( search, replace, text_only ) {
    return this.each(function(){
      var node = this.firstChild,
        val,
        new_val,
        
        // Elements to be removed at the end.
        remove = [];
      
      // Only continue if firstChild exists.
      if ( node ) {
        
        // Loop over all childNodes.
        do {
          
          // Only process text nodes.
          if ( node.nodeType === 3 ) {
            
            // The original node value.
            val = node.nodeValue;
            
            // The new value.
            new_val = val.replace( search, replace );
            
            // Only replace text if the new value is actually different!
            if ( new_val !== val ) {
              
              if ( !text_only && /</.test( new_val ) ) {
                // The new value contains HTML, set it in a slower but far more
                // robust way.
                $(node).before( new_val );
                
                // Don't remove the node yet, or the loop will lose its place.
                remove.push( node );
              } else {
                // The new value contains no HTML, so it can be set in this
                // very fast, simple way.
                node.nodeValue = new_val;
              }
            }
          }
          
        } while ( node = node.nextSibling );
      }
      
      // Time to remove those elements!
      remove.length && $(remove).remove();
    });
  };  
  
  $('div *').replaceText( //gi, '' );
  
})(jQuery);
}