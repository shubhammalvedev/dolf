import React from 'react';
import { TouchableOpacity, Text} from 'react-native';
import { RNCamera } from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';
import { Style } from "../components/Styles";
const QrCodeScreen = (props)=>{
    onSuccess = e => {
       alert("Scanned"+e)
      };
return (
    <QRCodeScanner
      onRead={onSuccess}
      flashMode={RNCamera.Constants.FlashMode.torch}
      topContent={
        <Text style={Style.centerText}>
         Scan your QR code here
        </Text>
      }
    />
  );
}
export default QrCodeScreen;