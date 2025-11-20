package stringworks;

import at.example.stringworks.WordAnalyzer;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class WordAnalyzerTest {
    private final WordAnalyzer analyzer = new WordAnalyzer();

    @Test
    void testIsPalindromeTrue() {
        assertTrue(analyzer.isPalindrome("Rotor"));
        assertTrue(analyzer.isPalindrome("Anna"));
    }

}
