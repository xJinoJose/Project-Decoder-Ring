# Project-Decoder-Ring

## Jino's Decoder Ring Project for Thinkful

### Passed all of the following tests given by Thinkful:
1. caesar() submission tests written by Thinkful                 
- error handling                                              
      √ should return false if the shift amount is 0            
      √ should return false if the shift amount is above 25     
      √ should return false if the shift amount is less than -25
- encoding a message                                          
      √ should encode a message by shifting the letters         
      √ should leaves spaces and other symbols as is
      √ should ignore capital letters
      √ should appropriately handle letters at the end of the alphabet
      √ should allow for a negative shift that will shift to the left
- decoding a message
      √ should decode a message by shifting the letters in the opposite direction
      √ should leaves spaces and other symbols as is
      √ should ignore capital letters
      √ should appropriately handle letters at the end of the alphabet
      √ should allow for a negative shift that will shift to the left

1. polybius() submission tests written by Thinkful
- encoding a message
      √ should encode a message by translating each letter to number pairs
      √ should translate both 'i' and 'j' to 42
      √ should leave spaces as is
- decoding a message
      √ should decode a message by translating each pair of numbers into a letter
      √ should translate 42 to both 'i' and 'j'
      √ should leave spaces as is
      √ should return false if the length of all numbers is odd

1. substitution() submission tests written by Thinkful
- error handling
      √ should return false if the substitution alphabet is missing
      √ should return false if the substitution alphabet is not exactly 26 characters
      √ should return false if the substitution alphabet does not contain unique characters
- encoding a message
      √ should encode a message by using the given substitution alphabet
      √ should work with any kind of key with unique characters
      √ should preserve spaces
- decoding a message
      √ should decode a message by using the given substitution alphabet
      
### Created and passed all of the following tests as requirement:

1. Caesar Tests by Jino
- correctly encoding inputs
      √ should return the correct ecrypted value
      √ should ignore uppercase letters when encoding
      √ should ignore spaces when encoding
- correctly decoding inputs
      √ should return the correct decrypted value
      √ should ignore uppercase letters when decoding
      √ should ignore spaces when decoding
- valid input
      √ should return false if shift is 0
      √ should return false if shift is less than -26
      √ should return flase if shift is greater than 25

1. Polybius Tests by Jino
- correctly encoding inputs
      √ should return the correct encrypted value
      √ should ignore spaces
      √ should return the correct value for i or j
- correctly decoding inputs
      √ should return the correct decrypted value
      √ should ignore spaces
      √ should return the correct value for i or j

1. Substitution Tests by Jino
- correctly encoding results
      √ should return the correct encrypted value
      √ should ignore space when encoding
      √ should ignore uppercase when encoding
      √ should work with special characters when encoding
- correctly decoding results
      √ should return the correct decrypted value
      √ should ignore space when decoding
      √ should ignore uppercase when decoding
      √ should work with special characters when decoding
- valid input
      √ should return false if alphabet is not 26
      √ should return false if alphabet contain a similar character
