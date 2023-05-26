import React from "react";

const SpinnerWhileLoading = ({
  spinnerType,
  className,
  showSpinnerWhen,
  children,
}) => {
  const spinType = spinnerType ? spinnerType : "spinner-border text-secondary";
  return (
    <>
      {showSpinnerWhen && (
        <div className={className}>
          <div className={`${spinType}`} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      {!showSpinnerWhen && children}
    </>
  );
};

export default SpinnerWhileLoading;
