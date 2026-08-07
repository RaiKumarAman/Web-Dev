class OT{
    food(){
        return "Food is provided";
    }

    commute(){
        return "Transport is provided";
    }
}

class OTDAM extends OT{
    work(){
        return "Manages Digital Assests";
    }
}

let otdam1=new OTDAM();
console.log(otdam1.food());
console.log(otdam1.work());