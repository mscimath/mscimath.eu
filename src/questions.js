const js_theory =  [
            {
                question: "What does SCSS stand for?",
                answers: [
                    { text: "Smart Cascading Style Sheets", correctness: false},
                    { text: "Sassy Colorful Smart Sheets", correctness: false},
                    { text: "Sassy Cascading Style Sheets", correctness: true},
                    { text: "Sleek Creative Smart Sheets", correctness: false},
                ], 
                key: 1,
            },
            {
                question: "What will the following code produce: var a = 7*4; var b = a % 7; var c = a - b; document.writeln(c -= 6) ?",
                answers: [
                    { text: 18, correctness: false},
                    { text: "Nothing", correctness: false},
                    { text: "Error", correctness: false},
                    { text: "22", correctness: true},
                ],
                key: 2,
            },
            {
                question: "What will this code produce: var str = 'JavaScript is great!'; document.write('<br>' + ((str.length - 10)*5 + 10) + '<br>'); ?",
                answers: [
                    { text: "60", correctness: false},
                    { text: "60 surrounded by newlines.", correctness: false},
                    { text: "'60' surrounded by newlines.", correctness: true},
                    { text: "<br> 60 <br>", correctness: false},
                ],
                key: 3,
            },
            {
                question: "What is React.StrictMode?",
                answers: [
                    { text: "Does not allow for the use of double equal sign (==).", correctness: false},
                    { text: "Highlights potential defects of the application after activating additional checks.", correctness: true},
                    { text: "It renders a Strict Component.", correctness: false},
                ],
                key: 4,
            },
            {
                question: "How to create an object using the Object constructor?",
                answers: [
                    { text: "function Character() {} Character.prototype.surname = 'Sponge'; var characterInstance = new Character();", correctness: false},
                    { text: "var Character = {name: 'Bob', surname: 'Sponge'}",  correctness: false},
                    { text: "var objectInstance = Object.create(null);", correctness: false},
                    { text: "var objectInstance = new Object();", correctness: true}, 
                    { text: "function Character(name) {this.name = name; this.surname = 'Sponge'} var characterInstance = new Character('Bobina');", correctness: false },           
                ],
                key: 5,
            },
            {
                question: "What is useReducer hook used for in React?",
                answers: [
                    { text: "Smart Cascading Style Sheets", correctness: false},
                    { text: "Sassy Colorful Smart Sheets", correctness: false},
                    { text: "Sassy Cascading Style Sheets", correctness: true},
                    { text: "Sleek Creative Smart Sheets", correctness: false},
                ],
                key: 6,

            },
            {
                question: "What are 'reference values' in JavaScript?",
                answers: [
                    { text: "Smart Cascading Style Sheets", correctness: false},
                    { text: "Sassy Colorful Smart Sheets", correctness: false},
                    { text: "Sassy Cascading Style Sheets", correctness: true},
                    { text: "Sleek Creative Smart Sheets", correctness: false},
                ],
                key: 7,          
            },
          ]

const js = [
    { questionLines: [
        {line: "Which of the following statements reads a number entered from the keyboard and stores it in an int variable x?"},
           ],
            answers : [ {text: "input x", correctness: false},
                              {text: "x = int(input())", correctness: true},
                              {text: "get_integer(&x)", correctness: false},
                              {text: "read(x)", correctness : false},
             ],
                            key: 1,
    },
    { questionLines: [ 
              {line: "The purpose of the following (fragment) program is to calculate the sum of natural numbers from 1 to n:"},
              {line: "sum = 0"}, 
              {line: "for i in range(1, n+1):"},
              {line: "	  ???"},
              {line: "What should be put in place of the question marks for the program to fulfill its assumptions?"},
        ],
      answers : [ {text: "sum += 1 ", correctness: false},
                        {text: "sum = i", correctness: false},
                        {text: "sum += i", correctness: true},
                        {text: "sum = sum + 1", correctness : false},
                {text: "sum + i", correctness: false},
               ],
                      key: 2,
    },
             { questionLines: [ 
                    {line: "The purpose of the following (fragment) program is to calculate the number of ‘a’ letters in the word S:"},
                    {line: "how_many_a = 0"},
                    {line: "for i in range(len(S)):"},
                    {line: "	  if ???:"},
                    {line: "      how_many_a += 1"},
                    {line: "What should be put in place of the question marks for the program to fulfill its assumptions?"},
            ],
            answers : [ {text: "S == ‘a’", correctness: false},
                              {text: "S[i] == ‘a’", correctness: true},
                              {text: "i == ‘a’", correctness: false},
                              {text: "S[i] = ‘a’", correctness : false},
                     ],
                            key: 3,
          },
          { questionLines: [
                    {line: "The purpose of the following (fragment) program is to find the largest number in a five-element array:"},
                    {line: "maximum = 0"},
                    {line: "for i in range(5):"},
                    {line: "    if tab[i] > maximum:"},
                    {line: "        maximum = tab[i]"},
                    {line: "print(maximum)"},
                    {line: "For what data will the printed answer not be correct?"},
        ],
            answers : [ {text: "tab =  [14, 0, 5, 6, -2]", correctness: false},
                              {text: "tab = [0, -3, -2, 0, -5]", correctness: false},
                              {text: "tab = [7, -1, 9, -23, 1]", correctness: false},
                              {text: "tab = [3, 5, 1, 9, 2]", correctness : false},
                              {text: "tab = [-5, -4, -9, -8, -3]", correctness : true},
                     ],
                            key: 4,
                    solution: "The error is an invalid initial value for the maximum variable. If all numbers are less than 0, this variable will remain 0. An example fix could be to make the starting value smaller or even set it to the first element of the tab array.",
          },
        
]

const py = [
    {
        questionText: "Which of the following statements reads a number entered from the keyboard and stores it in an int variable x?",
        questionLines: [
            {line: ""},
        ],
        answers : [ 
            {text: "input x", correctness: false},
            {text: "x = int(input())", correctness: true},
            {text: "get_integer(&x)", correctness: false},
            {text: "read(x)", correctness : false},
        ],
        solution: "",
        key: 1,
    },
    { 
        questionText: "The purpose of the following (fragment) program is to calculate the sum of natural numbers from 1 to n:",
        questionLines: [ 
            {line: "sum = 0"}, 
            {line: "for i in range(1, n+1):"},
            {line: "	  ???"},
        ],
        questionTextBottom: "What should be put in place of the question marks for the program to fulfill its assumptions?",
        answers : [ 
            {text: "sum += 1 ", correctness: false},
            {text: "sum = i", correctness: false},
            {text: "sum += i", correctness: true},
            {text: "sum = sum + 1", correctness : false},
            {text: "sum + i", correctness: false},
        ],
        key: 2,
      },
      { 
        questionText: "The purpose of the following (fragment) program is to calculate the number of 'a' letters in the word S:",
        questionLines: [ 
                {line: "how_many_a = 0"},
                {line: "for i in range(len(S)):"},
                {line: "	  if ???:"},
                {line: "      how_many_a += 1"},
        ],
        questionTextBottom: "What should be put in place of the question marks for the program to fulfill its assumptions?",
        answers : [ {text: "S == 'a'", correctness: false},
                          {text: "S[i] == 'a'", correctness: true},
                          {text: "i == 'a'", correctness: false},
                          {text: "S[i] = 'a'", correctness : false},
                 ],
                        key: 3,
      },
      { 
        questionText: "The purpose of the following (fragment) program is to find the largest number in a five-element array:",
        questionLines: [
                {line: "maximum = 0"},
                {line: "for i in range(5):"},
                {line: "    if tab[i] > maximum:"},
                {line: "        maximum = tab[i]"},
                {line: "print(maximum)"},
        ],
        questionTextBottom: "For what data will the printed answer not be correct?",
        answers : [ 
            {text: "tab =  [14, 0, 5, 6, -2]", correctness: false},
            {text: "tab = [0, -3, -2, 0, -5]", correctness: false},
            {text: "tab = [7, -1, 9, -23, 1]", correctness: false},
            {text: "tab = [3, 5, 1, 9, 2]", correctness : false},
            {text: "tab = [-5, -4, -9, -8, -3]", correctness : true},
        ],
        key: 4,
        solution: "The error is an invalid initial value for the maximum variable. If all numbers are less than 0, this variable will remain 0. An example fix could be to make the starting value smaller or even set it to the first element of the tab array.",
        level: "easy",
      },
      { 
        questionText:"The purpose of the following (fragmant) program is to print to the screen numbers 10, 9, 8,...,1 (in this order):",
        questionLines: [
        {line: "for i in range(10):"},
        {line: "   print(???)"},
        ],
        questionTextBottom:"Which line should be placed insted of the question marks?",
        answers : [ 
            {text: "10 + i", correctness: false},
            {text: "i -= 1", correctness: false},
            {text: "11 - i", correctness: false},
            {text: "10 - i", correctness: true},
            {text: "i - 10", correctness: false},
        ],
        key: 5,
        solution: "We are to start with 10 so 0 is to be subtracted first then add grows by 1 with every iteration up untill 9 which will print the last required digit: 10 - 9 = 1.",
        level: "easy",
      },
      
      { 
        questionText:"Considering the fragment of a program given below:",
        questionLines: [
            {line: "for i in range(1, 6):"},
            {line: "   for j in range(i + 1, 6):"},
            {line: "      print('*', end=''"},
        ],
        questionTextBottom:"How many * characters will be printed after executing the code?",
        answers : [ 
            {text: "5", correctness: false},
            {text: "4", correctness: false},
            {text: "20", correctness: false},
            {text: "10", correctness : true},
            {text: "0 - the program will not execute.", correctness : false},
        ],
        key: 6,
        solution: "The code is very correct, and of common structure. For i = 1 an asterisk will be printed for j ∈ {2, 3, 4, 5}, for i = 2 an asterisk will be printed for j ∈ { 3, 4, 5} and so on. Giving altogether: 4 + 3 + 2 + 1 = 10 asterisks. ",
      },
      
      { 
        questionText:"An object of mass 1 has been placed on the left pan of a balance scale. The right pan of the scale is currently empty. You have any number of weights of mass 7 each and any number of weights of mass 11 each. What is the least number of weights placed on the scale to keep it in balance? We assume that weights can be placed on both scales.",
        questionLines: [
        {line: ""},
        ],
        questionTextBottom:"",
        answers : [ 
            {text: "1", correctness: false},
            {text: "2", correctness: false},
            {text: "3", correctness: false},
            {text: "4", correctness : false},
            {text: "5", correctness : true},
        ],
        key: 7,
        solution: "We solve the equation 7x + 11y = 1 (in the program it can be done, for example, with the extended Euclidean algorithm). Solving x = -3, y = 2 gives the smallest value |x| + |y| (number used weights). This means that 5 weight are enough: three weights of mass 7 each are placed on the left pan, and two weights of mass 11 each are placed on the right pan." ,
      },
      
      { 
        questionText:"What is the maximum number of arrays of type int and size 1000 x 1000 each that can be placed in a program in the way that it does not use more than 100 MB of memory.",
        questionLines: [
        {line: ""},
        ],
        questionTextBottom:"",
        answers : [ 
            {text: "about ten", correctness: true},
            {text: "about a milion", correctness: false},
            {text: "none", correctness: false},
            {text: "one", correctness : false},
            {text: "about a tousand", correctness : false},
            {text: "about a hundred", correctness: false},
        ],
        key: 8,
        solution: "One variable of type long long int takes up usually a few bytes (about 8 plus a slight extra overhead for storing pointers to subarrays). A million such variables therefore takes up about 8 MB. So within the limit of 100 MB.",
      },
      
      { 
        questionText:"Considering the below fragment of a program:",
        questionLines: [
        {line: "x = ???"},
        {line: "if x != 2:"},
        {line: "   if x % 3 == 2:"},
        {line: "      print('yes', end='')"},
        {line: "      if x % 5 == 2:"},
        {line: "         print('ish', end=''"},
        ],
        questionTextBottom:"What is the smallest natural number that can be placed insted of the question marks, so that the program displays the text 'yesish'?",
        answers : [ 
            {text: "12", correctness: false},
            {text: "13", correctness: false},
            {text: "15", correctness: false},
            {text: "17", correctness : true},
            {text: "19", correctness : false},
        ],
        key: 9,
        solution: "Liczby, które dają resztę 2 przy dzieleniu przez 3 i 5 to te same liczby, które dają resztę 2 przy dzieleniu przez 15: czyli 2, 17, 32, 47 i tak dalej. Liczba 2 nie jest rozwiązaniem (bo program sprawdza czy x , 2), więc najmniejszy x, który spowoduje wypisanie obu napisów to 17",
      },
      
      { 
        questionText:"Considering the below fragment of a program:",
        questionLines: [
        {line: "def generate(n):"},
        {line: "   if n == 0:"},
        {line: "      return 'a'"},
        {line: "   return 'b' + generate(n - 1)"},
        ],
        questionTextBottom:"Which text will the call generate(3) return?",
        answers : [ 
            {text: "bba", correctness: false},
            {text: "bbb", correctness: false},
            {text: "baaa", correctness: false},
            {text: "abbb", correctness : false},
            {text: "bbba", correctness : true},
        ],
        key: 10,
        solution: "",
      },
      
      { 
        questionText:"which set shows operators possible to be placed where the question marks are, so that the program displays the text 'cabbage'?",
        questionLines: [
        {line: "if(2 + 2 == 4) ??? (True != False)"},
        {line: "   print('cabbage')"},
        ],
        questionTextBottom:"",
        answers : [ 
            {text: "and, ==, or", correctness: true},
            {text: "and, !=, not", correctness: false},
            {text: "or, ^, not", correctness: false},
            {text: "==, ^", correctness : false},
            {text: "not, !=, ^", correctness : false},
        ],
        key: 11,
        solution: "",
      },
      
      { 
        questionText:"Considering the below function:",
        questionLines: [
        {line: "def f(x):"},
        {line: "   return x * x"},
        ],
        questionTextBottom:"The call f(f(x)) results in:",
        answers : [ 
            {text: "x to the power of 2", correctness: false},
            {text: "x", correctness: false},
            {text: "x to the power of 3", correctness: false},
            {text: "x to the power of 4", correctness : true},
        ],
        key: 12,
        solution: "",
      },
      
      { 
        questionText:"",
        questionLines: [
        {line: ""},
        {line: ""},
        {line: ""},
        {line: ""},
        {line: ""},
        {line: ""},
        {line: ""},
        ],
        questionTextBottom:"",
        answers : [ 
            {text: "", correctness: false},
            {text: "", correctness: false},
            {text: "", correctness: false},
            {text: "", correctness : false},
            {text: "", correctness : true},
        ],
        key: 13,
        solution: "",
      },
      
      { 
        questionText:"",
        questionLines: [
        {line: ""},
        {line: ""},
        {line: ""},
        {line: ""},
        {line: ""},
        {line: ""},
        {line: ""},
        ],
        questionTextBottom:"",
        answers : [ 
            {text: "", correctness: false},
            {text: "", correctness: false},
            {text: "", correctness: false},
            {text: "", correctness : false},
            {text: "", correctness : true},
        ],
        key: 14,
        solution: "",
      },
    
    ]
    

const py_theory =  [
                {
                    question: "Which of the following is equal to half of x (x/2) rounded up to the nearest whole number?",
                    answers: [
                        { text: "x // 2", correctness: false},
                        { text: "(x + 1) // 2", correctness: true},
                        { text: "x + 1 // 2", correctness: false},
                    ],
                    key: 1,
                    level: "easy"
                },
                {
                    question: "Which of the following is equal to half of x (x/2) rounded up to the nearest whole number?",
                    answers: [
                        { text: "x // 2 + x % 2", correctness: true},
                        { text: "x // 2", correctness: false},
                    ],
                    key: 2,
                    level: "easy"
                },
                {
                    question: "Which set represents the scalar data object types?",
                    answers: [
                        { text: "string, int, array", correctness: false},
                        { text: "int, string, bool", correctness: false},
                        { text: "int, float, complex, bool, NoneType.", correctness: true},
                        { text: "array, dictionary, set", correctness: false},
                    ],
                    key: 3,
                },
                {
                    question: "What is casting?",
                    answers: [
                        { text: "Changing the type of a variable or structure", correctness: true},
                        { text: "Deciding the overall hierarchy of the program.", correctness: false},
                        { text: "Finding out the type of a data object.", correctness: false},
                    ],
                    key: 4,
                    level: "easy",
                },
                {
                    question: "What does the print statement return?",
                    answers: [
                        { text: "the string or characters of the printed value}",  correctness: false},
                        { text: "Print statement does not return anything.", correctness: true},
                        { text: "It returns the index of the printed value.", correctness: false},                     ],
                    key: 5,
                    level: "easy",
                },
                {
                    question: "Indicate the type of the expression: 3.14.",
                    answers: [
                        { text: "int", correctness: false},
                        { text: "float", correctness: true},
                        { text: "bool", correctness: false},
                        { text: "NoneType", correctness: false},
                    ],
                    key: 6,
                    level: "easy",
                },
                {
                    question: "Indicate the type of the expression: -24.",
                    answers: [
                        { text: "float", correctness: false},
                        { text: "string", correctness: false},
                        { text: "int", correctness: true},
                        { text: "NoneType", correctness: false},
                    ],
                    key: 7,
                    level: "easy",
                },
                {
                    question: "Indicate the type of the expression: False.",
                    answers: [
                        { text: "falsy", correctness: false},
                        { text: "bool", correctness: true},
                        { text: "int", correctness: false},
                        { text: "NoneType", correctness: false},
                    ],
                    key: 8,
                    level: "easy",
                },
                {
                    question: "Indicate the type of the expression: None.",
                    answers: [
                        { text: "bool", correctness: false},
                        { text: "string", correctness: false},
                        { text: "float", correctness: false},
                        { text: "NoneType", correctness: true},
                    ],
                    key: 9,
                    level: "easy",
                },
                {
                    question: "What is the result of the expression: 2 * 3.0, in Python?",
                    answers: [
                        { text: "6", correctness: false},
                        { text: "6.0", correctness: true},
                        { text: "5", correctness: false},
                        { text: "2*3.0", correctness: false},
                    ],
                    key: 10,
                    level: "easy",
                },
                {
                    question: "What is the result of the expression: - - 8, in Python?",
                    answers: [
                        { text: "- - 8", correctness: false},
                        { text: "- 8", correctness: false},
                        { text: "8", correctness: true},
                    ],
                    key: 11,
                    level: "easy",
                },
                {
                    question: "What is the result of the expression: 20/3, in Python?",
                    answers: [
                        { text: "6.6666", correctness: true},
                        { text: "6.7", correctness: false},
                        { text: "6", correctness: false},
                    ],
                    key: 12,
                    level: "easy",
                },
                {
                    question: "What is the result of the expression: 10.0/3.0, in Python?",
                    answers: [
                        { text: "3", correctness: false},
                        { text: "3.3", correctness: false},
                        { text: "1.0", correctness: false},
                        { text: "3.3333", correctness: false},
                    ],
                    key: 13,
                    level: "easy",
                },
                {
                    question: "What is the result of the expression: 1 + 3 ** 3, in Python?",
                    answers: [
                        { text: "10", correctness: false},
                        { text: "64", correctness: false},
                        { text: "28", correctness: true},
                        { text: "12", correctness: false},
                    ],
                    key: 14,
                    level: "easy",
                },
      ]

const light = [
            {
                question: "What is the wavelength range of light?",
                answers: [
                    { text: "Infinite.", correctness: false},
                    { text: "380-780 nm is considered the widest range.", correctness: true},
                    { text: "Light has only one wavelength - 300nm.", correctness: false},
                    { text: "500-900mm", correctness: false},
                ],
                key: 1,
            },
            {
                question: "What is optical radiation?",
                answers: [
                    { text: "Scientific name for light.", correctness: false},
                    { text: "Low energy radiation produced by the eye organ.", correctness: false},
                    { text: "Scientific name for the 100nm - 1mm range  of electromagnetic radiation, subject to the laws of geometric and wave optics.", correctness: true},
                ],
                key: 2,
            },
            {
                question: "What is optical radiation divided into?",
                answers: [
                    { text: "ultraviolet, visible light and X-ray", correctness: false},
                    { text: "visible light, infrared and X-ray", correctness: false},
                    { text: "ultraviolet, visible light and infrared", correctness: true},
                    { text: "radio waves, visible light and infrared", correctness: false},
                ],
                key: 3,
            },
            {
                question: "Select whether the statement is correct: 'Wave-particle duality is a feature of quantum objects that manifests, depending on the situation, wave properties (diffraction, interference) or corpuscular properties (well-defined location, momentum).'",
                answers: [
                    { text: "Correct.", correctness: true},
                    { text: "Incorrect", correctness: false},
                ],
                key: 4,
            },
            {
                question: "What is the speed of light?",
                answers: [
                    { text: "299 792 458 km/h", correctness: false},
                    { text: "299 792 458 m/s", correctness: true},
                    { text: "300 000 km/h", correctness: false},
                    { text: "300 000 m/s", correctness: false},
                ],
                key: 5,
            },
            {
                question: "Select whether the statement is correct: 'Light is a common name for the visible to the human eye part of electromagnetic radiation.'",
                answers: [
                    { text: "true", correctness: true},
                    { text: "false", correctness: false},
                ],
                key: 6,

            },
            {
                question: "Is the following statement true: 'Light travels with the same speed in different media.'",
                answers: [
                    { text: "True", correctness: false},
                    { text: "False. Light travels faster in media other than vaccum.", correctness: false},
                    { text: "False. Light travels slower in media other than vacuum.", correctness: true},
                    { text: "500-900mm", correctness: false},
                ],
                key: 7,
            },
        ]

const light_easy = [
    {
        question: "What is the wavelength range of light?",
        answers: [
            { text: "Infinite.", correctness: false},
            { text: "380-780 nm is considered the widest range.", correctness: true},
            { text: "Light has only one wavelength - 300nm.", correctness: false},
            { text: "500-900mm", correctness: false},
        ],
        key: 1,
    },
    {
        question: "What is optical radiation?",
        answers: [
            { text: "Scientific name for light.", correctness: false},
            { text: "Low energy radiation produced by the eye organ.", correctness: false},
            { text: "Scientific name for the 100nm - 1mm range  of electromagnetic radiation, subject to the laws of geometric and wave optics.", correctness: true},
        ],
        key: 2,
    },
    {
        question: "What is optical radiation divided into?",
        answers: [
            { text: "ultraviolet, visible light and X-ray", correctness: false},
            { text: "visible light, infrared and X-ray", correctness: false},
            { text: "ultraviolet, visible light and infrared", correctness: true},
            { text: "radio waves, visible light and infrared", correctness: false},
        ],
        key: 3,
    },
    {
        question: "Select whether the statement is correct: 'Wave-particle duality is a feature of quantum objects that manifests, depending on the situation, wave properties (diffraction, interference) or corpuscular properties (well-defined location, momentum).'",
        answers: [
            { text: "Correct.", correctness: true},
            { text: "Incorrect", correctness: false},
        ],
        key: 4,
    },
    {
        question: "What is the speed of light?",
        answers: [
            { text: "299 792 458 km/h", correctness: false},
            { text: "299 792 458 m/s", correctness: true},
            { text: "300 000 km/h", correctness: false},
            { text: "300 000 m/s", correctness: false},
        ],
        key: 5,
    },
    {
        question: "Select whether the statement is correct: 'Light is a common name for the visible to the human eye part of electromagnetic radiation.'",
        answers: [
            { text: "true", correctness: true},
            { text: "false", correctness: false},
        ],
        key: 6
    },
    {
        question: "Is the following statement true: 'Light travels with the same speed in different media.'",
        answers: [
            { text: "True", correctness: false},
            { text: "False. Light travels faster in media other than vaccum.", correctness: false},
            { text: "False. Light travels slower in media other than vacuum.", correctness: true},
            { text: "500-900mm", correctness: false},
        ],
        key: 7,
    },
]

export {js_theory, py_theory, py, js, light, light_easy}
