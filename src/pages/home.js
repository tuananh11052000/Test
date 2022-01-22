import '../../src/App.css';
import { Button } from 'reactstrap';
import './home.css'

function Home() {
    return (
        <div className="container">
            <img className="u_img" src="https://scontent.fsgn8-2.fna.fbcdn.net/v/t1.15752-9/271383245_504765351005344_3983099065293794212_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=ae9488&_nc_ohc=DGdHL9Hp10YAX8Axj8k&_nc_ht=scontent.fsgn8-2.fna&oh=03_AVLJ7JiRU7QNuvbLcMN9N2YdpQyVNd9zWpyHCgoNFSxjgw&oe=6211A76F" />
            <div className="hello">hello...beautiful girl..</div>
            <div className='div_wrap_btn'>
                <Button color="success" href="/hello">tab here</Button>
            </div>
        </div>
    );
}

export default Home;
