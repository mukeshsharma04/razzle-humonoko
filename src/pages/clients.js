import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Quotes from '../components/Quotes';

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
		marginBottom: theme.spacing.unit * 5
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<div className={classes.container}>
				<Typography className={classes.title} gutterBottom={true}>
					Clients
				</Typography>
				<br />
				<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
					Humanoko is proud to bring you our deep technical experience with the following companies.
				</Typography>
				<br />
			</div>
			<Quotes
				size={5}
				quote="If you can hire people whose passion intersects with the job, they won’t require any supervision at all. They will manage themselves better than anyone could ever manage them. Their fire comes from within, not from without. Their motivation is internal, not external."
				author="Stephen Covey"
			/>
		</React.Fragment>
	);
});
