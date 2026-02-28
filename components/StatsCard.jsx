import { Users, PhoneCall, CalendarCheck, CheckCircle2, XCircle } from 'lucide-react';

const icons = {
    Total: <Users className="text-gray-500" size={24} />,
    Pending: <PhoneCall className="text-yellow-500" size={24} />,
    Contacted: <PhoneCall className="text-blue-500" size={24} />,
    'Site Visit': <CalendarCheck className="text-purple-500" size={24} />,
    Closed: <CheckCircle2 className="text-green-500" size={24} />,
    Lost: <XCircle className="text-red-500" size={24} />,
};

const bgColors = {
    Total: 'bg-gray-100',
    Pending: 'bg-yellow-50',
    Contacted: 'bg-blue-50',
    'Site Visit': 'bg-purple-50',
    Closed: 'bg-green-50',
    Lost: 'bg-red-50',
};

export default function StatsCard({ title, count }) {
    return (
        <div className={`p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between transition-transform hover:scale-105 duration-300 ${bgColors[title] || 'bg-white'}`}>
            <div>
                <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">{title}</p>
                <p className="text-3xl font-extrabold text-navy">{count}</p>
            </div>
            <div className="bg-white p-3 rounded-xl shadow-sm">
                {icons[title] || icons.Total}
            </div>
        </div>
    );
}
