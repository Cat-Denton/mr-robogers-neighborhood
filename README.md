# _Mr. Roboger's Neighborhood_

#### _Takes a numerical input from user and outputs a string with the range of numbers from 0 to the inputted number with some numbers being replaced by funny words._

#### By _**Cat Denton**_

## Technologies Used

* Javascript
* jquery-3.5.1
* HTML
* CSS/bootstrap

## Description

_This website takes a numerical input from that user. It will then display all of the integers from zero to the input (inclusive) with the following rules applied:_

1. Numbers that contain a "1" digit: all digits are replaced with _"Beep!"_

2. Numbers that contain a "2" digit: all digits are replaced with _"Boop!"_

3. Numbers that contain a "3" digit: all digits are replaced with _"Won't you be my neightbor?"_

## Tests

Describe: roboRoger();  
  
Test: "It should return the string "0" if the number "0" is inputted."    
Expect(roboRoger(0).toEqual("0"));  
  
Test: "It should return a string with all numbers that include numeral 1 replaced by "Beep!".  
Expect(roboRoger(1).toEqual("0 Beep!"))  
  
Test: "It should return a string with all numbers that include numeral 1 replaced by "Beep!" and all numbers that include numeral 2 replaced by "Boop!"."  
Expect(roboRoger(2).toEqual("0 Beep! Boop!"))  
  
Test: "It should return a string with all numbers that include numeral 1 replaced by "Beep!" all numbers that include the numeral 2 replaced by "Boop!" and all numbers that include numeral 3 replaced by "Won't you be my neighbor?"."  
Expect(roboRoger(3).toEqual("0 Beep! Boop! Won't you be my neighbor?"))  

Test: "It should return a string with rules as the previous test, but the rule for numeral 3 should have priority of numeral 2 which should have priority over numeral 1."  
Expect(roboRoger(13).toEqual("0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9 Beep! Beep! Boop! Won't you be my neighbor?"))  
  
## Setup/Installation Requirements

* _Clone to a local repository_
* _Open with a text editor to view the code_
* _Open index.html with a web browser to use the website_
* _https://cat-denton.github.io/mr-robogers-neighborhood/_

## Known Bugs

* _None yet_


## License

Copyright <2021> <Cat Denton>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



## Contact Information

_Cat Denton <willwdenton@gmail.com>_