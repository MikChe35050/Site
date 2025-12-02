import { useState } from "react";

export default function ContactMeButton() {
  const [open, SetOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => SetOpen(true)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          padding: "10px 20px",
          fontSize: 16,
          borderRadius: 5,
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        Contact Me
      </button>
      {open && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1001,
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              padding: 20,
              borderRadius: 5,
              width: "90%",
              maxWidth: 400,
            }}
          >
            <h2>Contact Me</h2>
            <form action="mailto: " method="POST" encType="text/plain">
              <div style={{ marginBottom: 10 }}>
                <label>Name:</label>
                <input type="text" name="name" style={{ width: "100%" }} />
              </div>
              <div style={{ marginBottom: 10 }}>
                <label>Email:</label>
                <input type="email" name="email" style={{ width: "100%" }} />
              </div>
              <div style={{ marginBottom: 10 }}>
                <label>Message:</label>
                <textarea name="message" style={{ width: "100%" }} />
              </div>
              <button type="submit" style={{ marginRight: 10 }}>
                Send
              </button>
              <button type="button" onClick={() => SetOpen(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
