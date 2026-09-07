/*
Time complexity -> It is used to measure efficiency of an algorithm in terms of speed, as the input size grows.
Time complexity != Time taken
Speed efficiency -> when input size grows.

O(n) -> linear search 
ex 1. for(let i = 0; i < n; i++) {
        ----------  n operations ------------        
     }
-----------------------------------------------------------------------        
O(log n) -> Binary search     
ex 2. n, n / 2, n / 4, ----- 1
    x = log n
-----------------------------------------------------------------------        
O(n²) -> for nested loop
ex 3. for(let i = 0; i < n; i++) {                n times
            for(let j = 0; j < n; j++) {          n times
            ----------  n operations ------------        
            }
     }
            x = n * n = n²
-----------------------------------------------------------------------                
O(n log n) -> Merge sort  
ex 4. for(let i = 0; i < n; i++) {               n times
        n * 1 / 2 * 2 / 4 * 3 / 8 * ----- 1      log n times
    }
    x = n log n
-----------------------------------------------------------------------        
O(n³) -> Merge sort  
ex 5.    3 nested loop
-----------------------------------------------------------------------        
O(2ⁿ) 
ex 6. [2, 2] -> 4 operation
      [n = 3] -> 9 operation
      [n = 4] -> 16 operation
-----------------------------------------------------------------------        
O(n!)
-----------------------------------------------------------------------        
Constant time complexity -> O(1)
ex 7. n = 10, x = 1;
      n = 100, x = 1;
      n = 1000, x = 1;
ex 8. arr[n] -> find an element that is present at 5ᵗʰ index
      O(1)
-----------------------------------------------------------------------        
Efficiency 
O(1) > O(log n) > O(n > O(n log n) > O(n²) > O(2ⁿ) > O(n!)
-----------------------------------------------------------------------        
Space complexity
algo 1. Find 5ᵗʰ  element in an array? 
                function findFifthElement(arr){  Time Complexity -> O(1)
                    return arr[4];          Space Complexity -> O(1)
                }
-----------------------------------------------------------------------        
algo 2. findMaxElement(arr) {
            let max = arr[0];                   S.C -> O(1)
            for(let i = 1; i < n; i++) {        T.C -> O(n)
            if(arr[i] > max) {
                max = arr[i];
                }
            }
            return max;
        }
-----------------------------------------------------------------------        
algo 3. doubleArray(arr) {
        let newArray = size(n);         S.C -> O(n)
        for(let i = 0; i < n; i++) {       T.C -> O(n)
            newArray[i] = arr[i] * 2;
            }
            return newArray;
        }
*/