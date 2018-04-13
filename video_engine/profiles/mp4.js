let  profile={

"name":     "h264",
"container":"mp4",

"codec": {
  "key":"-c:v",
  "value":"libx264"
  }  //
,
"crf":{
  "key":"-crf",
  "value":0
},

"preset":{
  "key":"-preset",
  value:["ultrafast",//-preset
           "superfast",
           "veryfast",
           "faster",
           "fast",
           "medium",
           "slow",
           "slower",
           "veryslow" ]},
"tune":{
key:"-tune",
"value":
[{
  "mode":"film",
  "description":"use for high quality movie content; lowers deblocking"
} ,
{
  "mode":"animation",
  "description":"good for cartoons; uses higher deblocking and more reference frames"
} ,
{
  "mode":"grain",
  "description":"preserves the grain structure in old, grainy film material"
} ,
{
  "mode":"stillimage",
  "description":" good for slideshow-like content"
} ,
{
  "mode":"fastdecode",
  "description":"allows faster decoding by disabling certain filters"
} ,
{
  "mode":"zerolatency",
  "description":"good for fast encoding and low-latency streaming"
} ]
}

}


module.exports=profile
