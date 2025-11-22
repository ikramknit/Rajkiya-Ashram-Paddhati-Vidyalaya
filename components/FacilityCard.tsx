import React from 'react';
import { Monitor, FlaskConical, BookOpen, Home, Utensils, Activity, LucideIcon } from 'lucide-react';
import { Facility } from '../types';

const iconMap: Record<string, LucideIcon> = {
  Monitor,
  FlaskConical,
  BookOpen,
  Home,
  Utensils,
  Activity
};

interface FacilityCardProps {
  facility: Facility;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ facility }) => {
  const Icon = iconMap[facility.iconName] || Home;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <img
          src={facility.image}
          alt={facility.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 text-white">
          <div className="bg-orange-500 p-2 rounded-lg shadow-md">
             <Icon size={20} />
          </div>
          <h3 className="font-bold text-lg">{facility.title}</h3>
        </div>
      </div>
      <div className="p-6 flex-grow">
        <p className="text-slate-600 leading-relaxed">
          {facility.description}
        </p>
      </div>
    </div>
  );
};

export default FacilityCard;
