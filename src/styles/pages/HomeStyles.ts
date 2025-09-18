import styled from 'styled-components';

export const HeroSection = styled.section`
  margin-top: 120px;
  min-height: 80vh;
  color: var(--minimal-white);
  padding: 80px 0;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
  
  @media (max-width: 768px) {
    margin-top: 100px;
    min-height: 70vh;
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    margin-top: 80px;
    min-height: 60vh;
    padding: 40px 0;
  }
`;

export const HeroVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    padding: 0 15px;
  }
  
  @media (max-width: 480px) {
    padding: 0 10px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--minimal-white);
  letter-spacing: -1px;
  line-height: 1.2;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 16px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
  }
`;

export const HeroSubtitle = styled.p`
  font-size: 1.25rem;
  margin-bottom: 30px;
  color: var(--minimal-white);
  font-weight: 400;
  line-height: 1.6;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 24px;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

export const HeroButtons = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  
  button, a {
    border-radius: 8px;
    padding: 12px 24px;
    font-size: 1rem;
    font-weight: 500;
    transition: all 0.2s ease;
    text-decoration: none;
    
    &:hover {
      transform: translateY(-1px);
    }
  }
  
  @media (max-width: 768px) {
    gap: 12px;
    
    button, a {
      padding: 10px 20px;
      font-size: 0.9rem;
    }
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    
    button, a {
      width: 100%;
      max-width: 280px;
    }
  }
`;

export const FeaturesSection = styled.section`
  padding: 80px 0;
  background: var(--minimal-light-gray);
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--minimal-gray-900);
  margin-bottom: 16px;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  letter-spacing: -0.5px;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 12px;
  }
`;

export const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: var(--minimal-gray-600);
  max-width: 600px;
  margin: 0 auto;
  font-weight: 400;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    max-width: 95%;
    line-height: 1.5;
  }
`;

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 30px;
  position: relative;
  z-index: 2;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    max-width: 90%;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 95%;
  }
`;

export const FeatureCard = styled.div`
  background: var(--minimal-white);
  border: 1px solid var(--minimal-gray-200);
  border-radius: 12px;
  padding: 40px 32px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--minimal-primary), var(--minimal-secondary));
    border-radius: 12px 12px 0 0;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border-color: var(--minimal-primary);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    padding: 32px 24px;
    height: 320px;
    border-radius: 14px;
    
    &:hover {
      transform: translateY(-4px);
    }
  }
  
  @media (max-width: 480px) {
    padding: 28px 20px;
    height: 300px;
    border-radius: 12px;
  }
`;

export const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, var(--minimal-primary), var(--minimal-secondary));
  color: var(--minimal-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 18px;
    background: linear-gradient(135deg, var(--minimal-primary), var(--minimal-secondary));
    z-index: -1;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  ${FeatureCard}:hover & {
    transform: translateY(-3px) scale(1.1);
    box-shadow: 0 12px 28px rgba(59, 130, 246, 0.3);
    
    &::before {
      opacity: 0.5;
    }
  }
  
  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
    font-size: 2.2rem;
    margin: 0 auto 20px;
    border-radius: 14px;
  }
  
  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    font-size: 2rem;
    margin: 0 auto 18px;
    border-radius: 12px;
  }
`;

export const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 16px;
  color: var(--minimal-text-primary);
  font-weight: 600;
  line-height: 1.3;
  text-align: center;
  letter-spacing: -0.025em;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 14px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 12px;
  }
`;

export const FeatureDescription = styled.p`
  color: var(--minimal-text-secondary);
  line-height: 1.6;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  margin: 0;
  
  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

export const ProductsSection = styled.section`
  padding: 80px 0;
  background: var(--minimal-gray-50);
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  gap: 30px;
  margin-top: 70px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 25px;
    margin-top: 40px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 30px;
    padding: 0 5px;
  }
`;

export const ProductCard = styled.div`
  background: var(--minimal-white);
  border: 1px solid var(--minimal-gray-200);
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 500px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
    border-color: var(--minimal-primary);
  }
  
  @media (max-width: 768px) {
    height: 450px;
    border-radius: 14px;
    
    &:hover {
      transform: translateY(-2px);
    }
  }
  
  @media (max-width: 480px) {
    height: 420px;
    border-radius: 12px;
  }
    border-radius: 12px;
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: all 0.3s ease;
  
  ${ProductCard}:hover & {
    transform: scale(1.02);
  }
  
  @media (max-width: 768px) {
    height: 180px;
  }
  
  @media (max-width: 480px) {
    height: 160px;
  }
`;

export const ProductInfo = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  min-height: 240px;
  
  @media (max-width: 768px) {
    padding: 18px 20px;
    min-height: 220px;
  }
  
  @media (max-width: 480px) {
    padding: 16px;
    min-height: 200px;
  }
`;

export const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  
  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 12px;
  }
`;

export const ProductTitle = styled.h3`
  font-size: 1.3rem;
  margin: 0 0 12px 0;
  color: var(--minimal-text-primary);
  font-weight: 600;
  line-height: 1.3;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin: 0 0 10px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin: 0 0 8px 0;
  }
`;

export const ProductPrice = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--minimal-primary);
  margin-bottom: 12px;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 10px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.2rem;
    margin-bottom: 8px;
  }
`;

export const ProductDescription = styled.p`
  font-size: 0.9rem;
  color: var(--minimal-text-secondary);
  margin: 0 0 16px 0;
  line-height: 1.5;
  font-weight: 400;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin: 0 0 12px 0;
    -webkit-line-clamp: 2;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin: 0 0 10px 0;
    line-height: 1.4;
  }
`;

export const ProductButton = styled.button`
  background: var(--minimal-primary);
  border: 2px solid var(--minimal-primary);
  color: var(--minimal-white);
  padding: 14px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: auto;
  min-height: 48px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  
  &:hover {
    background: var(--minimal-white);
    color: var(--minimal-primary);
    border-color: var(--minimal-primary);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 0.9rem;
    min-height: 44px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.85rem;
    min-height: 40px;
  }
`;

// Дополнительные стили для scroll-эффектов
export const ScrollReveal = styled.div<{ delay?: number }>`
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: ${props => props.delay || 0}ms;
  
  &.revealed {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const ParallaxElement = styled.div<{ speed?: number }>`
  transform: translateY(0);
  transition: transform 0.1s linear;
`;

// Photo Gallery Styles
export const PhotoGallerySection = styled.section`
  width: 100%;
  overflow: hidden;
  background: linear-gradient(135deg, var(--minimal-primary) 0%, #1e293b 50%, #0f172a 100%);
  padding: 80px 0;
  position: relative;
  
  /* Современный минималистичный overlay */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 50%);
    pointer-events: none;
  }
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const ScrollingTextBanner = styled.div`
  width: 100%;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    var(--minimal-primary) 0%,
    #3b82f6 50%,
    var(--minimal-primary) 100%
  );
  background-size: 200% 100%;
  animation: gradientShift 8s ease infinite;
  padding: 24px 0;
  margin-top: 50px;
  position: relative;
  box-shadow: 
    0 -4px 20px rgba(0,0,0,0.2),
    0 4px 20px rgba(59, 130, 246, 0.3);
  
  /* Современный блик */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent 0%,
      rgba(255,255,255,0.2) 50%,
      transparent 100%
    );
    animation: shine 4s infinite;
  }
  
  @keyframes gradientShift {
    0% { background-position: 0% 0%; }
    50% { background-position: 100% 0%; }
    100% { background-position: 0% 0%; }
  }
  
  @keyframes shine {
    0% { left: -100%; }
    100% { left: 100%; }
  }
  
  @media (max-width: 768px) {
    padding: 20px 0;
    margin-top: 40px;
  }
  
  @media (max-width: 480px) {
    padding: 16px 0;
    margin-top: 30px;
  }
`;

export const ScrollingText = styled.div`
  display: flex;
  white-space: nowrap;
  animation: scrollText 25s linear infinite;
  font-weight: 800;
  font-size: 1.8rem;
  color: #fff;
  text-shadow: 
    2px 2px 4px rgba(0,0,0,0.8),
    0 0 20px rgba(255,255,255,0.5),
    0 0 40px rgba(255,255,255,0.3);
  letter-spacing: 4px;
  text-transform: uppercase;
  font-family: 'Arial Black', sans-serif;
  
  @keyframes scrollText {
    0% {
      transform: translate3d(100%, 0, 0);
    }
    100% {
      transform: translate3d(-100%, 0, 0);
    }
  }
  
  span {
    padding-right: 120px;
    display: inline-block;
    position: relative;
    
    /* Добавляем разделители между текстами */
    &::after {
      content: '●';
      position: absolute;
      right: 60px;
      color: rgba(255,255,255,0.8);
      font-size: 0.8em;
    }
    
    &:last-child::after {
      display: none;
    }
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
    letter-spacing: 3px;
    animation: scrollText 20s linear infinite;
    
    span {
      padding-right: 100px;
      
      &::after {
        right: 50px;
      }
    }
  }
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    letter-spacing: 2px;
    animation: scrollText 15s linear infinite;
    
    span {
      padding-right: 80px;
      
      &::after {
        right: 40px;
      }
    }
  }
  
  /* Пауза анимации при hover */
  &:hover {
    animation-play-state: paused;
  }
  
  /* Reduce motion для accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: scrollText 50s linear infinite;
  }
`;

export const PhotoStrip = styled.div`
  display: flex;
  width: calc(200% + 200px);
  animation: scrollPhotos 35s linear infinite;
  transform: translateZ(0); /* GPU acceleration */
  will-change: transform; /* Оптимизация для анимации */
  filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
  
  @keyframes scrollPhotos {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }
  
  /* Пауза анимации при hover */
  &:hover {
    animation-play-state: paused;
    
    /* При ховере слегка замедляем и увеличиваем */
    transform: translateZ(0) scale(1.02);
    transition: transform 0.3s ease;
  }
  
  @media (max-width: 768px) {
    animation: scrollPhotos 30s linear infinite;
  }
  
  @media (max-width: 480px) {
    animation: scrollPhotos 25s linear infinite;
  }
  
  /* Reduce motion для пользователей с настройками accessibility */
  @media (prefers-reduced-motion: reduce) {
    animation: scrollPhotos 80s linear infinite;
  }
`;

export const PhotoItem = styled.div`
  flex: 0 0 280px;
  height: 200px;
  margin-right: 24px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  
  /* Современные тени */
  box-shadow: 
    0 4px 20px rgba(0,0,0,0.15),
    0 1px 3px rgba(0,0,0,0.1);
  
  /* Современная граница */
  border: 1px solid rgba(255,255,255,0.1);
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 
      0 12px 40px rgba(0,0,0,0.25),
      0 4px 12px rgba(59, 130, 246, 0.15);
    border-color: rgba(59, 130, 246, 0.3);
  }
  
  /* Оптимизация производительности */
  will-change: transform;
  
  @media (max-width: 768px) {
    flex: 0 0 240px;
    height: 180px;
    margin-right: 20px;
    border-radius: 14px;
  }
  
  @media (max-width: 480px) {
    flex: 0 0 200px;
    height: 150px;
    margin-right: 16px;
    border-radius: 12px;
  }
`;
