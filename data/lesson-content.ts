export type LessonContent = { title:string; objective:string; explanation:string; challenge:string };
export const lessonContent: Record<string, LessonContent[]> = {
  "python-foundations": [
    {
      "title": "Variables & types",
      "objective": "Understand how Python stores values and how to inspect their types.",
      "explanation": "A variable gives a value a name. Python determines the type at runtime.",
      "challenge": "Create variables for your name, age and whether you are learning Python. Print each value and its type."
    },
    {
      "title": "Input & output",
      "objective": "Collect information from a user and display useful results.",
      "explanation": "input() reads text from the user. Convert numeric input with int() or float() before arithmetic.",
      "challenge": "Ask for a person's age and print how old they will be next year."
    },
    {
      "title": "Conditions",
      "objective": "Make programs choose between different paths.",
      "explanation": "if, elif and else let a program evaluate conditions and execute the matching block.",
      "challenge": "Ask for a score and print whether the learner passed or failed."
    },
    {
      "title": "Loops",
      "objective": "Repeat work without copying the same code.",
      "explanation": "for and while loops let programs repeat work efficiently.",
      "challenge": "Print the numbers 1 through 10 and calculate their total."
    },
    {
      "title": "Functions",
      "objective": "Package reusable logic into named blocks.",
      "explanation": "Functions reduce repetition. Parameters accept data and return sends a result back.",
      "challenge": "Write a function that accepts a name and returns a friendly greeting."
    },
    {
      "title": "Collections",
      "objective": "Store and work with groups of values.",
      "explanation": "Lists, tuples, sets and dictionaries organize related data in different ways.",
      "challenge": "Create a list of five technologies you want to learn and loop through it."
    },
    {
      "title": "Mini project",
      "objective": "Combine the fundamentals into a small working program.",
      "explanation": "Real learning happens when separate concepts work together.",
      "challenge": "Build a command-line study tracker that records a learner name and three study topics."
    }
  ]
};
