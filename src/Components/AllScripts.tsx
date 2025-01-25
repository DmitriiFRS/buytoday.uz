import Script from "next/script";

const AllScripts = () => {
     return (
          <>
               {/* <!-- Google Tag Manager --> */}
               <Script
                    id="gtm-script"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                         __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-K6KZ8KMN');`,
                    }}
               />
               {/* <!-- End Google Tag Manager --> */}
               <Script
                    id="gtag"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                         __html: `
        window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6J1BQBSN38');
      `,
                    }}
               />
               <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-K6KZ8KMN" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
               </noscript>
          </>
     );
};

export default AllScripts;
