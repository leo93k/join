"use client";

import { useRef } from "react";

export default function Home() {
    const hasTrackedClick = useRef(false);

    const handleClick = () => {
        alert("지금 서비스가 준비중이에요!");

        if (!hasTrackedClick.current && typeof window !== "undefined") {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const gtag = (window as any).gtag;
            if (gtag) {
                gtag("event", "join_button_click");
                hasTrackedClick.current = true;
            }
        }
    };

    return (
        <div
            className="flex justify-center"
            style={{
                backgroundColor: "#333",
                minHeight: "100vh",
                maxWidth: "500px",
                margin: "0 auto",
                position: "relative",
            }}
        >
            <img src="/img/join.png" alt="logo" style={{ width: "100%" }} />

            <div
                style={{
                    position: "absolute",
                    bottom: "0px",
                    width: "100%",
                    display: "flex",
                    height: "90px",
                    justifyContent: "center",
                    alignItems: "center",
                    background:
                        "linear-gradient(rgba(0,0,0,0.0), rgba(0,0,0,0.9), rgba(0,0,0,1)) ",
                    padding: "0 20px",
                }}
            >
                <button
                    className="submit-button"
                    style={{
                        width: "100%",
                        height: 54,
                        background: "#4CEF82",
                        borderRadius: "300px",
                        fontWeight: "bold",
                        color: "#000",
                        fontSize: "16px",
                    }}
                    onClick={handleClick}
                >
                    지금 시작하기
                </button>
            </div>
        </div>
    );
}
