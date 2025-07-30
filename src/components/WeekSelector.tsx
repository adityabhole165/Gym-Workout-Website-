import React from 'react';
import { ChevronRight } from 'lucide-react';

interface WeekSelectorProps {
  selectedWeek: number;
  onWeekSelect: (week: number) => void;
}

const WeekSelector: React.FC<WeekSelectorProps> = ({ selectedWeek, onWeekSelect }) => {
  const weeks = [1, 2, 3, 4];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {weeks.map((week) => (
        <button
          key={week}
          onClick={() => onWeekSelect(week)}
          className={`group relative p-6 rounded-xl border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
            selectedWeek === week
              ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 shadow-lg'
              : 'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50'
          }`}
        >
          <div className="flex items-center justify-center mb-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
              selectedWeek === week
                ? 'bg-orange-500 text-white'
                : 'bg-gray-100 text-gray-600 group-hover:bg-orange-100 group-hover:text-orange-600'
            }`}>
              {week}
            </div>
          </div>
          <h3 className={`font-semibold text-center transition-colors ${
            selectedWeek === week
              ? 'text-orange-700'
              : 'text-gray-700 group-hover:text-orange-600'
          }`}>
            Week {week}
          </h3>
          <div className={`flex items-center justify-center mt-2 transition-transform ${
            selectedWeek === week ? 'transform translate-x-1' : ''
          }`}>
            <ChevronRight className={`w-4 h-4 transition-colors ${
              selectedWeek === week
                ? 'text-orange-500'
                : 'text-gray-400 group-hover:text-orange-400'
            }`} />
          </div>
        </button>
      ))}
    </div>
  );
};

export default WeekSelector;