import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { withPrefix } from 'gatsby-link';
import Typography from '@material-ui/core/Typography';

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
		backgroundImage: `url(${withPrefix('/img/chart.png')})`,
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
		},
		[theme.breakpoints.up('lg')]: {
			width: '425px',
			height: '370px'
		}
	},
	title: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mtitle,
			color: '#333333'
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.title,
			color: '#333333'
		}
	},
	paragraph: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph,
			color: '#333333'
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph,
			color: '#333333'
		}
	},
	textBlue: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mparagraph,
			color: '#4198ff'
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.paragraph,
			color: '#4198ff'
		},
		fontWeight: '900',
		'&:hover': {
			color: '#4198ff'
		}
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<Grid container justify="space-between" className={classes.container}>
			<Grid item xs={12} md={4}>
				<div className={classes.image} />
			</Grid>
			<Grid item xs={12} md={7}>
				<Typography className={classes.title} gutterBottom={true}>
					It takes IT talent to know IT talent.
				</Typography>
				<br />
				<Typography className={classes.paragraph} gutterBottom={true}>
					Whether you need to build a solid technical group or fill a sudden technical vacancy, count on
					Humanoko, a team of specialized, IT recruiters with 50+ years of combined IT experience.
					<br />We know how to find top IT talent because we ARE top IT talent.
				</Typography>
				<br />
				<a href="/" className={classes.textBlue}>
					[Could offer lead management here]
				</a>
			</Grid>
		</Grid>
	);
});
