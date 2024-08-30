"use client";

import { useLanguageStore } from "@/store/store";
import React, { useEffect } from "react";

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const [gotData, setGotData] = React.useState(false);

  useEffect(() => {
    let lang = localStorage.getItem("lang") || "en";
    import(`../language/${lang}.json`)
      .then((json) => {
        setLanguage(json.default);
        setGotData(true);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error importing module:", error);
      });
  }, [setLanguage]);

  if (!gotData)
    return (
      <body>
        <div className="body-wrapper theme-dark">
          <div className="loader-cnt">
            <div className="loader-blob-4-dot"></div>
          </div>
        </div>
      </body>
    );
  else return <>{children}</>;
};

export default LanguageWrapper;
