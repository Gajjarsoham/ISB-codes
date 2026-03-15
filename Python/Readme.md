<!-- Date : 9-2-2026 -->

<!-- Inner working of python -->
1. Compile to Byte code:
    -low level & platform independent
->byte code run faster
.pyc => compiled python (frozen binaries)
__pycache__

-source Change & python Version
    hello.cpython-313.pyc

->Works only for imported files
->not for top level files

-> Python Virtual Machine
-code loop to iterate byte code
-Run time engine
-Also known as pyhton interpreter

Byte code is not machine code 
-Python specific interpretation
Cpython, jython, Iron python, Stackless, PyPy
-Cpython is standard implementattion

<!-- Mutable Vs Immutable -->
-inner working of both

Ex: username = "Soham"
    username = "Code"
when we assign some value to variable it create a reference in memory and that variable point to that value
-and then when we assign second value to variable it cant change the first value it's just create a second memory reference and the variable is now point that new value
-and in python there are garbage collection so it delete the unused first value


<!-- Immutable Objects
An object whose state or value cannot be changed after it is created. -->
<!-- Step-by-step memory working: -->
Step 1
name = "Soham"

Memory:
name ─────► "Soham"

Python:
Creates a string object "Soham"
name stores a reference to it

Step 2
name = "Code"

Memory:
name ─────► "Code"
"Soham"  (no reference)

What happened internally:
Python creates a new string object "Code".
The variable name now points to the new object.
"Soham" becomes unreferenced.
Garbage collector removes it later.

<!-- Important Rule for Immutable Objects
Any change creates a new object. -->

<!-- Mutable Objects -->
An object whose content can be changed after it is created.

Example: List (Mutable)
numbers = [1, 2, 3]
numbers.append(4)

Step-by-step memory working
Step 1
numbers = [1, 2, 3]

Memory:
numbers ─────► [1, 2, 3]

Python:
Creates a list object
numbers points to it

Step 2
numbers.append(4)

Memory:
numbers ─────► [1, 2, 3, 4]

What happened:
Python did not create a new list.
It modified the existing list object in memory.
That is why lists are called mutable.


| Feature                      | Mutable         | Immutable       |
| ---------------------------- | --------------- | --------------- |
| Can change after creation    | Yes             | No              |
| New object created on change | No              | Yes             |
| Memory efficiency            | Lower           | Higher          |
| Safe for shared references   | No              | Yes             |
| Examples                     | list, dict, set | int, str, tuple |


<!-- Object Types / Data Types -->
1.Numbers: 1234, 3.1321, 3+4j, 0b111, Decimal(), Fraction()
2.String: "Hello", 'World', """Multiline String""", b'a\x01c'
3.List: [1, 2, 3], ['a', 'b', 'c'], [1, 'a', 3.14]
4.Tuple: (1, 2, 3), ('a', 'b', 'c'), (1, 'a', 3.14)
5.Set: {1, 2, 3}, {'a', 'b', 'c'}, {1, 'a', 3.14}
6.Dictionary: {'name': 'Alice', 'age': 30}, {1: 'one', 2: 'two'}
7.Boolean: True, False
8.NoneType: None
9.Bytes: b'Hello', b'\x01\x02\x03'
10.Bytearray: bytearray(b'Hello'), bytearray(b'\x01\x02\x03')

<!-- # Memory referencing //
# Example 1
# listOne = [1, 2, 3]
# listTwo = listOne
# listOne = "chai" // here the reference of listOne is change and the connection between listOne and listTwo is broken
# listOne = [1, 2, 3]
# listOne[0] = 33
# print(listOne) // [33, 2, 3]
# print(listTwo) // [1, 2, 3]

# Example 2
# l1 = [1, 2, 3]
# l2 = l1
# l1[0] = 44
# print(l1) // [44, 2, 3]
# print(l2) // [44, 2, 3]

# Example 3
# h1 = [1, 2, 3]
# h2 = h1[:] // copy the reference of h1
# h1[0] = 33
# print(h1)
# print(h2)
