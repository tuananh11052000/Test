import '../../src/App.css';
import { Button } from 'reactstrap';
import { Redirect } from "react-router-dom";
import './home.css'
import { useState } from 'react'

function Login() {
    const [isClick, setClick] = useState(false)
    const renderRedirect = () => {
        if (isClick == true)
            return <Redirect to='/login' />
    }
    const loginFunc = () => {
        const name = document.getElementById("name").value;
        let temp = name.toLowerCase();
        if (temp == 'lê thị khánh huyền') {
            setClick(true)
        }
        else {
            alert("Đừng hòng vào đc trái tym tar ....!!")
        }
    }
    return (
        <div className="container">
            <div>Bạn cần nhập đầy đủ họ tên: </div>
            <input id="name" />
            <div>
                <Button color="success" onClick={() => loginFunc()}>Login</Button>
            </div>

            {renderRedirect()}
        </div>
    );
}

export default Login;
