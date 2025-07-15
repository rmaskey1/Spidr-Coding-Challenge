// Library imports
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// CSS imports
import '../styles/InterestForm.css';
// import '../styles/PricePickerForm.css';
// import '../styles/SecretKeyForm.css';
// import '../styles/ProgressBar.css';

// Hook imports
import { useMultistep } from '../hooks/useMultistep';

// Form Step imports
// import UserForm from './FormSteps/UserForm';
// import PricePickerForm from './FormSteps/PricePickerForm';
// import SecretKeyForm from './FormSteps/SecretKeyForm';

// Other component imports
// import ProgressBar from './ui/ProgressBar';
// import spiderLogo from '../assets/spidr-logo.png';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  price: number;
  secretKey: string;
};

export default function InterestForm() {
  const [data, setData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    price: 0,
    secretKey: ''
  });

  const [direction, setDirection] = useState(1);

  const steps = [
    <div>Step 1</div>,
    <div>Step 2</div>,
    <div>Step 3</div>
  ];

  const {
    currentStep,
    step,
    next,
    back,
    isFirstStep,
    isLastStep
  } = useMultistep(steps);

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    
  }

  return (
    <div className="interest-form-container">
      <div className="interest-form-box">
        <form onSubmit={onSubmit}>
          <div className="form-step-wrapper">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentStep}
                className="form-step"
                custom={direction}
                variants={{
                enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
                center: { x: 0, opacity: 1 },
                exit: (dir: number) => ({ x: dir > 0 ? -300 : 300, opacity: 0 })
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
              >
                {step}
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="btn-container">
            {!isFirstStep() && (
              <button type="button"  onClick={() => { setDirection(-1); back(); }} className="btn">Back</button>
            )}
            {!isLastStep() ? (
              <button type="button" onClick={() => { setDirection(1); next(); }} className="btn">Next</button>
            ) : (
              <button type="submit" className="btn">Finish</button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}