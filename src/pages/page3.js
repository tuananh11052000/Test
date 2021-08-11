import '../../src/App.css';
import { Button } from 'reactstrap';
import './page3.css'

function Page3() {
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
                <img src="https://i.pinimg.com/550x/64/3a/5f/643a5f7b7e426eae31ed79fe8d263e62.jpg" className='img_3' />
                <img src="https://scontent.fhph2-1.fna.fbcdn.net/v/t1.15752-9/216864317_1959976864169370_780599244463294398_n.jpg?_nc_cat=102&ccb=1-4&_nc_sid=ae9488&_nc_ohc=R-5vtJ-ZVegAX8teotz&_nc_ht=scontent.fhph2-1.fna&oh=5e2f6d00d3998dddb682a93c4bfc41fc&oe=61393E0B" className='img_5' />
                <img src="https://image.lag.vn/upload/news/20/12/09/meo-xiu-voi-rat-nhieu-trai-tim-xung-quanh_IGCV.jpg?w=200" className='img_4' />
                <div className='text1'>Anh cũng iu em Hoèn nhìu lắm ó, video call cho anh nhanh lên còn kịp hahaha ....</div>
                <Button color="success" className='btn_3'>Đến đây thôi, haha</Button>
            </div>
        </div>
    );
}

export default Page3;
