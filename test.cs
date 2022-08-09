using System;

  class Solution {
    public bool solution(string S) {
      Console.Write("Enter a string: [a/b]: ");
      string userInput = Console.ReadLine();
      int stringLength = userInput.Length - 1;
      int i = 0;
      int start = 1;
      
      int x = 1, y = 0;
    
      while(stringLength >= 0) {
          if(userInput[i] == 'a') {
              x = 0;
              i += 1;
              stringLength -= 1;
              
              if(x == 0 && y == 1) {
                  start = 0;
                  break;
              }
          } else if (userInput[i] == 'b') {
              y = 1;
              i += 1;
              stringLength -= 1;
          }
      }
      
      if(start == 0) {
        Console.Write("False");
      } else {
        Console.Write("True");       
      }
    }
  }
 