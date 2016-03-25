import React, {
  AppRegistry,
  Component,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const { width, height } = Dimensions.get('window');
const margin = 10;

const sample = [
  ['foo', 'red'],
  ['bar', 'blue'],
  ['baz', 'green'],
  ['beep', 'purple'],
];

class UncoverlyAM extends Component {
  render() {
    let pages = sample.map((d, i) => {
      return (
        <View key={i} style={[
          styles.page,
          {backgroundColor: d[1]}
        ]}>
          <Text>Card {d[0]}</Text>
        </View>
      )
    });

    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          automaticallyAdjustInsets={false}
          pagingEnabled={true}
          contentContainerStyle={styles.inner}
        >
          {pages}
        </ScrollView>
        <View style={styles.btn}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inner: {
    alignItems: 'center',
    height: height * sample.length,
  },
  page: {
    flex: 1,
    backgroundColor: '#ccc',
    margin: margin,
    width: width - (margin * 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    position: 'absolute',
    bottom: margin,
    left: margin,
    width: 50,
    height: 50,
    backgroundColor: '#000',
  },
});

AppRegistry.registerComponent('UncoverlyAM', () => UncoverlyAM);
