 const donatebutton = document.getElementById('donate-now');
     donatebutton.addEventListener('click',function(){ 
    const amountreducing = parseFloat(document.getElementById('ammout-reducing').value);

    const writeDonate = parseFloat(document.getElementById('write-donate').value);
    
    const amountAdd = parseFloat(document.getElementById('amountadd').value);
   
    const totaladd = writeDonate;
    const add = amountAdd;
    const balance = add - amountreducing;
   
    const totalExpance = document.getElementById("amountadd")
    totalExpance.innerText = totaladd.toFixed(2);

   



const balanceElemnet = document.getElementById('ammout-reducing')
balanceElemnet.innerText = balance;


})
    








   




document.getElementById('history-btn')
.addEventListener('click', function(){
    window.location.href = 'result.html'
})



















