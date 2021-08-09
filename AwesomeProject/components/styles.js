import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flexDirection: 'column',
    flex: 1,
  },
  box1: {
    backgroundColor: 'aquamarine',
    flex: 0.5,
    flexDirection: 'row',
  },
  box2: {
    backgroundColor: 'antiquewhite',
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    flex: 1,
    backgroundColor: 'bisque',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box4: {
    flex: 1,
    backgroundColor: 'chocolate',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
