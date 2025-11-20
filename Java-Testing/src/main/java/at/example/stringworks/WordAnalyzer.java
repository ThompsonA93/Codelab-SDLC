package at.example.stringworks;

import java.util.HashSet;
import java.util.Set;

public class WordAnalyzer {

    public WordAnalyzer(){}
    
    public boolean isPalindrome(String word){
        String cleanWord = word.toLowerCase();

        String reversedWord = new StringBuilder(cleanWord).reverse().toString();

        return cleanWord.equals(reversedWord);
    }

    public boolean isIsogramm(String word){
        String cleanWord = word.toLowerCase();

        Set<Character> charSet = new HashSet<>();

        for (char c : cleanWord.toCharArray()) {
            if (!charSet.add(c)) {
                return false;
            }
        }
        return true;
    }

    public boolean isIsoalphabetic(String word){
        String cleanWord = word.toLowerCase();

        for (int i = 0; i < cleanWord.length() - 1; i++) {
            char current = cleanWord.charAt(i);
            char next = cleanWord.charAt(i + 1);

            if (current > next) {
                return false;
            }
        }
        return true;
    }

    public boolean isTautonym(String word){
        int length = word.length();

        int halfLength = length / 2;
        String firstHalf = word.substring(0, halfLength);
        String secondHalf = word.substring(halfLength);

        return firstHalf.equalsIgnoreCase(secondHalf);
    }

    public static void main(String[] args) {
        String[] words = {
                "Rentner", "Erika", "Sprite", "Lager", "Vivi", "Rotor", "LagerRegal",
                "Hottah", "Jojo", "Aachen", "Befehl", "Aas"
        };

        WordAnalyzer w = new WordAnalyzer();

        System.out.printf("%-12s | %-10s | %-10s | %-12s | %-10s%n",
                "Wort", "Palindrom", "Isogramm", "Isoalphab.", "Tautonym");
        for(String word : words){
            boolean ip = w.isPalindrome(word);
            boolean ii = w.isIsogramm(word);
            boolean ia = w.isIsoalphabetic(word);
            boolean it = w.isTautonym(word);

            System.out.printf("%-12s | %-10s | %-10s | %-12s | %-10s%n",
                    word,
                    ip ? "TRUE" : "FALSE",
                    ii ? "TRUE" : "FALSE",
                    ia ? "TRUE" : "FALSE",
                    it ? "TRUE" : "FALSE");
        }
    }
}
