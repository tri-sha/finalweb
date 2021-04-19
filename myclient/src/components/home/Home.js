import React,{useEffect} from 'react';
import {getPosts} from '../../actions/posts';
import {useDispatch} from 'react-redux'; 
import './style.css';
import Posts from '../Posts/Posts';

const Home = () =>{

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]
    );

    return(
      <div>
        <div className="exploreimg">
          <div className="row">
				    <div className="col-2">
					  <h1>We Need Each Other!</h1>
					  <p> Way to reduce your waste and support other...</p>
				  </div>
				  <div className="col-2">
            <img src={`${process.env.PUBLIC_URL}images/image1.jpg`} alt="" /> 
				  </div>
        </div>
        </div>

        <Posts/>
        </div>
    );     
}

export default Home;
