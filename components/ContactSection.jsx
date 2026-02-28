'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        type: '',
        budget: '',
        location: '',
        message: '',
        agreed: false
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        // clear error on change
        if (errors[name]) {
            setErrors({ ...errors, [name]: '' });
        }
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Name is required';
        if (!formData.phone) tempErrors.phone = 'Phone number is required';
        else if (!/^[0-9]{10}$/.test(formData.phone)) tempErrors.phone = 'Invalid 10-digit number';
        if (!formData.email) tempErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Invalid email address';
        if (!formData.agreed) tempErrors.agreed = 'You must agree to be contacted';

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            // Show success
            setIsSubmitted(true);

            // Fire confetti
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#1A2B4A', '#C9A84C', '#FFFFFF']
            });

            // Mailto fallback
            const subject = encodeURIComponent(`New Property Enquiry from ${formData.name}`);
            const body = encodeURIComponent(`
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Property Type: ${formData.type || 'Not specified'}
Budget: ${formData.budget || 'Not specified'}
Location: ${formData.location || 'Not specified'}
Message: ${formData.message || 'None'}
      `);

            window.location.href = `mailto:info@primenest.in?subject=${subject}&body=${body}`;

            // Store in local storage for "welcome back"
            localStorage.setItem('primenest_user', formData.name);
        }
    };

    const userName = typeof window !== 'undefined' ? localStorage.getItem('primenest_user') : null;

    return (
        <section id="contact" className="py-24 bg-background relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-navy mb-4">
                        {userName ? `Welcome back, ${userName}!` : "Let's Find Your Dream Property"}
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Fill the form — our expert will call you within 30 minutes.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Side: Contact Info & Map */}
                    <div>
                        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
                            <h3 className="text-2xl font-bold text-navy mb-8 font-serif">Contact Information</h3>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                                    <div className="bg-gold/20 p-3 rounded-full text-gold mt-1">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg mb-1">Headquarters</h4>
                                        <p className="text-gray-600">Jubilee Hills, Hyderabad, Telangana 500033</p>
                                    </div>
                                </div>

                                <a href="tel:+919876543210" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                                    <div className="bg-gold/20 p-3 rounded-full text-gold mt-1 group-hover:bg-gold group-hover:text-white transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg mb-1">Phone</h4>
                                        <p className="text-gray-600 group-hover:text-gold transition-colors">+91 98765 43210</p>
                                    </div>
                                </a>

                                <a href="mailto:info@primenest.in" className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors group">
                                    <div className="bg-gold/20 p-3 rounded-full text-gold mt-1 group-hover:bg-gold group-hover:text-white transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-navy text-lg mb-1">Email</h4>
                                        <p className="text-gray-600 group-hover:text-gold transition-colors">info@primenest.in</p>
                                    </div>
                                </a>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h4 className="font-bold text-navy mb-4">Follow Us</h4>
                                <div className="flex gap-4">
                                    <a href="#" className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Facebook size={20} /></a>
                                    <a href="#" className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Instagram size={20} /></a>
                                    <a href="#" className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Linkedin size={20} /></a>
                                    <a href="#" className="w-12 h-12 bg-navy text-white rounded-full flex items-center justify-center hover:bg-gold transition-colors"><Youtube size={20} /></a>
                                </div>
                            </div>
                        </div>

                        {/* Map Embed - Jubilee Hills */}
                        <div className="h-64 rounded-2xl overflow-hidden shadow-xl border border-gray-100">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15226.32431792444!2d78.40114!3d17.4307525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb914619b027c9%3A0xe2130e527d91e605!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Right Side: Form */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 relative overflow-hidden">
                        {isSubmitted ? (
                            <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in duration-500">
                                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle2 size={48} />
                                </div>
                                <h3 className="text-3xl font-serif font-bold text-navy mb-4">🎉 Thank You, {formData.name}!</h3>
                                <p className="text-lg text-gray-600 mb-8 max-w-md">
                                    Your enquiry has been received perfectly. Our property expert will call you at <strong className="text-navy">{formData.phone}</strong> within 30 minutes to discuss your requirements.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        setFormData({ ...formData, message: '' }); // keep basic details for next enquiry
                                    }}
                                    className="bg-navy hover:bg-navy/90 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                                >
                                    Submit Another Enquiry
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-2">Full Name *</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`w-full p-4 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-gold transition-all`}
                                        placeholder="E.g. Ravi Sharma"
                                    />
                                    {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name}</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Phone Number *</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`w-full p-4 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-gold transition-all`}
                                            placeholder="10-digit mobile number"
                                        />
                                        {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone}</p>}
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full p-4 rounded-xl border ${errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-gold transition-all`}
                                            placeholder="ravi@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Property Type</label>
                                        <select
                                            name="type"
                                            value={formData.type}
                                            onChange={handleChange}
                                            className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                                        >
                                            <option value="">Select Type</option>
                                            <option value="Apartment">Apartment</option>
                                            <option value="Villa">Villa</option>
                                            <option value="Plot">Plot</option>
                                            <option value="Commercial">Commercial</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-2">Budget Range</label>
                                        <select
                                            name="budget"
                                            value={formData.budget}
                                            onChange={handleChange}
                                            className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                                        >
                                            <option value="">Select Budget</option>
                                            <option value="Under ₹50L">Under ₹50L</option>
                                            <option value="₹50L–1Cr">₹50L–1Cr</option>
                                            <option value="₹1Cr–3Cr">₹1Cr–3Cr</option>
                                            <option value="₹3Cr+">₹3Cr+</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-navy mb-2">Preferred Location</label>
                                    <select
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                                    >
                                        <option value="">Any Location</option>
                                        <option value="Kondapur">Kondapur</option>
                                        <option value="Jubilee Hills">Jubilee Hills</option>
                                        <option value="Banjara Hills">Banjara Hills</option>
                                        <option value="Gachibowli">Gachibowli</option>
                                        <option value="HITEC City">HITEC City</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-navy mb-2">Message / Requirements</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="3"
                                        className="w-full p-4 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gold transition-all resize-none"
                                        placeholder="Tell us what you are looking for..."
                                    ></textarea>
                                </div>

                                <div className="flex items-start gap-3">
                                    <input
                                        type="checkbox"
                                        name="agreed"
                                        id="agreed"
                                        checked={formData.agreed}
                                        onChange={handleChange}
                                        className="mt-1 w-5 h-5 accent-gold cursor-pointer"
                                    />
                                    <label htmlFor="agreed" className={`text-sm ${errors.agreed ? 'text-red-500' : 'text-gray-600'} cursor-pointer`}>
                                        I agree to be contacted by PrimeNest Realty regarding property offers and updates.
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-gold hover:bg-yellow-500 text-navy font-bold text-lg p-5 rounded-xl transition-all shadow-md mt-4 shadow-gold/20"
                                >
                                    Send My Enquiry →
                                </button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
