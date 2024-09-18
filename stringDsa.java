// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

 

// Example 1:

// Input: str1 = "ABCABC", str2 = "ABC"
// Output: "ABC"
// Example 2:

// Input: str1 = "ABABAB", str2 = "ABAB"
// Output: "AB"
// Example 3:

// Input: str1 = "LEET", str2 = "CODE"
// Output: ""
class Solution {
    public String gcdOfStrings(String str1, String str2) {
        if((str1+str2).equals(str2+str1))
        {
            int str1Length=str1.length();
            int str2Length=str2.length();
            int gcd=gcdCalculator(str1Length,str2Length);
            return str1.substring(0,gcd);
        }
        return "";
    }

    int gcdCalculator(int a,int b)
    {
        while(a%b!=0)
        {
            int rem=a%b;
            a=b;
            b=rem;

        }
        return  b;
    }
}