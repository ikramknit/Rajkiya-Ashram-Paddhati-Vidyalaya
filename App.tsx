import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FacilityCard from './components/FacilityCard';
import ResultsChart from './components/ResultsChart';
import StaffList from './components/StaffList';
import GeminiChat from './components/GeminiChat';
import { FACILITIES } from './constants';
import { ArrowRight, Users, Trophy, Clock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section id="home" className="relative h-[600px] flex items-center justify-center text-center px-4">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://picsum.photos/1920/1080?random=school" 
              alt="School Building" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 to-slate-900/70"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-white">
            <div className="inline-block px-4 py-1 border border-orange-400/50 rounded-full bg-orange-500/20 text-orange-200 text-sm font-medium mb-6 backdrop-blur-sm">
              Est. 2008 | Operational Since 2011
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Rajkiya Ashram Paddhati Vidyalaya
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto">
              Nurturing minds and building futures with holistic education, modern facilities, and a value-based environment for the underprivileged.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#about" className="px-8 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full transition-colors flex items-center justify-center gap-2">
                Discover More <ArrowRight size={18} />
              </a>
              <a href="#contact" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-md border border-white/30 transition-colors">
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Quick Stats / About */}
        <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-6">
                  A Legacy of <span className="text-red-700">Service & Excellence</span>
                </h2>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  Rajkiya Ashram Paddhati Vidyalaya, Saharanpur was established in 2008 and became operational in 2011. With a total capacity of 490 students, we are dedicated to providing high-quality education to socially and economically challenged sections of society.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We go beyond academics by providing free uniforms, housing, daily necessities, stationery, and sports facilities. Our mission is the holistic development—academic, physical, and mental—of every child that walks through our doors.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                    <div className="flex items-center gap-2 text-orange-700 font-bold mb-1">
                      <Users size={20} />
                      <span>490+</span>
                    </div>
                    <p className="text-sm text-slate-600">Student Capacity</p>
                  </div>
                  <div className="p-4 bg-red-50 rounded-lg border-l-4 border-red-600">
                     <div className="flex items-center gap-2 text-red-700 font-bold mb-1">
                      <Trophy size={20} />
                      <span>100%</span>
                    </div>
                    <p className="text-sm text-slate-600">Board Results (Top)</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-dots-pattern opacity-20"></div>
                <img 
                  src="https://picsum.photos/800/600?random=class" 
                  alt="Classroom Interaction" 
                  className="rounded-2xl shadow-2xl object-cover h-full w-full transform hover:-translate-y-2 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section id="facilities" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange-600 font-semibold uppercase tracking-wider text-sm">Infrastructure</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">World-Class Facilities</h2>
              <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
                From smart classrooms to well-maintained hostels, we provide an environment conducive to learning and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FACILITIES.map((facility, index) => (
                <FacilityCard key={index} facility={facility} />
              ))}
            </div>
          </div>
        </section>

        {/* Academic Results */}
        <section id="results" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <h2 className="text-3xl font-bold text-slate-800 mb-4">Academic <span className="text-red-700">Excellence</span></h2>
                <p className="text-slate-600 mb-6">
                  Our students consistently perform well in Board examinations. With dedicated faculty and a focused environment, we strive for 100% pass rates year after year.
                </p>
                <div className="bg-slate-900 text-white p-6 rounded-xl shadow-lg">
                  <h4 className="font-semibold text-lg mb-2 flex items-center gap-2">
                    <Clock size={20} className="text-orange-400"/> Recent Achievement
                  </h4>
                  <div className="space-y-4 mt-4">
                    <div className="border-b border-slate-700 pb-2">
                      <div className="flex justify-between text-sm text-slate-400 mb-1">Session 2023-24</div>
                      <div className="text-2xl font-bold text-orange-400">100% <span className="text-sm text-white font-normal">Class 12 Pass</span></div>
                    </div>
                     <div>
                      <div className="flex justify-between text-sm text-slate-400 mb-1">Top Scorer (Class 12)</div>
                      <div className="text-xl font-bold">Shivam</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2">
                <ResultsChart />
              </div>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section id="staff" className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900">Our Dedicated Faculty</h2>
              <p className="text-slate-500 mt-4">The mentors shaping the future leaders.</p>
            </div>
            <StaffList />
          </div>
        </section>

      </main>

      <Footer />
      <GeminiChat />
    </div>
  );
}

export default App;
