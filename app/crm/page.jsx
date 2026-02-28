'use client';

import { useState, useEffect, useCallback } from 'react';
import StatsCard from '@/components/StatsCard';
import LeadTable from '@/components/LeadTable';
import { RefreshCw, LayoutDashboard } from 'lucide-react';
import toast from 'react-hot-toast';

export default function CRM() {
    const [leads, setLeads] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);

    const fetchLeads = useCallback(async (isRefresh = false) => {
        if (isRefresh) setRefreshing(true);
        try {
            const res = await fetch('/api/leads');
            const data = await res.json();
            if (data.success) {
                setLeads(data.leads || []);
            } else {
                toast.error('Failed to load leads');
            }
        } catch (error) {
            toast.error('Network error. Check connection.');
        } finally {
            setLoading(false);
            if (isRefresh) setRefreshing(false);
        }
    }, []);

    useEffect(() => {
        fetchLeads();

        // Optional auto-refresh every 30s as per PRD
        const interval = setInterval(() => {
            fetchLeads();
        }, 30000);
        return () => clearInterval(interval);
    }, [fetchLeads]);

    const stats = {
        Total: leads.length,
        Pending: leads.filter(l => l.status === 'Pending').length,
        Contacted: leads.filter(l => l.status === 'Contacted').length,
        'Site Visit': leads.filter(l => l.status === 'Site Visit').length,
        Closed: leads.filter(l => l.status === 'Closed').length,
        Lost: leads.filter(l => l.status === 'Lost').length,
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col p-4 md:p-8 w-full mt-2 lg:mt-6">
            <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col gap-8">

                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-gray-200 pb-6">
                    <div className="flex items-center gap-3">
                        <LayoutDashboard className="text-gold" size={32} />
                        <h1 className="text-3xl font-extrabold text-navy tracking-tight">CRM Dashboard</h1>
                    </div>
                    <button
                        onClick={() => fetchLeads(true)}
                        disabled={refreshing}
                        className="flex items-center gap-2 bg-white hover:bg-gray-100 text-navy px-4 py-2 border border-gray-200 rounded-lg shadow-sm font-bold text-sm transition-all"
                    >
                        <RefreshCw size={16} className={refreshing ? 'animate-spin text-gold' : 'text-gray-500'} />
                        {refreshing ? 'Refreshing...' : 'Refresh Data'}
                    </button>
                </div>

                {loading ? (
                    <div className="flex-1 flex justify-center items-center h-64">
                        <div className="w-12 h-12 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {Object.entries(stats).map(([title, count]) => (
                                <StatsCard key={title} title={title} count={count} />
                            ))}
                        </div>

                        <div className="flex-1">
                            <h2 className="text-xl font-bold text-navy mb-4 px-1 inline-flex items-center gap-2">
                                Recent Leads
                            </h2>
                            <LeadTable leads={leads} refreshLeads={fetchLeads} />
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
