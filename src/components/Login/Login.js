import React, { useState } from 'react'
import { Input , Space , Button } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone ,LockFilled } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
import 'antd/dist/antd.css';

export default function Login() {
    const [username , setUsername ] = useState('')
    const [password , setPassword ] = useState('')
    const USER_NAME ='kai'
    const PASS_WORD = 'password'
    const navigate = useNavigate()

    function checkPassword(){
        if(password != PASS_WORD || username != USER_NAME ){
            return alert('Your username or password is not correct, try again')
        }

        navigate('/home')

    }


    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div>
            <h1 style={{textAlign:'center'}} > <LockFilled size={24}/>  Login Here</h1>
            <Space direction="vertical">
                <Input onChange={e =>setUsername(e.target.value)}  placeholder="Enter username" />
                <Input.Password
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password"
                iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                />
                <br></br>
                <Button onClick={checkPassword} type="primary">Submit</Button>
            </Space>
            </div>

           

            
        </div>
    )
}
