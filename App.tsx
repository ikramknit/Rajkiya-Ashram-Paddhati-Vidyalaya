import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FacilityCard from './components/FacilityCard';
import ResultsChart from './components/ResultsChart';
import StaffList from './components/StaffList';
import GeminiChat from './components/GeminiChat';
import { FACILITIES, EVENTS } from './constants';
import { ArrowRight, Users, Trophy, Clock, Calendar, Star } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <Header />
      
      <main className="flex-grow">
        
        {/* Hero Section */}
        <section id="home" className="relative h-[650px] flex items-center justify-center text-center px-4 overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1920&auto=format&fit=crop" 
              alt="School Building" 
              className="w-full h-full object-cover scale-105 animate-slow-zoom"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-red-900/70 to-slate-900/90"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-white pt-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-orange-400/40 rounded-full bg-orange-950/30 text-orange-300 text-sm font-medium mb-8 backdrop-blur-md">
              <Star size={14} className="fill-current" />
              Est. 2008 | Operational Since 2011
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight drop-shadow-lg">
              Rajkiya Ashram <br className="hidden md:block"/> Paddhati Vidyalaya
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
              Empowering the future through holistic free residential education. 
              Nurturing minds, building character, and creating opportunities for the underprivileged.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#about" className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 flex items-center gap-2 min-w-[160px] justify-center">
                Explore Campus <ArrowRight size={18} />
              </a>
              <a href="#results" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full backdrop-blur-md border border-white/20 transition-all hover:-translate-y-1 min-w-[160px]">
                View Results
              </a>
            </div>
          </div>
        </section>

        {/* Quick Stats / About */}
        <section id="about" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-slate-50 to-white"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block mb-4">
                   <span className="text-red-600 font-bold uppercase tracking-wider text-sm border-b-2 border-red-600 pb-1">About Us</span>
                </div>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  A Legacy of <span className="text-red-700">Excellence & Service</span>
                </h2>
                <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                  Rajkiya Ashram Paddhati Vidyalaya, Saharanpur is a beacon of hope and learning. Established by the Samaj Kalyan Vibhag, Uttar Pradesh, we are dedicated to providing high-quality education to socially and economically challenged sections of society.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We go beyond academics by providing free uniforms, housing, daily necessities, stationery, and sports facilities. Our mission is the holistic development—academic, physical, and mental—of every child that walks through our doors.
                </p>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-5 bg-orange-50 rounded-xl border-l-4 border-orange-500 shadow-sm">
                    <div className="flex items-center gap-2 text-orange-700 font-bold mb-2 text-xl">
                      <Users size={24} />
                      <span>490+</span>
                    </div>
                    <p className="text-sm font-medium text-slate-600">Student Capacity</p>
                  </div>
                  <div className="p-5 bg-red-50 rounded-xl border-l-4 border-red-600 shadow-sm">
                     <div className="flex items-center gap-2 text-red-700 font-bold mb-2 text-xl">
                      <Trophy size={24} />
                      <span>100%</span>
                    </div>
                    <p className="text-sm font-medium text-slate-600">Board Success Rate</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-dots-pattern opacity-20 text-orange-500"></div>
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-red-100 rounded-full opacity-50"></div>
                <img 
                  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800&auto=format&fit=crop" 
                  alt="Classroom Interaction" 
                  className="rounded-2xl shadow-2xl object-cover h-full w-full transform hover:scale-[1.02] transition-transform duration-500 relative z-10"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section id="facilities" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Infrastructure</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">World-Class Facilities</h2>
              <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
              <p className="text-slate-600 mt-6 max-w-2xl mx-auto text-lg">
                From smart classrooms to well-maintained hostels, we provide an environment conducive to learning, safety, and growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FACILITIES.map((facility, index) => (
                <FacilityCard key={index} facility={facility} />
              ))}
            </div>
          </div>
        </section>

        {/* Life at Ashram (Events) */}
        <section id="gallery" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <span className="text-orange-600 font-bold uppercase tracking-wider text-sm">Gallery & Events</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">Life at Ashram</h2>
              </div>
              <p className="text-slate-500 max-w-md mt-4 md:mt-0 md:text-right">
                Glimpses of activities, camps, and initiatives that make our school vibrant.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {EVENTS.map((event, idx) => (
                <div key={idx} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-slate-100">
                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                    <img 
                      src={event.image} 
                      alt={event.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg">
                      <Calendar size={16} className="text-red-600" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-lg text-slate-900 mb-2 group-hover:text-red-700 transition-colors line-clamp-1">{event.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Results */}
        <section id="results" className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <h2 className="text-3xl font-bold text-slate-800 mb-4">Academic <span className="text-red-700">Excellence</span></h2>
                  <div className="w-12 h-1 bg-orange-500 mb-6 rounded-full"></div>
                  <p className="text-slate-600 mb-8 text-lg">
                    Our students consistently perform well in Board examinations. With dedicated faculty and a focused environment, we strive for 100% pass rates year after year.
                  </p>
                  <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Trophy size={120} />
                    </div>
                    <h4 className="font-semibold text-xl mb-6 flex items-center gap-3">
                      <Clock size={24} className="text-orange-400"/> Recent Highlight
                    </h4>
                    <div className="space-y-6 relative z-10">
                      <div className="border-b border-slate-700 pb-4">
                        <div className="flex justify-between text-sm text-slate-400 mb-1">Session 2023-24</div>
                        <div className="text-4xl font-bold text-orange-400">100%</div>
                        <div className="text-sm text-slate-300 mt-1">Class 12 Pass Rate</div>
                      </div>
                       <div>
                        <div className="flex justify-between text-sm text-slate-400 mb-2">Top Scorer (Class 12)</div>
                        <div className="text-2xl font-bold flex items-center gap-2">
                          Shivam <span className="text-xs bg-green-600 px-2 py-0.5 rounded text-white">Topper</span>
                        </div>
                      </div>
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
        <section id="staff" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Our Dedicated Faculty</h2>
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