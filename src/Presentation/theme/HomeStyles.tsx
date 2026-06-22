import { StyleSheet} from 'react-native';
import { Color } from "./AppTheme";

// Folha de estilo

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: Color.bgBlack,
    alignItems: 'center',
    justifyContent:'center',

  },
  imgBg:{
    width: '100%',
    height: '100%',
    opacity: 0.6,
    bottom: '30%',
  },
  logoContainer:{
    position: 'absolute',
    alignItems: 'center',
    top: '15%',
  },
  logoImg:{
    width: 150,
    height: 150,
    alignSelf: 'center',
    transform: [{ rotateZ: '6deg' }],
  },
  logoTxtContainer:{
    width: '110%',
    height: 50,
    marginTop: 15,
    borderRadius: 15,
    opacity: 0.85,        
  },
  logoTxt:{
    color: Color.bgColor,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 6,
  },
  frm:{
    width: '100%',
    height: '45%',
    backgroundColor: Color.bgColor,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 20,
    
  },
  frmTitle:{
    textAlign:'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  btnEntrar:{
    alignSelf: 'center',
    width: 300,
    marginTop: 30,
    cursor: 'pointer',
  },
  frmRegister:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    
  },
  txtRegister:{
    fontStyle: 'italic',
    fontWeight: 'bold',
    borderBottomColor: Color.secondary,
    borderBottomWidth: 1,
    marginLeft: 5,
    color: Color.secondary,
    fontSize: 17
  },
  frmTextSenha:{
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  frmRecuperar:{
    flexDirection: 'row',
    justifyContent: 'center',
  },
  frmText:{
    fontSize: 17
  }
});

export default styles;
 