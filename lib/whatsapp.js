export const sendWhatsAppMessage = async (name, phone) => {
    console.log(`\n================================`);
    console.log(`📱 [WHATSAPP MOCK] Message sent to ${phone}`);
    console.log(`================================`);
    console.log(`Hi ${name}, \nThank you for your property enquiry at PrimeNest Realty.\nOur expert will call you shortly to discuss your requirements.\nQuestions? Call us: +91-9876543210\nPrimeNest Realty - Hyderabad's Trusted Property Partner`);
    console.log(`================================\n`);
    return true;
};
