type Props = {
  MainZoneBackground?: string;
  MainZoneBackgroundType?: string;
  MainZoneName: string;
  TextZoneDescription: string;
  TextZoneAnimation: string;
  TextZoneAnimationType: string;
};

export default function SecondPage(Props: Props) {
  const {
    MainZoneBackground,
    MainZoneBackgroundType,
    MainZoneName,
    TextZoneDescription,
    TextZoneAnimation,
    TextZoneAnimationType,
  } = Props;

  const sectionStyle: React.CSSProperties = {
    height: "100vh",
    width: "100%",
    position: "relative",
    overflow: "hidden",
    scrollSnapAlign: "start",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const bgVideoFull = (src?: string) =>
    src ? (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ) : null;

  const sideMediaVideo = (src?: string) =>
    src ? (
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    ) : null;

  const sideMediaImage = (src?: string) =>
    src ? (
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
    ) : null;

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        overflowY: "auto",
        scrollSnapType: "y mandatory",
      }}
    >
      <section style={sectionStyle} aria-label="main-zone">
        {MainZoneBackgroundType === "video" ? (
          bgVideoFull(MainZoneBackground)
        ) : MainZoneBackground ? (
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${MainZoneBackground})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ) : null}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            color: "#fff",
            textAlign: "center",
            padding: 24,
            background: "rgba(0,0,0,0.35)",
            borderRadius: 8,
            maxWidth: "90%",
          }}
          title={MainZoneName}
        >
          <h1 style={{ margin: 0 }}>{MainZoneName}</h1>
        </div>
      </section>

      <section
        style={{
          ...sectionStyle,
          alignItems: "stretch",
          padding: 0,
        }}
        aria-label="text-zone"
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "33.3333%",
              minWidth: 220,
              padding: 40,
              boxSizing: "border-box",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background:
                "linear-gradient(to right, rgba(0,0,0,0.6), rgba(0,0,0,0.15))",
              color: "#fff",
              zIndex: 2,
            }}
          >
            <div style={{ maxWidth: 420 }}>
              <h2 style={{ marginTop: 0 }}> {MainZoneName} </h2>
              <p style={{ margin: "12px 0 0 0" }}>{TextZoneDescription}</p>
            </div>
          </div>

          <div
            style={{
              position: "relative",
              width: "66.6667%",
              display: "block",
              overflow: "hidden",
            }}
          >
            {TextZoneAnimationType === "video"
              ? sideMediaVideo(TextZoneAnimation)
              : sideMediaImage(TextZoneAnimation)}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                pointerEvents: "none",
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>

        <style>{`
          @media (max-width: 800px) {
            section[aria-label="text-zone"] > div > div:first-child {
              width: 100% !important;
              padding: 24px !important;
            }
            section[aria-label="text-zone"] > div > div:last-child {
              width: 100% !important;
              height: 50vh !important;
            }
            section[aria-label="text-zone"] > div {
              flex-direction: column !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
