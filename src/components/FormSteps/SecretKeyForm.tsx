import React, { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface SecretKeyFormProps {
  value: string;
  onChange: (val: string) => void;
  errors?: { secretKey?: string };
  onFieldChange?: (field: string, value: string, updatedErrors?: any) => void;
}

const SecretKeyForm: React.FC<SecretKeyFormProps> = ({
  value,
  onChange,
  errors = {},
  onFieldChange,
}) => {
  const [showKey, setShowKey] = useState(false);

  const toggleKeyVisibility = () => {
    setShowKey(!showKey);
  };
  const formatKey = (raw: string): string => {
    const digitsOnly = raw.replace(/\D/g, "").slice(0, 16);
    return digitsOnly
      .split("")
      .map((char, index) => (index > 0 && index % 4 === 0 ? `-${char}` : char))
      .join("");
  };

  const [inputValue, setInputValue] = useState<string>(formatKey(value));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const formattedValue = formatKey(newValue);
    const digitsOnly = formattedValue.replace(/\D/g, "");

    setInputValue(formattedValue);

    onChange(digitsOnly);

    if (errors?.secretKey && onFieldChange) {
      const newErrors = { ...errors };
      delete newErrors.secretKey;
      onFieldChange("secretKey", digitsOnly, newErrors);
    }
  };

  useEffect(() => {
    if (value !== inputValue.replace(/\D/g, "")) {
      setInputValue(formatKey(value));
    }
  }, [value]);

  return (
    <div>
      <div className="form-title">Enter the<br/>Secret Key</div>
      <div className="form-group">
        <label className="secret-key-label">Super Secret Key</label>
        <div className="secret-key-input-container">
          <input
            type={showKey ? "text" : "password"}
            id="secretKey"
            value={inputValue}
            onChange={handleChange}
            placeholder="XXXX-XXXX-XXXX-XXXX"
            maxLength={19}
            className={`${errors?.secretKey ? "error" : ""} secret-key-input`}
            inputMode="numeric"
            autoComplete="off"
            autoCorrect="off"
            spellCheck="false"
          />
          <button
            type="button"
            className="toggle-visibility"
            onClick={toggleKeyVisibility}
            aria-label={showKey ? "Hide key" : "Show key"}
          >
            {showKey ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
        {errors?.secretKey ? (
          <div className="error-message">{errors.secretKey}</div>
        ) : null}
      </div>
    </div>
  );
};

export default SecretKeyForm;
