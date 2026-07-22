"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const CONSENT_KEY = "prabhakar-solutions-cookie-consent";

type Consent = "accepted" | "declined" | null;

export function CookieConsent() {
  const [consent, setConsent] = useState<Consent>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CONSENT_KEY) as Consent;
    setConsent(stored);
    setReady(true);
  }, []);

  function choose(value: Exclude<Consent, null>) {
    window.localStorage.setItem(CONSENT_KEY, value);
    setConsent(value);
  }

  return (
    <>
      <AnimatePresence>
        {ready && consent === null && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-2xl border border-navy-900/10 bg-white p-5 shadow-xl sm:inset-x-auto sm:right-6 dark:border-white/10 dark:bg-navy-900"
            role="dialog"
            aria-label="Cookie consent"
          >
            <p className="text-sm leading-relaxed text-ink-gray">
              We use cookies to understand site usage and improve your experience. Read our{" "}
              <Link href="/cookie-policy" className="text-royal-600 underline underline-offset-2">
                Cookie Policy
              </Link>
              .
            </p>
            <div className="mt-4 flex gap-3">
              <Button size="sm" onClick={() => choose("accepted")}>
                Accept
              </Button>
              <Button size="sm" variant="outline" onClick={() => choose("declined")}>
                Decline
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {consent === "accepted" && <AnalyticsScripts />}
    </>
  );
}

function AnalyticsScripts() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;
  const linkedinId = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID;

  return (
    <>
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gaId}');`}
          </Script>
        </>
      )}

      {clarityId && (
        <Script id="ms-clarity-init" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");`}
        </Script>
      )}

      {metaPixelId && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
              document,'script','https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${metaPixelId}');
              fbq('track', 'PageView');`}
        </Script>
      )}

      {linkedinId && (
        <Script id="linkedin-insight-init" strategy="afterInteractive">
          {`_linkedin_partner_id = "${linkedinId}";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l){if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
              window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);})(window.lintrk);`}
        </Script>
      )}
    </>
  );
}
