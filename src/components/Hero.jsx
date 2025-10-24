import React, { useMemo, useEffect, useRef } from 'react';
import styles from './Hero.module.css';

const NetworkBackground = () => {
  const canvasRef = useRef(null);
  const faviconRef = useRef(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Load favicon image
    const faviconImg = new Image();
    faviconImg.src = '/favicon.svg';
    faviconRef.current = faviconImg;
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight * 1.2; // Make it a bit taller
      
      // Recreate particles when resizing
      initParticles();
    };
    
    // Create particles
    const initParticles = () => {
      particles = [];
      const particleCount = Math.min(window.innerWidth / 12, 70); // Fewer particles since icons are bigger now
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 10 + 12, // Bigger size for the favicon (12-22px)
          speedX: Math.random() * 0.3 - 0.15, // Slower movement
          speedY: Math.random() * 0.3 - 0.15,
          blinkSpeed: Math.random() * 0.04 + 0.01, // For blinking effect
          opacity: Math.random() * 0.5 + 0.5, // Starting opacity
          opacityDirection: Math.random() > 0.5 ? 1 : -1, // Random direction
          rotation: Math.random() * 360, // Random rotation
          rotationSpeed: (Math.random() * 0.5 - 0.25) * 0.1, // Very slow rotation
        });
      }
    };
    
    // Draw particles and connections
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach((particle, i) => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;
        
        // Blinking effect
        particle.opacity += particle.blinkSpeed * particle.opacityDirection;
        
        // Change direction when reaching opacity limits
        if (particle.opacity > 1) {
          particle.opacity = 1;
          particle.opacityDirection = -1;
        } else if (particle.opacity < 0.1) {
          particle.opacity = 0.1;
          particle.opacityDirection = 1;
        }
        
        // Update rotation
        particle.rotation += particle.rotationSpeed;
        
        // Draw favicon in a circular mask
        if (faviconRef.current.complete) {
          ctx.save();
          ctx.globalAlpha = particle.opacity;
          
          // Create circular clipping path
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size/2, 0, Math.PI * 2);
          ctx.closePath();
          ctx.clip();
          
          // Draw the favicon centered in the circle
          const size = particle.size;
          ctx.translate(particle.x, particle.y);
          ctx.rotate(particle.rotation * Math.PI / 180);
          ctx.drawImage(
            faviconRef.current, 
            -size/2, 
            -size/2, 
            size, 
            size
          );
          ctx.restore();
        }
        
        // Draw connections
        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 200; // Increased connection distance for bigger particles
            
            if (distance < maxDistance) {
              // Connection opacity affected by both particles' opacity
              const connectionOpacity = 0.1 * (1 - distance / maxDistance) * 
                                       ((particle.opacity + otherParticle.opacity) / 2);
              
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 255, 255, ${connectionOpacity})`;
              ctx.lineWidth = 0.5 * (1 - distance / maxDistance);
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.stroke();
            }
          }
        });
      });
      
      animationFrameId = requestAnimationFrame(draw);
    };
    
    // Initialize after favicon loads
    faviconImg.onload = () => {
      window.addEventListener('resize', resizeCanvas);
      resizeCanvas();
      draw();
    };
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  
  return <canvas ref={canvasRef} className={styles.networkCanvas} />;
};

const DustParticle = ({ style }) => {
  return <div className={styles.dustParticle} style={style}></div>;
};

const DustBackground = ({ position }) => {
  const particles = useMemo(() => {
    const items = [];
    const count = 50;
    const colors = [
      'rgba(255, 105, 180, 0.4)', // pink
      'rgba(147, 112, 219, 0.4)', // purple
      'rgba(64, 224, 208, 0.4)',  // turquoise
      'rgba(255, 165, 0, 0.4)',   // orange
      'rgba(50, 205, 50, 0.4)',   // lime green
    ];
    
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 10 + 2;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const left = Math.random() * 100;
      const top = Math.random() * 100;
      const blur = Math.random() * 5 + 1;
      const opacity = Math.random() * 0.5 + 0.1;
      
      items.push({
        size,
        color,
        left: `${left}%`,
        top: `${top}%`,
        blur: `${blur}px`,
        opacity,
      });
    }
    return items;
  }, []);

  return (
    <div className={`${styles.dustBackground} ${styles[position]}`}>
      {particles.map((particle, index) => (
        <DustParticle
          key={index}
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            left: particle.left,
            top: particle.top,
            filter: `blur(${particle.blur})`,
            opacity: particle.opacity,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  const avatars = [
    "https://i.pravatar.cc/150?img=1",
    "https://i.pravatar.cc/150?img=2",
    "https://i.pravatar.cc/150?img=3",
    "https://i.pravatar.cc/150?img=4",
    "https://i.pravatar.cc/150?img=5",
    "https://i.pravatar.cc/150?img=6",
    "https://i.pravatar.cc/150?img=7",
    "https://i.pravatar.cc/150?img=8",
    "https://i.pravatar.cc/150?img=9",
    "https://i.pravatar.cc/150?img=10",
    "https://i.pravatar.cc/150?img=11",
    "https://i.pravatar.cc/150?img=12",
    "https://i.pravatar.cc/150?img=13",
    "https://i.pravatar.cc/150?img=14",
    "https://i.pravatar.cc/150?img=15",
    "https://i.pravatar.cc/150?img=16",
    "https://i.pravatar.cc/150?img=17",
    "https://i.pravatar.cc/150?img=18",
  ];

  return (
    <div className={styles.hero}>
      <NetworkBackground />
      <DustBackground position="topRight" />
      <DustBackground position="bottomLeft" />
      
      <div className={styles.container}>
        <h1 className={styles.title}>Connect. Collaborate.<span className={styles.highlight}> <br></br> Earn Instantly</span></h1>
        <p className={styles.subtitle}>
         Where influencers, brands & services unite to collaborate, grow audiences, and unlock endless earning potential.
        </p>
        <div className={styles.appStores}>
          <img src="/playStoreImage.webp" alt="Get it on Google Play" className={styles.storeButton} />
          <img src="/appleImage.jpeg" alt="Download on the App Store" className={styles.storeButton} />
        </div>
        <div className={styles.bannerContainer}>
          <img src="/bannerImage.avif" alt="App Interface" className={styles.bannerImage} />
        </div>
      </div>
    </div>
  );
};

export default Hero;