
     function palindrome(){
       let text = document.querySelector( 'input').value;
       //remove special characters, spaces and make lowercase
       let removeChar = text.replace(/[^A-Z0-9]/ig, "").toLowerCase();
       //reverse removeChar for comparison
       let reversedChar = removeChar.split( '').reverse().join( '');
       //Check to see if the removed special characters word and the reverse word are the same
       if(removeChar === reversedChar){
         //
         document.querySelector("p").innerHTML = `${text} is palindrome`
        }else{
          //
          document.querySelector("p").textContent = `${text} is not palindrome`
        }//end of conditional
      } //closes palindrome function
      // palindrome("Oh who was it I saw, oh who?");
      // palindrome("Madam");
    // palindrome("2,3,4,3,2");
      //    palindrome("7,10,7,8,9");
      document.querySelector( 'form').addEventListener( 'submit', palindrome);
    console.log(palindrome);