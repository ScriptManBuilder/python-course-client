import styled from 'styled-components';

export const BlogWrapper = styled.div`
  min-height: calc(100vh - 160px);
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 40px 0;
`;

export const BlogHeader = styled.header`
  text-align: center;
  margin-bottom: 60px;
  padding: 0 20px;
`;

export const BlogTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 20px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const BlogSubtitle = styled.p`
  font-size: 1.25rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const SearchSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  padding: 0 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 15px 20px;
  font-size: 1rem;
  border: 2px solid #e1e5e9;
  border-radius: 50px;
  background: white;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

export const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;

  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const FilterButton = styled.button<{ active: boolean }>`
  padding: 10px 20px;
  border: 2px solid ${props => props.active ? '#667eea' : '#e1e5e9'};
  background: ${props => props.active ? '#667eea' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    border-color: #667eea;
    background: ${props => props.active ? '#5a67d8' : '#f8f9fa'};
  }

  @media (max-width: 480px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

export const BlogContent = styled.div`
  display: flex;
  gap: 40px;
  padding: 0 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const FeaturedPost = styled.article`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const FeaturedImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const FeaturedContent = styled.div`
  padding: 40px;

  @media (max-width: 768px) {
    padding: 30px 20px;
  }
`;

export const FeaturedTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 15px;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const FeaturedExcerpt = styled.p`
  font-size: 1.1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 25px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const FeaturedMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
`;

export const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const BlogPost = styled.article`
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  }
`;

export const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const PostContent = styled.div`
  padding: 25px;

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const PostTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 12px;
  line-height: 1.4;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const PostExcerpt = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
  font-size: 0.95rem;
`;

export const PostMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const AuthorInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AuthorAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const AuthorDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorName = styled.span`
  font-weight: 600;
  color: #2d3748;
  font-size: 0.9rem;
`;

export const PostDate = styled.span`
  font-size: 0.8rem;
  color: #999;
`;

export const CategoryTag = styled.span`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 6px 15px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-bottom: 15px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const LoadMoreButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 15px 40px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SidebarSection = styled.aside`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 1024px) {
    max-width: none;
    flex-direction: row;
    justify-content: space-between;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

export const SidebarTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d3748;
  margin-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: 2px;
  }
`;

export const PopularPosts = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const PopularPost = styled.div`
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

export const PopularPostTitle = styled.h4`
  font-size: 0.95rem;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 5px;
  line-height: 1.4;
  cursor: pointer;

  &:hover {
    color: #667eea;
  }
`;

export const NewsletterSignup = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  color: white;

  @media (max-width: 480px) {
    padding: 25px 20px;
  }
`;

export const NewsletterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const NewsletterInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  border: none;
  border-radius: 8px;
  margin: 15px 0 10px 0;
  font-size: 0.95rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.3);
  }

  &::placeholder {
    color: #999;
  }
`;

export const NewsletterButton = styled.button`
  width: 100%;
  background: white;
  color: #667eea;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  &:hover:not(:disabled) {
    background: #f8f9fa;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
`;