import {StyleSheet, StatusBar} from 'react-native';
import {colors, commonStyles, fonts} from '../../constants';

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: colors.appCommonColor,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
  },
  imageView: {
    flex: 1,
    width: null,
    height: null,
  },
  details: {
    margin: 15
  },
  title1: {
    fontSize: 13,
    color: colors.gray,
    fontWeight: '900',
    marginTop: 15,
  },
  title: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 10,
  },
  bgImage: {
    flex: 1,
    width: null,
    height: null,
  },
  logo: {
    width: 60,
    height: 60,
  },
  distance: {
    fontSize: 13,
    color: colors.gray,
    marginTop: 6,
  },
  validTime: {
    fontSize: 13,
    fontWeight: fonts.FontWeight.bold,
    color: colors.buttonBg,
    marginTop: 3,
  },
  headerText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '700',
  },
  BtmImagesView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 70
  },
  BottomView: {
    backgroundColor: colors.appCommonColor,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
  },
  InnerView: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
  },
  InnerText: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '600',
  },
  SlideBtn: {
    marginTop: 20,
    height: 60,
    backgroundColor: colors.appCommonColor,
    justifyContent: 'center',
    borderRadius: 10,
    width : '80%'
  },
  SlideBtnText: {
    paddingHorizontal: 25,
    color: colors.white,
    fontSize: 15,
    fontWeight: '900',
  },
  ShowCodeView: {
    borderRadius: 15,
    marginTop: 20,
    height: 60,
    borderColor: colors.appCommonColor,
    justifyContent: 'center',
    borderWidth: 1,
    width : '80%',
    alignItems : 'center'
  },
  ShowCodeBtnText: {
    color: colors.gray,
    fontSize: 14,
    fontWeight: '900',
  },
});

export default styles;
