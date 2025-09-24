import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { usePrice } from '../hooks/usePrice';
import {
  DropdownWrapper,
  DropdownContent,
  CategoriesSection,
  CategoryTitle,
  CategoryList,
  CategoryItem,
  FeaturedSection,
  FeaturedTitle,
  ProductGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ViewAllButton
} from '../styles/components/ProductsDropdownStyles';

interface ProductsDropdownProps {
  isVisible: boolean;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  selectedCategory?: string;
}

const ProductsDropdown: React.FC<ProductsDropdownProps> = ({ 
  isVisible, 
  onClose, 
  onMouseEnter, 
  onMouseLeave,
  selectedCategory = 'all'
}) => {
  const { formatPrice } = usePrice();
  
  // AI курсы категории для навигации (синхронизировано с Products.tsx)
  const categories = [
    { id: 'AI Basics', name: 'Beginner Courses', icon: '🎯', description: 'Start your AI journey' },
    { id: 'Content Creation', name: 'Content Creation', icon: '✨', description: 'Creative AI tools' },
    { id: 'Business Automation', name: 'Business Automation', icon: '⚡', description: 'Streamline workflows' },
    { id: 'Advanced AI', name: 'Advanced', icon: '🚀', description: 'Master complex topics' },
    { id: 'AI Marketing', name: 'AI Marketing', icon: '📈', description: 'Marketing intelligence' },
    { id: 'Data & Analytics', name: 'Data & Analytics', icon: '📊', description: 'Data insights' },
    { id: 'Productivity Mastery', name: 'Productivity', icon: '⏰', description: 'Efficiency tools' },
    { id: 'Creative AI', name: 'Creative AI', icon: '🎨', description: 'Creative innovation' },
    { id: 'AI Consulting', name: 'Consulting', icon: '�', description: 'Professional services' },
    { id: 'Enterprise AI', name: 'Enterprise', icon: '🏢', description: 'Large-scale solutions' },
    { id: 'AI Mastery', name: 'AI Mastery', icon: '🎓', description: 'Complete mastery' }
  ];
  
  // Показываем только 3 товара для компактности
  const featuredProducts = products.slice(0, 3);

  const handleLinkClick = () => {
    onClose();
  };

  if (!isVisible) return null;

  return (
    <DropdownWrapper
      data-dropdown="products"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <DropdownContent>
        <CategoriesSection>
          <CategoryTitle>Course Categories</CategoryTitle>
          <CategoryList>
            {categories.map((category) => (
              <CategoryItem 
                key={category.id}
                $isActive={selectedCategory === category.id}
                as={Link} 
                to={`/products?category=${category.id}`}
                onClick={handleLinkClick}
              >
                <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  <span style={{ marginRight: '10px', fontSize: '1.2em', flexShrink: 0 }}>
                    {category.icon}
                  </span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: '600', marginBottom: '2px' }}>
                      {category.name}
                    </div>
                    <div style={{ 
                      fontSize: '0.8rem', 
                      color: '#666', 
                      fontWeight: '400',
                      opacity: 0.8 
                    }}>
                      {category.description}
                    </div>
                  </div>
                </div>
              </CategoryItem>
            ))}
            <CategoryItem 
              $isActive={selectedCategory === 'all'}
              as={Link} 
              to="/products"
              onClick={handleLinkClick}
              style={{ 
                borderTop: '1px solid #e5e5e5', 
                marginTop: '8px', 
                paddingTop: '12px',
                fontWeight: '600'
              }}
            >
              <span style={{ marginRight: '8px', fontSize: '1.1em' }}>📚</span>
              All Courses
            </CategoryItem>
          </CategoryList>
        </CategoriesSection>

        <FeaturedSection>
          <FeaturedTitle>Featured AI Courses</FeaturedTitle>
          <ProductGrid>
            {featuredProducts.map((product) => (
              <ProductCard 
                key={product.id}
                as={Link} 
                to={`/product/${product.id}`}
                onClick={handleLinkClick}
              >
                <ProductImage src={product.image} alt={product.name} />
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
          
          <ViewAllButton 
            as={Link} 
            to="/products"
            onClick={handleLinkClick}
          >
            View All Courses →
          </ViewAllButton>
        </FeaturedSection>
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default ProductsDropdown;
