import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

//equivalent of creating the interface Iprop object;
export const LoadingComponent: React.FC<{
  inverted?: boolean;
  content?: string;
}> = ({ inverted = true, content }) => {
  return (
    <Dimmer active inverted={inverted}>
      <Loader content={content} />
    </Dimmer>
  );
};
