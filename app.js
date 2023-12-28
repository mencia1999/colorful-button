const btnLists = document.querySelectorAll('.btn');
var idList = [];

for(const btn of btnLists){
   btn.addEventListener('click',function(){
        if(idList.length == 5){
            revertColor();
            return false;
        }
        this.classList.add('colorful');
        idList.push(this.getAttribute('id'));
        console.log(idList.length);
        
   })
}

function revertColor()
{
    for(const [index,id] of idList.entries()){
        let btn = document.querySelector('#'+id);
    
        setTimeout(function(){
           console.log(btn);
            btn.classList.remove('colorful');
        },index * 1000);
      
    }
    idList = [];
    
}