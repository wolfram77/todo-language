"required: ability to create unnamed variables and functions"

"var is a fundamental data-type defaults to int(0)"
a, b, c = var;

"a is now int"
a = 2;
"a is now double"
a = 3.14;

"4 bit datatype"
a, b, c = bit(4);

"4-bit datatype with initial value"
a, b, c = bit(4, 0b1000);

"constant declaration"
pi := 22/7;


int a, b, c; "note here that int is a data-type and hence must follow data declaration syntax"
a .= int;    // a initialized to 0
a .= int(10);
a & b = int(10);
a, b = int(10);
a = 10;

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
"enacpsulation = abstraction + data-hiding"
"polymorphism -> behaviour of object changes with situation"
"we behave differently to different people"

"this is a keyword which contains current object reference"
"call contructor of same class, from another constructor"
"call to this must be the first statement"
"differentiate instance variables with local variables"

"super is a keyword used to call base class const from sub class const"
"super() is the default statement will be added by the compiler by default for every constructor"
"super differentiate inherited variables and functions"




