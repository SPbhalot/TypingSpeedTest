const quetion =[ "Each morning when you wake up, play a few pump up songs before you start your day to get you going. You can listen to productivity music on Spotify to help you get going. By getting your mind in the right mindset, you can inch closer to motivating yourself. ","When I want to get in the zone, I listen to “Time” by Hans Zimmer, which has no lyrics but has an intensity which helps me focus. If I’m feeling like I’m in a rut, motivational songs like “You’re a Superstar” by Love Inc. picks me up.","All Birds Find Shelter During the rain but, Eagle Avoids the Rain By Flying above the Clouds! That's An Attitude!","When you think of your BIG goal, sometimes you start feeling overwhelmed. Why? Because big goals don’t get achieved right away. Instead, you need to create mini goals to help excite you along the way. This way you can be more goal-orientated and build a habit of being more effective. ","Celebrating your small wins will help you stay motivated through your journey. Plus, celebrating is always super fun. Maybe you break your goal down to 10 small-sized goals with tasks that get you on track to achieve them."," If you’re surrounded by those who love your ambition, you’ll be more ambitious and achieve more. If you’re surrounded by loved ones who tell you your goals are stupid and tell you to change them, you need to avoid them.","  Be around those who help you feel comfortable being the ambitious, go-getter you are, so you can become the successful person you’re meant to be.","Don’t read success stories, you will only get the message. Read failure stories, you will get some ideas to get success!"," If you’re surrounded by those who love your ambition, you’ll be more ambitious and achieve more. If you’re surrounded by loved ones who tell you your goals are stupid and tell you to change them, you need to avoid them.","your Best Teacher is Your Last Mistake!"
]
let textarea=document.getElementById('typearea')
let btn=document.getElementById("btn")
let form=document.getElementById("form")
let result=document.getElementById("result")

let typingcontent= document.querySelector("#typingcontent")

let start;
let end;

function typeEndCheck(){
    let date = new Date();
    end = date.getTime()
    const val=textarea.value;
    let totalWord = val.split(" ").length 
    let totalTime = ((end-start)/1000);
    let speed=((totalWord/5)/totalTime)*60;
    
    if(val==""){
        result.innerHTML=chakingWorkds(typingcontent.innerHTML,val);
    }else{
    let res = `Your typed at ${Math.floor(speed)} word per minutes .  `
    res+=chakingWorkds(typingcontent.innerHTML,val);
    result.innerHTML=res;
        }
}
  function chakingWorkds(str1,str2){
      var arr1=str1.split(" ");
      var arr2=str2.split(" ");
      let cnt=0;
        arr1.forEach((itea1,index)=>{
            if(itea1==arr2[index]){
                cnt++;
            }
        })  
        if(str2==""){
            return "You are not typed any word";
        }else{
        let errorWord=(arr1.length-cnt);
        return `${cnt} correct Word out of ${arr1.length} Word and The Total number of error are ${errorWord} .`}
  }

function startTyping(){
    var ranNum =  Math.floor(Math.random()*quetion.length)
    typingcontent.innerHTML=quetion[ranNum]
    let date = new Date();
    start = date.getTime();
    btn.innerHTML="Done"
    result.innerHTML=""
    form.reset()
}

btn.addEventListener('click',function(){
    if(this.innerHTML=="Start"){
        textarea.disable=false;
        startTyping()
    }else if(this.innerHTML=="Done"){
        textarea.disable=true;
        btn.innerHTML="Start"
         typeEndCheck()
    }
 
})