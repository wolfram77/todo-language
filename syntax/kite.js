"Required Features"
"================="

"- unnamed values, structures, functions, and objects"
"- encapsulation, abstraction, data-hiding, inheritance, polymorphism"
"- continuation, type inference, referential transparency, pattern matching"
"- higher order polymorphism, abstract data type, generalized algebraic datatype"
"- minimal, simple, coherent syntax with bunch of built-in functions"
"- static typing, dynamic typing, higher order functions, closures, tuples"
"- general purpose, concurrent, garbage collected, functional, eager evaluation, single assignment"
"- distributed, fault tolerant, soft real-time, hot swapping, self modification, low level code"
"- flip-flop operator, function-pointer table, remote procedure call, true OO, flow-control"
"- simple io, named parameters, non-dangling else, lots of built-in datatypes, exception handling"


"comment (multi-line)"
"statements end with ;"

"single variable declaration"
a = 2;
"multi variable declaration"
a & b & c = 3.14;

"yay! i can access it form github"
"time to write some concepts into it"

"variable with understood type"
a = 2;
"variable with specified type and default value"
a = int;
"variable with specified type"
a = int(2);
"variable with specified type and uninitialized"
a = float(?);

"variable with modifiable type and default data"
a = var;
"variable with modifiable type"
a = var(2);

"variable with bit type and default data"
a = bit(2);
"variable with bit type"
a = bit(2, 0b11);

"constant variable with understood type"
a := 2;
"constant variable with specified type"
a := int(2);

"defining a structure"
a = {
	id = int;
	price = float;
}
"defining multiple structures"
a & b & c = {
	id = int;
	price = float;
}

"defining a structure with explicitly specified values"
a = {
	id = 2;
	price = float(3.14));
}
"defining multiple structures with explicitly specified values"
a & b & c = {
	id = int(2);
	price = var(float(3.14)-);
}

"writing if"
(a & b > 20) ? say('greater than 20'); : say('not ready');

"while"
{
	(a > 20) ? break;
}

"getting one value to multiple variables"
a = b = c = readKey();
"getting multiple values into multiple variables"
a & b & c = readKey();

"by value and by reference"



"if forgot to insert ; this acts as function"
func = (); {
}
func = () {
}

struct = {
	length = int(5);
	price = float(99.99);
}

struct['length'] = 6;

mylib := {
	+ operator() {}
}

myprog := {
	import 'mylib';
}

"let the only concept be that of encapsulation"

"polymorphism via functions"

"modifying a function from outside"

"flow control"

"access modifier"

"exception handling"

"deep encapsulation" {{ --- }}

"access block" {{ --- }}

this.import('display.console').say();

arr = {
	@0 = 'abc';
	@1 = 'def';
	@new = 'giving same name as new keyword';
};

"declaring a 3d array"
arr = array(int, 50, 50, 50);
arr2 = new(arr);

arr.0 = 1;
arr[0] = 1;
arr[0...end] = 0;
arr[0...1] = 0;
arr[0 & 1] = 0;

arr = {
	@'0' = 0;
	@'1' = 1;
	@'2' = 2;
}


for i = 0...9 {
}

"implement inheritance"

abc = {
	id = int;
	name = string;
}

def = new(abc);
def.+ = {
	weight = float;
}


"abstraction = showing only what is necessary"
"abstraction be different for different objects"
"car to driver, mechanic"
"considering only the necessary things"
"inheritance, data hiding"
"encapsulation = abstraction + data-hiding"
"polymorphism -> behaviour of object changes with situation"
"we behave differently to different people"

"this is a keyword which contains current object reference"
"call constructor of same class, from another constructor"
"call to this must be the first statement"
"differentiate instance variables with local variables"

"super is a keyword used to call base class const from sub class const"
"super() is the default statement will be added by the compiler by default for every constructor"
"super differentiate inherited variables and functions"

"abstract classes + methods"
"for an abstract class we cannot create an object"
"examples person, animal, drinkable items"
"abstract methods must be defined in derived class"
"DrinkableItem: drinkFlavour() -> Tea, Coffee, ColdDrink"

"interface is an abstract class with all methods abstract"
"no need to define public or abstract"
"dynamic type checking during type casting base class obj to derived class obj"

"final variables must be initialized before they are used"
"by default the variables in interface are public static and final"
"final variables cannot be reassigned"
"final methods cannot be overridden"
"final class cannot be inherited"
