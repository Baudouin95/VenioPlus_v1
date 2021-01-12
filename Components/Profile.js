import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

class Profile extends React.Component{
    render(){
        return(
            <View style = {styles.main_container}>
                <View style = {styles.sub_container}>
                    <Text>Profile page</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    sub_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Profile