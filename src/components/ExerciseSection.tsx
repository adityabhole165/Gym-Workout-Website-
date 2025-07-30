import React from 'react';
import { ExternalLink, CheckCircle2, Circle } from 'lucide-react';
import { Exercise } from '../data/workoutData';

interface ExerciseSectionProps {
  title: string;
  exercises: Exercise[];
  icon: React.ReactNode;
  color: string;
  onToggleComplete: (index: number) => void;
}

const ExerciseSection: React.FC<ExerciseSectionProps> = ({
  title,
  exercises,
  icon,
  color,
  onToggleComplete
}) => {
  if (exercises.length === 0) return null;

  return (
    <div className="mb-8">
      <div className={`flex items-center mb-4 p-3 rounded-lg ${color}`}>
        {icon}
        <h3 className="text-xl font-bold text-white ml-2">{title}</h3>
      </div>
      
      <div className="space-y-3">
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className={`group p-4 border rounded-lg transition-all duration-300 hover:shadow-md ${
              exercise.completed
                ? 'bg-green-50 border-green-200 shadow-sm'
                : 'bg-white border-gray-200 hover:border-orange-300 hover:bg-orange-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center flex-1">
                <button
                  onClick={() => onToggleComplete(index)}
                  className={`mr-3 p-1 rounded-full transition-colors ${
                    exercise.completed
                      ? 'text-green-600 hover:text-green-700'
                      : 'text-gray-400 hover:text-orange-500'
                  }`}
                >
                  {exercise.completed ? (
                    <CheckCircle2 className="w-6 h-6" />
                  ) : (
                    <Circle className="w-6 h-6" />
                  )}
                </button>
                
                <h4 className={`font-semibold text-lg transition-colors ${
                  exercise.completed
                    ? 'text-green-700 line-through'
                    : 'text-gray-800 group-hover:text-orange-600'
                }`}>
                  {exercise.name}
                </h4>
              </div>
              
              <a
                href={exercise.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Watch Video</span>
                <span className="sm:hidden">Video</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExerciseSection;