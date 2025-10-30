import { useState, useEffect, useRef } from 'react';
import styles from './Modal.module.css';
import ReactConfetti from 'react-confetti';

const API_URL = 'https://influ-real-okxvj.ondigitalocean.app/api';

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    categories: [],
    name: '',
    email: '',
    phone: '',
    socialHandle: ''
  });
  
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const thankYouContainerRef = useRef(null);
  const [confettiDimensions, setConfettiDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (showThankYou && thankYouContainerRef.current) {
      const { width, height } = thankYouContainerRef.current.getBoundingClientRect();
      setConfettiDimensions({
        width,
        height,
      });
    }
  }, [showThankYou]);

  const categoryOptions = [
    { id: 'influencer', label: 'Influencer' },
    { id: 'agency', label: 'Agency' },
    { id: 'model', label: 'Model' },
    { id: 'manager', label: 'Influencer Manager' },
    { id: 'business', label: 'Business' }
  ];

  const handleCategoryToggle = (categoryId) => {
    setFormData(prev => {
      if (prev.categories.includes(categoryId)) {
        return {
          ...prev,
          categories: prev.categories.filter(id => id !== categoryId)
        };
      } else {
        return {
          ...prev,
          categories: [...prev.categories, categoryId]
        };
      }
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form
    if (formData.categories.length === 0) {
      setError('Please select at least one category');
      return;
    }
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Send data to API
      const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      console.log('Form submitted successfully:', data);
      
      // Show thank you message
      setShowThankYou(true);
      
      // Reset form after 5 seconds and close modal
      setTimeout(() => {
        setShowThankYou(false);
        setFormData({
          categories: [],
          name: '',
          email: '',
          phone: '',
          socialHandle: ''
        });
        onClose();
      }, 5000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        {showThankYou ? (
          <div className={styles.thankYouContainer} ref={thankYouContainerRef}>
            <div className={styles.confettiContainer}>
              <ReactConfetti
                width={confettiDimensions.width}
                height={confettiDimensions.height}
                recycle={false}
                numberOfPieces={200}
                gravity={0.2}
                confettiSource={{
                  x: confettiDimensions.width / 2,
                  y: 0,
                  w: 0,
                  h: 0
                }}
              />
            </div>
            <div className={styles.checkmarkContainer}>
              <div className={styles.checkmark}>✓</div>
            </div>
            <h2 className={styles.thankYouTitle}>Thank You!</h2>
            <p className={styles.thankYouText}>
              Thank you for joining exclusive INFLU network. We'll inform you once our app is live!
            </p>
          </div>
        ) : (
          <>
            <button className={styles.closeButton} onClick={onClose}>×</button>
            
            <h2 className={styles.modalTitle}>Get Started</h2>
            <p className={styles.modalSubtitle}>Join the INFLU network today</p>
            
            {error && <div className={styles.errorMessage}>{error}</div>}
            
            <form onSubmit={handleSubmit}>
              <div className={styles.formSection}>
                <label className={styles.sectionLabel}>I am a:</label>
                <div className={styles.categoryOptions}>
                  {categoryOptions.map(category => (
                    <div 
                      key={category.id}
                      className={`${styles.categoryOption} ${formData.categories.includes(category.id) ? styles.selected : ''}`}
                      onClick={() => handleCategoryToggle(category.id)}
                    >
                      {category.label}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className={styles.formSection}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    placeholder="Your name"
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    placeholder="9999999999"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    title="Please enter a valid 10-digit Indian phone number"
                  />
                </div>
                
                <div className={styles.inputGroup}>
                  <label htmlFor="socialHandle">Social Media Handle</label>
                  <div className={styles.socialInputWrapper}>
                    <span className={styles.socialPrefix}>@</span>
                    <input 
                      type="text" 
                      id="socialHandle" 
                      name="socialHandle" 
                      value={formData.socialHandle} 
                      onChange={handleInputChange} 
                      placeholder="yourusername"
                    />
                  </div>
                </div>
              </div>
              
              <button 
                type="submit" 
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Join INFLU Network'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
