import React, { useState } from 'react';
import { Dumbbell, Calendar, Target } from 'lucide-react';
import { workoutData } from './data/workoutData';
import WeekSelector from './components/WeekSelector';
import DaySelector from './components/DaySelector';
import WorkoutView from './components/WorkoutView';

type AppView = 'home' | 'week' | 'workout';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [selectedWeek, setSelectedWeek] = useState<number>(1);
  const [selectedDay, setSelectedDay] = useState<number>(0);

  const currentWeekData = workoutData.find(week => week.weekNumber === selectedWeek);
  const currentWorkout = currentWeekData?.days[selectedDay];

  const handleStartWorkout = () => {
    setCurrentView('week');
  };

  const handleWeekSelect = (week: number) => {
    setSelectedWeek(week);
    setCurrentView('week');
  };

  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
    setCurrentView('workout');
  };

  const handleBackToWeek = () => {
    setCurrentView('week');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  if (currentView === 'workout' && currentWorkout) {
    return (
      <WorkoutView
        workout={currentWorkout}
        weekNumber={selectedWeek}
        onBack={handleBackToWeek}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full shadow-lg">
              <Dumbbell className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            4-Week Bodyweight
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {' '}Workout Plan
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Transform your fitness with no equipment needed. Follow professionally designed workouts 
            with video demonstrations for every exercise.
          </p>
        </header>

        {currentView === 'home' && (
          <div className="max-w-4xl mx-auto">
            {/* Features */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">4-Week Program</h3>
                <p className="text-gray-600">Structured progression across 4 weeks with increasing intensity</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Video Guides</h3>
                <p className="text-gray-600">Professional YouTube demonstrations for perfect form</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Dumbbell className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">No Equipment</h3>
                <p className="text-gray-600">Train anywhere with bodyweight exercises only</p>
              </div>
            </div>

            {/* Week Overview */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Choose Your Week
              </h2>
              <WeekSelector
                selectedWeek={selectedWeek}
                onWeekSelect={handleWeekSelect}
              />
              
              <div className="text-center">
                <button
                  onClick={handleStartWorkout}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Week {selectedWeek}
                </button>
              </div>
            </div>
          </div>
        )}

        {currentView === 'week' && currentWeekData && (
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <button
                  onClick={handleBackToHome}
                  className="text-orange-600 hover:text-orange-700 transition-colors mb-2 font-medium"
                >
                  ← Back to Overview
                </button>
                <h2 className="text-3xl font-bold text-gray-800">
                  Week {selectedWeek} Workout Schedule
                </h2>
                <p className="text-gray-600 mt-2">
                  Select a day to start your workout
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <DaySelector
                days={currentWeekData.days.map(day => day.dayName)}
                selectedDay={selectedDay}
                onDaySelect={handleDaySelect}
              />
              
              <div className="text-center">
                <button
                  onClick={() => handleDaySelect(selectedDay)}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start {currentWeekData.days[selectedDay].dayName}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;