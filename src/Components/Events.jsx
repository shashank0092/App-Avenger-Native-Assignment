import { View, Text } from "react-native"
import Anticons from 'react-native-vector-icons/AntDesign';
const Events = () => {
    return (
        <>
            <View className="flex flex-row gap-3 items-center mr-4 " >
                <View className="flex items-center " >
                    <View>
                        <Text className="text-black font-light" >Fri</Text>
                    </View>
                    <View className="bg-blue-800  items-center p-2  rounded-full " style={{width:35,height:35}} >
                        <Text className="text-white ">3</Text>
                    </View>
                </View>
                <View className="flex flex-row items-center justify-around flex-1  py-3   bg-white rounded-xl" >
                    <View>
                        <Text className="text-black font-light text-lg">Meeting For Business</Text>
                        <Text className="text-black font-extralight">7:35-8:30 P.M</Text>
                    </View>
                    <View className="flex flex-row items-center " >
                        <View>
                            <Anticons name="user" size={30} color="#5ECCE4" />
                        </View>
                        <View>
                            <Text className=" text-blue-600 text-xl ">2</Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}
export default Events;