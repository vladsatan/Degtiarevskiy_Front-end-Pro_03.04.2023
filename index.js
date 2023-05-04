class Students {

    attendanceArray = new Array(25);
    constructor(name, surname, age, estimates) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.estimates = estimates;
    }

    getAge(){
        return this.age
    }

    GPA(){
        let gpa = 0;
        this.estimates.forEach(e=>{
            gpa += e
        })
        return gpa/this.estimates.length
    }

    present(){
       for (let i = 0; i < this.attendanceArray.length; i++){
           if(typeof this.attendanceArray[i] === 'undefined'){
               this.attendanceArray[i] = true
               break;
           }
       }
       return this.attendanceArray
    }

    absent(){
        for (let i = 0; i < this.attendanceArray.length; i++){
            if(typeof this.attendanceArray[i] === 'undefined'){
                this.attendanceArray[i] = false
                break;
            }
        }
        return this.attendanceArray
    }

    summary() {

        let gpa = this.GPA();
        let attendedClasses = 0;
        let numberOfClasses = 0;
        this.attendanceArray.forEach(e => {
            if (e === true) {
                attendedClasses++
            }
            if(typeof e !== 'undefined'){
                numberOfClasses++
            }
        })

        let attended_K = attendedClasses/numberOfClasses

        if(gpa > 90 && attended_K > 0.9){
            return 'Молодець!'
        } else if (gpa > 90 || attended_K > 0.9){
            return  "Добре, але можна краще..."
        } else {
            return "Редиска!"
        }
    }


}

const Vlad = new Students('Vlad', 'Degtiarevskiy', 20, [100,90,100]);
const Igor = new Students('Igor', 'Stifutin', 25, [70,70,100]);
const David = new Students('David', 'Nebeeridze', 28, [100,50,60])

console.log(Vlad.getAge(),Igor.getAge(),David.getAge())

Vlad.present()
Vlad.present()
Vlad.present()

Igor.present()
Igor.present()
Igor.present()

David.present()
David.present()
David.absent()

console.log(Vlad)
console.log(Vlad.summary())

console.log(Igor)
console.log(Igor.summary())

console.log(David)
console.log(David.summary())
