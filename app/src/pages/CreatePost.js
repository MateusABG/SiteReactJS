import { addDoc,collection } from "firebase/firestore";
import { useState } from "react";
import { ref, uploadBytes } from "firebase/storage";
import{storage, auth, db} from './firebase-config';
import { useNavigate } from "react-router-dom";
function CreatePost(){ 
	const [titulo,setTitulo]=useState("");
	const [descricao,setDescricao]=useState("");
	const [tipo,setTipo]=useState("");
	const [prioridade,setPrioridade]=useState("");
	const [problema,setProblema]=useState("");
	const [usuariosImpactados,setUserImp]=useState("");
	const [operacao,setOperacao]=useState("");
	const [ambiente,setAmbiente]=useState("");
	const [produto,setProduto]=useState("");
	const [categoria,setCategoria]= useState("");
	let files=[];
	let file_names=[];

	const navigate=useNavigate();
	const postsCollectionRef=collection(db,"tickets");
	const uploadTicket=async ()=>{
		  registerFiles();
		  addDoc(postsCollectionRef,
			{
				ambiente:ambiente,
				arquivo:file_names,
				author:{
					id:auth.currentUser.uid,
					name: auth.currentUser.displayName
				},
				categoria:categoria,
				descricao:descricao,
				impactados:usuariosImpactados,
				operacao:operacao,
				prioridade:prioridade,
				problema:problema,
				produto:produto,
				titulo:titulo
			});
			navigate('/');
	};

	const registerFiles=()=>{
		for(let i=0;i<files.length;i++){
			const fileStorageRef=ref(storage,`files/${files[i].name}`);
			file_names.push(`files/${files[i].name}`);  
			console.log(file_names);
			uploadBytes(fileStorageRef,files[i]).then((e)=>{
				console.log("File uploaded");
				alert("File uploaded");
			});
		}
	}
    return(

	<div className="scroll"> 
		<p> Titulo <input className="textInput" value={titulo} onChange={
			(e)=>{setTitulo(e.target.value)}
		}type="text"/></p>  
		<p>descricao</p>
		<textarea cols='10' row='10' value={descricao} onChange={
			(e)=>{setDescricao(e.target.value)}
		}/>
		<p> Tipo <input className="textInput" value={tipo} onChange={(e)=>{setTipo(e.target.value)}} type="text"  placeholder="tipo"/></p>
		  
		<p> Proridade </p>
		<select value={prioridade} onChange={(e)=>{setPrioridade(e.target.value)}}> 
			<option value=""> </option>
			<option value="Alto"> Alto </option>
			<option value="Medio"> Medio </option>
			<option value="Baixo"> Baixo </option>
		</select>

		<p>Produto <input className="textInput" type="text" value={produto}
			onChange={(e)=>{setProduto(e.target.value);}} placeholder="Produto"
		/></p>
		<p>Categoria<input className="textInput" type="text" value={categoria} onChange={
			(e)=>{
				setCategoria(e.target.value)
			}
		} placeholder="Categoria"/></p>
		<p>Problema <input className="textInput" type="text" value={problema} onChange={(e)=>{setProblema(e.target.value)}} placeholder="problema"/></p>
		
		<p>Usuários impactados</p>
		<select value={usuariosImpactados} onChange={(e)=>{setUserImp(e.target.value)}}>
			<option value=""></option>
			<option value="Apenas 1">Apenas 1</option>
			<option value="1 a 10 usuários">1 a 10 Usuários</option>
			<option value="11 a 30 usuários">11 a 30 Usuários</option>
			<option value="31 a 50 usuários">41 a 50 usuários</option>
			<option value="Mais de 50 usuários">Mais de 50 usuários</option>
		</select>
		
		<p>Sua operação está parada?</p>
		
		<select value={operacao} onChange={(e)=>{setOperacao(e.target.value)}}> 
			<option value=""> </option>
			<option value="Operação parada"> Operação parada </option>
			<option value="Operação consegue trabalhar"> Operação consegue trabalhar </option> 
		</select>
		<p>Informações do Ambiente</p>
		<select value={ambiente} onChange={(e)=>{setAmbiente(e.target.value)}}> 
			<option value=""> </option>
			<option value="Dados/Ambiente de Testes- Somente testes"> Dados/Ambiente de Testes- Somente testes </option>
			<option value="Ambiente de produção- Cliente Ativo/Licença"> Ambiente de produção- Cliente Ativo/Licença </option>
		</select>
		<br/>  
		<input className="arquivos" accept=".pdf, .txt" type="file"  
		onChange={(e)=>{
			let files_=[];
			for(let i=0;i<e.target.files.length;i++){ 
				files_.push(e.target.files[i]);
			}
			files=files_;  
		}}
		multiple/>
		<button className="botao"  onClick={uploadTicket}> Create </button>
		</div>  );
}
export default CreatePost;