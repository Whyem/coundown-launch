$(document).ready(function(){
    var countDownDate = new Date(Date.now() + 4 * 24*60*60*1000 - 23*60*60*1000 - 59*60*1000 - 50*1000).getTime();
    var i=0;
    
    var myfunc = setInterval(function() {

        var now = new Date().getTime();
        var timeleft = countDownDate - now;
            
        // Calculating the days, hours, minutes and seconds left
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        var seconds2 = seconds - 1;
        var hours2 = hours - 1;
        var minutes2 = minutes -1;
        var days2 = days - 1;
        
        if(seconds2 == -1){
            seconds2 = 0;
        }

        if(minutes2 == -1){
            minutes2 = 0;
        }

        if(hours2 == -1){
            hours2 = 0;
        }
          
        if(i==0){
            setTime(seconds,seconds2,"seconds");
            setTime(minutes, minutes2 , "minutes");
            setTime(hours, hours2 , "hours");
            setTime(days, days2 , "days");
        }
            
   
        if(seconds == 0){

            animate(seconds, hours, minutes, days,"seconds");
            animate(seconds, hours, minutes, days,"minutes");

            if(minutes == 0){
                animate(seconds, hours, minutes, days,"hours");
            }

            if(hours == 0){
                animate(seconds, hours, minutes, days,"days");
            }
        }

        else{
            animate(seconds, hours, minutes, days,"seconds");
        }

        
        i++;    
            
    }, 1000);
    

});


function animate(seconds, hours, minutes, days,cat){
    setTimeout(function(){ 

        var seconds2 = seconds - 1;
        var hours2 = hours - 1;
        var minutes2 = minutes -1;
        var days2 = days -1;
        
        if(seconds2 == -1){
            seconds2 = 59;
        }

        if(minutes2 == -1){
            minutes2 = 59;
        }

        if(hours2 == -1){
            hours2 = 23;
        }


        if(cat=="seconds"){
            setTime(seconds,seconds2,"seconds");
        }

        else if(cat == "minutes"){
            setTime(minutes, minutes2 , "minutes");
        }

        else if(cat == "hours"){
            setTime(hours, hours2 , "hours");
        }

        else{
           setTime(days, days2 , "days");
        }
        

        $(".top_"+cat+" > .square").removeClass("opace");
        $(".top_"+cat+" > .square__flipped").addClass("opace");
        $(".top_"+cat+" > .square__flipped").removeClass("flip_bottom");
        $(".top_"+cat+" > .square").addClass("flip");
        
    setTimeout(function(){ 
            $(".top_"+cat+" > .square").addClass("opace");
            $(".top_"+cat+" > .square__flipped").removeClass("opace");
            $(".top_"+cat+" > .square__flipped").addClass("flip_bottom");
            $(".top_"+cat+" > .square").removeClass("flip");
        }, 500);  
           
    }, 500);
}


//Fills the values in the corresponding h1 tags
function setTime(current, before , cat){
    $("#"+ cat +"_top_front").text(('0' + current).slice(-2));
    $("#"+ cat +"_top_back").text(('0' + before).slice(-2));
    $("#"+ cat +"_bottom_front").text(('0' + before).slice(-2));
    $("#"+ cat +"_bottom_back").text(('0' + current).slice(-2));
}