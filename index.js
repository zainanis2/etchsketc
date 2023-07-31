const board = document.getElementById('Board');
const clear = document.getElementById('Clear');
const Rainbow = document.getElementById('Rainbow');
const Eraser = document.getElementById('Eraser');
const Pencil = document.getElementById('Pencil');
Pencil.checked=true;

Rainbow.addEventListener('click',()=>
{
    Pencil.checked=false;
    Eraser.checked=false;
})

Pencil.addEventListener('click',()=>
{
    Rainbow.checked=false;
    Eraser.checked=false;
})
Eraser.addEventListener('click',()=>
{
    Rainbow.checked=false;
    Pencil.checked=false;

})



let height=board.clientHeight;
let width=board.clientWidth;
let x=100;
height=height/x;
width=width/x;


for (let i= 0; i <x; i++)
{
    let row = document.createElement('div');
    row.classList.add('Row');
    row.style.height=height+"px";
    row.style.width=board.clientWidth;

    for(let j=0;j<x;j++)
    {
        let samp =document.createElement('div');
        samp.classList.add('Box');
        samp.style.height=height+'px';
        samp.style.width=width+'px';
        samp.style.backgroundColor='rgb(255,255,255)'

        

        samp.addEventListener('mouseenter',()=>
        {  
            if(Eraser.checked==true)
            {
                samp.style.backgroundColor='rgb(255,255,255)'

            } 
            else
            {
            if(samp.style.backgroundColor=="rgb(255, 255, 255)" )
            {

                if(Pencil.checked==true)
                {
                    samp.style.backgroundColor='rgb(63,63,63)';

                }
                else if(Rainbow.checked==true)
                {
                    let r=Math.random()*256;
                    let g=Math.random()*256;
                    let b=Math.random()*256;
                    samp.style.backgroundColor='rgb('+r+','+g+','+b+')';
    
                }
            }
            else
            {
                console.log("hell")
                let col=samp.style.backgroundColor.substring(4);
                col=col.slice(0,col.length-1);
                col=col.split(',');
                col[0]=col[0]*.75;
                col[1]=col[1]*.75;
                col[2]=col[2]*.75;
                samp.style.backgroundColor='rgb('+col[0]+','+col[1]+','+col[2]+')';       
             }
            }
   
          
    
        }
        )
        
        row.appendChild(samp);
    }
    board.appendChild(row);
    
}

clear.addEventListener('click',()=>
{
    for (let i= 0; i <x; i++)
    {
       
        for(let j=0;j<x;j++)
        {
            board.children[i].children[j].style.backgroundColor='rgb(255,255,255)';
 
        }
             
    }
}
)