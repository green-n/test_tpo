


const Calculate =(action,firstNum,secondNum)=>{
    if(action<0 || action > 4) return "incorrect input on action"
    else if(secondNum == 0)return "incorrect input on second number"
    else if(action == 1)return (firstNum + secondNum).toFixed(3)
    else if(action == 2)return (firstNum - secondNum).toFixed(3)
    else if(action == 3)return (firstNum * secondNum).toFixed(3)
    else if(action == 4)return (firstNum / secondNum).toFixed(3)

}





// const brokenCalculate=(firstNum,secondNum)=>{
//     return firstNum - secondNum
// }




module.exports = {Calculate};