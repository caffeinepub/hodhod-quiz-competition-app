import Nat "mo:core/Nat";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";

actor {
  type Question = {
    questionText : Text;
    options : [Text];
    correctAnswerIndex : Nat;
    imageUrl : ?Text;
  };

  // Corrected backend answer mappings for flags questions
  // Correct answer index (0-3) corresponds to correct option
  let flagQuestions = Map.fromIter<Nat, Nat>(
    [
      (0, 1), // Question 0, correct answer is 1 (Malaysia)
      (1, 2), // Question 1, correct answer is 2 (India)
      (2, 3), // Question 2, correct answer is 3 (China)
    ].values()
  );

  let sportsQuestions = Map.fromIter<Nat, Nat>(
    [(0, 2), (1, 0), (2, 2)].values()
  );

  let intelligenceQuestions = Map.fromIter<Nat, Nat>(
    [(0, 2), (1, 1), (2, 0)].values()
  );

  let scienceQuestions = Map.fromIter<Nat, Nat>(
    [(0, 1), (1, 1), (2, 0)].values()
  );
};
