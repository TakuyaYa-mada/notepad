function Tom(porp)
{
	return <h1>hello {porp.name}!<br />{porp.comment}</h1>;
}

const element = <Tom 
	name="Tommy"
	comment="nice to me to"
/>;

ReactDOM.render(
  element,
  document.getElementById('root')
);
