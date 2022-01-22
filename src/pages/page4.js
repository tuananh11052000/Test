import '../../src/App.css';
import { Button } from 'reactstrap';
import './page4.css'

function Page4() {
    return (
        <div>
                <div className = "test_text">Cậu có có biết vì sao ngày 25/12/2000 là ngày mặt trăng chìm trong bóng tối và ko có một chút ánh sáng nào không...?</div>
                <div className = "test_text">Đó là vì hôm đó mọi ánh nắng được ba mẹ cậu dành hết để đặt lên nụ cười của một thiên thần nhỏ bé chào đời vào ngày hôm sau...</div>
                <img src="https://scontent.fsgn3-1.fna.fbcdn.net/v/t1.15752-9/271745802_319228383449375_4861685711774312992_n.png?_nc_cat=111&ccb=1-5&_nc_sid=ae9488&_nc_ohc=WXUR6BAuxQkAX_QcTNj&_nc_ht=scontent.fsgn3-1.fna&oh=03_AVIw3OHB7VSHNgmmK3JgqAZNTIyOGf3PBfPQzfEyLBd55Q&oe=6211BF51" className="moon_style"/>
                <br/>
                <Button color="success" className="btn_next"  href="/page5">Ai thèm quan tâm :(  . để xem có gì nữa nào =)))))) </Button>
        </div>
    );
}

export default Page4;
