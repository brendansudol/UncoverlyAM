import React, {
  AppRegistry,
  Component,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native';

const { width, height } = Dimensions.get('window');
const margin = 2;

const img = 'https://img0.etsystatic.com/060/0/9699076/il_340x270.743238558_jhbk.jpg';
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
          <Text style={styles.num}>{i + 1}</Text>
          <Image
            source={{uri: img}}
            style={styles.thumbnail}
          />
          <Text style={styles.title}>{d[0]}</Text>
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
  thumbnail: {
    marginTop: 30,
    marginBottom: 30,
    width: 340,
    height: 270,
  },
  num: {
    fontSize: 20,
  },
  title: {
    fontSize: 16,
  },
  btn: {
    position: 'absolute',
    bottom: margin,
    right: margin,
    width: 25,
    height: 25,
    backgroundColor: '#000',
  },
});

AppRegistry.registerComponent('UncoverlyAM', () => UncoverlyAM);
