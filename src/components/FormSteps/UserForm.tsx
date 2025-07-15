type FormData = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  };
  
  type UserFormProps = {
    formData: FormData;
    updateFields: (fields: Partial<FormData>) => void;
    errors: Partial<FormData>;
    onFieldChange?: (field: keyof FormData, value: string, updatedErrors?: Partial<FormData>) => void;
  };
  
  function UserForm({ formData, updateFields, errors, onFieldChange }: UserFormProps) {
    // Format phone number as (XXX) XXX-XXXX
    const formatPhoneNumber = (value: string): string => {
      const phoneNumber = value.replace(/\D/g, '');
      
      if (phoneNumber.length <= 3) return phoneNumber;
      if (phoneNumber.length <= 6) return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
    };
  
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;
      const phoneNumber = value.replace(/\D/g, '').slice(0, 10);
      const formattedPhone = formatPhoneNumber(phoneNumber);
      
      updateFields({ phone: formattedPhone });
      onFieldChange?.('phone', formattedPhone);
    };
  
    const handleInputChange = (field: keyof FormData) => 
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        updateFields({ [field]: value });
        if (errors[field]) {
          const newErrors = { ...errors };
          delete newErrors[field];
          onFieldChange?.(field, value, newErrors);
        } else {
          onFieldChange?.(field, value);
        }
      };
  
  
    return (
      <div className="user-form">
        <div className="form-title">How can we contact you?</div>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange('firstName')}
            className={errors.firstName ? 'error' : ''}
          />
          {errors.firstName && <div className="error-message">{errors.firstName}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={formData.lastName}
            onChange={handleInputChange('lastName')}
            className={errors.lastName ? 'error' : ''}
          />
          {errors.lastName && <div className="error-message">{errors.lastName}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            id="email"
            value={formData.email}
            onChange={handleInputChange('email')}
            className={errors.email ? 'error' : ''}
            inputMode="email"
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={handlePhoneChange}
            placeholder="(123) 456-7890"
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>
      </div>
    );
  }
  
  export default UserForm;