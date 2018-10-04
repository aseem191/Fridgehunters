import Layout from '../components/MyLayout.js'
import WrapLayout from '../components/WrapLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import urlname from '../components/urlname.js'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { toggleList } from "../actions/index";
import { connect } from "react-redux";
import Page from './page';

class MainPage extends React.Component{

	constructor(props){
	  super(props)
	  this.props.dispatch(toggleList(false));
	  this.state = {
	    //listOpen: false,
	    title: this.props.title,
	    textValue: "",
	    ingredtextlist: [],
	    ingredfoundlist: []
	  }

	  this.showMenu = this.showMenu.bind(this);
	  this.closeMenu = this.closeMenu.bind(this);
	  this.RemoveIngred = this.RemoveIngred.bind(this);
	  this.addIngredient = this.addIngredient.bind(this);
	}

	showMenu(event){
		console.log(this.state.textValue);
		if(this.props.listOpen){
			this.setState({ textValue: event.target.value.toLowerCase()});  
		}
		else{
			this.props.dispatch(toggleList(true));

	  		this.setState({
	  			textValue: event.target.value.toLowerCase(),
	    		//listOpen: true
	  		},  () => {
      		document.addEventListener('click', this.closeMenu);
    		})
		}

		this.setState({
				
		    ingredfoundlist: ["Loading..."]
		});
		fetch(urlname + "/ingredients?uname=" + encodeURI(event.target.value.toLowerCase())).then(response => response.text()).then(data => {
			console.log("Show data fetched. Count: " + data);
			var datalist = data.split(",");
			if(data == ""){
				this.setState({
				
				    ingredfoundlist: []
				});
			}
			else{
				this.setState({
				
				    ingredfoundlist: datalist
				});
			}

		})

	}

	RemoveIngred(event){
		var index = +(this.state.ingredtextlist.indexOf(event.target.getAttribute('key2')));
		console.log(index)
		var changedArray = this.state.ingredtextlist.slice();
		changedArray.splice(index, 1);
		this.setState((prevState, props) => {return {ingredtextlist: changedArray}})
	}

	addIngredient(event){
		event.persist();
		if(event.currentTarget.id == "addButton" || event.target.id == "myField"){
			console.log("YEET")
			if(this.state.textValue == ""){
				return;
			}
			if(this.state.ingredtextlist.findIndex(ing => ing == this.state.textValue) == -1){
				//this.setState((prevState, props) => {return {ingredlist: prevState.ingredlist.concat([(
					//<h1 onClick={this.RemoveIngred} key={this.state.textValue}>{this.state.textValue}</h1>
				//)])}})

				this.setState((prevState, props) => {return {ingredtextlist: prevState.ingredtextlist.concat([this.state.textValue])}})
			}

			
		}
		else{
			var custom = event.currentTarget.getAttribute('customtext')
			this.props.dispatch(toggleList(false));
			/*this.setState({ listOpen: false }, () => {
		        document.removeEventListener('click', this.closeMenu);
		    }); */ 
		    document.removeEventListener('click', this.closeMenu);
		    //if(this.state.ingredlist.findIndex(ing => ing.key == event.target.getAttribute('customtext')) == -1){
		    if(this.state.ingredtextlist.findIndex(ing => ing == custom) == -1){
				//this.setState((prevState, props) => {return {ingredlist: prevState.ingredlist.concat([(
				//<h1 onClick={this.RemoveIngred} key={event.target.getAttribute('customtext')}>{event.target.getAttribute('customtext')}</h1>
				//)])}})

				this.setState((prevState, props) => {return {ingredtextlist: prevState.ingredtextlist.concat([custom])}})
			}
			
			
		}
	}

	 closeMenu(event) {
    
	    if (!this.dropdownMenu.contains(event.target)) {
	    	this.props.dispatch(toggleList(false));
	      	document.removeEventListener('click', this.closeMenu);
	     /* this.setState({ listOpen: false }, () => {
	        document.removeEventListener('click', this.closeMenu);
	      });  */
	      
	    }
	}

	render(){
		return(
						
			  <Layout>
			<div>
			<div align="center" >
			<br/><br/><br/>
			<form name="addForm" onSubmit={(event) => this.showMenu(event)}>
		        <label>
		          	<h2>What's in your fridge? </h2>
		          	<TextField  onKeyPress={e => {if (e.key === 'Enter') {e.preventDefault(); this.addIngredient(e);}}} id="myField" onChange={(event) => this.showMenu(event)} margin="normal" />
		        </label>
		        
		    </form>

		    <Button variant="contained" color="secondary" onClick={this.addIngredient} id="addButton"  style={{ fontFamily: "Gentium Book Basic", fontWeight: "bold", fontSize: '16px' }}>Pick ingredients</Button>
			
			{ 
				this.props.listOpen 
				?(
				<div className="menu" ref={(element) => {
					this.dropdownMenu = element;
				}}>
					<List component="nav"  style = {{width: 250}}><Divider />
				  		{this.state.ingredfoundlist.map((ingred) => (<div key={ingred}>
				  			<ListItem button onClick={this.addIngredient} customtext={ingred}>
					          	<ListItemText primary={ingred} />
					        </ListItem>
					        <Divider />
					        </div>
				  		))}
				  	</List>
					
				</div>
				)
				:(
				<div><br/><br/><br/><br/></div>
				)
			}

			
			
			<div class="inline">
			{
				this.state.ingredtextlist.map(ingred => (
					<Button  variant="outlined" onClick={this.RemoveIngred} key={ingred} key2={ingred}>{ingred}</Button>
				)
				)
			}
			</div>

			<br/><br/><br/><br/>
			<Link  href={{ pathname: '/recipelist', query: { ingredlist: this.state.ingredtextlist.toString() } }}>
	        	<Button variant="contained" style={{fontFamily: "Montserrat", fontWeight: "bold", fontSize: '20px' }} color="primary">FIND RECIPES</Button>
	        </Link>
			<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

			<h6 style={{fontSize: "12px", color: "#009109"}}>Created by Aseem Sane. To visit the GitHub repository for this project, go <a href="https://github.com/aseem191/Fridgehunters" style={{fontSize: "12px"}}>here</a>.</h6>
			</div><style jsx>{`
	        

	        h2 {
	          font-family: "Gentium Book Basic", Times, serif;
	        }
	        
	      `}</style>
	      </div>
			
			 </Layout>
			

		);
	}
}

export default Page(connect(state=>state)(MainPage))