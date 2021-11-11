import { StyleSheet, StatusBar } from 'react-native';
import { colors, commonStyles, fonts } from '../../constants';

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        backgroundColor: colors.appCommonColor,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent : 'space-between'
    },
    imageView: {
        height: 250
    },
    details: {
        margin: 15
    },
    title1: {
        fontSize: 12,
        color: colors.gray,
        fontWeight: '900',
        marginTop : 15
    },
    title: {
        fontSize: 12,
        color: colors.gray,
        marginTop : 10
    },
    bgImage: {
        flex: 1,
        width: null,
        height: null
    },
    logo: {
        width: 60,
        height: 60
    },
    distance: {
        fontSize: 12,
        color: colors.gray,
        marginTop: 6
    },
    validTime: {
        fontSize: 13,
        fontWeight: fonts.FontWeight.bold,
        color: colors.buttonBg,
        marginTop: 3
    },
    headerText: {
        color: colors.white,
        fontSize: 20,
        fontWeight: '700'
    },
    BtmImagesView : {
        flexDirection : 'row',
        justifyContent : 'space-around'
    },
    BottomView:{
        backgroundColor : colors.appCommonColor,
        justifyContent : 'space-between',
        flexDirection : 'row',
        height : 50,
        alignItems : 'center'
    },
    InnerView : {
        flex : 1,
        alignItems : 'center',
        padding : 5
    },
    InnerText : {
        fontSize : 14,
        color : colors.white,
        fontWeight : '600'
    }
});

export default styles;