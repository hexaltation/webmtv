let  profile={

"name":     "mpeg4",
"container":"avi",

"vcodec": {
  "key":"-c:v",
  "value":"mpeg4"
  }  //
,
"vbitrate":{
  "key":"-b:v",
  "value":"4000k"
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
