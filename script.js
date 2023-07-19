var btnContainer = document.getElementById('btn-container');
let btn= document.querySelectorAll('.btnS');
var btn32 = document.getElementById('btn-32');
var btn31 = document.getElementById('btn-31');
var screen = document.getElementById('input-screen');
var sinBtn= document.getElementById('btn-3');
var cosBtn= document.getElementById('btn-4');
var tanBtn= document.getElementById('btn-5');
var degBtn= document.getElementById('btn-2');
var xyBtn= document.getElementById('btn-6');

var clicked = 0;
var degBtnValue=1;

var s= '';
var cal='';
var input;


// console.log(screen)
function col() {
    btnContainer.classList.toggle('btn-container');
    btnContainer.classList.toggle('btnContainer')
    btn.forEach(element => {
        element.classList.toggle('smallBtn');
        element.classList.toggle('btn')
    });
}


let btnArray = Array.from(btn);

btnArray.forEach(button => {
    button.addEventListener('click',(e)=> {
       input=e.target.innerHTML;
       if(input==='backspace' || input === '<span class="material-symbols-outlined">backspace</span>'){
        s=s.substring(0,s.length-1);
        cal=cal.substring(0,cal.length-1);
       }
       else if(input==='AC'){
        s='';
        cal='';
       }
       else if(input==='expand_content' || input=== '<span class="material-symbols-outlined orangeClr">expand_content</span>'){
        btn32.innerHTML='e';
        btn31.innerHTML='<span class="material-symbols-outlined orangeClr" id="collaspe" style="font-size: 1rem; font-weight: bold;">close_fullscreen</span>'
        var span= document.getElementById('collaspe');
        span.style.fontSize='1rem';
        span.style.fontWeight='bold';
        col();
       }
       else if(input==='<span class="material-symbols-outlined orangeClr" id="collaspe" style="font-size: 1rem; font-weight: bold;">close_fullscreen</span>' || input==='close_fullscreen' ){
        btn32.innerHTML='<span class="material-symbols-outlined orangeClr">expand_content</span>';
        btn31.innerHTML='e';
        col();
       }

       else if(input==='%'){
        if(s!=''){
            s+='×'+eval('1/100');
            cal+='*'+eval('1/100');
        }
        else{
            s+=eval('1/100');
            cal+=eval('1/100');
        }
       }
       else if(input==='.'&& s.includes('.') ){
            s=s;
            cal=cal;
       }
       else if(input==='+' && s[s.length-1]==='+'){
        s=s;
        cal=cal;

       }
       else if((input==='+' || input==='×' ||input=='÷' || input==='=' || input==='1/x' || input==='x!' || input==='x<sup>y</sup>' )&&s===''){
        s=s;
        cal=cal;

       }
       else if(input==='2nd'){
        if(clicked===0){
            sinBtn.innerHTML='sin<sup style="font-size:0.7em">-1</sup>'
            cosBtn.innerHTML='cos<sup style="font-size:0.7em">-1</sup>'
            tanBtn.innerHTML='tan<sup style="font-size:0.7em">-1</sup>'
            degBtn.setAttribute('disabled','true')
            clicked=1;
        }
        else if(clicked===1){
            sinBtn.innerHTML='sin';
            cosBtn.innerHTML='cos';
            tanBtn.innerHTML='tan';
            degBtn.removeAttribute('disabled');           
            clicked=0;
        }

       }

       else if(input==='ln'){
        cal=s;
        s+='ln(';
        cal+='Math.log(';
       }
       else if(input==='log'){
        cal=s;
        s+='log(';
        cal+='Math.log10(';
       }
       
       else if(input==='÷'){
        s+='÷';
        cal+='/';
       }
       else if(input==='×'){
        s+='×';
        cal+='*';
       }

       else if(input==='e'){
        if(s!='' && !(s[s.length-1]===('×')) && !(s[s.length-1]===('+')) && !(s[s.length-1]===('-')) && !(s[s.length-1]===('%')) && !(s[s.length-1]===('÷')) && !(s[s.length-1]===('(')) ){
            s+='×'+'e';
            cal+='*'+'Math.E';
        }
        else{
            s+='e';
            cal+='Math.E';
        }
       }

       else if(input==='√'){
        if(s!='' && s[s.length-2]!='√'&& s[s.length-1]!='c'){
            s+='×√(';
            cal+='*Math.sqrt('; 
            console.log()
        }
        else if(s!='' && s[s.length-2]==='√'&& s[s.length-1]==='c'){
            s+='√(';
            cal+='Math.sqrt(';
            console.log(cal)
        }
        else{
            s+='√(';
            cal+='Math.sqrt('; 
        }
                  
       }

       else if(input==='deg' ||input==='rad'){
        if(degBtnValue===1){
            degBtn.innerHTML='rad';
            degBtnValue=0;
        }
        else{
            degBtn.innerHTML='deg';
            degBtnValue=1;
        }
       }

       else if(input==='1/x'){
        s+='^(-1)';
        cal=1/eval(cal);
        cal=cal.toString();
       }

       else if(input==='x!'){
        s+='!';
        cal=fact(eval(cal));
        cal=cal.toString();
       }

       else if(input==='π' ){
        if(s[s.length-1]==='('){
            s+='π';
            cal+='Math.PI'
        }
        else if(s[s.length-1]!='π'){

            if(s!='' && !(s[s.length-1]===('×')) && !(s[s.length-1]===('+')) && !(s[s.length-1]===('-')) && !(s[s.length-1]===('%')) && !(s[s.length-1]===('÷')) ){
                s+='×π';
                cal+='*Math.PI';
                
            }
            else{
                s+='π';
                cal+='Math.PI';
            }
        }
        
        else {
            cal=cal;
            s=s;
        }
        
       }

       else if(input==='x<sup>y</sup>'){
            s+='^';
            cal+='**';
       }

       else if(input==='sin'){
        if((s!='' && !(s[s.length-1]===('×')) && !(s[s.length-1]===('+')) && !(s[s.length-1]===('-')) && !(s[s.length-1]===('%')) && !(s[s.length-1]===('÷'))  && !(s[s.length-1]===('(')) )){
            
            if(degBtnValue===1){
                s+='×sin(';
                cal+='*Math.sin((Math.PI/180)*';
            }
            else if(degBtnValue===0){
                s+='×sin(';
                cal+='*Math.sin(';
            }
            
            
            
        }
        else{
            if(degBtnValue===1){
                s+='sin(';
                cal+='Math.sin((Math.PI/180)*';
            }
            else if(degBtnValue===0){
                s+='sin(';
                cal+='Math.sin(';
            }
        }
       }

       else if(input==='cos'){
        if((s!='' && !(s[s.length-1]===('×')) && !(s[s.length-1]===('+')) && !(s[s.length-1]===('-')) && !(s[s.length-1]===('%')) && !(s[s.length-1]===('÷'))  && !(s[s.length-1]===('(')) )){
            
            if(degBtnValue===1){
                s+='×cos(';
                cal+='*Math.cos((Math.PI/180)*';
            }
            else if(degBtnValue===0){
                s+='×cos(';
                cal+='*Math.cos(';
            }
            
            
            
        }
        else{
            if(degBtnValue===1){
                s+='cos(';
                cal+='Math.cos((Math.PI/180)*';
            }
            else if(degBtnValue===0){
                s+='cos(';
                cal+='Math.cos(';
            }
        }
       }
       else if(input==='tan'){
        if((s!='' && !(s[s.length-1]===('×')) && !(s[s.length-1]===('+')) && !(s[s.length-1]===('-')) && !(s[s.length-1]===('%')) && !(s[s.length-1]===('÷'))  && !(s[s.length-1]===('(')) )){
            
            if(degBtnValue===1){
                s+='×tan(';
                cal+='*Math.tan((Math.PI/180)*';
            }
            else if(degBtnValue===0){
                s+='×tan(';
                cal+='*Math.tan(';
            }
            
            
            
        }
        else{
            if(degBtnValue===1){
                s+='tan(';
                cal+='Math.tan((Math.PI/180)*';
            }
            else if(degBtnValue===0){
                s+='tan(';
                cal+='Math.tan(';
            }
        }
       }
       
       else if(input==='sin<sup style="font-size:0.7em">-1</sup>' || input==='-1'){

        if((s!='' && !(s[s.length-1]===('×')) && !(s[s.length-1]===('+')) && !(s[s.length-1]===('-')) && !(s[s.length-1]===('%')) && !(s[s.length-1]===('÷'))  && !(s[s.length-1]===('(')) )){
            s+='×arcsin(';
            cal+='*(180/Math.PI)*Math.asin(';
        }
        else{
            s+='arcsin(';
            cal+='(180/Math.PI)*Math.asin(';
        }


       }

       else if(input==='cos<sup style="font-size:0.7em">-1</sup>'){

        if((s!='' && !(s[s.length-1]===('×')) && !(s[s.length-1]===('+')) && !(s[s.length-1]===('-')) && !(s[s.length-1]===('%')) && !(s[s.length-1]===('÷'))  && !(s[s.length-1]===('(')) )){
            s+='×arccos(';
            cal+='*(180/Math.PI)*Math.acos(';
        }
        else{
            s+='arccos(';
            cal+='(180/Math.PI)*Math.acos(';
        }


       }

       else if(input==='tan<sup style="font-size:0.7em">-1</sup>'){

        if((s!='' && !(s[s.length-1]===('×')) && !(s[s.length-1]===('+')) && !(s[s.length-1]===('-')) && !(s[s.length-1]===('%')) && !(s[s.length-1]===('÷'))  && !(s[s.length-1]===('(')) )){
            s+='×arctan(';
            cal+='*(180/Math.PI)*Math.atan(';
        }
        else{
            s+='arctan(';
            cal+='(180/Math.PI)*Math.atan(';
        }


       }
       
       
       else if(input==='='){
        try {
            s=eval(cal).toFixed(4);
        } catch (error) {
            console.log(error);
            s='SyntaxError';
        }
       }
       
       else {
        s+=input;
        cal+=input;
       }
       screen.value=s;

    })

});





function fact(num) {     
    if (num < 0){ 
       return -1
    } 
    else if(num == 0){ 
       return 1; 
    } 
    else { 
       let result = 1; 
       for(var i = num; i > 1; i--){ 
          result *= i; 
       }; 
       return result; 
    } 
}




// console.log(eval('(180/Math.PI)*Math.asin(1)'))