
class human{
    //to access object use this keyword
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
        console.log("I am walking ");
    }
}


//creating object using new keyword
let obj1= new human();
console.log(obj1.age);
obj1.breath();
console.log(obj1.fetch_weight);


//constructor
class car{
    model= "Hyundai";
    speed= 120;

  constructor(new_model,new_speed)
    {
        this.model=new_model;
        this.speed=new_speed;
    }
}

//creating object
let car1= new car("tata",100);
console.log(car1);

/* default paramters: default values are set to
the paramters if not passed when obj created*/

function say_name(name="Janvi")
{
    console.log(name);
    //Janvi if no value passed else the valus itself
}

say_name();

//an array can be passed as a parameter//
function array_function(arr=["Janvi",21,null])
{
    console.log(arr);
}
array_function();
array_function(undefined);
array_function(null);

//if null passed as parameter when obj created
//and also a default value set other than null it will
//take null
//when undefined value set it will take default value set

function uppercase(value)
{
    console.log(value.toUpperCase());
}
uppercase("janvi");