import '../../src/App.css';
import { Button } from 'reactstrap';
import './page6.css'

function Page6() {
    let count = 0
    const func1 = () => {
        let h = Math.random() * 500
        h = h + 'px';
        let l = Math.random() * 300
        l = l + 'px';
        document.getElementById("num1").style.top = h;
        document.getElementById("num1").style.left = l;
        count+=1
    }
    return (
        <div>
            <img src="https://i.pinimg.com/originals/57/60/13/576013c52611a756f318c05f760e3a95.png" className="moon_style"/>
            <div className='container1'></div>
            <img src="https://i.pinimg.com/474x/14/3d/fa/143dfa5508eff9f50d189c05d318e76f.jpg" className='img_meme'/>
            <img src="https://kenh14cdn.com/203336854389633024/2021/8/13/-16288452393801288406942.jpg" className='img_meme2'/>
            <div className='text1'>Nhìn bề ngoài thì có vẻ mạnh mẽ nhưng hình như bên trong cậu có nhiều chuyện mà ít khi chia sẻ với ai...</div>
            <div className='text2'>Biết là hơi vội vàng, nhưng mình luôn muốn là người bên cạnh mỗi khi b buồn...</div>
            <div className='text3'>...Là nơi cậu có thể dựa vào dù sắp tới công việc có khó khăn ra sao...</div>
            <div className='text4'>Hãy để tớ trở thành một phần trong thanh xuân của cậu nhé...</div>
            <div className='text5'>Tớ đố cậu trả lời không đấy...@@@</div>
            <Button color="danger" className='btn_1' href='/page7' id="num2">MÌNH ĐỒNG Ý NHÉ :3</Button>
            <Button color="success" className='btn_2' id="num1" onMouseOver={() => func1()} onClick={() => func1()}>KHÔNG BAO GIỜ</Button>
        </div>
    );
}

export default Page6;
