"use client";

import { useLanguageStore } from "@/store/store";
import React, { useEffect } from "react";

const LanguageWrapper = ({ children }: { children: React.ReactNode }) => {
  const setLanguage = useLanguageStore((state) => state.setLanguage);
  const [gotData, setGotData] = React.useState(false);

  useEffect(() => {
    let lang = localStorage.getItem("lang") || "en";
    console.log({ lang });

    import(`../language/${lang}.json`)
      .then((json) => {
        setLanguage(json.default);
        setGotData(true);
      })
      .catch((error) => {
        // Handle any errors
        console.error("Error importing module:", error);
      });
  }, []);

  if (!gotData)
    return (
      <body>
        <div className="loader-blob-4-dot"></div>
      </body>
    );
  else return <>{children}</>;
};

export default LanguageWrapper;
