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
                values = name of function();name of function()
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
        //he using this:
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
                //he cannot be using this keyworld;
    //he can a called a 2nd function with a 1st futction;
//arrays
    //for using arrays we must do this for 2 type:
        //type one (letteral methode):
            //define values(function name) = [element0,element1,element2,...];
            //example:
                const arr1 = [1,2,4];
        //type tow (function defind in js):
            //define values(function name) = new Array(element0,element1,element2,...);
            //example:
                const arr2 = new Array("abderaouf","laib");
            //for print this array use this:
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
                 
















                