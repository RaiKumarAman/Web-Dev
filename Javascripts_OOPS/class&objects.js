class Student{
    constructor(name, branch, marks){
        this.name=name;
        this.branch=branch;
        this.marks=marks;

    }

    display(){
        return `${this.name} of ${this.branch} branch has secured ${this.marks}% in B.Tech`;

    }
}

let student1= new Student("Aman Kumar Rai", "Computer Engineering", "83.1");
console.log(student1.display());