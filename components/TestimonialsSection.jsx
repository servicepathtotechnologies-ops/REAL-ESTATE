'use client';

import { Star } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
    {
        id: 1,
        name: 'Rajesh Reddy',
        subtitle: 'Purchased 3BHK in Kondapur',
        quote: "The level of transparency and professionalism at PrimeNest is unmatched. They helped us find a property that perfectly matched our budget and lifestyle. The whole process was completely hassle-free.",
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    {
        id: 2,
        name: 'Priya Sharma',
        subtitle: 'Rented office in HITEC City',
        quote: "Finding a commercial space in HITEC City was proving difficult until we contacted PrimeNest. Their relationship manager was proactive and negotiated a fantastic deal for our growing startup.",
        img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    {
        id: 3,
        name: 'Anand Kumar',
        subtitle: 'Invested in Kokapet Plot',
        quote: "PrimeNest's market insights were spot on. I invested in a plot in Kokapet based on their recommendation last year, and the appreciation has already exceeded my expectations.",
        img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    {
        id: 4,
        name: 'Sneha Desai',
        subtitle: 'Purchased 4BHK Villa in Jubilee Hills',
        quote: "Moving to a new city is tough, but the team made us feel right at home. They showed us only the most premium properties and handled all the legal paperwork seamlessly. Truly a luxury service.",
        img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
    },
    {
        id: 5,
        name: 'Vikram Singh',
        subtitle: 'Sold property in Madhapur',
        quote: "I listed my apartment with PrimeNest and it was sold within 3 weeks at a great price. Their marketing and network of serious buyers are highly impressive.",
        img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
    }
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-24 bg-navy overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
                    What Our Clients Say
                </h2>
                <p className="text-gold text-lg max-w-2xl mx-auto">
                    Don&apos;t just take our word for it. Hear from families and businesses who found their perfect space with us.
                </p>
            </div>

            <div className="relative">
                <div className="flex animate-scroll hover:[animation-play-state:paused] gap-6 w-max px-4">
                    {/* Double the array to create continuous seamless scrolling */}
                    {[...testimonials, ...testimonials].map((testimonial, idx) => (
                        <div
                            key={`${testimonial.id}-${idx}`}
                            className="w-[350px] md:w-[450px] bg-white rounded-2xl p-8 shadow-xl flex-shrink-0 border border-gold/10 relative"
                        >
                            <div className="flex text-gold mb-6 gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <Star key={i} size={18} fill="currentColor" />
                                ))}
                            </div>
                            <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">
                                "{testimonial.quote}"
                            </p>

                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6 mt-auto">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold/30">
                                    <Image
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-bold text-navy">{testimonial.name}</h4>
                                    <p className="text-sm text-gray-500">{testimonial.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
