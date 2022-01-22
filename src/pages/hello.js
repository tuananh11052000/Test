import '../../src/App.css';
import { Button } from 'reactstrap';
import './home.css'

function Hello() {
    return (
        <div className="container">
            <img className="u_img" src="https://scontent.fsgn13-1.fna.fbcdn.net/v/t1.15752-9/267865785_594636098280871_7902522177694939850_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=ae9488&_nc_ohc=2AJDY75SdCwAX-_TTnn&_nc_ht=scontent.fsgn13-1.fna&oh=03_AVKTgkcIwXkZoWb9fnOM9wbviBHfqMciJtFzmJ6di50tjw&oe=620FA3FE" />
            <div className="hello">hello...beautiful girl..</div>
            <div className='div_wrap_btn'>
                <Button color="success" href="/page4">tab here</Button>
            </div>
        </div>
    );
}

export default Hello;
