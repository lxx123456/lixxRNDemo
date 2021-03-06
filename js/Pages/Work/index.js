import React, {Component} from 'react';
import colors from 'js/Themes/Colors'
import {
	Container,
	Text,
	View
} from "native-base";
import HeadStatusBar from 'js/Components/HeaderStatus'
import HeadBar from 'js/Components/HeaderBar'

class Work extends Component {
	static navigationOptions = {
		header: null
	};

	render() {
		return (
			<Container style={{backgroundColor: colors.pageBackgroundColor}}>
				<HeadBar
					titleText={"工作"}
					leftVisible={false}
					rightVisible={false}/>
			</Container>
		)
	}
}


export default Work