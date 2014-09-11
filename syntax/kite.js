"required: ability to create unnamed variables and functions"

"variable with understood type"
a = 2;
"multiple variable with understood type"
a & b & c = 3.14;

"variable with explicitly specified type and default data"
a = int;
"multiple variables with explicitly specified type and default data"
a & b & c = float;

"variable with explicitly specified type"
a = int(2);
"multiple variables with explicitly specified type"
a & b & c = float(3.14);

"variable with modifiable type and default data"
a = var;
"multiple variables with modifiable type and default data"
a & b & c = var;

"variable with modifiable type"
a = var(2);
"multiple variables with modifiable type"
a & b & c = var(float(3.14));

"variable with bit type and default data"
a = bit(2);
"multiple variable with bit type and default data"
a & b & c = bit(4);

"variable with bit type"
a = bit(2, 0b11);
"multiple variable with bit type"
a & b & c = bit(4, 0b0101);

"constant variable with understood type"
a := 2;
"multiple variables with understood type"
a & b & c := 22/7;

"constant variable with explicitly specified type"
a := int(2);
"multiple variables with explicitly specified type"
a & b & c := float(22/7);

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
	price = var(float(3.14));
}

""


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

"exception handling is done through stack"
"keywords try, catch, finally, throws, throw"
"user defined exception"
"create a class that must extend exception class"
"provide at least one constructor (suggested string parameters)"
"throw ThrowableInstance"

"framework is a collection of libraries"
"those libraries are available in a compressed format called as JARs (java archive)"
"JAR contains set of .class files"
"collection interface is a root interface of the collection framework"
"add(), remove(), iterator()"
"list is a group of individual objects representing a single entity"
"index based retrieval elements"
"insertion order is preserved"
"allows duplicate values"
"null elements can also be added"
"add(index, obj), get(index), remove(index)"
"Random r = new Random()"
"r.readInt()"

"next sept 10 Wednesday 8:45 titus 7001"
"Collection(I)(1)-> List(I)(3)-> (1)-> Set(I)(2)-> HashSet (2)-> SortedSet(I)-> NavigableSet(I)"
"List(I) -> ArrayList, LinkedList, Vector"