"use client";
import dynamic from "next/dynamic";
import { useState } from "react";

// Disable SSR for Spline
const Spline = dynamic(() => import("@splinetool/react-spline"), { ssr: false });

const scenes = [
    { id: 1, url: "https://prod.spline.design/yxjkoyT5oby9JLPy/scene.splinecode", name: "Scene 1" },
    { id: 2, url: "https://prod.spline.design/G46bcMRddu7fV2GY/scene.splinecode", name: "Game 1" },
    { id: 3, url: "https://prod.spline.design/kq0Sk-NbtEC7Gdkc/scene.splinecode", name: "Game 2" }
];

export default function SplineView() {
    const [selectedScene, setSelectedScene] = useState(scenes[0].url);
    const [buttonsVisible, setButtonsVisible] = useState(true);
    const [loading, setLoading] = useState(true);

    const handleSceneChange = (url) => {
        setSelectedScene(url);
        setButtonsVisible(false);
        setLoading(true);
    };

    return (
        <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
            {loading && (
                <div style={{
                    position: "absolute", width: "100vw", height: "100vh",
                    background: "#000", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                    zIndex: 999, color: "#fff", fontSize: "20px", fontWeight: "bold"
                }}>
                    <div className="cool-loader"></div>
                    <p style={{ marginTop: "15px" }}>Loading...</p>
                </div>
            )}

            {buttonsVisible && (
                <div style={{
                    position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                    display: "flex", gap: "15px", zIndex: 1000, background: "rgba(0, 0, 0, 0.7)",
                    padding: "15px 20px", borderRadius: "12px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)"
                }}>
                    {scenes.slice(1).map(scene => (
                        <button
                            key={scene.id} onClick={() => handleSceneChange(scene.url)}
                            style={{
                                padding: "12px 20px", cursor: "pointer", background: "linear-gradient(135deg, #ff7eb3, #ff758c)",
                                color: "#fff", border: "none", borderRadius: "8px", fontSize: "16px",
                                fontWeight: "bold", transition: "0.3s ease-in-out",
                                boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)"
                            }}
                            onMouseOver={(e) => e.target.style.opacity = "0.8"}
                            onMouseOut={(e) => e.target.style.opacity = "1"}
                        >
                            {scene.name}
                        </button>
                    ))}
                </div>
            )}

            <div style={{ width: "100vw", height: "100vh" }}>
                <Spline scene={selectedScene} onLoad={() => setLoading(false)} />
            </div>
            
            <Spline scene="https://prod.spline.design/U-0mKQBHIpiTKr3z/scene.splinecode" />

            <style jsx>{`
                .cool-loader {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background: radial-gradient(circle, rgba(255,0,150,1) 0%, rgba(0,204,255,1) 100%);
                    box-shadow: 0 0 20px rgba(255, 0, 150, 0.8), 0 0 40px rgba(0, 204, 255, 0.8);
                    animation: pulse 1.5s infinite alternate, rotate 1s linear infinite;
                }

                @keyframes pulse {
                    0% { transform: scale(1); opacity: 0.7; }
                    100% { transform: scale(1.2); opacity: 1; }
                }

                @keyframes rotate {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
}
