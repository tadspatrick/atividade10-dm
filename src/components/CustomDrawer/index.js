import React from "react";
import { View, Text } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./styles";

function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.container}>
        <Icon name="clipboard-account" size={76} color="#6E5494" />
        <Text style={styles.text}>User</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

export default CustomDrawer;
