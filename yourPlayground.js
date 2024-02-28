/// let Vname , const Vname , var Vname, Vname;
    let food = "banana";
    let prix = 20;
    const persent = 0.2;
    //Programmers do not support it
        var stringHello = 'Hello, World!';
        age = 18;
// type of value: number ,string ,boolean, object, Bigint, Undefined, Null, Symbol;   
    // Numbers:
        let length = 16;
        let weight = 7.5;
    // Strings:
        let color = "Yellow";
        let lastName = "Johnson";
        //To show the length of this string we can use: .length methonde:
            //example:
                let stringlng = lastName.length
    // Booleans
        let x = true;
        let y = false;
    // Object:
    
        const person = {firstName:"John", lastName:"Doe"};
    // bigint
        let xb = BigInt("123456789012345678901234567890");
/* operators:
    -Arithmetic Operator: ' + ',' * ',' - ',' / ',' % ',' ** ',' ++ ',' -- ';
    -Assignment Operator: ' = ',' += ',' -= ',' *= ',' /= ',' %= ',' **= '
    -Comparison Operator: ' == ',' === ',' != ',' !== ',' < ',' > ',' <= ',' >= ',' ? ', -Comp string
    -String Operator: ' + ',' += '; 
    -Logical Operator: ' && ',' || ',' ! ';
    -Bitwise Operator:
            | Operator |  Description	            |   Example	    |        Same as	  |    Result    |    Decimal    |
            |    &	   |     AND	                |    5 & 1	    |      0101 & 0001	  |     0001	 |       1       |
            |    |	   |      OR	                |    5 | 1	    |      0101 | 0001	  |     0101	 |       5       |
            |    ~	   |     NOT	                |      ~5	    |         ~0101	      |     1010	 |       10      |
            |    ^	   |     XOR	                |    5 ^ 1	    |      0101 ^ 0001	  |     0100	 |       4       |
            |    <<	   |  left shift                |    5 << 1	    |      0101 << 1	  |     1010	 |       10      |
            |    >>	   |  right shift	            |    5 >> 1	    |      0101 >> 1	  |     0010	 |       2       |
            |    >>>   |  unsigned right shift	    |    5 >>> 1    |      0101 >>> 1	  |     0010	 |       2       |
*/
        a = 20;
        b *= 21;
        c = a % b;
        d = (c ** a) %= b;
        if(d >= (a ** b) || a !== b - c){
            a = b = "No!!";
        }
//string: "",'',``;
        // "" or '' for add values add ' + ';
        // `` for add values add ${valiues};
        //exmple:
            x = "laib";
            s = 'abderaouf';
            xx = "Hay" + x;
            b = `laib ${x}`;
//swich case condition:
    // for use swiche case condition:
        /*switch(...values){
            case ...compration values:
                ...code...;
                ...code...;
                break; //is important
            case ...compration values:
                ...code...;
                ...code...;
                break;
            ...
            default:                
                ...code...;
                break;
        }*/    
    //example
        const day = "thursday";
        switch(day){
            case "wednesday":
                console.log("hhh this day is wednesday");
                break;
            case "monday":
                console.log("this is day is monday");
                break;
            default:
                console.log("this day is thursday");
                break;
        }
//Statements and Expressions values:
    //Expressions is any code to offer a values
        //exmaple:
            3 + 4;
            1991;
            const newVar = "raouf"
    //Statements is any code to not offer a values
        //example:
            if(5 == 2){
                console.log("5 == 2");
            }
    /*in ${} we must use the expressions;*/
//the ternary operator:
    //is a Expressions conditional and we use for work if and else conditions
    //for using this condition:
        /*...values...//Comparison Operator\\ ...comparison values... ? ...code... : ...else code...*/
        //example:
            const xxz = 50;
            50 == 10? console.log("laib") : console.log("raouf");   
    //We can add this condition in console.log() and ...; 
// Activating strict mode:
    //for activate a strict mode we use "use strict" in a biggining of code
    //strict mode can spot errors
// Fonction:
    //This is a block of code for use in your code later
    //To use we can declare a function and to call it we write the name of the function
    //for declar the function we must use:
        /* function ...name of function(){
            ...code...;
        }*/
    //example:
        function logger(){
            console.log("laib");
        }
    //for call it:
        // logger();
    //example:
        logger();
    //The function can receive and give the parameter
        /*function name of funtion(parameter){
            ...code...;
        }
        logger(paramter);
        */
    //example:
        function logger(x){
            console.log(x);
        }
        logger("laib");
    //there are 2type of function:
        //function:
            //it is a returnable function;
            /* 
                function name of function(){
                    ...code...;
                    return values; 
                }
                values = name of function();
            */
        //Procedure:
            //It is a non-returnable function;
            //already mentioned;
    //there are 2 type of function declaration:
        //type one:
            //he called a declaration function,already mentioned;
            //the advantage:
                //The declaration function can be called it before declaring;
                //he can be using this keyworld;
                //example:
                    ci();
                    function ci(){
                        console.log("yes");
                    }
            
        //type two:
            //The second declaration is a value declaration and the definition of the function in it,and he called a exprtion function;
                /*define Value = function(){
                    ...code...
                }*/
            //exmple: 
                let fu = function(){
                    console.log("hau");
                }
                fu();
            //the advantage:
                //The exprtion function cannot be callde before a declaration;
                //he can be using this keyworld;
    //there a 2nd type of function,he called arrow funtion,is a expretion function:
        //we must using this:
            /* 
            for a multiple ligne of code:
                define Values = argements =>
                {
                    ...code...
                    ...code...
                    returne;
                } 
            
            for a one ligne of code:
                define Values = argements => ...codereturn...;
            for a multiple of a argemant:
              define Values = (1st argements,2nd argements) => ...codereturn...;  
            */              
            //the advantage:
                //he cannot be using "this" keyworld;
    //we can a called a 2nd function with a 1st futction;
//arrays
    //to using arrays we must do this for 2 type:
        //type one (letteral methode):
            //define values(function name) = [element0,element1,element2,...];
            //example:
                const arr1 = [1,2,4];
        //type tow (function defind in js):
            //define values(function name) = new Array(element0,element1,element2,...);
            //example:
                const arr2 = new Array("abderaouf","laib");
            //To print this array use this:
                //console.log((name function));
                //example:
                    console.log(arr1);
                    //we can a print the only one values of array
                        console.log(arr[0]); 
            //to find out the number of elements,we can use a function defind in js:
                //name of function.length;
                //example:
                    let Learr2= arr2.length;
            //in array we can use multi type:
                //example:
                    arr3 = [21,"hay",[10,'a',"laib"]];
                //the number of elements in this array is 3
                //the inner array counts one element;
                //in array we can chenge the elements and we if did defind array const;                
                //we cannot reassagenemt the array
            //To add values at the end of the array and the length of the array:
                //name of function.push(values);
                //example:
                    arr1.push(2);
            //for adding a values at beginning of array and length the array:
                //name of function.unshift(values);
                //example:
                    arr2.unshift("laibn");
            //for removing end element of array and display it:
                //name of function.pop();                  
                //example:
                    arr3.pop();
            //for removing the beginning element of array and display it:
                //name of function.shift();
                //example:
                    arr1.shift();
            //to find out the index of elements or the existe of elmentes:
                //name of array.indexOf(elements);
                    //example:
                        arr1.indexOf(1);
            //to find out the exist of element at array(true or false)):
                //name of array.includes();
                    //example:
                        arr2.includes();
            //to find out the end index of element at array:
                //name of array.lastindexOf(element);
                    //the difference between indexOf and lastindexOf is displaying the element;
                    //example:
                        arr2.lastIndexOf(2)
            //to sorting the array:
                //name of array.sort();
                    //example:
                        arr1.sort();
                //But sorting the array is by counting the first letters;
                    //example:
                        //arr5 = [1,2,12,5,14,55];
                        //the sorting of this array is:
                            //arr5 = [1,12,14,2,5,55];
                        //arr6 = ["laib","abderaouf","lain","ace"];
                        //the sorting of this array is:
                            //arr6 = ["abderaouf","ace","laib","lain"];
            //to reve 
            let arr6 = ["laib","abderaouf","lain","ace","raouf"];
            console.log(arr6.reverse());
//string:
    //Methode:
        //string Methode
            //.length To show how many letter on string
            //.charAt() To show a spicefed character on string
            //.chatCodeAt() To show code of spicefied character on string
            //.at(2) Get the third letter of name
            //.text.slice(7, 13) to extracting a part of a string
            //.substring() is similar to slice
            //.substr() is similar to slice
            //.toUpperCase() to convert the char of string into upper case
            //.toLowerCase() to convert the char of string into Lower case
            //.concat() to concat tow string
            //.trim() to remove spaces in the bigging and in the ending of string
            //.trimStart() remove space only in the bigging of the string 
            //.trimEnd() remove space only in the ending of the string 
            //.padStart(par1,par2) par1 of how many add par2, par2 the sting should be add in the start
            //.padEnd(par1,par2) par1 of how many add par2, par2 the sting should be add in the start
            //.repeat(par1) to repeat the string 
            //.replace() to replace between tow string
                // /.../i we must add this if the sting in not same in the of char
                // /.../g To replace all matches, use a regular expression
            //.replaceAll() The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
            //.split() to convert string into an array
        //string search()
            //.indexOf(par1 ,par2) to show index of this string 
            //.lastIndexOf(par1 ,par2(is the starting index to search)) to show the last index of string is gives
            //.match(par1) how much par1 in the string
            //.matchAll() this method returns an iterator containing the results of matching a string against a string
            //.includes() this method returns true if a string contains a specified value.
            //.startsWith() this method returns true if a string begins with a specified value.
            //.endsWith() The endsWith() method returns true if a string ends with a specified value.
//Array:
    //.puch() to add an element into array
    //.length to show the number of element 
    // new Array() is a Keys words to create Array
    //.isArray to definding a object from Array
    //.toString to covert an Array into string 
    //.at(index) get the element of index in Array is same as []
    //.join(arg) convert an Array into string and adding arg between the element of Array
    //.pop() remove the last elements of Array
    //.shift() remove the first element in Array and shift all other elements to a lower index
    //.unshift() adds a new elements to an Array at the beginning and unshift older elements to upper index
    //Array1.concat(Array2) concat Array1 with Array2 /* we can concat tree array and with one value*/
    //.copyWithin(index1,index2,...) copy element of index1 to index2 and ...
    //.flat()  method creates a new array with sub-array elements concatenated to a specified depth.
    //The splice(index, numOfElemWeCanDelet, element) method adds new items to an array.
    //The slice() method slices out a piece of an array.
    //.sort sorting Array 
    //.reverse() revres sorting Array
    //.toSorted() sorted the array without creating new one
    //.toReversed() revers the array without creating new one 
    //.sort(function(a, b){return b - a}) sorting num Array
        //function(a, b){return a - b} this function is return 0 or possitive or negative number 
    //.sort(function(){return 0.5 - Math.random()}) Sorting an Array in Random Order
    //The Fisher Yates Method:
        /* const points = [40, 100, 1, 5, 25, 10];
            for (let i = points.length -1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i+1));
            let k = points[i];
            points[i] = points[j];
            points[j] = k;
            }
        */
    //You can use Math.min.apply to find the lowest number in an array:
    //You can use Math.max.apply to find the highest number in an array:
    /*Array forEach
        Array map()
        Array flatMap()
        Array filter()
        Array reduce()
        Array reduceRight()

        Basic Array Methods
        Array Search Methods
        Array Sort Methods
//Date:
    /*
    Creating Date Objects
        Date objects are created with the new Date() constructor.

        There are 9 ways to create a new date object:

        new Date()
        new Date(date string)

        new Date(year,month)
        new Date(year,month,day)
        new Date(year,month,day,hours)
        new Date(year,month,day,hours,minutes)
        new Date(year,month,day,hours,minutes,seconds)
        new Date(year,month,day,hours,minutes,seconds,ms)

        new Date(milliseconds)
    */
    //Date.parse() method to convert it to milliseconds.

    /*
    Method	                Description

    getFullYear()	        Get year as a four digit number (yyyy)
    getMonth()	            Get month as a number (0-11)
    getDate()	            Get day as a number (1-31)
    getDay()	            Get weekday as a number (0-6)
    getHours()              Get hour (0-23)
    getMinutes()	        Get minute (0-59)
    getSeconds()	        Get second (0-59)
    getMilliseconds()	    Get millisecond (0-999)
    getTime()	            Get time (milliseconds since January 1, 1970)*/
//The if else statements:
    /*
    if (time < 10) {
      greeting = "Good morning";
    } else if (time < 20) {
      greeting = "Good day";
    } else {
      greeting = "Good evening";
    }*/
//loop in JS:
    // for;
    // for in;
    // for of;
    // while;
    // do while;

//The sets in JS:
/*
    Method	        Description

    new Set()	    Creates a new Set
    add()	        Adds a new element to the Set
    delete()	    Removes an element from a Set
    has()	        Returns true if a value exists in the Set
    forEach()	    Invokes a callback for each element in the Set
    values()	    Returns an iterator with all the values in a Set
    Property	    Description
    size	        Returns the number of elements in a Set
*/

//The maps in JS:
/*
    Method	        Description

    new Map()	    Creates a new Map
    set()	        Sets the value for a key in a Map
    get()	        Gets the value for a key in a Map
    delete()	    Removes a Map element specified by the key
    has()       	Returns true if a key exists in a Map
    forEach()	    Calls a function for each key/value pair in a Map
    entries()	    Returns an iterator with the [key, value] pairs in a Map
    Property	    Description
    size	        Returns the number of elements in a Map
*/

//ERROR in JS:
/*
    The try statement defines a code block to run (to try).

    The catch statement defines a code block to handle any error.

    The finally statement defines a code block to run regardless of the result.

    The throw statement defines a custom error.
*/