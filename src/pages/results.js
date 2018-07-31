import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Quotes from '../components/Quotes';
import classNames from 'classnames';

const styles = (theme) => ({
	container: {
		[theme.breakpoints.down('sm')]: {
			padding: theme.spacing.unit * 2
		},
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing.unit * 7
		},
		[theme.breakpoints.up('lg')]: {
			padding: theme.spacing.unit * 10
		}
	},
	title: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtitle
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.title
		}
	},
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		}
	},
	space: {
		marginTop: theme.spacing.unit * 4
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={12}>
					<Typography className={classes.title} gutterBottom={true}>
						Selected clients
					</Typography>
					<Typography className={classes.paragraph} gutterBottom={true}>
						Humanoko is proud to bring you our expert and elite engineering experience with the following
						companies.
					</Typography>
				</Grid>
			</Grid>
			<Quotes
				quote="The team at Humanoko is top notch. Cognizant of best practices for code hygiene and thorough 
				documentation making for excellent coordination amongst engineers working with the code 
				base currently as well as those on-boarding at a later time."
				author="George Spyros,"
				authorRole="Founder of Filmakr"
			/>
		</React.Fragment>
	);
});
