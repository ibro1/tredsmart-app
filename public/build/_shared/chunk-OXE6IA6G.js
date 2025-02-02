import {
  createHotContext
} from "/build/_shared/chunk-LGIRSWQ5.js";

// app/configs/site.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/configs/site.ts"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
var configSite = {
  domain: "dogokit-beagle.vercel.app",
  // Recommended: 60 characters
  name: "Dogokit",
  // Can be different with title
  title: "Dogokit",
  // Can be different with name
  slug: "dogokit",
  // Recommended: 155-160 characters
  description: "Web app template kit using Remix, React, Tailwind CSS, Radix UI, Prisma ORM, and more",
  languageCode: "en",
  countryCode: "US",
  logos: {
    dark: "/images/logos/svg/dogokit-white.svg",
    light: "/images/logos/svg/dogokit-black.svg"
  },
  links: {
    devTo: "https://dev.to/mhaidarhanif",
    facebook: "https://facebook.com/mhaidarhanif",
    github: "https://github.com/mhaidarhanif",
    hashnode: "https://hashnode.com/mhaidarhanif",
    instagram: "https://instagram.com/mhaidarhanif_",
    showwcase: "https://showwcase.com/mhaidarhanif",
    twitter: "https://twitter.com/mhaidarhanif",
    website: "https://dogokit-beagle.vercel.app",
    youtube: "https://youtube.com/mhaidarhanif"
  },
  twitter: {
    site: "@mhaidarhanif",
    creator: "@mhaidarhanif"
  },
  author: {
    name: "M Haidar Hanif",
    handle: "@mhaidarhanif",
    url: "https://mhaidarhanif.com"
  },
  company: {
    name: "Allnimal",
    handle: "@allnimal",
    url: "https://allnimal.com"
  },
  mailingListName: "All-in-One Kit",
  // Setup all the available paths in app/configs/navigation.ts
  navItems: ["/", "/about", "/search", "/posts", "/users", "/examples"]
};

// app/configs/meta.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/configs/meta.ts"
  );
  import.meta.hot.lastModified = "1738409028324.369";
}
var isDevelopment = true;
var configMeta = {
  defaultName: configSite.name,
  defaultTitle: configSite.title,
  defaultDescription: configSite.description,
  defaultSeparator: "\u2014",
  domain: configSite.domain,
  url: isDevelopment ? "http://localhost:3000" : `https://${configSite.domain}`,
  themeColor: "#c7d2fe",
  backgroundColor: "#1e1b4b",
  locale: "en_US",
  canonicalPath: "/",
  ogType: "website",
  ogImageAlt: configSite.title,
  ogImageType: "image/png",
  ogImagePath: "/opengraph/dogokit-og.png",
  // Recommended: 1200 x 630
  twitterImagePath: "/opengraph/dogokit-og.png",
  // Recommended: 1024 x 512
  fbAppId: "",
  author: configSite.author,
  company: configSite.company
};

// app/utils/meta.ts
if (import.meta) {
  import.meta.hot = createHotContext(
    //@ts-expect-error
    "app/utils/meta.ts"
  );
  import.meta.hot.lastModified = "1738409028332.369";
}
function createMeta({
  title = configMeta.defaultTitle,
  description = configMeta.defaultDescription,
  canonicalPath = "/",
  locale = configMeta.locale,
  name = configMeta.defaultName,
  ogImageAlt = configMeta.ogImageAlt,
  ogImagePath = configMeta.ogImagePath,
  ogImageType = configMeta.ogImageType,
  ogType = configMeta.ogType,
  themeColor = configMeta.themeColor,
  twitterAuthorHandle = configMeta.author.handle,
  twitterImagePath = configMeta.twitterImagePath,
  url = configMeta.url
}) {
  return [
    {
      title: title === configMeta.defaultTitle ? configMeta.defaultTitle : `${title} ${configMeta.defaultSeparator} ${configMeta.defaultName}`
    },
    {
      name: "description",
      content: description
    },
    {
      name: "application-name",
      content: name
    },
    {
      name: "apple-mobile-web-app-title",
      content: name
    },
    {
      name: "theme-color",
      content: themeColor
    },
    {
      name: "msapplication-TileColor",
      content: themeColor
    },
    {
      name: "msapplication-config",
      content: `${configMeta.url}/browserconfig.xml`
    },
    {
      property: "og:site_name",
      content: name
    },
    {
      property: "og:title",
      content: title
    },
    {
      property: "og:description",
      content: description
    },
    {
      property: "og:url",
      content: canonicalPath ? `${configMeta.url}${canonicalPath}` : url
    },
    {
      property: "og:type",
      content: ogType
    },
    {
      property: "og:locale",
      content: locale
    },
    {
      property: "og:image:alt",
      content: ogImageAlt
    },
    {
      property: "og:image:type",
      content: ogImageType
    },
    {
      property: "og:image",
      content: ogImagePath ? `${configMeta.url}${ogImagePath}` : `${configMeta.url}${configMeta.ogImagePath}`
    },
    {
      name: "twitter:card",
      content: "summary_large_image"
    },
    {
      name: "twitter:site",
      content: twitterAuthorHandle
    },
    {
      name: "twitter:creator",
      content: twitterAuthorHandle
    },
    {
      name: "twitter:title",
      content: title
    },
    {
      name: "twitter:description",
      content: description
    },
    {
      name: "twitter:domain",
      content: configMeta.domain
    },
    {
      name: "twitter:url",
      content: canonicalPath ? `${configMeta.url}${canonicalPath}` : url || configMeta.url
    },
    {
      name: "twitter:image",
      content: twitterImagePath ? `${configMeta.url}${twitterImagePath}` : `${configMeta.url}${configMeta.twitterImagePath}`
    },
    {
      name: "fb:app_id",
      content: configMeta.fbAppId
    },
    {
      tagName: "link",
      rel: "canonical",
      href: canonicalPath ? `${configMeta.url}${canonicalPath}` : url
    },
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: configMeta.defaultTitle
      }
    }
  ];
}

export {
  configSite,
  configMeta,
  createMeta
};
//# sourceMappingURL=/build/_shared/chunk-OXE6IA6G.js.map
