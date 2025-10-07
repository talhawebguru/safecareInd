# 🚀 Strapi API Integration Guide

## ✅ Completed Integrations

### 1. **Home Page** (`app/page.js`)
- ✅ SEO metadata (metaTitle, metaDescription, keywords, OGimg)
- ✅ Hero slider data
- ✅ API endpoint: `/api/home-page`

### 2. **Categories & Products** (`app/services/api.js`)
- ✅ Fetch all categories with subcategories
- ✅ Fetch products with filters
- ✅ Category/subcategory filtering
- ✅ Pagination support

---

## 📚 API Functions Reference

### `fetchHomePage()`
Fetches home page data including SEO and hero slider.

```javascript
const homeData = await fetchHomePage();
// homeData.completeHome.seo → SEO metadata
// homeData.completeHome.heroSlider → Hero slides
```

**API Endpoint:**
```
GET /api/home-page?populate[completeHome][populate][seo][populate]=*&populate[completeHome][populate][heroSlider][populate]=*
```

---

### `fetchCategories()`
Fetches all categories with subcategories and products.

```javascript
const categoriesData = await fetchCategories();
// categoriesData.data → Array of categories
// categoriesData.data[].subcategories → Array of subcategories
```

**API Endpoint:**
```
GET /api/categories?populate=*
```

**Response Structure:**
```json
{
  "data": [
    {
      "id": 6,
      "documentId": "kcok1stu1009soqwiecqawyd",
      "name": "Sentinel Kits",
      "slug": "sentinel-kits",
      "subcategories": [
        {
          "id": 6,
          "documentId": "o5mzwp471cx5m6lmc93chvzn",
          "name": "Easy Wrap",
          "slug": "easy-wrap"
        }
      ]
    }
  ]
}
```

---

### `fetchProducts(page, pageSize, filters)`
Fetches products with pagination and filtering.

```javascript
const products = await fetchProducts(1, 25, {
  categoryId: 'kcok1stu1009soqwiecqawyd', // Category documentId
  subcategoryId: 'o5mzwp471cx5m6lmc93chvzn', // Subcategory documentId (optional)
  search: 'gloves' // Search term (optional)
});
```

**API Endpoint:**
```
GET /api/products?pagination[page]=1&pagination[pageSize]=25&populate=*&filters[categories][documentId][$eq]=xxx
```

**Response Structure:**
```json
{
  "data": [
    {
      "id": 4,
      "documentId": "pocmenedx7ztc9uu0bhd13wr",
      "name": "STERILE STANDARD DRAPE",
      "slug": "sterile-standard-drape",
      "description": "Product description here",
      "img": {
        "url": "/uploads/image.jpg"
      },
      "categories": [
        {
          "documentId": "e0jakqcwixphmfhf2a7naai3",
          "name": "Sentinel Drapes"
        }
      ]
    }
  ],
  "meta": {
    "pagination": {
      "page": 1,
      "pageSize": 25,
      "pageCount": 3,
      "total": 75
    }
  }
}
```

---

### `fetchProductBySlug(slug)`
Fetches a single product by its slug.

```javascript
const product = await fetchProductBySlug('sterile-standard-drape');
```

**API Endpoint:**
```
GET /api/products?filters[slug][$eq]=sterile-standard-drape&populate=*
```

---

### `fetchCategoryBySlug(slug)`
Fetches a single category with all nested data.

```javascript
const category = await fetchCategoryBySlug('sentinel-kits');
// category.subcategories → All subcategories
// category.products → All products in this category
// category.seo → SEO metadata for category page
```

**API Endpoint:**
```
GET /api/categories?filters[slug][$eq]=sentinel-kits&populate[subcategories][populate]=*&populate[products][populate]=*&populate[seo][populate]=*&populate[img][populate]=*
```

---

## 🎨 Component Integrations

### **FilterSidebar.jsx**
- ✅ Fetches categories from Strapi
- ✅ Displays categories with expandable subcategories
- ✅ Uses `documentId` for filtering
- ✅ Checkbox selection for categories and subcategories

**Key Changes:**
- Uses `cat.documentId` instead of `cat.id`
- Uses `sub.documentId` for subcategories
- Removed local JSON import
- Real-time API fetching with loading skeletons

---

### **ProductPage.jsx**
- ✅ Fetches products from Strapi with pagination
- ✅ Filters by category/subcategory
- ✅ Maps Strapi data to component format
- ✅ Displays total product count
- ✅ Dynamic pagination based on API response

**Key Changes:**
- Uses `fetchProducts()` API function
- Maps Strapi response to internal format:
  ```javascript
  {
    prdID: product.slug,
    prdName: product.name,
    catName: product.categories?.[0]?.name,
    imageUrl: `${API_URL}${product.img.url}`,
    // ... other fields
  }
  ```
- Uses `totalProducts` from API for accurate result count
- Resets to page 1 when category changes

---

## 🔧 Environment Variables

Make sure these are set in your `.env.local`:

```env
# Strapi API URL
NEXT_PUBLIC_API_URL=http://localhost:1337

# Site URL (for SEO metadata)
NEXT_PUBLIC_SITE_URL=https://safecaremedical.ae
```

---

## 📊 Data Mapping

### **Categories**
| Strapi Field | Component Usage |
|--------------|-----------------|
| `documentId` | Used for filtering products |
| `name` | Display name |
| `slug` | URL routing |
| `subcategories` | Nested checkbox items |
| `img` | Category image (optional) |
| `seo` | Category page SEO |

### **Products**
| Strapi Field | Component Usage |
|--------------|-----------------|
| `documentId` | Unique identifier |
| `slug` | URL routing (`/product/[slug]`) |
| `name` | Product title |
| `description` | Product details |
| `img.url` | Product image |
| `categories` | Category association |
| `subcategories` | Subcategory association (optional) |

---

## 🚦 Filter Logic

### Single Category Filter
```javascript
filters.categoryId = 'kcok1stu1009soqwiecqawyd'
// API: &filters[categories][documentId][$eq]=kcok1stu1009soqwiecqawyd
```

### Subcategory Filter
```javascript
filters.subcategoryId = 'o5mzwp471cx5m6lmc93chvzn'
// API: &filters[subcategories][documentId][$eq]=o5mzwp471cx5m6lmc93chvzn
```

### Search Filter
```javascript
filters.search = 'sterile'
// API: &filters[name][$containsi]=sterile
```

---

## 🎯 Next Steps

### 1. **Single Product Page**
Update `SingleProduct.jsx` to use `fetchProductBySlug()`:

```javascript
const product = await fetchProductBySlug(productSlug);
```

### 2. **Category Landing Pages**
Create `/product/category/[categorySlug]/page.jsx`:

```javascript
const category = await fetchCategoryBySlug(categorySlug);
```

### 3. **Add Product Fields in Strapi**
- `rating` (Number) - Product rating
- `reviews` (Number) - Number of reviews
- `isAvailable` (Boolean) - Stock status
- `price` (Number) - Product price

### 4. **Multi-Category Selection**
Extend `fetchProducts()` to support multiple category filters:

```javascript
if (selectedCategories.length > 1) {
  queryString += `&filters[categories][documentId][$in]=${selectedCategories.join(',')}`;
}
```

---

## 🐛 Troubleshooting

### Categories Not Loading
- Check `NEXT_PUBLIC_API_URL` is set correctly
- Verify `/api/categories?populate=*` returns data
- Check browser console for CORS errors

### Products Not Filtering
- Ensure category `documentId` is passed correctly
- Check if products have categories assigned in Strapi
- Verify populate includes categories: `populate=*`

### Images Not Displaying
- Confirm image URLs include `NEXT_PUBLIC_API_URL` prefix
- Check Strapi media library for uploaded images
- Verify `img` field is populated in API response

---

## ✅ Testing Checklist

- [ ] Categories load in FilterSidebar
- [ ] Subcategories expand/collapse correctly
- [ ] Products filter by category selection
- [ ] Pagination works correctly
- [ ] "All" checkbox shows all products
- [ ] Total product count is accurate
- [ ] Images display correctly
- [ ] Loading skeletons show during fetch
- [ ] Error handling works (try disconnecting API)

---

## 📞 Support

For questions about the integration:
- Strapi API Docs: https://docs.strapi.io/dev-docs/api/rest
- Next.js Data Fetching: https://nextjs.org/docs/app/building-your-application/data-fetching
