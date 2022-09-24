


const Calculate =(action,firstNum,secondNum)=>{
    
    if(action<0 || action > 4) return "incorrect input on action"
    else if(secondNum == 0)return "incorrect input on second number"
    else if(action == 1)return (firstNum + secondNum).toFixed(3)
    else if(action == 2)return (firstNum - secondNum).toFixed(3)
    else if(action == 3)return (firstNum * secondNum).toFixed(3)
    else if(action == 4)return (firstNum / secondNum).toFixed(3)

}

const MiddleCalculations = (firstNum,secondNum,errorNum) =>{
    if(errorNum != undefined)return "exesive input"
    if(firstNum == undefined || secondNum==undefined)return "insufisiant input"

    if(typeof(firstNum) != "number" || typeof(secondNum) != "number")return "input is not a numbner"


    if(firstNum<0 || secondNum<0)return "incorrect input"
    average = (firstNum+secondNum)/2;
    geometricMean = Math.sqrt(firstNum*secondNum)
    return {average:Number(parseFloat(average).toFixed(5)),geometricMean:Number(parseFloat(geometricMean.toFixed(5)))}
}

console.log(MiddleCalculations(1,2,3))




// const brokenCalculate=(firstNum,secondNum)=>{
//     return firstNum - secondNum
// }




module.exports = {Calculate,MiddleCalculations};