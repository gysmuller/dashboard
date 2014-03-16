var standupTime = {hour:9,minutes:{min:29,max:40}};
var lunchTime = {hour:12,minutes:{min:22,max:40}};
var homeTime = {hour:18,minutes:{min:0,max:20}};
var screensaverTime = 60000;
var animationActive = false;

window.onload = function() {
    setInterval(function(){
        if(animationActive == false){
            animationActive = true;
            executeStandup();
        }
        if(animationActive == false){
            animationActive = true;
            screenSaver();
        }        
    },1000);
}

function executeStandup(){
    var currentdate = new Date(); 
    var hours = currentdate.getHours();
    var minutes = currentdate.getMinutes();  
    
    if((hours == standupTime.hour)&&(minutes > standupTime.minutes.min)&&(minutes < standupTime.minutes.max)){
        $('.clock').css({left:840});
        $('.standup-status').text('Time for Stand-Up!');
        $('.standup-status').css({left:50});       
        setTimeout(function(){
            $('.clock').css({left:420});
            $('.standup-status').css({left:-800}); 
            setTimeout(function(){
                standupActive = false;
            },2000);
        },600000);
    }
    else if((hours == lunchTime.hour)&&(minutes > lunchTime.minutes.min)&&(minutes < lunchTime.minutes.max)){
        $('.clock').css({left:840});
        $('.standup-status').text('Eat Time!');
        $('.standup-status').css({left:50});       
        setTimeout(function(){
            $('.clock').css({left:420});
            $('.standup-status').css({left:-800}); 
            setTimeout(function(){
                standupActive = false;
            },2000);
        },1200000);
    }
    else if((hours == homeTime.hour)&&(minutes > homeTime.minutes.min)&&(minutes < homeTime.minutes.max)){
        $('.clock').css({left:840});
        $('.standup-status').text('Go Home!');
        $('.standup-status').css({left:50});       
        setTimeout(function(){
            $('.clock').css({left:420});
            $('.standup-status').css({left:-800}); 
            setTimeout(function(){
                standupActive = false;
            },2000);
        },1200000);
    }
    else{
        animationActive = false;
    }
    
}

function screenSaver(){
    var currentdate = new Date(); 
    var hours = currentdate.getHours();
    var minutes = currentdate.getMinutes();  
    
    $('.clock').css({left:-1200});
    $('.logo').css({left:420});    
    setTimeout(function(){
        $('.logo').css({left:1920});    
        $('.clock').css({left:420});    
        setTimeout(function(){
            animationActive = false;
        },screensaverTime);
    },2000);
    
}

    