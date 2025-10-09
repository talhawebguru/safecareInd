import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

// Fetch home page data with populated fields
export const fetchHomePage = async () => {
  try {
    const response = await api.get('/api/home-page?populate[completeHome][populate][seo][populate]=*&populate[completeHome][populate][heroSlider][populate]=*');
    return response.data.data;
  } catch (error) {
    console.error('Error fetching home page data:', error);
    throw error;
  }
};

// Fetch all categories with subcategories
export const fetchCategories = async () => {
  try {
    // Start with simpler population and build up
    console.log('Fetching categories with URL:', '/api/categories?populate=*');
    const response = await api.get('/api/categories?populate=*');
    console.log('Categories response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error.response?.data || error.message);
    throw error;
  }
};

// Fetch products with filters, pagination, and category/subcategory population
export const fetchProducts = async (page = 1, pageSize = 25, filters = {}) => {
  try {
    // Start with simpler population and build up
    let queryString = `/api/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`;
    
    // Add multiple category filter if provided
    if (filters.categorySlugs && filters.categorySlugs.length > 0) {
      // For single category, use $eq, for multiple use $in
      if (filters.categorySlugs.length === 1) {
        queryString += `&filters[category][slug][$eq]=${filters.categorySlugs[0]}`;
      } else {
        // Use $in operator for multiple categories with slugs
        queryString += `&filters[category][slug][$in]=${filters.categorySlugs.join(',')}`;
      }
    }
    
    // Add subcategory filter if provided
    if (filters.subcategorySlug) {
      queryString += `&filters[subcategories][slug][$eq]=${filters.subcategorySlug}`;
    }
    
    // Add search filter if provided
    if (filters.search) {
      queryString += `&filters[name][$containsi]=${filters.search}`;
    }
    
    console.log('Fetching products with URL:', queryString);
    const response = await api.get(queryString);
    console.log('Products response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.response?.data || error.message);
    throw error;
  }
};

// Fetch single product by slug
export const fetchProductBySlug = async (slug) => {
  try {
    console.log('Fetching product with slug:', slug);
    const response = await api.get(`/api/products?filters[slug][$eq]=${slug}&populate=*`);
    console.log('Product response:', response.data);
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching product:', error.response?.data || error.message);
    throw error;
  }
};

// Fetch single category by slug with all nested data
export const fetchCategoryBySlug = async (slug) => {
  try {
    console.log('Fetching category with slug:', slug);
    const response = await api.get(`/api/categories?filters[slug][$eq]=${slug}&populate=*`);
    console.log('Category response:', response.data);
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching category:', error.response?.data || error.message);
    throw error;
  }
};

export default api;