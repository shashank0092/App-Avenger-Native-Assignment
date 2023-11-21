import { View, Text } from "react-native"
const HistoryCard = () => {
    return (
        <View className="border-b-[1px] border-black py-5 bg-white " >
            <View className="flex flex-row pl-5 gap-5  " >
                <View >
                    <View>
                        <Text className="text-black font-light" >Sat</Text>
                    </View>
                    <View>
                        <Text className="text-black font-bold " >4</Text>
                    </View>
                </View>
                <View>
                    <View>
                        <Text className="text-black font-medium " >Abhishek schedueld a meeting on 4 Saturday,2023.</Text>
                    </View>
                    <View>
                        <Text className="text-black font-light " >Click for Details</Text>
                    </View>
                </View>

            </View>

            <View className="items-end"  >
                <Text className="text-black font-light" >6:30 P.M</Text>
            </View>
        </View>
    )
}

export default HistoryCard;