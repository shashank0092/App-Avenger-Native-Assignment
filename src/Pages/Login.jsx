import { View, Text, Image, TextInput, TouchableOpacity,ScrollView } from "react-native"
import Ionicons from 'react-native-vector-icons/Ionicons';
const Login = ({navigation}) => {
    return (
      <ScrollView>
          <View className="flex justify-center items-center gap-20" >
            <View>
                <Image source={require("../assets/Logo.png")} />
            </View>
            <View>
                <Image source={require("../assets/Loginimage.png")} />
            </View>
            <View className="gap-5 " >
                <View className="flex flex-row items-center bg-[#E8E0E0] border border-black py-2 px-5 rounded-2xl" >
                    <View  >
                        <Ionicons name="people-outline" size={40} color="#900" />
                    </View>
                    <View className="px-10   " >
                        <TextInput placeholder="Mobile No" placeholderTextColor={"#DFACAC"} />
                    </View>
                    <View >
                        <TouchableOpacity className="bg-black p-2 rounded-lg" >
                            <Text className="text-white" >
                                Send OTP
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View className="flex flex-row items-center bg-[#E8E0E0] py-2 px-5  rounded-2xl justify-evenly  border border-black" >
                    <View className="" >
                        <Ionicons name="key-outline" size={40} color="#900"  />
                    </View>
                    <View className="  w-[200px]">
                        <TextInput placeholder="Enter OTP" placeholderTextColor={"#DFACAC"}  />
                    </View>
                </View>
                <View className="mb-5" >
                    <TouchableOpacity className="bg-blue-600 py-5 rounded-xl" onPress={()=> navigation.navigate("Home")} >
                        <Text className="text-center text-white font-bold " >
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </ScrollView>
    )
}
export default Login;