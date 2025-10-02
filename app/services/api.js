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

export default api;