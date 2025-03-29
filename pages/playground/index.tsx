"use client";
import Spline from '@splinetool/react-spline';
import { useState } from 'react';
import { Curve } from '@/components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const games = [
    { 
        id: 1, 
        name: "Game 1", 
        scene: "https://prod.spline.design/s5VgRsBwm7mq-Wqm/scene.splinecode",
        image: "/nuke.png"
    },
    { 
        id: 2, 
        name: "Game 2", 
        scene: "https://prod.spline.design/G46bcMRddu7fV2GY/scene.splinecode",
        image: "/nuke.png"
    },
    { 
        id: 3, 
        name: "Game 3", 
        scene: "https://prod.spline.design/kq0Sk-NbtEC7Gdkc/scene.splinecode",
        image: "/nuke.png"
    },
    { 
        id: 4, 
        name: "Game 4", 
        scene: "https://prod.spline.design/yxjkoyT5oby9JLPy/scene.splinecode",
        image: "/nuke.png"
    },
    { 
        id: 5, 
        name: "Game 5", 
        scene: "https://prod.spline.design/U-0mKQBHIpiTKr3z/scene.splinecode",
        image: "/nuke.png"
    }
];

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedGame, setSelectedGame] = useState<string | null>(null);

    return (
        <Curve backgroundColor="#f1f1f1">
            <main className="w-screen h-screen relative">
                {!selectedGame ? (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0A0A] z-50">
                        {/* Modern Grid Pattern Background */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
                        
                        {/* Subtle Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]" />
                        
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-12 relative z-10"
                        >
                            <h1 className="text-white text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
                                Game Selection
                            </h1>
                            <p className="text-white/50 text-lg">Choose your adventure</p>
                        </motion.div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full px-4 relative z-10">
                            {games.map((game, index) => (
                                <motion.button
                                    key={game.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    onClick={() => {
                                        setSelectedGame(game.scene);
                                        setIsLoading(true);
                                    }}
                                    className="group relative overflow-hidden rounded-xl bg-white/5 
                                             hover:bg-white/10 transition-all duration-300 
                                             transform hover:scale-105
                                             border border-white/5 backdrop-blur-sm"
                                >
                                    {/* Image Container */}
                                    <div className="relative w-full h-48 overflow-hidden">
                                        <Image
                                            src={game.image}
                                            alt={game.name}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    </div>
                                    
                                    {/* Content */}
                                    <div className="p-6">
                                        <h2 className="text-2xl font-bold text-white mb-2">{game.name}</h2>
                                        <div className="flex items-center text-white/40 text-sm">
                                            <span className="mr-2">▶</span>
                                            <span>Click to Play</span>
                                        </div>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </div>
                ) : (
                    <>
                        {isLoading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A0A0A] z-50">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-center"
                                >
                                    <div className="text-white text-xl mb-6">Loading...</div>
                                    <div className="text-white/40 text-sm space-y-2">
                                        <p className="font-semibold text-white/70">Controls:</p>
                                        <p>Click and Drag - Rotate View</p>
                                        <p>WASD - Movement</p>
                                        <p>↑↓ - Camera Angles</p>
                                    </div>
                                </motion.div>
                            </div>
                        )}
                        <Spline
                            scene={selectedGame}
                            onLoad={() => setIsLoading(false)}
                        />
                        <motion.button
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => {
                                setSelectedGame(null);
                                setIsLoading(false);
                            }}
                            className="absolute top-20 right-4 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-lg 
                                     backdrop-blur-sm transition-all duration-300 z-50 border border-white/5"
                        >
                            Back to Menu
                        </motion.button>
                    </>
                )}
            </main>
        </Curve>
    );
}
