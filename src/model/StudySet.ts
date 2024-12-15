import { Category } from './Category';
import { Term } from './Term';

export interface StudySet {
  id: string;
  name: string;
  categories: Category[];
  terms: Term[];
}
