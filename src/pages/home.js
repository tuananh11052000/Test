import '../../src/App.css';
import { Button } from 'reactstrap';
import './home.css'

function Home() {
    return (
        <div className="container">
            <img className="u_img" src="https://scontent.fhph1-2.fna.fbcdn.net/v/t1.6435-9/128255896_879142432822712_8831914308402454047_n.jpg?_nc_cat=105&ccb=1-4&_nc_sid=174925&_nc_ohc=SNUsSj8l0ZMAX_7kEEx&_nc_ht=scontent.fhph1-2.fna&oh=46fbfe7288eee43902393448136370d7&oe=6138B638" />
            <div className="hello">hello...beautiful girl..</div>
            <div className='div_wrap_btn'>
                <Button color="success" href="/hello">tab here</Button>
            </div>
        </div>
    );
}

export default Home;
