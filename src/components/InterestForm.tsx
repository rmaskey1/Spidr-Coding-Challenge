// Library imports
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// CSS imports
import '../styles/InterestForm.css';
import '../styles/PricePickerForm.css';
import '../styles/SecretKeyForm.css';
// import '../styles/ProgressBar.css';

// Hook imports
import { useMultistep } from '../hooks/useMultistep';

// Form Step imports
import PricePickerForm from './FormSteps/PricePickerForm';
import UserForm from './FormSteps/UserForm';
import SecretKeyForm from './FormSteps/SecretKeyForm';

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
  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});

  function updateFields(fields: Partial<FormData>) {
    setData(prev => ({ ...prev, ...fields }));
  }

  function handleFieldChange(field: keyof FormData, value: string, updatedErrors?: Partial<FormData>) {
    updateFields({ [field]: value });
    if (updatedErrors) {
      setFormErrors(updatedErrors);
    } else if (formErrors[field]) {
      const newErrors = { ...formErrors };
      delete newErrors[field];
      setFormErrors(newErrors);
    }
  }

  function validateForm(): boolean {
    const errors: Partial<FormData> = {};

    if (currentStep === 1) {
      if (!data.firstName.trim()) errors.firstName = 'First name is required';
      if (!data.lastName.trim()) errors.lastName = 'Last name is required';
      if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email';
      if (!/^\d{10}$/.test(data.phone.replace(/\D/g, ''))) errors.phone = 'Phone must be 10 digits';
    }

    if (currentStep === 2) {
      const digits = data.secretKey.replace(/\D/g, '');
      if (digits.length !== 16) errors.secretKey = 'Secret key must be 16 digits';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const steps = [
    <PricePickerForm key="step1" value={data.price} onChange={(price: number) => updateFields({ price })} max={300} />,
    <UserForm key="step2" formData={data} updateFields={updateFields} errors={formErrors} onFieldChange={handleFieldChange} />,
    <SecretKeyForm key="step3" value={data.secretKey} onChange={(secretKey) => updateFields({ secretKey })} />,
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

    if (!isLastStep()) {
      setDirection(1);
      next();
    } else {
      console.log('Form submitted:', data);
    }
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