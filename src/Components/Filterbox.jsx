import { View, Text } from "react-native"

import { Divider, Button, Surface } from 'react-native-paper';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useState } from "react";

const FilterBox = () => {
    const[showCalender,setCalnder]=useState(false)
    const [selected, setSelected] = useState('');
    return (
        <Surface className="bg-white rounded-2xl mr-5 ml-5 h-52" elevation={10} >
           {
            showCalender==false?
            (
                <View className="pr-2 " >
                <View className="bg-white  px-5 rounded-3xl" >
                    <View className="flex flex-row justify-between py-5" >
                        <View>
                            <Text className="text-black font-normal text-xl" >Filter</Text>
                        </View>
                        <View>
                            <Text className="text-blue-900 font-bold text-xl" >Apply</Text>
                        </View>
                    </View>
                    <View>
                        <Divider />
                    </View>
                    <View className="flex flex-row items-center " >
                        <View className="flex flex-col items-center " >
                            <View className="py-3" >
                                <Text className="text-black font-bold" >Start Date</Text>
                            </View>
                            <Button mode="outlined" textColor="black" style={{ width: 130 }} onPress={() => setCalnder(true)}>
                                <Text className="font-light" >Sat,25 Dec 2023</Text>
                            </Button>
                        </View>
                        <View className="flex flex-col items-center px-0 mt-10" >
                            <Text className="text-black text-2xl  " >- - - -</Text>
                        </View>
                        <View className="flex flex-col items-center " >
                            <View className="py-3" >
                                <Text className="text-black font-bold " >End Date</Text>
                            </View>
                            <Button mode="outlined" textColor="black" style={{ width: 130 }} onPress={() => setCalnder(true)}>
                                <Text className="font-light" >Sat,25 Dec 2023</Text>
                            </Button>

                        </View>
                    </View>
                </View>
                
            </View>
            ):
            (
                <View>
                    <Calendar
                    onDayPress={day => {
                        setSelected(day.dateString);
                        setCalnder(false)
                    }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' }
                    }}
                    className="w-[350px] h-[350px] rounded-xl "
                />
                </View>
            )
           }
        </Surface>
    )
}
export default FilterBox;