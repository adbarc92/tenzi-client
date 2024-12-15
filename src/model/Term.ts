import { Definition } from './Definition';

export interface Term {
  id: string;
  name: string;
  definitions: Definition[];
}
