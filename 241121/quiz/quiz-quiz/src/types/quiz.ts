// 퀴즈 설정과 관련된 인터페이스
export interface QuizConfig {
  amount: number;
  category: number;
  difficulty: "easy" | "medium" | "hard"; // 3가지 중 하나만 선택할 수 있음
}

// 받아오는 퀴즈 데이터 형식을 정의하는 인터페이스
export interface QuizQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answer: string[];
}

// 퀴즈의 결과 정보를 정의하는 인터페이스
export interface QuizSummary {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  // incorrectAnswers: number >> 전체 개수에서 정답 개수 빼면 나오니까 제외
}
