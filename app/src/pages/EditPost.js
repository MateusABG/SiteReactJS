import { useState } from "react";

function EditPost(){
    const [titulo,setTitulo]=useState("");
    const [descricao,setDescricao]=useState("");
    const [prioridade,setPrioridade]=useState("");
    const [tipo,setTipo]=useState("");
    const [problema,setProblema]=useState("");
    const [impacto,setImpacto]=useState("");
    const [usuariosAfetados,setAfetados]=useState("");
    const [info,setInfo]=useState("");
    const [operacao,setOperacao]=useState("");
    const[arquivos,setArquivos]=useState([]);
    return(<div>
		<p> Titulo <input class="textInput" value={titulo} onChange={(e)=>{
			setTitulo(titulo);
		}} type="text"/></p>
		 
		<p> Descrição </p>
		<textarea class="textarea" cols="40" rows='20'> </textarea>
		<p> Tipo <input class="textInput" type="text"  placeholder="tipo"/></p>
		  
		<p> Proridade </p>
		<select> 
			<option value=""> </option>
			<option value="Alto"> Alto </option>
			<option value="Medio"> Medio </option>
			<option value="Baixo"> Baixo </option>
		</select>

		<p>Problema <input class="textInput" type="text" placeholder="problema"/></p>
		
		<p>Usuários impactados</p>
		<select>
			<option value=""></option>
			<option value="Apenas 1">Apenas 1</option>
			<option value="1 a 10 usuários">1 a 10 Usuários</option>
			<option value="11 a 30 usuários">11 a 30 Usuários</option>
			<option value="31 a 50 usuários">41 a 50 usuários</option>
			<option value="Mais de 50 usuários">Mais de 50 usuários</option>
		</select>
		
		<p>Sua operação está parada?</p>
		
		<select> 
			<option value=""> </option>
			<option value="Operação parada"> Operação parada </option>
			<option value="Operação consegue trabalhar"> Operação consegue trabalhar </option> 
		</select>
		<p>Informações do Ambiente</p>
		<select> 
			<option value=""> </option>
			<option value="Alto"> Dados/Ambiente de Testes- Somente testes </option>
			<option value="Medio"> Ambiente de produção- Cliente Ativo/Licença </option>
		</select>
		<br/>  
		<input class="arquivos" accept=".pdf, .txt" type="file" multiple/>
		<button class="botao" onclick="createAccount()"> Create </button>
		</div>  );
}
export default EditPost;