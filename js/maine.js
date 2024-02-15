 let title = document.querySelector('.title');
 let mood = 'x'
 let squre =[];


 function finish(num1,num2,num3){
    title.innerHTML=`${squre[num1]} winner`;
    document.getElementById('item'+num1).style.background='red';
    document.getElementById('item'+num2).style.background='red';
    document.getElementById('item'+num3).style.background='red';
    setInterval(function(){title.innerHTML += '.'},1000);
    setTimeout(function(){location.reload()},4000)
 }
 
 function winner(){
    for(let i=1;i<10;i++)
    {
        squre[i]=document.getElementById('item'+i).innerHTML;
    }
    if(squre[1]==squre[2]&&squre[2]==squre[3]&&squre[1] != '')
    {
       finish(1,2,3)
    }
    else if(squre[4]==squre[5]&&squre[5]==squre[6]&&squre[4] != '')
    {
        finish(4,5,6)
    }
    else if(squre[7]==squre[8]&&squre[8]==squre[9]&&squre[7] != '')
    {
        finish(7,8,9)
    }
    else if(squre[1]==squre[4]&&squre[4]==squre[7]&&squre[1] != '')
    {
        finish(1,4,7)
    }
    else if(squre[2]==squre[5]&&squre[5]==squre[8]&&squre[2] != '')
    {
        finish(2,5,8)
    }
    else if(squre[3]==squre[6]&&squre[6]==squre[9]&&squre[3] != '')
    {
        finish(3,6,9)
    }
    else if(squre[1]==squre[5]&&squre[5]==squre[9]&&squre[1] != '')
    {
        finish(1,5,9)
    }
    else if(squre[3]==squre[5]&&squre[5]==squre[7]&&squre[3] != '')
    {
        finish(3,5,7)
    }
    else if(squre[1]!=''&&squre[2]!=''&&squre[3]!=''&&squre[4]!=''&&squre[5]!=''&&squre[6]!=''&&squre[7]!=''&&squre[8]!=''&&squre[9]!='')
    {
        title.innerHTML='Draw'
        title.style.color='red'
        setTimeout(function(){location.reload()},2000)
    }
 }

 function game(id){
    let element =document.getElementById(id)
    if(mood=='x' && element.innerHTML ==''){
        mood='o'
        title.innerHTML='o'
        element.innerHTML='x'
    }
    else if(mood=='o' && element.innerHTML==''){
        mood='x'
        title.innerHTML='x'
        element.innerHTML='o'
    }
    winner()
 }





