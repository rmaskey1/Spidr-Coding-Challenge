import type { ReactElement } from "react";
import { useState } from "react";

export function useMultistep(steps: ReactElement[]) {
    const [currentStep, setCurrentStep] = useState(0);

    function next() {
        setCurrentStep(step => {
            if (step >= steps.length - 1) return step;
            return step + 1;
        });
    }

    function back() {
        setCurrentStep(step => {
            if (step <= 0) return step;
            return step - 1;
        });
    }

    function goTo(step: number) {
        setCurrentStep(step);
    }

    function isFirstStep() {
        return currentStep === 0;
    }

    function isLastStep() {
        return currentStep === steps.length - 1;
    }

    return {
        currentStep,
        step: steps[currentStep],
        steps,
        goTo,
        next,
        back,
        isFirstStep,
        isLastStep,
    };
}