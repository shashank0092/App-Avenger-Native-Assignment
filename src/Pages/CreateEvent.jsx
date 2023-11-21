import { View, Text, TouchableOpacity } from "react-native"
import { useGlobalContext } from "../context/Global";
import Anticons from "react-native-vector-icons/AntDesign"

const CreateEvent = () => {

    const { event, setEvent } = useGlobalContext()
    console.log("this is event in cr page", event)
    return (
        <View className="p-5" >
            <View className="flex flex-row justify-between" >
                <View>
                    <Anticons name="close" color="#111213" size={30} />
                </View>
                <View>
                    <TouchableOpacity className="bg-blue-700 p-3 rounded-full " >
                        <Text className="text-white" >
                            Create
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default CreateEvent;