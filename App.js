import {
  createStackNavigator
  // createAppContainer
} from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import { createAppContainer } from "react-navigation";
import ResultsShow from "./src/screens/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ShowResults: ResultsShow
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search"
    }
  }
);

export default createAppContainer(navigator);
