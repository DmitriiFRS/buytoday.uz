import Script from "next/script";

const AllScripts = () => {
     return (
          <>
               {/* <!-- Google Tag Manager --> */}
               <Script async src="https://www.googletagmanager.com/gtag/js?id=G-1E63R84Q18"></Script>
               <Script
                    strategy="afterInteractive"
                    id="gtag-1"
                    dangerouslySetInnerHTML={{
                         __html: `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1E63R84Q18');`,
                    }}
               />
               <Script
                    id="gtag-2"
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                         __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PZ4ZF7QC');`,
                    }}
               />
               {/* <!-- End Google Tag Manager --> */}
               <Script
                    id="yandex-metrika"
                    strategy="lazyOnload"
                    dangerouslySetInnerHTML={{
                         __html: `(function(m,e,t,r,i,k,a){ 
      m[i]=m[i] || function(){(m[i].a=m[i].a || []).push(arguments)}; 
      m[i].l=1*new Date(); 
      for (var j = 0; j < document.scripts.length; j++) { 
        if (document.scripts[j].src === r) { return; } 
      } 
      k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

    ym(99670103, "init", {
      clickmap:true,
      trackLinks:true,
      accurateTrackBounce:true,
      webvisor:true
    });`,
                    }}
               />
               <noscript>
                    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PZ4ZF7QC" height="0" width="0" style={{ display: "none", visibility: "hidden" }}></iframe>
               </noscript>
               <noscript>
                    <div>
                         <img src="https://mc.yandex.ru/watch/99670103" alt="" style={{ position: "absolute", left: "-9999px" }} />
                    </div>
               </noscript>
          </>
     );
};

export default AllScripts;
