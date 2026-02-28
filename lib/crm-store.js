export let leads = [];

export const saveLeadToStore = (leadData) => {
    const newLead = {
        ...leadData,
        id: `lead_${Date.now()}`,
        status: 'Pending',
        createdAt: new Date().toISOString()
    };
    leads.unshift(newLead);
    return newLead;
};

export const updateLeadStatus = (id, status) => {
    const lead = leads.find(l => l.id === id);
    if (lead) {
        lead.status = status;
        return true;
    }
    return false;
};

export const getLeadsStore = () => leads;
