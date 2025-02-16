
//Variables (THESE MIGHT BE USED IN OTHER JS FILES TOO)
var inp_as = document.getElementById('a_size');
var array_size = inp_as.value;
var inp_gen = document.getElementById("a_generate");
var inp_aspeed = document.getElementById("a_speed");

var butts_algos = document.querySelectorAll(".algos button");

var div_sizes = [];
var divs = [];
var margin_size = 0.1;
var cont = document.getElementById("array_container");
cont.style = "flex-direction:row";

//Four colors used during sorting
let c1 = "#31473A";
let c2 = "crimson";
let c3 = "rgb(3, 103, 218)";
let c4 = "rgb(6, 100, 42)";

//Array generation and updation.
inp_gen.addEventListener("click", generate_array);
inp_gen.addEventListener("click", enable_NewArray);
inp_as.addEventListener("input", update_array_size);

function generate_array(){
    cont.innerHTML = "";

    for(var i=0; i<array_size; i++){
        div_sizes[i] = Math.floor(Math.random() * 0.5*(inp_as.max - inp_as.min) ) + 10;
        divs[i] = document.createElement("div");
        cont.appendChild(divs[i]);
        divs[i].style = " margin:5% " + margin_size + "%; background-color :"+ c1 +"; width:" 
        + (100/array_size-(2*margin_size)) + "%; height:" + (div_sizes[i]) + "%;";
    }    
}

function update_array_size(){
    array_size = inp_as.value;
    generate_array();
}

window.onload = update_array_size();

//Running the appropriate algorithm.
for(var i=0; i<butts_algos.length; i++){
    butts_algos[i].addEventListener("click", runalgo);
}

function disable_buttons(){
    for(var i=0; i<butts_algos.length; i++){
        butts_algos[i].classList = [];
        butts_algos[i].classList.add("butt_locked");

        butts_algos[i].disabled = true;
        inp_as.disabled = true;
         //TODO: Not disable New Array button
        inp_aspeed.disabled = true;
    }
}

function runalgo(){
    disable_buttons();
 
    this.classList.add("butt_selected");
    switch(this.innerHTML){
        case "Bubble" : Bubble();
            break;
        case "Selection" : Selection_sort();
            break;
        case "Insertion" : Insertion();
            break;
        case "Merge" : Merge();
            break;
        case "Quick" : Quick();
            break;
        case "Heap" : Heap();
            break;
    }
}