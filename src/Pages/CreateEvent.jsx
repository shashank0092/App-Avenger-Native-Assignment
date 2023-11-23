import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native"
import { useGlobalContext } from "../context/Global";
import Anticons from "react-native-vector-icons/AntDesign"
import MCicons from "react-native-vector-icons/MaterialCommunityIcons"
import Octiocns from "react-native-vector-icons/Octicons"
import { Divider, Button, Surface } from "react-native-paper";
import CheckBox from 'react-native-check-box'
import Textarea from 'react-native-textarea';

const CreateEvent = ({ navigation }) => {

    const { event, setEvent } = useGlobalContext()


    const CancelEvent = () => {
        setEvent(false)
        navigation.navigate("Home")
    }
    return (
        <ScrollView>
            <View className="p-5" >
                <View className="flex flex-row justify-between" >
                    <View>
                        <TouchableOpacity onPress={() => CancelEvent()} >
                            <Anticons name="close" color="#111213" size={30} />
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity className="bg-blue-700 p-3 rounded-full"  >
                            <Text className="text-white font-bold " >
                                Create
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View>
                    <View>
                        <TextInput placeholder="Add Title" placeholderTextColor={"#D66262"} style={{ fontSize: 20 }} />
                    </View>
                    <View>
                        <Divider />
                    </View>
                </View>

                <View className="flex flex-row items-center mt-5" >
                    <View className="flex flex-row items-center gap-2 flex-1" >
                        <View>
                            <Anticons name="clockcircleo" color="#111213" size={20} />
                        </View>
                        <View>
                            <Text className="text-black " >All Day</Text>
                        </View>
                    </View>
                    <View>
                        <CheckBox style={{ flex: 1 }} />
                    </View>
                </View>

                <View className="flex mt-5" >
                    <View className="flex flex-row justify-between " >
                        <View>
                            <Surface className="bg-white rounded-full" elevation={3} >
                                <Button mode="outlined" textColor="black" onPress={() => console.log('Pressed')}>
                                    <Text className="font-light" >Sat,25 Dec 2023</Text>
                                </Button>
                            </Surface>
                        </View>
                        <View>
                            <Surface className="bg-white rounded-full" elevation={3} >
                                <Button mode="outlined" textColor="black" onPress={() => console.log('Pressed')}>
                                    <Text className="font-light" >11:30 pm</Text>
                                </Button>
                            </Surface>
                        </View>
                    </View>

                    <View className="ml-20" >
                        <View>
                            <Text className="text-black" >|</Text>
                        </View>
                        <View>
                            <Text className="text-black" >|</Text>
                        </View>
                        <View>
                            <Text className="text-black" >|</Text>
                        </View>
                    </View>

                    <View className="flex flex-row justify-between"  >
                        <View>
                        <Surface className="bg-white rounded-full" elevation={3} >
                                <Button mode="outlined" textColor="black" onPress={() => console.log('Pressed')}>
                                    <Text className="font-light" >Sat,25 Dec 2023</Text>
                                </Button>
                            </Surface>
                        </View>
                        <View>
                        <Surface className="bg-white rounded-full" elevation={3} >
                                <Button mode="outlined" textColor="black" onPress={() => console.log('Pressed')}>
                                    <Text className="font-light" >12:30 pm</Text>
                                </Button>
                            </Surface>
                        </View>
                    </View>

                </View>

                <View className="py-6" >
                    <Divider />
                </View>

                <View>
                    <View>
                        <View className="flex flex-row gap-3" >
                            <View>
                                <MCicons name="text" color="#111213" size={20} />
                            </View>
                            <View>
                                <Text className="text-black" >Add Note</Text>
                            </View>
                        </View>
                        <View className="ml-5">
                            <Textarea className="border border-blue-700 h-24 rounded-xl text-black " />
                        </View>
                    </View>

                    <View>
                        <View>
                            <View className="flex flex-row gap-3" >
                                <View>
                                    <Octiocns name="people" color="#111213" size={20} />
                                </View>
                                <View>
                                    <Text className="text-black" >Add People</Text>
                                </View>
                            </View>
                        </View>
                        <View  >
                            <Surface className="border border-gray-200 bg-white rounded-2xl ml-5 " elevation={3} >
                                <TextInput placeholder="Search People" placeholderTextColor={"#EEE4E4"} />
                            </Surface>
                        </View>
                    </View>

                    <View className="py-7" >
                        <Divider />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default CreateEvent;