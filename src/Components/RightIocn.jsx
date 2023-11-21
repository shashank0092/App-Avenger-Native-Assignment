import { View, TouchableOpacity } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useNavigation } from "@react-navigation/native"

const RightIocn = () => {
  const navigation = useNavigation()
  return (
    <>
      <View className="flex flex-row" >
        <TouchableOpacity onPress={() => navigation.navigate("Notification")} >
          <Ionicons
            name="notifications-outline"
            size={30}
            color="#111213"

          />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("History")} >
          <Ionicons
            name="menu"
            size={30}
            color="#111213"

          />
        </TouchableOpacity>
      </View>
    </>
  )
}
export default RightIocn;