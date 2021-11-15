var isPlaying = false;
var currentPlayingFm = 'dhaka_fm' ;

if('serviceWorker' in navigator){
    navigator.serviceWorker.register("JavaScripts/service_worker.js")
    .then(function(registration) {
        console.log('Registration successful, scope is:', registration.scope);
      })
      .catch(function(error) {
        console.log('Service worker registration failed, error:', error);
      });
}


function radio_today_function(){
    isPlaying = true;
    currentPlayingFm = 'radio_today';
    document.getElementById('dhaka_fm').pause();
    document.getElementById('radio_today').play();
    document.getElementById('frequency').innerText = "89.6";
    document.getElementById("track_name_id").innerHTML = "The talk show";
    document.getElementById("fm_name_id").innerHTML = "Radio Today";
    document.getElementById("previous_button").style.background = "rgba(175,175,175, 0.3)";
    setTimeout(() => {
        document.getElementById("previous_button").style.background = "rgb(175, 175, 175)";
    }, 200);
    document.getElementById("pause_play_img").src = "assets/icons/pause_white_24dp.svg";
}

function dhaka_fm_function(){
    isPlaying = true;
    currentPlayingFm = 'dhaka_fm';
    document.getElementById('radio_today').pause();
    document.getElementById('dhaka_fm').play();
    document.getElementById('frequency').innerText = "90.4";
    document.getElementById("track_name_id").innerHTML = "The mid night fm";
    document.getElementById("fm_name_id").innerHTML = "Dhaka FM";
    document.getElementById("next_button").style.background = "rgba(175,175,175, 0.3)";
    setTimeout(() => {
        document.getElementById("next_button").style.background = "rgb(175, 175, 175)";
    }, 200);
    document.getElementById("pause_play_img").src = "assets/icons/pause_white_24dp.svg";
}

function pause_or_play(){
    if(isPlaying){
        document.getElementById(currentPlayingFm).pause();
        document.getElementById("pause_play_img").src = "assets/icons/play_arrow_white_24dp.svg";
        document.getElementById("play_pause_button").style.background = "rgba(175,175,175, 0.3)";
        setTimeout(() => {
            document.getElementById("play_pause_button").style.background = "rgb(175, 175, 175)";
        }, 200);
    }
    else if(isPlaying == false){
        document.getElementById(currentPlayingFm).play();
        document.getElementById("pause_play_img").src = "assets/icons/pause_white_24dp.svg";
        document.getElementById("play_pause_button").style.background = "rgba(175,175,175, 0.3)";
        setTimeout(() => {
            document.getElementById("play_pause_button").style.background = "rgb(175, 175, 175)";
        }, 200);
    }
    isPlaying = !isPlaying;
}