import { trans } from "@mongez/localization";
import Helmet from "@mongez/react-helmet";
import React from "react";
import { appName } from "shared/flags";

function _BlogPage() {
  return (
    <>
      <Helmet title={trans("blog")} appName={appName} />
      <div className="w-full p-3">
        <h1>BlogPage</h1>
      </div>
    </>
  );
}

const BlogPage = React.memo(_BlogPage);
export default BlogPage;
