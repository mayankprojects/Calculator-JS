let string = "";
let ans = document.querySelector('.ans');
let ops = document.querySelectorAll('.box')
Array.from(ops).forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            try{
                string = eval(string);
                ans.value = string;
            }
            catch(err)
            {
                string = "";
                ans.value = string;
            }
        }
        else if(e.target.innerHTML == 'C'){
            string = "";
            ans.value = string;
        }
        else if(e.target.innerHTML == '←')
        {
            string =  string.slice(0, -1);
            ans.value = string;
        }
        else if(e.target.innerHTML == '1/x')
        {
            string = 1/eval(string);
            ans.value = string;
        }
        else if(e.target.innerHTML == 'x^2')
        {
            string = eval(string) * eval(string);
            ans.value = string;
        }
        else
        {
            string += e.target.innerHTML;
            ans.value = string;
        }
    })
})



