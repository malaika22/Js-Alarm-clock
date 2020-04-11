
// var x=document.getElementById('wakeup-button');

    /* ################
        Selecting DOM
    ################ */
      
    const currentTimeSpan=document.getElementById('current-time');
    const lunchTimeButton=document.getElementById('lunch-button');
    const wakeupTimeButton=document.getElementById('wakeup-button');
    const napTimeButton=document.getElementById('nap-button');
    const lunchTimeSelector=document.getElementById('lunchTimeSelector');
    const napTimeSelector=document.getElementById("napTimeSelector");
    const wakeupTimeSelector=document.getElementById("wakeUpTimeSelector");
    const bodyBackground=document.getElementsByTagName('body');
    const napRingtone=document.getElementById('sleep-ringtone');
    const wakeupRingtone=document.getElementById('wakeup-ringtone');
    const lunchRingtone=document.getElementById('lunch-ringtone');
    const stopLunch=document.getElementById('stop-lunch');
    const stopWakeup=document.getElementById('stop-wakeup');
    const stopNap=document.getElementById('stop-nap');
        
    /* ################
        Global Variables
    ################ */

    let lunchTime;
    let napTime;
    let wakeupTime;
    const noon=12;


 /* ################
     Show Current Time
################ */

    const showCurrentTime=()=>{
        midrian='Am';
        const currentTime=new Date();
        let hours=currentTime.getHours();
        let minutes=currentTime.getMinutes();
        let seconds=currentTime.getSeconds();
        if(hours>=noon){

            midrian='PM';
        }
        if(hours>noon){
            hours=hours-12;
        }
    if(hours===00){
        hours=hours+12;
    }
    if(minutes<10){
        minutes= '0' + minutes;
    }
    if(seconds<10){
        seconds='0' + seconds;
    }
    currentTimeSpan.innerText=`${hours} : ${minutes} : ${seconds} ${midrian}`;

    }

    
    /* ################
        Update Time
    ################ */

    const updateTime=()=>{
        let time=new Date().getHours();
        console.log(time);
        if(time==0){
            time=time+24;
        }
        if(time===napTime){
            bodyBackground[0].style.backgroundImage= "url(./img/nap-time.jpg)";
            napRingtone.play();
            napRingtone.loop=true;
            stopNap.style.display='inline-block';
            napTimeButton.style.display='none';
        }
        else if(time===lunchTime){
            bodyBackground[0].style.backgroundImage="url(./img/lunch-time.jpg)";
            lunchRingtone.play().loop=true;
            stopLunch.style.display='inline-block';
            lunchTimeButton.style.display='none';
            
        } else if(time===wakeupTime){
            bodyBackground[0].style.backgroundImage="url(./img/wakeup-time.jpg)";
            wakeupRingtone.play();
            wakeupRingtone.loop=false;
            stopWakeup.style.display='inline-block';
            wakeupTimeButton.style.display='none';
        }
        showCurrentTime();
       
    }

setInterval(updateTime,1000);




 /* ################
     Event Listerners
################ */
    lunchTimeButton.addEventListener('click',function(){
        lunchTime=parseInt(lunchTimeSelector.value);
        console.log(lunchTime);
    })

    napTimeButton.addEventListener('click',function(){
        napTime=parseInt(napTimeSelector.value);
    })
    wakeupTimeButton.addEventListener('click',function(){
        wakeupTime=parseInt(wakeupTimeSelector.value);
    })
    defaultUrl='./img/default.jpg';
    stopNap.addEventListener('click',function(){
        napTime=0;
        napRingtone.pause();
        stopNap.style.display='none';
        napTimeButton.style.display='inline-block';
        bodyBackground[0].style.backgroundImage='url(./img/default.jpg)';
        
    });
    stopWakeup.addEventListener('click',function(){
        wakeupTime=0;
        wakeupRingtone.pause();
        stopWakeup.style.display='none';
        wakeupTimeButton.style.display='inline-block';
        bodyBackground[0].style.backgroundImage='url(./img/default.jpg)';
    })
    stopLunch.addEventListener('click',function(){
        lunchTime=0;
        lunchRingtone.pause();
        stopLunch.style.display='none';
        lunchTimeButton.style.display='inline-block';
        bodyBackground[0].style.backgroundImage='url(./img/default.jpg)';
    })