import '../../src/App.css';
import { Button } from 'reactstrap';
import './page1.css'

function Page1() {
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
            <div className='text1'>Trả lời thật lòng nhó, cậu yêu tớ đúng không????</div>
            <div className='text2'>Tớ đố cậu trả lời không đấy...@@@</div>
            <Button color="danger" className='btn_1' href='/page2'>Đúng gòi đếy hihi :3</Button>
            <Button color="success" className='btn_2' id="num1" onClick={() => func1()}>NOOOOOO</Button>
        </div>
    );
}

export default Page1;
