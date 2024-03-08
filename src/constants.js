export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction isPrime(number) {\n\tif (number <= 1) {\n\t\treturn false;\n\t}\n\n\tfor (let i = 2; i <= Math.sqrt(number); i++) {\n\t\tif (number % i === 0) {\n\t\t\treturn false;\n\t\t}\n\t}\n\n\treturn true;\n}\n\nlet result1 = isPrime(7);\nconsole.log(result1); // Output: true\n\nlet result2 = isPrime(12);\nconsole.log(result2); // Output: false\n`,
  typescript: `\nfunction isPalindrome(word: string = ""): boolean {\n\tconst cleanWord: string = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();\n\treturn cleanWord === cleanWord.split('').reverse().join('');\n}\n\nlet result1: boolean = isPalindrome("level");\nconsole.log(result1); // Output: true\n\nlet result2: boolean = isPalindrome("hello");\nconsole.log(result2); // Output: false\n\nlet result3: boolean = isPalindrome(); // Using the default parameter (empty string)\nconsole.log(result3);`,
  python: `\ndef factorial(n: int) -> int:\n\tif n == 0 or n == 1:\n\t\treturn 1\n\telse:\n\t\treturn n * factorial(n - 1)\n\nresult1 = factorial(5)\nprint(result1)  # Output: 120\n\nresult2 = factorial(0)\nprint(result2)  # Output: 1\n\nresult3 = factorial(3)\nprint(result3)  # Output: 6`,
  java: `\npublic class SimpleAddition {\n\n\tpublic static int addNumbers(int a, int b) {\n\t\treturn a + b;\n\t}\n\n\tpublic static void main(String[] args) {\n\t\tint result = addNumbers(5, 7);\n\t\tSystem.out.println(result); // Output: 12\n\t}\n}`,
  csharp: `\nusing System;\n\npublic class PasswordGenerator\n{\n\tpublic static string GeneratePassword(int length, bool includeUppercase, bool includeLowercase, bool includeNumbers, bool includeSpecialChars)\n\t{\n\t\tstring uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";\n\t\tstring lowercaseChars = "abcdefghijklmnopqrstuvwxyz";\n\t\tstring numberChars = "0123456789";\n\t\tstring specialChars = "!@#$%^&*()_-+=<>?";\n\n\t\tstring allowedChars = "";\n\t\tstring password = "";\n\n\t\tif (includeUppercase) allowedChars += uppercaseChars;\n\t\tif (includeLowercase) allowedChars += lowercaseChars;\n\t\tif (includeNumbers) allowedChars += numberChars;\n\t\tif (includeSpecialChars) allowedChars += specialChars;\n\n\t\tif (allowedChars.Length == 0)\n\t\t{\n\t\t\tConsole.WriteLine("Error: Please include at least one type of character.");\n\t\t\treturn null;\n\t\t}\n\n\t\tRandom random = new Random();\n\n\t\tfor (int i = 0; i < length; i++)\n\t\t{\n\t\t\tint randomIndex = random.Next(0, allowedChars.Length);\n\t\t\tpassword += allowedChars[randomIndex];\n\t\t}\n\n\t\treturn password;\n\t}\n\n\tpublic static void Main()\n\t{\n\t\tstring newPassword = GeneratePassword(12, true, true, true, true);\n\t\tConsole.WriteLine(newPassword);\n\t}\n}`,
  php: `\<?php\n\nfunction reverseString($input)\n{\n\treturn strrev($input);\n}\n\n$originalString = "Hello, World!";\necho reverseString($originalString) . "\n"; // Output: !dlroW ,olleH\n\n$anotherString = "PHP is fun!";\necho reverseString($anotherString) . "\n"; // Output: !nuf si PHP\n\n\?>`,
};
