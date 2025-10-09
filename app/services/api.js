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
    const response = await api.get('/api/categories?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error.response?.data || error.message);
    throw error;
  }
};

// Fetch products with filters, pagination, and category/subcategory population
export const fetchProducts = async (page = 1, pageSize = 25, filters = {}) => {
  try {
    let queryString = `/api/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`;
    
    // Only add search filter to API, handle category filtering client-side
    if (filters.search) {
      queryString += `&filters[name][$containsi]=${filters.search}`;
    }
    
    // Add subcategory filter if provided (single subcategory only)
    if (filters.subcategorySlug) {
      queryString += `&filters[subcategories][slug][$eq]=${filters.subcategorySlug}`;
    }
    
    const response = await api.get(queryString);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error.response?.data || error.message);
    throw error;
  }
};

// New function to fetch all products for client-side filtering
export const fetchAllProducts = async () => {
  try {
    const queryString = `/api/products?pagination[pageSize]=100&populate=*`;
    const response = await api.get(queryString);
    return response.data;
  } catch (error) {
    console.error('Error fetching all products:', error.response?.data || error.message);
    throw error;
  }
};

// Fetch single product by slug
export const fetchProductBySlug = async (slug) => {
  try {
    const response = await api.get(`/api/products?filters[slug][$eq]=${slug}&populate=*`);
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching product:', error.response?.data || error.message);
    throw error;
  }
};

// Fetch single category by slug with all nested data
export const fetchCategoryBySlug = async (slug) => {
  try {
    const response = await api.get(`/api/categories?filters[slug][$eq]=${slug}&populate=*`);
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching category:', error.response?.data || error.message);
    throw error;
  }
};

export default api;