import '../../src/App.css';
import { Button } from 'reactstrap';
import './home.css'

function Hello() {
    return (
        <div className="container">
            <img className="u_img" src="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.15752-9/234175087_372663360883104_4145381356213735621_n.png?_nc_cat=101&ccb=1-4&_nc_sid=ae9488&_nc_ohc=xjQaebUHJO8AX-gfIIP&_nc_ht=scontent.fhph1-2.fna&oh=7cf4de814a7789f202d17b764db02fce&oe=613AE4D3" />
            <div className="hello">hello...beautiful girl..</div>
            <div className='div_wrap_btn'>
                <Button color="success" href="/page1">tab here</Button>
            </div>
        </div>
    );
}

export default Hello;
