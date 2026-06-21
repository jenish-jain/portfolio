import { Helmet } from 'react-helmet';
import { useSettings } from '../../context/settings';

export function SEO({
    title = "Jenish Jain — Software Engineer",
    description = 'Senior Software Engineer at Rapido. Building distributed systems, side-quests in Go, and writing about engineering.',
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
        <meta name="author" content="Jenish Jain" />
        <meta name="theme-color" content="#ffe742" />
        <meta name="keywords" content='jenish jain, software engineer, rapido, distributed systems, go developer, system design, kafka, tech blog, backend engineer, india'/>
        <meta name="p:domain_verify" content="2b42884d3f1050dd3c36cc45661a2051"/>

        <meta property='og:site_name' content='Jenish Jain'/>
        <meta property='og:title' content={title}/>
        <meta property="og:type" content={post ? 'article' : 'website'} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:locale" content="en_IN" />

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
  