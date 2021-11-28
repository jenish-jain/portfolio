import { Helmet } from 'react-helmet';
import { useSettings } from '../../context/settings';

export function SEO({
    title = "Jenish Jain's Portfolio",
    description = 'Personal portfolio for jenish jain',
    url = 'https://jenishjain.in/',
    image = 'https://res.cloudinary.com/jenishjain/image/upload/v1638108545/portfolio/images/jenishjain.jpg',
    post = false,
  }) {
    const { darkMode } = useSettings();
  
    return (
      <Helmet defer={false}>
        <title>{title}</title>
        <link rel="canonical" href={url} />
        <meta name="description" content={description} />
        <meta name="image" content={image} />
  
        <meta property="og:type" content={post ? 'article' : 'website'} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
  
        <meta
          name="twitter:widgets:theme"
          content={darkMode ? 'dark' : 'light'}
        />
        <meta name="twitter:dnt" content="on" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@jenishjain6" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
  
        <body className={darkMode ? 'dark' : 'light'} />
      </Helmet>
    );
  }
  