import React from "react";

const SkeletonSplash: React.FC = () => {
  return (
    <div className="skeleton-splash">
      {/* Header skeleton (matches Header.tsx layout) */}
      <div className="skeleton-header">
        <div className="sk-logo shimmer" />
        <div className="sk-nav">
          <div className="sk-nav-item shimmer" />
          <div className="sk-nav-item shimmer" />
          <div className="sk-nav-item shimmer" />
          <div className="sk-nav-item shimmer" />
          <div className="sk-cta shimmer" />
        </div>
      </div>

      {/* FrontPage hero (title + 2 buttons + illustration) */}
      <div className="skeleton-hero">
        <div className="sk-hero-left">
          <div className="sk-title sk-line shimmer" />
          <div className="sk-title sk-line shimmer" />
          <div className="sk-btns">
            <div className="sk-btn shimmer" />
            <div className="sk-btn outline shimmer" />
          </div>
        </div>
        <div className="sk-hero-right">
          <div className="sk-illustration shimmer" />
        </div>
      </div>

      {/* About section skeleton */}
      <div className="skeleton-about">
        <div className="sk-about-topic">
          <div className="sk-about-title sk-line shimmer" />
          <div className="sk-about-hr shimmer" />
        </div>
        <div className="sk-about-main">
          <div className="sk-about-illustration shimmer" />
          <div className="sk-about-descrp">
            <div className="sk-line shimmer" style={{ width: "70%" }} />
            <div className="sk-line shimmer" style={{ width: "90%" }} />
            <div className="sk-stats">
              {Array.from({ length: 3 }).map((_, i) => (
                <div className="sk-stat" key={i}>
                  <div className="sk-stat-icon shimmer" />
                  <div>
                    <div className="sk-line shimmer" style={{ width: "40px" }} />
                    <div className="sk-line shimmer" style={{ width: "80px" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Products section skeleton */}
      <div className="skeleton-products">
        {/* Featured title */}
        <div className="sk-products-topic">
          <div className="sk-line shimmer" style={{ width: "260px", height: 26 }} />
          <div className="sk-hr shimmer" />
          <div className="sk-line shimmer" style={{ width: "60%" }} />
        </div>

        {/* Featured 3 cards row */}
        <div className="skeleton-cards three">
          {Array.from({ length: 3 }).map((_, i) => (
            <div className="sk-card" key={`f-${i}`}>
              <div className="sk-card-media shimmer" />
              <div className="sk-card-line shimmer" />
              <div className="sk-card-line short shimmer" />
              <div className="sk-card-cta shimmer" />
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="skeleton-tabs">
          {Array.from({ length: 4 }).map((_, i) => (
            <div className={`sk-tab ${i === 0 ? "active" : ""} shimmer`} key={`t-${i}`} />
          ))}
        </div>

        {/* Full list grid */}
        <div className="skeleton-cards">
          {Array.from({ length: 6 }).map((_, i) => (
            <div className="sk-card" key={i}>
              <div className="sk-card-media shimmer" />
              <div className="sk-card-line shimmer" />
              <div className="sk-card-line short shimmer" />
              <div className="sk-card-cta shimmer" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkeletonSplash;
