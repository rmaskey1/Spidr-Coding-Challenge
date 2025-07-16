interface ProgressBarProps {
  totalSteps: number;
  currentStep: number;
}

export default function ProgressBar({
  totalSteps,
  currentStep,
}: ProgressBarProps) {
  const steps = Array.from({ length: totalSteps }, (_, i) => i);

  return (
    <div
      className="progress-bar-grid"
      style={{ gridTemplateColumns: generateGridColumns(totalSteps) }}
    >
      {steps
        .map((step, index) => (
          <div
            key={`bubble-${step}`}
            className={`progress-bubble ${step <= currentStep ? "filled" : ""}`}
          />
        ))
        .flatMap((bubble, i, arr) =>
          i < arr.length - 1
            ? [
                bubble,
                <div
                  key={`line-${i}`}
                  className={`progress-line ${i < currentStep ? "filled" : ""}`}
                />,
              ]
            : [bubble]
        )}
    </div>
  );
}

function generateGridColumns(stepCount: number): string {
  const parts = [];
  for (let i = 0; i < stepCount * 2 - 1; i++) {
    parts.push(i % 2 === 0 ? "24px" : "1fr");
  }
  return parts.join(" ");
}
