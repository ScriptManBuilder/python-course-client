import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from '../styles/GlobalStyles';
import { products } from '../data/products';
import { usePrice } from '../hooks/usePrice';
import { RocketIcon, LightningIcon, ShieldIcon, GlobeIcon, TargetIcon, DiamondIcon } from '../components/FeatureIcons';
import LazyImage from '../components/LazyImage';
import {
  HeroSection,
  HeroVideo,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  HeroButtons,
  FeaturesSection,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  FeaturesGrid,
  FeatureCard,
  FeatureIcon,
  FeatureTitle,
  FeatureDescription,
  ProductsSection,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductContent,
  ProductTitle,
  ProductPrice,
  ProductDescription,
  ProductButton,
  ScrollReveal,
  ParallaxElement,
  PhotoGallerySection,
  PhotoStrip,
  PhotoItem,
  ScrollingTextBanner,
  ScrollingText
} from '../styles/pages/HomeStyles';

const Home: React.FC = () => {
  const featuredProducts = products.slice(0, 6);
  const { formatPrice } = usePrice();
  const scrollRevealRefs = useRef<(HTMLDivElement | null)[]>([]);
  const parallaxRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Мемоизируем массив изображений для галереи
  const galleryImages = useMemo(() => {
    return Array.from({ length: 16 }, (_, i) => {
      const imageIndex = (i % 8) + 1;
      const imageExt = 'jpg'; // Все изображения теперь jpg
      return {
        id: i,
        src: `/images/AiPic${imageIndex}.${imageExt}`,
        alt: `AI Generated ${i + 1}`
      };
    });
  }, []);

  // Мемоизируем текст для бегущей строки
  const scrollingTexts = useMemo(() => [
    'JOIN US ON THE DIGITAL REVOLUTION',
    'FOLLOW US @WILLIAMS_COLLECTION',
    'PREMIUM TECHNOLOGY SOLUTIONS',
    'INNOVATIVE AI-POWERED PRODUCTS',
    'TRANSFORM YOUR DIGITAL EXPERIENCE',
    'CONNECT WITH THE FUTURE'
  ], []);

  useEffect(() => {
    // Intersection Observer для scroll reveal эффектов
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    // Наблюдаем за всеми элементами с scroll reveal
    scrollRevealRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    // Intersection Observer для галереи
    const galleryObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          galleryObserver.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '200px' }
    );

    if (galleryRef.current) {
      galleryObserver.observe(galleryRef.current);
    }

    // Parallax эффект при скролле (throttled)
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          
          parallaxRefs.current.forEach((ref, index) => {
            if (ref) {
              const speed = (index + 1) * 0.1;
              const yPos = -(scrollY * speed);
              ref.style.transform = `translateY(${yPos}px)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      galleryObserver.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setScrollRevealRef = (index: number) => (el: HTMLDivElement | null) => {
    scrollRevealRefs.current[index] = el;
  };

  const setParallaxRef = (index: number) => (el: HTMLDivElement | null) => {
    parallaxRefs.current[index] = el;
  };

  return (
    <>
      <HeroSection>
        <HeroVideo 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="auto"
        >
          <source src="/videos/animation2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </HeroVideo>
        <Container>
          <HeroContent>
            <HeroTitle>WILLIAMS COLLECTION</HeroTitle>
            <HeroSubtitle>
              Transforming Digital Experiences with Premium Technology Solutions
            </HeroSubtitle>
            <HeroButtons>
              <Button as={Link} to="/products" variant="primary">
                Explore Solutions
              </Button>
              <Button as={Link} to="/about" variant="outline">
                Our Story
              </Button>
            </HeroButtons>
          </HeroContent>
        </Container>
      </HeroSection>

      <FeaturesSection>
        <Container>
          <ScrollReveal ref={setScrollRevealRef(0)}>
            <SectionHeader>
              <SectionTitle>Why Choose Williams Collection?</SectionTitle>
              <SectionSubtitle>Discover the excellence that makes our audio technology exceptional</SectionSubtitle>
            </SectionHeader>
          </ScrollReveal>
          
          <FeaturesGrid>
            <ScrollReveal ref={setScrollRevealRef(1)} delay={100}>
              <FeatureCard>
                <RocketIcon />
                <FeatureTitle>Premium Audio Engineering</FeatureTitle>
                <FeatureDescription>
                  Cutting-edge acoustic technology delivering exceptional sound quality and clarity.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(2)} delay={200}>
              <FeatureCard>
                <LightningIcon />
                <FeatureTitle>Advanced Connectivity</FeatureTitle>
                <FeatureDescription>
                  Seamless wireless technology with ultra-low latency for professional performance.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(3)} delay={300}>
              <FeatureCard>
                <ShieldIcon />
                <FeatureTitle>Durable Construction</FeatureTitle>
                <FeatureDescription>
                  Military-grade materials and rigorous testing ensure lasting reliability.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(4)} delay={400}>
              <FeatureCard>
                <GlobeIcon />
                <FeatureTitle>Global Support</FeatureTitle>
                <FeatureDescription>
                  Worldwide warranty coverage with dedicated customer service excellence.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(5)} delay={500}>
              <FeatureCard>
                <TargetIcon />
                <FeatureTitle>Professional Grade</FeatureTitle>
                <FeatureDescription>
                  Studio-quality precision trusted by audio professionals worldwide.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
            
            <ScrollReveal ref={setScrollRevealRef(6)} delay={600}>
              <FeatureCard>
                <DiamondIcon />
                <FeatureTitle>Innovative Design</FeatureTitle>
                <FeatureDescription>
                  Award-winning ergonomic design combining comfort with premium aesthetics.
                </FeatureDescription>
              </FeatureCard>
            </ScrollReveal>
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      <ProductsSection>
        <Container>
          <ScrollReveal ref={setScrollRevealRef(7)}>
            <SectionHeader>
              <SectionTitle>Featured Solutions</SectionTitle>
              <SectionSubtitle>Discover our most innovative digital products</SectionSubtitle>
            </SectionHeader>
          </ScrollReveal>
          
          <ProductsGrid>
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} ref={setScrollRevealRef(8 + index)} delay={index * 100}>
                <ProductCard>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductInfo>
                    <ProductContent>
                      <ProductTitle>{product.name}</ProductTitle>
                      <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                      <ProductDescription>{product.description}</ProductDescription>
                    </ProductContent>
                    <ProductButton as={Link} to={`/product/${product.id}`}>
                      Explore Details
                    </ProductButton>
                  </ProductInfo>
                </ProductCard>
              </ScrollReveal>
            ))}
          </ProductsGrid>
          
          <ScrollReveal ref={setScrollRevealRef(14)}>
            <div style={{ textAlign: 'center', marginTop: '80px' }}>
              <Button as={Link} to="/products" variant="primary" style={{ 
                fontSize: '1.2rem',
                padding: '20px 50px',
                boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
                background: 'var(--minimal-primary)',
                color: 'white'
              }}>
                View All Solutions
              </Button>
            </div>
          </ScrollReveal>
        </Container>
      </ProductsSection>

      {/* Photo Gallery Section */}
      <PhotoGallerySection ref={galleryRef}>
        {isVisible && (
          <PhotoStrip>
            {galleryImages.map((image) => (
              <PhotoItem key={image.id}>
                <LazyImage
                  src={image.src}
                  alt={image.alt}
                />
              </PhotoItem>
            ))}
          </PhotoStrip>
        )}
        
        <ScrollingTextBanner>
          <ScrollingText>
            {scrollingTexts.map((text, index) => (
              <span key={index}>{text}</span>
            ))}
          </ScrollingText>
        </ScrollingTextBanner>
      </PhotoGallerySection>
    </>
  );
};

export default Home;
