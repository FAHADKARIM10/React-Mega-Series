import { useState } from "react";

export default function IconExample() {
  // Step 1: Create a state variable called "isLiked" (default: false)
  const [isLiked, setIsLiked] = useState(false);

  // Step 2: Create a function to toggle the like state
  const toggleLike = () => {
    // This flips the value: if true → false, if false → true
    setIsLiked((prev) => !prev);
  };

  // Step 3: Return the JSX (UI structure)
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* 
        - "onClick" runs the toggleLike() function when clicked 
        - "role" & "tabIndex" make it keyboard-accessible
      */}
      <p
        onClick={toggleLike}
        role="button"
        tabIndex={0}
        aria-pressed={isLiked}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggleLike();
          }
        }}
        style={{
          cursor: "pointer",
          display: "inline-block",
          userSelect: "none",
          transition: "transform 0.2s ease",
        }}
      >
        {/* 
          The Font Awesome thumbs-up icon 
          Color changes based on the "isLiked" state 
        */}
        <i
          className="fa-solid fa-thumbs-up"
          style={{
            fontSize: "40px",
            color: isLiked ? "#2563eb" : "#6b7280", // blue when liked, gray when not
            transition: "color 0.3s ease, transform 0.2s ease",
            transform: isLiked ? "scale(1.2)" : "scale(1)",
          }}
        />
      </p>

      {/* Optional text below the icon */}
      <p style={{ fontSize: "18px", color: "#374151" }}>
        {isLiked ? "You liked this!" : "Click to like"}
      </p>
    </div>
  );
}





