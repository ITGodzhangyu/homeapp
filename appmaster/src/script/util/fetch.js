let fetchData=(url,callback)=>{
	fetch(url)
	    .then(response=>response.text())
	   	.then(res=>{
			callback(res);
	})
}
export default fetchData;
