import React from "react";

import { requireNativeComponent } from "react-native";

const TextSwitch = requireNativeComponent("RNTextSwitch");

const RNTextSwitch = (props?: any) => {
  return <TextSwitch 
    {...props}
  />
}



export default RNTextSwitch; 