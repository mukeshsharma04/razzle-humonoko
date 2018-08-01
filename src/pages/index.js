import React from 'react';
import Banner from '../components/Banner';
import LetsBuild from '../components/LetsBuild';
import Quotes from '../components/Quotes';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { withPrefix } from 'gatsby-link';

const styles = (theme) => ({
	text: {
		width: 'fit-content',
		color: 'white',
		fontSize: '50px',
		textAlign: 'center',
		fontWeight: '500',
		[theme.breakpoints.up('md')]: {
			letterSpacing: '30px'
		}
	}
});

class IndexPage extends React.Component {
	render() {
		const { data, classes } = this.props;
		const text = (
			<React.Fragment>
				<Typography className={classes.text} align="left">
					HUMANOKO
				</Typography>
			</React.Fragment>
		);

		return (
			<React.Fragment>
				<Banner text={text} banner={withPrefix('/img/banner.jpg')} height="600px" />
				<LetsBuild />
				<Quotes
					size={5}
					quote="It doesn’t make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do."
					author="Steve jobs"
				/>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(IndexPage);
