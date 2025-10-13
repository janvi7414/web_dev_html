
class human{
    //properties
    age=10;//public scoped
    #weight=50;//private scoped

    //to access private outside the class use getter and setter//
    get fetch_weight()
    {
        return this.#weight;
    }
    set update_weight(value)
    {
        this.#weight=value;
    }

    //behaviour
    breath()
    {
        console.log("I am brething");
    }
    walk()
    {
        console.log("I am walking ",this.#weight);
    }
}


//creating object using new keyword
let obj1= new human();
console.log(obj1.age);
obj1.breath();
console.log(obj1.walk());
