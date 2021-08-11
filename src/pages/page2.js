import '../../src/App.css';
import { Button } from 'reactstrap';
import './page2.css'

function Page2() {
    const func1 = () => {
        let h = Math.random() * 500
        h = h + 'px';
        let l = Math.random() * 300
        l = l + 'px';
        document.getElementById("num1").style.top = h;
        document.getElementById("num1").style.left = l;
    }
    return (
        <div className="container">
            <div className='container1'></div>
            <div className='form-lov'>
                <div className='text1'>Đấy a biết ngay mà .Giờ thì cho anh biết lý do tại sao e thích a đi nào????</div>
                <div className='wrap-input'>
                    <input placeholder="Nhập vào đây nhé ....." />
                </div>
                <Button color="success" className='btn_3' href='/page3'>Gửi cho ảnh ...</Button>
            </div>
        </div>
    );
}

export default Page2;
