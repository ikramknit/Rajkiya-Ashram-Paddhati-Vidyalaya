import React from 'react';
import { STAFF_DATA } from '../constants';
import { User } from 'lucide-react';

const StaffList: React.FC = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-slate-200 bg-white">
          <thead className="bg-red-50">
            <tr>
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-red-800 uppercase tracking-wider">
                Name
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-red-800 uppercase tracking-wider">
                Designation
              </th>
              <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-red-800 uppercase tracking-wider">
                Subject
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {STAFF_DATA.map((staff) => (
              <tr key={staff.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-8 w-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 mr-3">
                      <User size={16} />
                    </div>
                    <div className="text-sm font-medium text-slate-900">{staff.name}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-slate-100 text-slate-800">
                    {staff.designation}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">
                  {staff.subject}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffList;
