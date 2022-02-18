import { collection, deleteDoc, getDocs,doc } from 'firebase/firestore';
import { useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import {db} from './firebase-config';
function Home(){
	const [postList,setPostList]=useState([]);
	const postsCollectionRef=collection(db,"tickets");

	useEffect(()=>{
		const getPosts=async()=>{
			const data=await getDocs(postsCollectionRef);
			setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
		}
		getPosts();
	})
	const deletePost=async (id)=>{
		const postDoc=doc(db,"tickets",id)
		await deleteDoc(postDoc);
	}
    return(
    <div>  
		<p>Pesquisa:</p>
		<input className="centralize" type="text" /> 
		<br/>
		<p>Tag</p>
		<select className="centralize"> 
		</select>  

		{postList.map((post)=>{
			return <div className='ticket'>
					<h2>{post.titulo}<button onClick={deletePost(post.id)}> Delete </button> <button> Edit </button></h2> 
					<h3 className='author'>@{post.author.name}</h3>
					<p>{post.categoria}/{post.produto}/{post.prioridade}</p>
					<p>{post.descricao}</p>
					<p>{post.problema}</p>
					<p>{post.impactados}/{post.prioridade}/{post.operacao}</p>
				</div>
		})}
		<Link to='/create_post' className="botaoLink"> Create ticket</Link> 
    </div> );
}
export default Home; 