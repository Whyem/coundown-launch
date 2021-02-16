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
          
        // Result is output to the specific element

            if(i==0){
            $("#seconds_top_front").text(('0' + seconds).slice(-2));
            $("#seconds_top_back").text(('0' + (seconds2)).slice(-2));
            $("#seconds_bottom_front").text(('0' + (seconds2)).slice(-2));
            $("#seconds_bottom_back").text(('0' + seconds).slice(-2));
        
            $("#minutes_top_front").text(('0' + minutes).slice(-2));
            $("#minutes_top_back").text(('0' + (minutes2)).slice(-2));
            $("#minutes_bottom_front").text(('0' + (minutes2)).slice(-2));
            $("#minutes_bottom_back").text(('0' + minutes).slice(-2));
       
            $("#hours_top_front").text(('0' + hours).slice(-2));
            $("#hours_top_back").text(('0' + (hours2)).slice(-2));
            $("#hours_bottom_front").text(('0' + (hours2)).slice(-2));
            $("#hours_bottom_back").text(('0' + hours).slice(-2));
        
            $("#days_bottom_front").text(('0' + (days2)).slice(-2));
            $("#days_top_back").text(('0' + (days2)).slice(-2));
            $("#days_bottom_back").text(('0' + days).slice(-2));
            $("#days_top_front").text(('0' + days).slice(-2));
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
            $("#seconds_top_front").text(('0' + seconds).slice(-2));
            $("#seconds_top_back").text(('0' + (seconds2)).slice(-2));
            $("#seconds_bottom_front").text(('0' + (seconds2)).slice(-2));
            $("#seconds_bottom_back").text(('0' + seconds).slice(-2));
        }

        else if(cat == "minutes"){
            $("#minutes_top_front").text(('0' + minutes).slice(-2));
            $("#minutes_top_back").text(('0' + (minutes2)).slice(-2));
            $("#minutes_bottom_front").text(('0' + (minutes2)).slice(-2));
            $("#minutes_bottom_back").text(('0' + minutes).slice(-2));
        }

        else if(cat == "hours"){
            $("#hours_top_front").text(('0' + hours).slice(-2));
            $("#hours_top_back").text(('0' + (hours2)).slice(-2));
            $("#hours_bottom_front").text(('0' + (hours2)).slice(-2));
            $("#hours_bottom_back").text(('0' + hours).slice(-2));
        }

        else{
            $("#days_bottom_front").text(('0' + (days2)).slice(-2));
            $("#days_top_back").text(('0' + (days2)).slice(-2));
            $("#days_bottom_back").text(('0' + days).slice(-2));
            $("#days_top_front").text(('0' + days).slice(-2));
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