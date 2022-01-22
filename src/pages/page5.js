import '../../src/App.css';
import { Button } from 'reactstrap';
import './page5.css'

function Page5() {
    return (
        <div>
            <div>
                <div className = "test_text">Nói thì bảo thiểu năng, nhưng mà sau lần đầu tiên gặp nhau, mình không hề nhớ mặt cậu, hicccc</div>
                <div className = "test_text">Những điều làm mình nhớ nhất đó là bàn tay của cậu rất ấm, cách cậu cười rất hiền,...</div>
                <div className = "test_text">Tên cậu cứ thế xuất hiện trong tâm trí tớ nhiều ngày liền mà chẳng hiểu vì răng :v</div>
                <div className = "test_text">Rứa nên tớ mới quyết định phải tìm cách gặp lại cậu lần nữa để tìm câu trả lời cho dù là bao xa ...</div>
                <img src="https://scontent.fsgn4-1.fna.fbcdn.net/v/t1.15752-9/271736039_351871383144607_1707636133345743602_n.png?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=6D4HcV3kfGMAX8k6T26&_nc_ht=scontent.fsgn4-1.fna&oh=03_AVJt3kFCdpVX6K-W39kjQJLYO1MNUcAe1ktpohnJr_IxKQ&oe=6212F1AC" className="img_hang"/>
                <br/>
                <Button color="success" className="btn_next"  href="/page6">Gòi sao =))))))</Button>
            </div>
        </div>
    );
}

export default Page5;
