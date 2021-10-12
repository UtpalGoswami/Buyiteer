import { ScrollView, StyleSheet, Text } from 'react-native';
import { colors } from '../../constants';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.appCommonColor,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  locationView: {
  },
  locationHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    backgroundColor: colors.appCommonColor
  },
  locationText: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.white
  },
  inputContainer: {
    width: '95%',
    height: 50,
    borderColor: colors.lightGrey,
    borderBottomWidth: 0.7,
    color: colors.black,
    fontSize: 18,
    paddingHorizontal: 5,
    backgroundColor: colors.white
  },
  headerText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700'
  }

});

export default styles;