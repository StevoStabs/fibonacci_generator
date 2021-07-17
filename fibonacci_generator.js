/*
   Method takes an integer input n and prints n digits 
   in fibonacci sequence without recursion. 

   Steven Stabile
*/

const fibonacci_generator = n => {
    
    let fibonacci = [0, 1];

    for(let i=2; i<n; i++) {
        fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
    }

    console.log(fibonacci);
    
}

// Tests
// Expect 0 1 1 2 3
fibonacci_generator(5);

// Expect 0 1 1 
fibonacci_generator(3);

// Expect 0 1 1 2
fibonacci_generator(4);