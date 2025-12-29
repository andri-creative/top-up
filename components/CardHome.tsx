"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import Image from "next/image";

const tabs = [
    { id: "topup", label: "Top Up Game" },
    { id: "ml", label: "Mobile Legend" },
    { id: "login", label: "Via Login" },
    { id: "voucher", label: "Voucher" },
    { id: "premium", label: "Premium" },
];

export default function CardHome() {
    const [activeTab, setActiveTab] = useState("topup");
    const [showAll, setShowAll] = useState(false)

    const data = [...Array(20)]
    const visibleData = showAll ? data : data.slice(0, 12)

    return (
        <div className="mt-6">
            <h1 className="text-xl md:text-3xl font-bold text-primary mb-4">
                TEMUKAN PRODUK FAVORIT KAMU
            </h1>
            <div className="flex gap-2 flex-wrap mb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 py-2 rounded-lg text-sm md:text-base transition ${activeTab === tab.id ? "font-bold text-primary border-b-2 border-primary" : "font-semibold text-foreground hover:text-primary"}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="mt-4 ">
                {activeTab === "topup" && (
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
                            {visibleData.map((_, i) => (
                                <Card key={i}
                                    className="w-[150px] sm:w-[180px] md:w-[220px] card-gaming cursor-pointer rounded-xl md:rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition p-0 gap-0">
                                    <CardHeader className="p-0">
                                        <div
                                            className="relative w-full h-[160px] sm:h-[200px] md:h-[260px]"
                                        >
                                            <Image
                                                src="https://sin1.contabostorage.com/0a986eb902c4469cb860e43985eb18a1:vocapanel/lapakhuda/MLBB-NEW_11zon-0a27-original.jpg"
                                                alt="Mobile Legends"
                                                fill
                                                className="object-cover"
                                                priority
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="text-center md:py-2 md:px-2">
                                        <h3
                                            className="font-bold text-white text-xs sm:text-sm md:text-base leading-tight"
                                        >
                                            Mobile Legends: Bang Bang
                                        </h3>
                                        <p
                                            className="text-white/70 text-[10px] sm:text-xs md:text-sm mt-0.5"
                                        >
                                            Moonton
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <div className="flex justify-center">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="px-6 py-2 rounded-full font-bold text-sm bg-primary text-white hover:scale-105 transition">
                                {showAll ? 'Lihat sedikit' : 'Lihat semuanya'}
                            </button>
                        </div>
                    </div>
                )}
                {activeTab === "ml" && <p>🎮 Mobile Legend Items</p>}
                {activeTab === "login" && <p>🔐 Login-based Top Up</p>}
                {activeTab === "voucher" && <p>🎫 Voucher Digital</p>}
                {activeTab === "premium" && <p>💎 Akun Premium</p>}
            </div>
        </div>
    );
}
