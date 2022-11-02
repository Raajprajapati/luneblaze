import React from "react";
import { useState } from "react";
import './Signup.css';
function Signup(){
    const [name,setName] = useState("");
    const [contact,setContact] = useState("");
    const [email,setEmail] = useState("");

    async function changeButton(){

        // data for the content set for success message
        let obj = {
            user_id:291,
            type:"article",
            content_id:566,
            reaction:1,
            user_type:"user"
        }
        let options = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
          }
        const res = await fetch("http://luneblaze.com/new/Luneblaze-API/api/app/react.json",options);
        const result = await res.json();
        console.log(result)
        if(result.message==="success"){
            document.getElementById("like").classList.toggle("color");
        }
    }

    function checkValidNumber(e){
        if (!isNaN(e.target.value)){
            setContact(e.target.value);
        }

    }

    async function submit(e){
        e.preventDefault()

        if(name  && contact){
            if (contact.length!==10){
                alert("Enter a valid number");
            }
            else{
                let options = {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({type:1,name,email,phone:contact,otp:contact})
                  }
                const res = await fetch("https://luneblaze.com/new/Luneblaze-API/api/app/sendMailOtp.json",options);
                const result = await res.json();
                console.log(result);
                alert("OTP sent");
            }

        }
        else{
            alert("enter valid details")
        }
    }

    return(
        <form>
            <input type='text' placeholder="Enter name" value={name} onChange={e=> setName(e.target.value)} />
            <input type="tel" placeholder="Enter contact no" value={contact} onChange={e=>checkValidNumber(e)} />
            <input type='email'  placeholder="Enter email"value={email} onChange={e=>setEmail(e.target.value)} />
            <span>Check console log for api response</span><br/>
            <span onClick={changeButton} id="like"><i className="fa-solid fa-thumbs-up"></i></span>
            <button type="submit" onClick={submit}>Submit</button>
        </form>
    )
}
export default Signup;