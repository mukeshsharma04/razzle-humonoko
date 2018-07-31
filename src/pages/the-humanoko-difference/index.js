import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Banner from '../../components/Banner';
import Button from '../../components/Button';
import TabBar from '../../components/TabBar';
import { theHumanokoDiffernceFields } from '../../metadata';
import Link, { withPrefix } from 'gatsby-link';

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
	},
	text: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mhero
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.hero
		},
		width: 'fit-content',
		color: 'white',
		background: `linear-gradient(101deg, #4198ff, #6f73ff)`,
		padding: '10px'
	},
	list: {
		display: 'list-item'
	},
	unordered: {
		paddingLeft: theme.spacing.unit * 3
	},
	block: {
		width: '260px',
		height: '206px',
		background: `linear-gradient(to right, #4198ff, #6f73ff)`
	},
	logo: {
		width: '153.5px',
		height: '31px'
	},
	blockade: {
		height: '210px'
	}
});

export default withStyles(styles)(({ classes }) => {
	const text = (
		<Typography className={classes.text} align="center">
			The Humanoko Difference
		</Typography>
	);
	return (
		<React.Fragment>
			<TabBar fields={theHumanokoDiffernceFields} />
			<Banner banner={withPrefix('/img/achievement.jpg')} text={text} height="425px" />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={8}>
					<Typography className={classes.title} gutterBottom={true}>
						Why Humanoko?
					</Typography>
					<Typography className={classes.paragraph} gutterBottom={true}>
						If you search the web for “web development” or “app development,” you’ll find millions of
						companies plying their wares.
					</Typography>
					<Typography className={classes.paragraph} gutterBottom={true}>
						We’re one of those millions, but here’s what makes us different.
					</Typography>
					<div className={classes.unordered}>
						<Typography className={classNames(classes.paragraph, classes.space, classes.list)}>
							We’re engineers. All of us. We have no sales people, no marketing people, no biz dev people,
							no customer relations people.
						</Typography>
						<Typography className={classNames(classes.paragraph, classes.space, classes.list)}>
							When you call us, you’ll speak with an engineer.
						</Typography>
						<Typography className={classNames(classes.paragraph, classes.space, classes.list)}>
							Your Technical Account Manager will not be a sales person or even a junior engineer. In most
							cases, your contact will be a senior engineer, senior enough to be your company’s CTO.
						</Typography>
					</div>
					<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
						We like to chase the hard engineering problems, the kind that hold companies back. Problems like
						x, another example, and another example.
					</Typography>
					<Grid item xs={12} md={4}>
						<Button
							text="Read our manifesto"
							fullWidth
							to="/the-humanoko-difference/manifesto"
							component={Link}
						/>
					</Grid>
				</Grid>
				<Grid item xs={12} md={3}>
					<div className={classes.block}>
						<Grid container className={classes.blockade} justify="center" alignItems="center">
							<img src={withPrefix('/img/humanoko-logo-white.png')} className={classes.logo} />
						</Grid>
					</div>
				</Grid>
			</Grid>
		</React.Fragment>
	);
});
