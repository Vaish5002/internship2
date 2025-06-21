function BMI(w,h){
    let b=w/(h*h);
    if (b < 18.5){
        return(`Your BMI is ${b},so you're underweight`)
    }
    else if(b>24.9){
        return(`Your BMI is ${b},so you're overweight`)
    }
    else{
        return(`Your BMI is ${b},so you're normal`)
    }
}
c=BMI(65,1.8);
console.log(c);   