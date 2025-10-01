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
  
  // Python курсы категории для навигации (синхронизировано с Products.tsx)
  const categories = [
    { id: 'Python Basics', name: 'Python Basics', icon: '🐍', description: 'Start your Python journey' },
    { id: 'Python Data', name: 'Data Types', icon: '📋', description: 'Variables & structures' },
    { id: 'Python Functions', name: 'Functions', icon: '⚙️', description: 'Code organization' },
    { id: 'Python I/O', name: 'File Handling', icon: '�', description: 'Input/Output operations' },
    { id: 'Python OOP', name: 'OOP', icon: '🏢', description: 'Object-oriented programming' },
    { id: 'Python Libraries', name: 'Libraries', icon: '�', description: 'Package management' },
    { id: 'Python Web', name: 'Web Development', icon: '🌐', description: 'Flask web apps' },
    { id: 'Python Algorithms', name: 'Algorithms', icon: '🧠', description: 'Data structures' },
    { id: 'Data Analysis', name: 'Data Analysis', icon: '📈', description: 'Pandas & visualization' },
    { id: 'API Development', name: 'API Development', icon: '🔗', description: 'REST APIs' },
    { id: 'Advanced Python', name: 'Advanced', icon: '�', description: 'Expert-level concepts' }
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
          <FeaturedTitle>Featured Python Courses</FeaturedTitle>
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
