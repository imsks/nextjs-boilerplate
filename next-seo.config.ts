const title = 'Your website';
const description = 'Your Website Description';

const SEO = {
  title,
  description,
  canonical: '.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: '.',
    title,
    description,
    images: [
      {
        url: './images/logo.png',
        alt: title,
      },
    ],
  },
  twitter: {
    handle: '@USERNAME',
    site: '@USERNAME',
    cardType: 'summary_large_image',
  },
};

export default SEO;
