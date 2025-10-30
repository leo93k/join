"use client";

export default function Home() {
    return (
        <div
            className="flex justify-center"
            style={{ backgroundColor: "#333", minHeight: "100vh" }}
        >
            <img src="/img/join.png" alt="logo" style={{ width: "100%" }} />
            <button
                className="submit-button"
                style={{
                    width: 252,
                    height: 54,
                    bottom: "50px",
                    backgroundColor: "#EFA64C",
                    position: "fixed",
                }}
                onClick={() => {
                    alert("지금 서비스가 준비중이에요!");
                }}
            >
                지금 시작하기
            </button>
        </div>
    );
}
