import { StyleSheet} from 'react-native';
import { Color } from "./AppTheme";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.bgBlack,
    alignItems: 'center',
    justifyContent: 'center',

  },
  imageFundo: {
    width: '100%',
    height: '100%',
    opacity: 0.6,
    bottom: '30%',
  },
  logoContainer: {
    position: 'absolute',
    alignItems: 'center',
    top: '5%',
  },
  logoImg: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  logoTxtContainer: {
    width: '100%',
    height: 50,
    marginTop: 15,
    borderRadius: 15,
    opacity: 0.85,
  },
  logoTxt: {
    color: Color.bgColor,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 6,
  },
  frm: {
    width: '100%',
    height: '74%',
    backgroundColor: Color.bgColor,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
  },
  frmTitle: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  frmInput: {
    flexDirection: 'row',
    marginTop: 30,
  },
  frmicon: {
    width: 25,
    height: 25,
    marginTop: 10,
  },
  txtInput: {
    flex: 1,
    borderBottomWidth: 2,
    marginLeft: 15,
  },
  btnEntrar: {
    alignSelf: 'center',
    width: '100%',
    marginTop: 30,
    cursor: 'pointer',
  },
  frmRegister: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  txtRegister: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    borderBottomColor: Color.secondary,
    borderBottomWidth: 1,
    marginLeft: 5,
    color: Color.secondary,
  },

});

export  default styles