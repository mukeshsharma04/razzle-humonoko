import React from 'react';
import TextImageWidget from '../components/TextImageWidget';
import { withStyles } from '@material-ui/core/styles';
import Quote from '../components/Quotes';

const styles = (theme) => ({
	divider: {
		backgroundColor: '#d1d1d1',
		margin: '0 5%'
	}
});

const About = ({ classes }) => {
	return (
		<div>
			<TextImageWidget />
			<Quote
				author="Jim Collins,"
				authorRole="Author of Good to Great"
				quote="Companies that go from good to great start not with “where” but with “who.” They start by getting the right people on the bus, the wrong people off the bus, and the right people in the right seats."
			/>
		</div>
	);
};

export default withStyles(styles)(About);
