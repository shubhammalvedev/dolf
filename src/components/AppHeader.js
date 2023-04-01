import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { Style } from "./Styles"

export const AppHeader = (props) => {
    return (
        <View style={Style.haderStyle}>
            <View>
                <Text style={Style.headerTitle}>{props.title}</Text>
                <Text style={Style.headerSubTitle}>{props.subTitle}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Image source={props.firstImg} style={Style.headerIcon} resizeMode={'contain'} />
                <TouchableOpacity onPress={props.secondImgOnpress}>
                <Image source={props.secondImg} style={Style.headerIcon} resizeMode={'contain'} />
                </TouchableOpacity>
            </View>
        </View>
    )
}