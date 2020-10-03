import React from "react";
import LoadingOverlay from "react-loading-overlay";

const Loading = () => (
  <LoadingOverlay
    active={true}
    // spinner={<BounceLoader />}
    spinner={true}
    text="Loading..."
    styles={{
      spinner: (base) => ({
        ...base,
        marginTop: 250,
        width: "100px",
        fontColor: "black",
        "& svg circle": {
          stroke: "rgba(0, 255, 0, 1)",
        },
      }),
    }}
  >
    {/* <p>Some content or children or something.</p> */}
  </LoadingOverlay>
);

export default Loading;
