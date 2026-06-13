// Inline SVG icons. Stroke icons inherit `currentColor`.

export const ServiceIcon = ({ name }) => {
  switch (name) {
    case "ems":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z" />
        </svg>
      );
    case "madero":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="9" width="18" height="6" rx="3" />
          <path d="M7 9v6M11 9v6M15 9v6" />
        </svg>
      );
    case "sculpt":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3c4 3 4 6 1 9 3 3 2 6-1 9-3-3-4-6-1-9-3-3-3-6 1-9z" />
        </svg>
      );
    case "cellulite":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 3v18M3 12h18" opacity=".5" />
        </svg>
      );
    case "presso":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 12a8 8 0 0116 0M7 12a5 5 0 0110 0M10 12a2 2 0 014 0" />
        </svg>
      );
    case "physio":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="5" r="2" />
          <path d="M12 8v6M12 14l-4 6M12 14l4 6M7 11h10" />
        </svg>
      );
    default:
      return null;
  }
};

export const StepIcon = ({ name }) => {
  switch (name) {
    case "assess":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M9 11l3 3 8-8" />
          <path d="M21 12v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      );
    case "plan":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 19l6-6 4 4 6-7" />
          <circle cx="4" cy="19" r="1.4" fill="currentColor" />
          <circle cx="20" cy="10" r="1.4" fill="currentColor" />
        </svg>
      );
    case "treat":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M2 12h4l2-6 4 14 3-9 2 3h5" />
        </svg>
      );
    case "glow":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 3l2.2 5.4L20 9l-4.3 3.7L17 19l-5-3-5 3 1.3-6.3L4 9l5.8-.6z" />
        </svg>
      );
    default:
      return null;
  }
};

// Brand wordmark figure mark (used only where the photo logo is not suitable)
export const ValueIcon = ({ name }) => {
  switch (name) {
    case "care":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 21s-7-4.5-9-9a5 5 0 019-3 5 5 0 019 3c-2 4.5-9 9-9 9z" />
        </svg>
      );
    case "results":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      );
    case "glow":
      return (
        <svg className="ic" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" />
        </svg>
      );
    default:
      return null;
  }
};
