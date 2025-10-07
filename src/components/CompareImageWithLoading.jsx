import React, { useEffect, useState } from "react";
import CompareImage from "react-compare-image";

export const CompareImageWithLoading = (props) => {
     const [loading, setLoading] = useState(true);

    // Track both images loaded
    const [loadedCount, setLoadedCount] = useState(0);

    const handleImgLoad = (c) => {
      setLoadedCount((c) => c + 1);
    };

    useEffect(() => {
      if (loadedCount >= 2) setLoading(false);
    }, [loadedCount]);

    return (
      <div className="relative">
        {loading && (
          <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-orange-500 border-solid"></div>
          </div>
        )}
        {/* Preload images */}
        <img src={props.leftImage} alt="" style={{ display: "none" }} onLoad={handleImgLoad} />
        <img src={props.rightImage} alt="" style={{ display: "none" }} onLoad={handleImgLoad} />
        {/* Show CompareImage when loaded */}
        {!loading && <CompareImage 
        {...props}
        />}
      </div>
    );
}
