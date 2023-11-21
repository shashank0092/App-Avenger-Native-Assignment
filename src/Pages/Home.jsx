import { View, Text, TouchableOpacity } from "react-native"
import Events from "../Components/Events";
import Ionicons from "react-native-vector-icons/Ionicons"
import { useGlobalContext } from "../context/Global";
import FilterBox from "../Components/Filterbox";


const Home = ({navigation}) => {
    const{filter,event,setEvent}=useGlobalContext()
    
    const EventCreate=()=>{
        setEvent(true)
        navigation.navigate("CreateEvent")
    }

    return (
        <View className="pl-3" >
            <View>
                <View className="flex flex-row gap-2" >
                    <View className="border border-blue-600 bg-blue-600" ></View>
                    <View>
                        <Text className="text-black text-xl font-medium " >
                            Upcomming
                        </Text>
                    </View>
                </View>
                <View>
                    <View className="py-5" >
                        <Events />
                    </View>

                </View>
            </View>

            <View>
                {
                    filter?(
                    <View className="text-red-600" >
                        <FilterBox/>
                    </View>):
                    (
                    <View >
                        <Text className="text-red-600">
                        THE FILTER IS FALSE
                        </Text>
                    </View>
                    
                    )
                }
            </View>
            <View className="absolute mt-[650px] ml-[320px] border border-black   flex items-center  " >
                <TouchableOpacity className="bg-blue-600 py-5" onPress={()=>EventCreate()} >
                    <Ionicons name="add" color="#ffff" size={30} />
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default Home;