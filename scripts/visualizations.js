//We only have to change background-color and height of the sorting element.
var speed = 1000;
inp_aspeed.addEventListener("input", vis_speed);

function vis_speed(){
    var array_speed = inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1 : speed = 1;
                break;
        case 2 : speed = 10;
                break;
        case 3 : speed = 100;
                break;
        case 4 : speed = 1000;
                break;
        case 5 : speed = 10000;
                break;
    }

    //Decrease numerator to increase speed.
    delay_time = 10000 / (Math.floor(array_size / 10) * speed);        
}

//Decrease numerator to increase speed.
var delay_time = 10000 / (Math.floor(array_size/10) * speed);
//This is updated on every div change so that visualization is visible.
var c_delay = 0;

function div_update(cont, height, color){
    window.setTimeout(function(){
        cont.style = " margin:5% " + margin_size + "%; width:" + (100 / array_size - (2 * margin_size)) + 
        "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay += delay_time);
}

function enable_buttons(){
    window.setTimeout(function(){
        for(var i=0; i<butts_algos.length; i++){
            butts_algos[i].classList = [];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled = false;
            inp_as.disabled = false;
            inp_gen.disabled = false;
            inp_aspeed.disabled = false;
        }
    }, c_delay += delay_time);
}

function enable_NewArray(){
        for(var i=0; i<butts_algos.length; i++){
            butts_algos[i].classList = [];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled = false;
            inp_as.disabled = false;
            inp_gen.disabled = false;
            inp_aspeed.disabled = false;
        }
    }

// function playNote(freq){
//     if(audioCtx == null){
//         audioCtx = new (
//             AudioContext ||
//             webkitAudioContext ||
//             window.webkitAudioContext
//         )();
//     }

//     const duration = 0.1;
//     const osc = audioCtx.createOscillator();
//     osc.frequency.value = freq;
//     osc.start();
//     osc.stop(audioCtx.currentTime + duration);

//     const node = audioCtx.createGain();
//     node.gain.value = 0.1;
//     node.gain.linearRampToValueAtTime(
//         0, audioCtx.currentTime + duration
//     );

//     osc.connect(node);
//     node.connect(audioCtx.destination);
// }