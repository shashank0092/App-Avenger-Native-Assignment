import {View,Text,TouchableOpacity} from "react-native"
import { Avatar } from 'react-native-paper';

const Notifications=()=>{
    return(
        <View className="flex flex-row items-center justify-around py-5" >
            <View>
                <Avatar.Text size={60} label="A" />
            </View>
            <View className="flex flex-col " >
                <View>
                    <Text className="text-black font-semibold" > Abhishek scheduled a meeting </Text>
                </View>
                <View>
                    <Text className="text-black">25th December,2023</Text>
                </View>
                <View className="flex flex-row gap-5 mt-[1px]" >
                    <View>
                        <TouchableOpacity className="bg-red-700 p-2 px-5 rounded-full " >
                            <Text className="text-white" >Decline</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity className="bg-blue-700 p-2 px-5 rounded-full">
                            <Text className="text-white">Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View>
                <Text className="text-black" >6:00 P.M</Text>
            </View>
        </View>
    )
}

export default Notifications;