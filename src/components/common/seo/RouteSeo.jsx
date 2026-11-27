import React from "react";
import { useLocation } from "react-router-dom";
import Seo from "./Seo";
import { getPageSeo } from "./seoPages";

const RouteSeo = () => {
  const { pathname } = useLocation();
  const page = getPageSeo(pathname);
  return page ? <Seo {...page} /> : null;
};

export default RouteSeo;
