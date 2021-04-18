import React, {useState} from 'react'
import './style.css';
import FileBase from 'react-file-base64';
import {useDispatch} from 'react-redux';
import {createPost} from '../../actions/posts';


const Form = ()=>{
    const [postData, setPostData] = useState({ creatoremail: '', productname: '', price: '', selectedfile: '',free: '',location:''});
    //const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();
    const handleSubmit = (e) =>{
        e.preventDefault();
      //  if (currentId === 0) {
            dispatch(createPost(postData));
            clear();
        }

    //useEffect(() => {
     //   if (post) setPostData(post);
      //}, [post]);
    

      const clear = () => {
       // setCurrentId(0);
        setPostData({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
      };

    return (
        <div className="form">

            <form autoComplete="off" onSubmit={handleSubmit}>
                <h1>Sell or Donate products</h1>
                <label>Creator Email:</label> <input type="text" width = "100%" value={postData.creatoremail} onChange={(e) => setPostData({ ...postData, creatoremail: e.target.value })} placeholder="Enter email" /><br />
                <label>Product Name:</label> <input type="text" value={postData.productname} onChange={(e) => setPostData({ ...postData, productname: e.target.value })} placeholder="Enter productname" /><br />
                <label>Price:</label> <input type="text" width = "100%" value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value })} placeholder="Enter price" /><br />
                <label>Free:</label>
                <select name = "free" value={postData.free} onChange={(e) => setPostData({ ...postData, free: e.target.value })}><option value="true">YES</option><option value="false">NO</option></select>
                <br/>
                <label>Address:</label> <input type="text" width = "100%" value={postData.location} onChange={(e) => setPostData({ ...postData, location: e.target.value })} placeholder="Enter Address" /><br />
                <div><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedfile: base64 })} /></div>
                <input type="submit" value="Submit" />
            </form>
            </div>

        
        
    );
    }
export default Form;

    