export type ActiveSection =
  | 'beranda'
  | 'pendahuluan'
  | 'materi'
  | 'eksplorasi'
  | 'kuis'
  | 'tugas'
  | 'penutup';

export interface Question {
  id: number;
  type: 'single' | 'complex' | 'tf' | 'matching';
  difficulty: 'mudah' | 'sedang' | 'sulit';
  stimulus: string;
  questionText: string;
  // For 'single' and 'complex': list of choices
  choices?: string[];
  // For 'single': index of correct choice
  correctSingle?: number;
  // For 'complex': indices of correct choices
  correctComplex?: number[];
  // For 'tf': list of statements, each statement has text and a boolean correct answer
  tfStatements?: {
    statement: string;
    isCorrect: boolean;
  }[];
  // For 'matching': list of left options, list of right options, and correct pairing map
  matchingData?: {
    leftItems: string[];
    rightItems: string[];
    // leftIndex -> rightIndex of the correct pair
    correctPairs: { [key: number]: number };
  };
}

export interface StudentInfo {
  nama: string;
  kelas: string;
}

export interface ExamState {
  answers: { [questionId: number]: any }; // Saves student answers per question type
  flaggedRagu: { [questionId: number]: boolean };
  completed: boolean;
  score: {
    correctCount: number;
    wrongCount: number;
    totalAnswered: number;
    unansweredCount: number;
    scoreValue: number;
  } | null;
}

export interface ReflectionResponse {
  paham: 'ya' | 'sebagian' | 'tidak';
  reaksi: string;
  masukan: string;
}
