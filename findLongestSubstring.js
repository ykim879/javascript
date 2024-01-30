/**
Write a JavaScript function called findLongestSubstring that takes a string as input and returns the length of the longest substring without repeating characters.
 */
 function findLongestSubstring(str) {
     var s = new Set()
     res = 0; cur = 0
     for (c of str) {
         if (s.has(c)) {
             if (res < cur) {
                 res = cur
             }
             cur = 0
             s.clear()
         }
         s.add(c)
         cur += 1
     }
     return res < cur ? cur : res
 }
 console.log(findLongestSubstring("abcabcbb"))
