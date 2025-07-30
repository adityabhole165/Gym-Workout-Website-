import React from 'react';
import { Calendar } from 'lucide-react';

interface DaySelectorProps {
  days: string[];
  selectedDay: number;
  onDaySelect: (day: number) => void;
}

const DaySelector: React.FC<DaySelectorProps> = ({ days, selectedDay, onDaySelect }) => {
  const dayColors = [
    'from-red-400 to-red-500',
    'from-blue-400 to-blue-500',
    'from-green-400 to-green-500',
    'from-purple-400 to-purple-500',
    'from-pink-400 to-pink-500',
    'from-indigo-400 to-indigo-500',
    'from-gray-400 to-gray-500'
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
        <Calendar className="w-6 h-6 mr-2 text-orange-500" />
        Select Day
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {days.map((day, index) => (
          <button
            key={index}
            onClick={() => onDaySelect(index)}
            className={`group relative p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 hover:shadow-md ${
              selectedDay === index
                ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-orange-100 shadow-md'
                : 'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50'
            }`}
          >
            <div className={`w-full h-2 rounded-full mb-3 bg-gradient-to-r ${dayColors[index]} opacity-60`}></div>
            <h3 className={`font-semibold text-sm md:text-base transition-colors ${
              selectedDay === index
                ? 'text-orange-700'
                : 'text-gray-700 group-hover:text-orange-600'
            }`}>
              {day}
            </h3>
            <div className={`mt-2 text-xs transition-colors ${
              selectedDay === index
                ? 'text-orange-600'
                : 'text-gray-500 group-hover:text-orange-500'
            }`}>
              {selectedDay === index ? 'Selected' : 'Click to select'}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DaySelector;