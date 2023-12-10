 var num = document.querySelectorAll(".drum").length;
 for(var i =0 ; i< num; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        // var sound = this.classList[0];
        var sound = this.innerHTML;
        CharacterCheck(sound);
        animation(sound);
    })
 };

 document.addEventListener("keypress",function(e){
    CharacterCheck(e.key);
    animation(e.key);
})

 function CharacterCheck(char){
    switch(char){
        case 'w':
            var audio = new Audio('./tom-1.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('./tom-2.mp3');
            audio.play();
            break;  
        case 's':
            var audio = new Audio('./tom-3.mp3');
            audio.play();
            break;  
        case 'd':
            var audio = new Audio('./tom-4.mp3');
            audio.play();
            break; 
        case 'j':
            var audio = new Audio('./snare.mp3');
            audio.play();
            break; 
        case 'k':
            var audio = new Audio('./crash.mp3');
            audio.play();
            break; 
        case 'l':
            var audio = new Audio('./kick-bass.mp3');
            audio.play();
            break; 
        default :
            document.body.classList.add("game-over");
            setTimeout(()=>{
                document.body.classList.remove("game-over");
            },100)
    }
 }
 
function animation(char){
    var active = document.querySelector('.'+char)
    active.classList.add('pressed');
    setTimeout(()=>{
        active.classList.remove('pressed');
    },100)
}
