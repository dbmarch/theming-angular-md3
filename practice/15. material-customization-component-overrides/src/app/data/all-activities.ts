import { Activity } from '../models/activity.model';

export const ALL_ACTIVITIES: Activity[] = [
  {
    id: 1,
    title: 'Public Speaking',
    description:
      'Build confidence and learn proven techniques to deliver speeches and presentations in front of any audience effectively.',
    location: 'Community Center',
    image: 'public-speaking.png',
    members: 20,
  },
  {
    id: 2,
    title: 'Creative Writing',
    description:
      'Master storytelling techniques and explore creative writing skills to craft engaging narratives and express your ideas clearly.',
    location: 'Online',
    image: 'creative-writing.png',
    members: 15,

  },
  {
    id: 3,
    title: 'Data Analysis',
    description:
      'Learn to work with data, analyze trends, and use tools like Python or Excel to derive meaningful insights.',
    location: 'Tech Hub',
    image: 'data-analysis.png',
    members: 10,
  },
];
