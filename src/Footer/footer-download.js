import React, { lazy, Suspense } from "react";
import "./footer.scss";

// Load Images
const GooglePlay = lazy(() => import("./images-google-play"));
const IosStore = lazy(() => import("./images-ios-store"));

// Render images loading
function LoadingImages() {
  return <div className="loading-images"></div>;
}

// ImagesGooglePlay Component
// fallback with LoadingImages
function ImagesGooglePlay() {
  return (
    <Suspense fallback={<LoadingImages />}>
      <GooglePlay />
    </Suspense>
  );
}

// ImagesIosStore Component
// fallback with LoadingImages
function ImagesIosStore() {
  return (
    <Suspense fallback={<LoadingImages />}>
      <IosStore />
    </Suspense>
  );
}

// Render right side of footer component
// FooterDownload Component have
// GooglePlay Images and IosStore Images
function FooterDownload() {
  return (
    <div>
      <div className="footer-download">
        <h4 className="title">Download Apps</h4>
        <div className="google-play">
          <ImagesGooglePlay />
        </div>
        <div className="ios-store">
          <ImagesIosStore />
        </div>
      </div>
      <div className="footer-about">
        <p className="text">
          TontonAja lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Proin vitae justo est. Morbi viverra lacus sed egestas molestie. Morbi
          vestibulum cursus augue, in iaculis libero semper quis. Nulla
          ultricies non nisl eu viverra. Aliquam lobortis diam non urna
          vestibulum, ut feugiat lectus varius.
        </p>
      </div>
    </div>
  );
}

export default FooterDownload;
