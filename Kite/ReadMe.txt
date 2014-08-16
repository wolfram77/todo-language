Making a Language
-----------------

I need a low-level [access] and yet a high level [construct] programming language.
Hence, the programming language would be a mid-level programming language.

When we talk about computers, there is fast access to slow access memory
The number of levels might change in the future, code should be good enough to work great on it as well.
Registers | Cache | RAM | IO Devices

Its all about operating on data, and its transfer from A to B.

There exist separate register names for each architecture.
Often, each register has its own unique functionality.

#include <iostream>
#include <complex>
using std::complex;
 
void complex_operations() {
  complex<double> a(1.0, 1.0);
  complex<double> b(3.14159, 1.25);
 
  // addition
  std::cout << a + b << std::endl;
  // multiplication
  std::cout << a * b << std::endl;
  // inversion
  std::cout << 1.0 / a << std::endl;
  // negation
  std::cout << -a << std::endl;
  // conjugate
  std::cout << std::conj(a) << std::endl;
}

[complex] {
	a = 1 + 1i
	b = pi + 5/2i
	show 'Hello World!!'
}
