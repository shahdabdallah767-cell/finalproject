import React from 'react'
import { LiaTruckSolid, LiaShieldAltSolid, LiaRedoSolid, LiaHeadsetSolid } from "react-icons/lia";

const features = [
    {
        icon: <LiaTruckSolid className="text-2xl text-[#0aad0a]" />,
        title: "Free Shipping",
        desc: "From all orders over $100"
    },
    {
        icon: <LiaShieldAltSolid className="text-2xl text-[#0aad0a]" />,
        title: "Secure Payment",
        desc: "100% secure payment"
    },
    {
        icon: <LiaRedoSolid className="text-2xl text-[#0aad0a]" />,
        title: "Easy Returns",
        desc: "10 days return policy"
    },
    {
        icon: <LiaHeadsetSolid className="text-2xl text-[#0aad0a]" />,
        title: "24/7 Support",
        desc: "Dedicated support team"
    }
]

export default function Features() {
    return (
        <div className="px-6 md:px-20 py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4 p-6 bg-gray-50 rounded-xl transition-all hover:shadow-md border border-transparent hover:border-gray-100">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-sm text-gray-800">{feature.title}</h3>
                            <p className="text-[12px] text-gray-500">{feature.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
