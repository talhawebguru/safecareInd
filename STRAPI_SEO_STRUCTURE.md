# 🎯 Complete Strapi SEO Component Structure

## 📦 Component Name: `seo`

Create this component in Strapi with the following fields:

---

## 📋 Required Fields

### **Basic SEO**
| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `metaTitle` | Text (Short) | Page title (50-60 chars) | "SafeCare Medical - Medical Supplies UAE" |
| `metaDescription` | Text (Long) | Meta description (150-160 chars) | "Leading manufacturer of medical gloves, face masks, dental products..." |
| `keywords` | Text (Short) | SEO keywords (comma-separated) | "medical gloves, face masks, dental products" |
| `canonical` | Text (Short) | Canonical URL (full path) | "https://safecaremedical.ae/" |

---

### **Robots & Indexing**
| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `metaRobots` | Text (Short) | Robots meta tag | "index, follow" or "noindex, nofollow" |

---

### **Open Graph (Facebook/LinkedIn)**
| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `ogTitle` | Text (Short) | OG title (max 60 chars) | "SafeCare Medical Industries UAE" |
| `ogDescription` | Text (Long) | OG description (max 200 chars) | "Premium medical supplies manufacturer in UAE..." |
| `ogImage` | Media (Single) | OG image (1200x630px recommended) | Upload image |
| `ogUrl` | Text (Short) | Full page URL | "https://safecaremedical.ae/" |
| `ogType` | Text (Short) | OG type | "website" or "article" |
| `ogSiteName` | Text (Short) | Site name | "SafeCare Medical Industries" |

---

### **Twitter Card**
| Field Name | Type | Description | Example |
|------------|------|-------------|---------|
| `twitterCard` | Enumeration | Card type | `summary_large_image` |
| `twitterTitle` | Text (Short) | Twitter title (max 70 chars) | "SafeCare Medical Industries UAE" |
| `twitterDescription` | Text (Long) | Twitter description (max 200 chars) | "Premium medical supplies..." |
| `twitterImage` | Media (Single) | Twitter image (1200x628px) | Upload image |
| `twitterSite` | Text (Short) | Twitter handle of website | "@safecaremedical" |
| `twitterCreator` | Text (Short) | Twitter handle of content creator | "@safecaremedical" |

---

### **Twitter Card Enumeration Values:**
- `summary`
- `summary_large_image` ✅ (Recommended)
- `app`
- `player`

---

## 🎨 Image Specifications

### Open Graph Image (`ogImage`)
- **Dimensions:** 1200 x 630 px
- **Aspect Ratio:** 1.91:1
- **Max File Size:** 8 MB
- **Format:** JPG, PNG
- **Use Case:** Facebook, LinkedIn, WhatsApp previews

### Twitter Image (`twitterImage`)
- **Dimensions:** 1200 x 628 px
- **Aspect Ratio:** 1.91:1
- **Max File Size:** 5 MB
- **Format:** JPG, PNG, WEBP, GIF
- **Use Case:** Twitter card previews

---

## 📝 Field Setup in Strapi

### Step 1: Create SEO Component
1. Go to **Content-Type Builder** → **Components**
2. Click **Create new component**
3. Name: `seo`
4. Category: `shared`

### Step 2: Add Fields
Add all fields from the tables above with these settings:

#### Text Fields (Short):
- **Type:** Text
- **Name:** As per table
- **Required:** No (use fallbacks in code)

#### Text Fields (Long):
- **Type:** Text (Long text)
- **Name:** As per table
- **Required:** No

#### Media Fields:
- **Type:** Media
- **Multiple:** No
- **Allowed types:** Images only
- **Required:** No

#### Enumeration Field (twitterCard):
- **Type:** Enumeration
- **Values:** `summary`, `summary_large_image`, `app`, `player`
- **Default:** `summary_large_image`

### Step 3: Add SEO Component to Content Types
1. Edit your **home-page** content type
2. In the `completeHome` component, add field:
   - **Name:** `seo`
   - **Type:** Component (single)
   - **Component:** `shared.seo`

---

## 🔧 Environment Variables

Add these to your `.env.local`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://safecaremedical.ae
NEXT_PUBLIC_API_URL=http://localhost:1337

# Social Media Handles (Optional)
NEXT_PUBLIC_TWITTER_HANDLE=@safecaremedical
NEXT_PUBLIC_FACEBOOK_PAGE=safecaremedical
```

---

## ✅ Sample Data for Testing

### Home Page SEO Example:

```json
{
  "metaTitle": "SafeCare Medical Industries | Medical Supplies Manufacturer UAE",
  "metaDescription": "SafeCare Medical Industries is a leading manufacturer and supplier of medical gloves, face masks, dental products, and pharma packaging in the UAE. ISO certified quality products.",
  "keywords": "medical gloves UAE, face masks manufacturer, dental products supplier, pharma packaging Dubai, medical supplies Abu Dhabi",
  "canonical": "https://safecaremedical.ae/",
  "metaRobots": "index, follow",
  
  "ogTitle": "SafeCare Medical Industries - Premium Medical Supplies UAE",
  "ogDescription": "Leading manufacturer of medical gloves, face masks, dental products, and pharma packaging solutions in the UAE. ISO certified quality.",
  "ogUrl": "https://safecaremedical.ae/",
  "ogType": "website",
  "ogSiteName": "SafeCare Medical Industries",
  "ogImage": "[Upload 1200x630 image]",
  
  "twitterCard": "summary_large_image",
  "twitterTitle": "SafeCare Medical Industries UAE",
  "twitterDescription": "Premium medical supplies manufacturer in UAE - Medical Gloves, Face Masks, Dental & Pharma Products",
  "twitterImage": "[Upload 1200x628 image or use same as OG]",
  "twitterSite": "@safecaremedical",
  "twitterCreator": "@safecaremedical"
}
```

---

## 🧪 Testing Your SEO

### Test Tools:
1. **Facebook Debugger:** https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator:** https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector:** https://www.linkedin.com/post-inspector/
4. **Google Rich Results Test:** https://search.google.com/test/rich-results

### Test URLs:
- Test with: `https://safecaremedical.ae/`
- Check meta tags in browser DevTools → Elements → `<head>` section

---

## 📊 SEO Best Practices

### Title Length:
- **Meta Title:** 50-60 characters
- **OG Title:** 60-90 characters
- **Twitter Title:** 70 characters

### Description Length:
- **Meta Description:** 150-160 characters
- **OG Description:** 200 characters
- **Twitter Description:** 200 characters

### Keywords:
- 5-10 relevant keywords
- Comma-separated
- Focus on long-tail keywords

---

## 🚀 Next Steps

1. ✅ Create SEO component in Strapi with all fields
2. ✅ Add component to home-page content type
3. ✅ Upload OG and Twitter images (1200x630px)
4. ✅ Fill in all SEO fields with content
5. ✅ Add `NEXT_PUBLIC_SITE_URL` to `.env.local`
6. ✅ Test metadata in browser and social media debuggers
7. ✅ Submit sitemap to Google Search Console

---

## 📞 Support

For any questions about SEO setup, refer to:
- Next.js Metadata API: https://nextjs.org/docs/app/api-reference/functions/generate-metadata
- Open Graph Protocol: https://ogp.me/
- Twitter Cards: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
