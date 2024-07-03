let hr = document.getElementById('hr');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

let s = 0;
let m = 0;
let h = 0;

const startTime = () =>{
    
    const interval =  setInterval(() => {
        
        s++;

        if(s < 10 ){
            
            sec.innerHTML ="0"+  s;
        }
        else{
            sec.innerHTML = s;
        }
        console.log("sec:" , s);

        if(s >= 59){
            s = 0;
            m++;
          if(m < 10){
            min.innerHTML ="0" + m;
          }
          else{
            min.innerHTML = m;
          }
        }

        if(m >= 59){
            m = 0;
            h++;
            hr.innerHTML = h;
            min.innerHTML = m;
        }

    }, 1000)
}