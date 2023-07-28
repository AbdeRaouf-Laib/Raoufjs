// let Vname , const Vname , var Vname, Vname;
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
// string: "",'',``;
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
// the ternary operator:
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
        //function 