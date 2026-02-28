import Image from "next/image";
import { BedDouble, Bath, Square, MapPin } from "lucide-react";
import Link from 'next/link';

export default function PropertyCard({ property }) {
    const statusColor =
        property.status === 'New Launch' ? 'bg-blue-500 text-white' :
            property.status === 'Hot Deal' ? 'bg-red-500 text-white' :
                'bg-green-500 text-white';

    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:-translate-y-1">
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Badges */}
                <div className="absolute top-4 left-4 bg-gold text-navy text-xs font-bold px-3 py-1.5 rounded-md shadow-md uppercase tracking-wide">
                    {property.type}
                </div>
                {property.status && (
                    <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-md shadow-md ${statusColor}`}>
                        {property.status}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-navy mb-2 line-clamp-1 group-hover:text-gold transition-colors">{property.title}</h3>
                <p className="flex items-center text-gray-500 mb-4 text-sm font-medium border-b border-gray-100 pb-4">
                    <MapPin size={16} className="mr-1 text-gold" />
                    {property.location}
                </p>

                {/* Specs */}
                <div className="flex items-center justify-between pt-2 mb-6 text-gray-600">
                    {property.type !== 'Plot' && (
                        <>
                            <div className="flex items-center gap-1.5 font-medium">
                                <BedDouble size={16} className="text-navy/60" />
                                <span className="text-sm">{property.beds} Beds</span>
                            </div>
                            <div className="flex items-center gap-1.5 font-medium">
                                <Bath size={16} className="text-navy/60" />
                                <span className="text-sm">{property.baths} Baths</span>
                            </div>
                        </>
                    )}
                    <div className="flex items-center gap-1.5 font-medium">
                        <Square size={16} className="text-navy/60" />
                        <span className="text-sm">{property.sqft} sqft</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <div className="text-navy font-extrabold text-2xl tracking-tight">{property.price}</div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 mt-auto">
                    <Link href={`#contact`} className="text-center bg-white border border-navy text-navy font-semibold py-2.5 rounded-lg hover:bg-navy hover:text-white transition-colors text-sm">
                        View Details
                    </Link>
                    <Link href={`#contact`} className="text-center bg-gold hover:bg-yellow-500 text-navy font-bold py-2.5 rounded-lg transition-colors text-sm shadow-md">
                        Enquire
                    </Link>
                </div>
            </div>
        </div>
    );
}
