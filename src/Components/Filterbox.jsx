import { View, Text } from "react-native"
import { Divider, Button } from 'react-native-paper';


const FilterBox = () => {
    return (
        <View className="pr-2" >
            <View className="bg-white h-52 px-5 rounded-3xl" >
                <View className="flex flex-row justify-between py-5" >
                    <View>
                        <Text className="text-black font-normal text-2xl" >Filter</Text>
                    </View>
                    <View>
                        <Text className="text-blue-900 font-bold text-2xl" >Apply</Text>
                    </View>
                </View>
                <View>
                    <Divider />
                </View>
                <View className="flex flex-row items-center" >
                    <View className="flex flex-col items-center " >
                        <View className="py-3" >
                            <Text className="text-black font-bold" >Start Date</Text>
                        </View>
                        <Button mode="outlined" textColor="black" onPress={() => console.log('Pressed')}>
                            <Text className="font-light" >Sat,25 Dec 2023</Text>
                        </Button>
                    </View>
                    <View className="flex flex-col items-center py-3" >
                        <Text className="text-black text-2xl  " >- - - -</Text>
                    </View>
                    <View className="flex flex-col items-center " >
                        <View className="py-3" >
                            <Text className="text-black font-bold " >End Date</Text>
                        </View>
                        <Button mode="outlined" textColor="black" onPress={() => console.log('Pressed')}>
                            <Text className="font-light" >Sat,25 Dec 2023</Text>
                        </Button>
                        
                    </View>
                </View>
            </View>
        </View>
    )
}
export default FilterBox;