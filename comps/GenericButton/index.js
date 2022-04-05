import { Button } from "react-native";

export default function GenericButton ({
    onButtonPress=()=>{},
    buttonTitle="default" 
}) {

    return <Button onPress={onButtonPress} title={buttonTitle}/>

}

