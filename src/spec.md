# Specification

## Summary
**Goal:** Fix incorrect answers for all country flag questions in the quiz game.

**Planned changes:**
- Audit and correct the correctAnswer index for all flag questions in frontend/src/data/questions.ts to ensure it points to the actual correct country name
- Update the backend flagQuestions Map in backend/main.mo to match the corrected answer indices from the frontend

**User-visible outcome:** All country flag questions will display the correct answer when users submit their responses, ensuring accurate scoring and feedback during gameplay.
