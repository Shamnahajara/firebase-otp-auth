import React,{useState} from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./PhoneSignin.css";
import { Button, TextField } from "@mui/material";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase/firebase";

function PhoneSignin() {

  const [phone, setPhone] = useState("")
  const [user,setUser] = useState(null)
  const [otp,setOtp] = useState("")

  const sendotp = async ()=>{
    try {
      const recaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
      const confirmation  = await signInWithPhoneNumber(auth,phone,recaptcha)
      console.log(confirmation)
      setUser(confirmation) 
    } catch (error) {
      console.log(error)
    }

  }


  const verifyOtp = async ()=>{
    try {
     const data = await user.confirm(otp)
     console.log(data)
      
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="phone-signin">
        <div className="phone-content">
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(phone)=>setPhone("+" + phone)}
          />
          <Button onClick={sendotp} sx={{marginTop:"10px"}} variant="contained">Send OTP</Button>
           
           <div style={{marginTop:"10px"}} id="recaptcha"></div>
        <br/>
        <br/>
        <TextField onChange={(e)=>setOtp(e.target.value)} sx={{marginTop:"10px", width:"300px"}} variant="outlined" size="small" label="Enter OTP"/>
        <br/>
        <Button onClick={verifyOtp} sx={{marginTop:"10px"}} variant="contained" color="success"> Verify otp</Button>
      </div>
      </div>
    </>
  );
}

export default PhoneSignin;
