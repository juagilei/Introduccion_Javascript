// Escribe tu código aquí:
class Person {
    constructor(name,age) {
        this.name = name
        this.age = age
    }
}
class Student extends Person {
    constructor(name,age,grade){
        super(name,age)
        this.grade = grade
    }
    introduce(){
        console.log('Hola me llamo '+this.name+', tengo '+this.age+' y estoy en el grado '+this.grade)
    }

}
const student = new Student ('Bob',19,2)
student.introduce()

