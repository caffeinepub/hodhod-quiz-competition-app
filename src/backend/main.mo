import Nat "mo:core/Nat";
import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";


// Correct answer mappings switched to Map indexed by question number

actor {
  type Question = {
    questionText : Text;
    options : [Text];
    correctAnswerIndex : Nat;
    imageUrl : ?Text;
  };

  let flagQuestions = Map.fromIter<Nat, Nat>(
    [(0, 2), (1, 1), (2, 0)].values()
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
