import { ActivityDifficulty } from "./activity-difficulty.model";

export interface Activity {
    readonly id: number; 
    readonly title: string; 
    readonly description: string; 
    readonly difficulty: ActivityDifficulty; 
    readonly duration: string; 
    readonly location: string; 
  }
  