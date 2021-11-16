import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Home from "../views/Home";
import Create from "../views/Create";
import Contact from "../views/Contact";
import CustomDrawer from "../components/CustomDrawer";

const Drawer = createDrawerNavigator();

function Drawers({ route }) {
  const { user } = route.params;
  return (
      <Drawer.Navigator
        drawerContent={CustomDrawer}
        drawerContentOptions={{
          activeTintColor: "#6E5494",
          inactiveTintColor: "#6E5494",
        }}
      >
        <Drawer.Screen
          name="Home"
          initialParams={{ user: user }}
          component={Home}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="home"
                size={size}
                color={focused ? "#6E5494" : "#e0bcdd"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Usuário"
          component={Contact}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="account-plus"
                size={size}
                color={focused ? "#6E5494" : "#e0bcdd"}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Livros"
          component={Create}
          options={{
            drawerIcon: ({ focused, size }) => (
              <Icon
                name="book"
                size={size}
                color={focused ? "#6E5494" : "#e0bcdd"}
              />
            ),
          }}
        />
      </Drawer.Navigator>
  );
}

export default Drawers;
