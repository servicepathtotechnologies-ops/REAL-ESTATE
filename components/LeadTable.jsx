'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

const STATUS_OPTS = ['Pending', 'Contacted', 'Site Visit', 'Closed', 'Lost'];

const STATUS_COLORS = {
    Pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    Contacted: 'bg-blue-100 text-blue-800 border-blue-200',
    'Site Visit': 'bg-purple-100 text-purple-800 border-purple-200',
    Closed: 'bg-green-100 text-green-800 border-green-200',
    Lost: 'bg-red-100 text-red-800 border-red-200',
};

export default function LeadTable({ leads, refreshLeads }) {
    const [updating, setUpdating] = useState(null);

    const handleStatusChange = async (id, newStatus) => {
        setUpdating(id);
        try {
            const res = await fetch('/api/update-status', {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ id, status: newStatus }),
            });
            const data = await res.json();
            if (data.success) {
                toast.success('Status updated!');
                refreshLeads();
            } else {
                toast.error('Failed to update status');
            }
        } catch (error) {
            toast.error('Network error updating status');
        }
        setUpdating(null);
    };

    if (!leads.length) {
        return (
            <div className="bg-white p-12 text-center rounded-2xl shadow-sm border border-gray-100">
                <p className="text-gray-500 font-medium">No leads found. Test the chatbot to create one!</p>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                    <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-bold tracking-wider">
                        <tr>
                            <th className="px-6 py-4">Name</th>
                            <th className="px-6 py-4">Phone</th>
                            <th className="px-6 py-4">Budget</th>
                            <th className="px-6 py-4">Property Type</th>
                            <th className="px-6 py-4">Date</th>
                            <th className="px-6 py-4 text-center">Status / Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {leads.map((lead) => (
                            <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                                <td className="px-6 py-4 font-bold text-navy">{lead.name}</td>
                                <td className="px-6 py-4 text-gray-600 font-medium">{lead.phone}</td>
                                <td className="px-6 py-4 font-medium text-navy">{lead.budget}</td>
                                <td className="px-6 py-4">
                                    <span className="bg-navy/5 text-navy px-3 py-1 rounded-full text-xs font-bold border border-navy/10">
                                        {lead.propertyType}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-gray-500 text-xs font-medium">
                                    {new Date(lead.createdAt).toLocaleString()}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <select
                                        disabled={updating === lead.id}
                                        value={lead.status}
                                        onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                                        className={`block w-full py-2 px-3 border rounded-lg text-xs font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-navy appearance-none cursor-pointer text-center ${STATUS_COLORS[lead.status] || 'bg-gray-100'}`}
                                    >
                                        {STATUS_OPTS.map(opt => (
                                            <option key={opt} value={opt} className="bg-white text-navy font-bold">{opt}</option>
                                        ))}
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
