import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProductsWrapper = styled.div`
  margin-top: 120px;
  min-height: calc(100vh - 120px);
  padding: 60px 0;
  background: var(--minimal-bg);
  color: var(--minimal-text);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 40px 0;
    margin-top: 100px;
  }
  
  @media (max-width: 480px) {
    padding: 30px 0;
    margin-top: 80px;
  }
`;

export const FilterSection = styled.div`
  padding: 30px 0;
  margin-bottom: 50px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    padding: 20px 0;
    margin-bottom: 30px;
  }
  
  @media (max-width: 480px) {
    padding: 15px 0;
    margin-bottom: 20px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 12px 24px;
  border: 1px solid ${props => props.active ? 'var(--minimal-blue)' : 'var(--minimal-gray-300)'};
  border-radius: 8px;
  background: ${props => props.active 
    ? 'var(--minimal-blue)' 
    : 'var(--minimal-white)'};
  color: ${props => props.active ? 'var(--minimal-white)' : 'var(--minimal-gray-700)'};
  font-weight: 500;
  font-size: 0.875rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  transition: all 0.2s ease;
  cursor: pointer;
  
  &:hover {
    background: ${props => props.active 
      ? 'var(--minimal-blue)' 
      : 'var(--minimal-gray-50)'};
    border-color: var(--minimal-blue);
    color: ${props => props.active ? 'var(--minimal-white)' : 'var(--minimal-blue)'};
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  @media (max-width: 768px) {
    padding: 12px 24px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 0.85rem;
    letter-spacing: 0.2px;
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
  margin-top: 50px;
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    margin-top: 30px;
    padding: 0 10px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
    margin-top: 20px;
    padding: 0 5px;
  }
`;

export const ProductCard = styled.div`
  background: var(--minimal-white);
  border: 1px solid var(--minimal-gray-200);
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.2s ease;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-color: var(--minimal-gray-300);
  }
  
  @media (max-width: 768px) {
    border-radius: 20px;
    
    &:hover {
      transform: translateY(-8px) scale(1.01);
    }
  }
  
  @media (max-width: 480px) {
    border-radius: 16px;
    
    &:hover {
      transform: translateY(-6px) scale(1.005);
    }
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  z-index: 1;
  
  ${ProductCard}:hover & {
    transform: scale(1.05);
    filter: brightness(1.1) contrast(1.05) saturate(1.1);
  }
  
  @media (max-width: 768px) {
    height: 220px;
  }
  
  @media (max-width: 480px) {
    height: 200px;
  }
`;

export const ProductBadge = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--wc-gradient-secondary);
  color: var(--minimal-white);
  padding: 8px 15px;
  border-radius: 18px;
  font-size: 0.85rem;
  font-weight: 700;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 15px rgba(231, 76, 60, 0.3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 480px) {
    top: 12px;
    right: 12px;
    padding: 6px 12px;
    font-size: 0.8rem;
    border-radius: 15px;
  }
`;

export const ProductInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 280px;
  
  @media (max-width: 768px) {
    padding: 16px;
    min-height: 260px;
  }
  
  @media (max-width: 480px) {
    padding: 14px;
    min-height: 240px;
  }
`;

export const ProductName = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.125rem;
  font-weight: 600;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--minimal-gray-900);
  line-height: 1.4;
  transition: all 0.2s ease;
  
  ${ProductCard}:hover & {
    color: var(--minimal-blue);
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 6px;
  }
`;

export const ProductLink = styled(Link)`
  color: var(--minimal-gray-900);
  text-decoration: none;
  transition: color 0.2s ease;
  
  &:hover {
    color: var(--minimal-blue);
  }
`;

export const ProductPrice = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  color: var(--minimal-blue);
  margin-bottom: 8px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.125rem;
  }
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  color: var(--minimal-gray-600);
  margin: 0 0 12px 0;
  line-height: 1.5;
  font-weight: 400;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  flex: 1;
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin: 0 0 10px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    margin: 0 0 8px 0;
  }
`;

export const ProductFeatures = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 8px 0;
  
  @media (max-width: 480px) {
    gap: 4px;
    margin: 6px 0;
  }
`;

export const FeatureTag = styled.span`
  background: var(--minimal-gray-100);
  color: var(--minimal-gray-700);
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 0.75rem;
  font-weight: 500;
  border: 1px solid var(--minimal-gray-200);
  
  @media (max-width: 480px) {
    padding: 3px 6px;
    font-size: 0.7rem;
    border-radius: 4px;
  }
`;

export const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 60px;
  background: var(--minimal-white);
  border: 1px solid var(--minimal-gray-200);
  padding: 40px 30px;
  border-radius: 16px;
  box-shadow: 
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  position: relative;
  
  @media (max-width: 768px) {
    margin-bottom: 40px;
    padding: 30px 20px;
    border-radius: 12px;
  }
  
  @media (max-width: 480px) {
    margin-bottom: 30px;
    padding: 25px 16px;
    border-radius: 10px;
  }
`;

export const PageTitle = styled.h1`
  color: var(--minimal-gray-900);
  font-size: 2.5rem;
  font-weight: 700;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 0 0 16px 0;
  letter-spacing: -0.5px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin: 0 0 14px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
    margin: 0 0 12px 0;
    letter-spacing: -0.3px;
  }
`;

export const PageSubtitle = styled.p`
  color: var(--minimal-gray-600);
  font-size: 1.1rem;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  margin: 0;
  font-weight: 500;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;
