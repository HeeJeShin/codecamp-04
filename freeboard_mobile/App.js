import React from 'react';
import { View } from 'react-native';

export default function App (){
  
  return(
   <View style={Styles.container}>
     <View styles={styles.redView}/>
     <View styles={styles.yellowView}/>
   </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff'
  },
  redView:{
    flex: 1,
    backgroundColor: 'red'
  },
  yellowView:{
    flex: 1,
    backgroundColor: 'yellow'
  }

})