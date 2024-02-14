import { IEvalution } from "./IEvaluation";

export interface ICourse {
  name: string;
  color: string;
  final_grade: number;
  id: string;
  evaluations: IEvalution[];
}
