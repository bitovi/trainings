import React from "react";

import Audio from "./Audio/Audio";
import ButtonsAndLinks from "./ButtonsAndLinks/ButtonsAndLinks";
import ClearLanguage from "./ClearLanguage/ClearLanguage";
import ConsistentDesign from "./ConsistentDesign/ConsistentDesign";
import Forms from "./Forms/Forms";
import Images from "./Images/Images";
import KeyboardNavigation from "./KeyboardNavigation/KeyboardNavigation";
import ReduceMotion from "./ReduceMotion/ReduceMotion";
import SemanticSections from "./SemanticSections/SemanticSections";
import TargetSize from "./TargetSize/TargetSize";
import Text from "./Text/Text";
import Video from "./Video/Video";

const App = () => {
  return (
    <>
      <Audio />
      <ButtonsAndLinks />
      <ClearLanguage />
      <ConsistentDesign />
      <Forms />
      <Images />
      <KeyboardNavigation />
      <ReduceMotion />
      <SemanticSections />
      <TargetSize />
      <Text />
      <Video />
    </>
  );
};

export default App;
