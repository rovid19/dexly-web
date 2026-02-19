import { mascotLoadingDown, mascotLoadingUp } from "../icons";

const Ani = () => {
  return (
    <div style={{ position: "relative", width: 128, height: 128 }}>
      <style>{`
        @keyframes mascotDown {
          0%, 100% { opacity: 1; transform: scale(1.04); }
          50% { opacity: 0; transform: scale(1); }
        }
        @keyframes mascotUp {
          0%, 100% { opacity: 0; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.04); }
        }
        .mascot-svg svg { width: 100%; height: 100%; }
      `}</style>
      <div
        className="mascot-svg"
        style={{
          position: "absolute",
          inset: 0,
          animation: "mascotDown 800ms linear infinite",
        }}
        dangerouslySetInnerHTML={{ __html: mascotLoadingDown }}
      />
      <div
        className="mascot-svg"
        style={{
          position: "absolute",
          inset: 0,
          animation: "mascotUp 1000ms linear infinite",
        }}
        dangerouslySetInnerHTML={{ __html: mascotLoadingUp }}
      />
    </div>
  );
};

export default Ani;
