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

// Fetch all categories with subcategories and products
export const fetchCategories = async () => {
  try {
    const response = await api.get('/api/categories?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};

// Fetch products with filters, pagination, and category/subcategory population
export const fetchProducts = async (page = 1, pageSize = 25, filters = {}) => {
  try {
    let queryString = `/api/products?pagination[page]=${page}&pagination[pageSize]=${pageSize}&populate=*`;
    
    // Add category filter if provided
    if (filters.categoryId) {
      queryString += `&filters[categories][documentId][$eq]=${filters.categoryId}`;
    }
    
    // Add subcategory filter if provided
    if (filters.subcategoryId) {
      queryString += `&filters[subcategories][documentId][$eq]=${filters.subcategoryId}`;
    }
    
    // Add search filter if provided
    if (filters.search) {
      queryString += `&filters[name][$containsi]=${filters.search}`;
    }
    
    const response = await api.get(queryString);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Fetch single product by slug
export const fetchProductBySlug = async (slug) => {
  try {
    const response = await api.get(`/api/products?filters[slug][$eq]=${slug}&populate=*`);
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};

// Fetch single category by slug with all nested data
export const fetchCategoryBySlug = async (slug) => {
  try {
    const response = await api.get(`/api/categories?filters[slug][$eq]=${slug}&populate[subcategories][populate]=*&populate[products][populate]=*&populate[seo][populate]=*&populate[img][populate]=*`);
    return response.data.data[0];
  } catch (error) {
    console.error('Error fetching category:', error);
    throw error;
  }
};

export default api;