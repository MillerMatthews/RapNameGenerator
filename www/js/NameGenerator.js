// *Shout out to Scott for helping me with this*

window.onload = function () {
    document.addEventListener("deviceready", init, false);
    init();
}


function init() {  
    
    var y = (randomEl(First)+' '+randomEl(Second));
    var YourName = $("#textinput").val();
    
     $("#enter").on("click", function(){

         y = (randomEl(First)+' '+randomEl(Second));
         
        YourName = $("input[name=textbox]").val();

        $("#NameOut").text(y  +  YourName);
       
        });
    
}

// https://jsfiddle.net/katowulf/3gtDf/
// Credit: Kato Richardson

//$('button').click(function() {
//    $('h2').text(randomEl(adjectives)+' '+randomEl(nouns));
//    selectElementContents($('h2')[0]);
//});

function randomEl(list) {
    var i = Math.floor(Math.random() * list.length);
    return list[i];
}

function selectElementContents(el) {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
}

var First = ["Young ", "Big ", "Lil' ", "Killa ", "Phat ", "Sissy ", "Slim ", "Jumpy ", "Hard ", "White ", "J -", "Dr.", "Ol' ", "Ice ", "Childish ", "Angel ", "Gold ", "Red ", "Thicc ", "Mr.", "Mrs."];

var Second = ["Smoke ", "Cray ", "Crunk ", "Shoota ", "Hand ", "Faced ", "Nosed ", "Bruise ", "3000 ", "Handsom ", "Greek ", "Necked ", "Spitta ", "Back ", "Beard ", "Smokah ", "Pigeon ", "Shnoz ", "Bandit ", "Elbow ", "Donkey ", "Bouncin' ", "Ankle ", "Freak "];

$('button').click();