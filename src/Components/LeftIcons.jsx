import {View,TouchableOpacity} from "react-native"
import Anticons from "react-native-vector-icons/AntDesign"
import { useGlobalContext } from "../context/Global";
const LeftIcon = () => {

    const{filter,setFilter}=useGlobalContext()
    console.log(filter,"shukla boi in left icon")
    return (
        <View>
            <TouchableOpacity onPress={()=>setFilter(!filter)}  >
                <Anticons
                    name="filter"
                    size={30}
                    color="#111213"

                />
            </TouchableOpacity>
        </View>
    )
}

export default LeftIcon;