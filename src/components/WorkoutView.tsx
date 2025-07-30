import React, { useState, useEffect } from 'react';
import { ArrowLeft, Timer, Target, Zap } from 'lucide-react';
import { WorkoutDay } from '../data/workoutData';
import ExerciseSection from './ExerciseSection';

interface WorkoutViewProps {
  workout: WorkoutDay;
  weekNumber: number;
  onBack: () => void;
}

const WorkoutView: React.FC<WorkoutViewProps> = ({ workout, weekNumber, onBack }) => {
  const [localWorkout, setLocalWorkout] = useState<WorkoutDay>(workout);

  useEffect(() => {
    // Load progress from localStorage
    const savedProgress = localStorage.getItem(`workout-progress-w${weekNumber}-${workout.dayName}`);
    if (savedProgress) {
      const progress = JSON.parse(savedProgress);
      setLocalWorkout({
        ...workout,
        warmup: workout.warmup.map((ex, i) => ({ ...ex, completed: progress.warmup?.[i] || false })),
        main: workout.main.map((ex, i) => ({ ...ex, completed: progress.main?.[i] || false })),
        cooldown: workout.cooldown.map((ex, i) => ({ ...ex, completed: progress.cooldown?.[i] || false }))
      });
    } else {
      setLocalWorkout(workout);
    }
  }, [workout, weekNumber]);

  const saveProgress = (section: string, exerciseIndex: number, completed: boolean) => {
    const key = `workout-progress-w${weekNumber}-${workout.dayName}`;
    const existing = JSON.parse(localStorage.getItem(key) || '{}');
    
    if (!existing[section]) existing[section] = {};
    existing[section][exerciseIndex] = completed;
    
    localStorage.setItem(key, JSON.stringify(existing));
  };

  const toggleExerciseComplete = (section: 'warmup' | 'main' | 'cooldown', index: number) => {
    const newCompleted = !localWorkout[section][index].completed;
    
    setLocalWorkout(prev => ({
      ...prev,
      [section]: prev[section].map((ex, i) => 
        i === index ? { ...ex, completed: newCompleted } : ex
      )
    }));

    saveProgress(section, index, newCompleted);
  };

  const getTotalExercises = () => {
    return localWorkout.warmup.length + localWorkout.main.length + localWorkout.cooldown.length;
  };

  const getCompletedExercises = () => {
    return [
      ...localWorkout.warmup,
      ...localWorkout.main,
      ...localWorkout.cooldown
    ].filter(ex => ex.completed).length;
  };

  const progressPercentage = getTotalExercises() > 0 
    ? Math.round((getCompletedExercises() / getTotalExercises()) * 100)
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center text-orange-600 hover:text-orange-700 transition-colors mb-4 font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Week {weekNumber}
          </button>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-800 mb-2">
                  Week {weekNumber} - {localWorkout.dayName}
                </h1>
                <p className="text-gray-600">
                  {getTotalExercises()} exercises • {getCompletedExercises()} completed
                </p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <div className="flex items-center mb-2">
                  <Target className="w-5 h-5 text-orange-500 mr-2" />
                  <span className="text-sm font-medium text-gray-600">Progress</span>
                </div>
                <div className="w-32 bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${progressPercentage}%` }}
                  ></div>
                </div>
                <span className="text-sm font-bold text-orange-600 mt-1 block">
                  {progressPercentage}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Exercise Sections */}
        <div className="max-w-4xl mx-auto">
          <ExerciseSection
            title="Warmup"
            exercises={localWorkout.warmup}
            icon={<Timer className="w-6 h-6" />}
            color="bg-gradient-to-r from-blue-500 to-blue-600"
            onToggleComplete={(index) => toggleExerciseComplete('warmup', index)}
          />

          <ExerciseSection
            title="Main Workout"
            exercises={localWorkout.main}
            icon={<Zap className="w-6 h-6" />}
            color="bg-gradient-to-r from-orange-500 to-red-500"
            onToggleComplete={(index) => toggleExerciseComplete('main', index)}
          />

          <ExerciseSection
            title="Cooldown"
            exercises={localWorkout.cooldown}
            icon={<Timer className="w-6 h-6" />}
            color="bg-gradient-to-r from-green-500 to-green-600"
            onToggleComplete={(index) => toggleExerciseComplete('cooldown', index)}
          />
        </div>

        {/* Completion Message */}
        {progressPercentage === 100 && (
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-4xl mb-2">🎉</div>
              <h3 className="text-xl font-bold mb-2">Workout Complete!</h3>
              <p className="text-green-100">
                Amazing work! You've completed all exercises for {localWorkout.dayName}.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkoutView;