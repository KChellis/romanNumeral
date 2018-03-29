# _Roman Numeral Converter_

#### _Page that converts between decimal and roman numerals_

#### By _**Kristen Chellis and Nick Kardish**_

## Description

_This page can take input as either a roman numeral and convert to a decimal number, or a decimal number and convert to a roman numeral._

## Specs
convert to roman numerals
-convert 1-3
  example input: 1
  example output: I
-convert 4
  example input: 4
  example output: IV
-convert 5
  example input: 5
  example output: V
-convert 6-8
  example input: 6
  example output: VI
-convert 9
  example input: 9
  example output: IX
-convert 10
  example input: 10
  example output: X
-convert 50
  example input: 50
  example output: L
-convert numbers under 89
  example input: 56
  example output: LVI
-convert numbers under 399
  example input: 106
  example output: CVI
-convert numbers under 899
  example input: 506
  example output: DVI
-convert numbers over 1000 but under 3,999
  example input: 1006
  example output: MVI
  -convert numbers that will need special ordering
    example input: 9
    example output: IX
convert roman numerals to decimal
-convert I
  example input: I
  example output: 1
-convert V
  example input: V
  example output: 5
-convert X
  example input: X
  example output: 10
-convert L
  example input: L
  example output: 50
-convert C    
  example input: C
  example output: 100
-convert D
  example input: D
  example output: 500
-convert M
  example input: M
  example output: 1000
-convert numeral with multiple letters(no special cases)
  example input: MMCC
  example output:2200
-convert IV
  example input: IV
  example output: 4  
-convert IX
  example input: IX
  example output: 9
-convert other special cases
  example input: XL
  example output: 40      

## Setup/Installation Requirements

* _Clone this repository to your computer_
* _Open index.html in browser_


## Known Bugs

_A user could input a numeral that is not actually a roman numeral, however, if an actual roman numeral is entered it will convert correctly_

## Support and contact details

_If you have any questions comments or concerns contact Kristen at peanutster@gmail.com or Nick at kardish515@gmail.com_

## Technologies Used

_HTML, CSS, JavaScript, jQuery, and Bootstrap_

### License

*This page is licensed under the MIT license*

Copyright (c) 2018 **_Kristen Chellis and Nick Kardish_**
