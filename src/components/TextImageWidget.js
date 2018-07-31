import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withPrefix } from 'gatsby-link';

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
		},
		overflow: 'hidden'
	},
	image: {
		backgroundImage: `url(${withPrefix('/img/team.png')})`,
		backgroundSize: 'contain',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		[theme.breakpoints.down('sm')]: {
			width: '350px',
			height: '350px'
		},
		[theme.breakpoints.up('md')]: {
			width: '425px',
			height: '370px'
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
	textWhite: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph
		},
		fontWeight: '900',
		textDecoration: 'underline'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<Grid container justify="space-between" className={classes.container}>
			<Grid item xs={12} md={7}>
				<Typography className={classes.title} gutterBottom={true}>
					We’re IT recruitment specialists, 50 years young.
				</Typography>
				<Typography className={classes.title} gutterBottom={true}>
					And we’ll help you get the right IT people in the right seats, fast.
				</Typography>
				<div>
					<br />
					<Typography className={classes.paragraph} gutterBottom={true}>
						Humanoko is a startup recruitment process outsourcing (RPO) firm with one goal in mind: to help
						you get the right technical people in the right seats in the shortest time possible.
					</Typography>
					<br />
					<Typography className={classes.paragraph} gutterBottom={true}>
						Combined, our founders bring 50+ years of IT experience to the recruiting process, which allows
						us to quickly hone in on the technical talent that matches your criteria.
					</Typography>
					<br />
					<Typography className={classes.paragraph} gutterBottom={true}>
						Curious? Read more about our RPO services, process, and differentiation. [Link to proper pages]
					</Typography>
					<br />
					<Typography className={classes.paragraph} gutterBottom={true}>
						And, when you’re ready, email us or give us a call.
					</Typography>
				</div>
			</Grid>
			<Grid item xs={12} md={4}>
				<div className={classes.image} />
			</Grid>
		</Grid>
	);
});
