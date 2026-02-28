import Image from "next/image";
import { BedDouble, Bath, Square, MapPin } from "lucide-react";

export default function PropertyCard({ property }) {
    return (
        <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300 border border-gray-100 group">
            <div className="relative h-64 w-full overflow-hidden">
                <Image
                    src={property.image}
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-4 right-4 bg-navy text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider shadow">
                    {property.type}
                </div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur text-navy px-4 py-2 rounded-lg font-bold text-xl shadow-lg">
                    {property.price}
                </div>
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-navy mb-2 line-clamp-1">{property.title}</h3>
                <p className="flex items-center text-gray-500 mb-4 text-sm font-medium">
                    <MapPin size={16} className="mr-1 text-gold" />
                    {property.location}
                </p>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mb-6">
                    <div className="flex items-center text-gray-600">
                        <BedDouble size={18} className="mr-2 text-navy/70" />
                        <span className="font-semibold text-sm">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Bath size={18} className="mr-2 text-navy/70" />
                        <span className="font-semibold text-sm">{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                        <Square size={18} className="mr-2 text-navy/70" />
                        <span className="font-semibold text-sm">{property.sqft} sqft</span>
                    </div>
                </div>

                <button className="w-full bg-navy/5 hover:bg-navy hover:text-white text-navy transition-colors py-3 rounded-lg font-bold text-sm tracking-wide">
                    View Details
                </button>
            </div>
        </div>
    );
}
