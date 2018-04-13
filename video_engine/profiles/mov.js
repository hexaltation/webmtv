let  profile={

"name":     "mov",
"container":"mov",

"vcodec": {
  "key":"-c:v",
  "value":"copy"
  }  //
,
"vbitrate":{
  "key":null,
  "value":null
},
"acodec": {
  "key":"-c:a",
  "value":"libmp3lame"
},
"abitrate":{
  "key":"-b:a",
  "value":"320k"
}  //,
,
"crf":null,

"preset":null,
"tune":null
}




module.exports=profile
