import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Banner from '../components/Banner';
import Quotes from '../components/Quotes';
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
	},
	client: {
    color: 'white',
		fontSize: '16px',
		fontWeight: '500'
	}
});

export default withStyles(styles)(({ classes }) => {
	return (
		<React.Fragment>
			<Banner banner={withPrefix('/img/achievement.jpg')} height="489px" />
			<Grid container className={classes.container} justify="space-between">
				<Grid item xs={12} md={8}>
					<Typography className={classes.title} gutterBottom={true}>
						Why us?
					</Typography>
					<Typography className={classes.paragraph} gutterBottom={true}>
						Finding top IT talent is the bread and butter of the world’s fastest growing companies today.
						Humanoko helps you excel by improving your company’s recruiting process.
					</Typography>
					<Typography className={classes.paragraph} gutterBottom={true}>
						We step in to partner with you on a strategic, programmatic level, handling all or part of your
						recruiting process, from big-picture implementation, management, and monitoring to the
						in-the-weeds reviews of turnover rates, position fill times, and other metrics that may be
						important to you.
					</Typography>
					<Typography className={classes.paragraph} gutterBottom={true}>
						Other reasons why Humanoko stands out in a sea of RPO firms include:
					</Typography>
					<div className={classes.unordered}>
						<Typography className={classNames(classes.paragraph, classes.list)}>
							Specialization in RPO for IT roles
						</Typography>
						<Typography className={classNames(classes.paragraph, classes.list)}>
							A laser focus on IT talent; we are IT talent, so we know what IT talent looks like
						</Typography>
						<Typography className={classNames(classes.paragraph, classes.list)}>
							Small and nimble; we make decisions and roll and adapt within minutes
						</Typography>
						<Typography className={classNames(classes.paragraph, classes.list)}>
							Faster service; we have processes, but we don’t have bureaucracy
						</Typography>
						<Typography className={classNames(classes.paragraph, classes.list)}>
							A large network, plus access to a database of more than X million prospective IT
							professionals around the world, particularly in high technology regions, such as x, y, and z
						</Typography>
						<Typography className={classNames(classes.paragraph, classes.list)}>
							Our full attention, personal service, dedication, persistence, and perseverance
						</Typography>
					</div>
					<Typography className={classes.paragraph} gutterBottom={true}>
						We invite you to contact us for a complimentary consultation today.
					</Typography>
				</Grid>
				<Grid item xs={12} md={3}>
					<div className={classes.block}>
						<Grid container className={classes.blockade} justify="center" alignItems="center">
							<Typography
								variant="subheading"
								className={classes.client}
								color="inherit"
								gutterBottom={true}
							>
								HUMANOKO
							</Typography>
						</Grid>
					</div>
				</Grid>
			</Grid>
      <Quotes size={5} quote="If you can hire people whose passion intersects with the job, they won’t require any supervision at all. They will manage themselves better than anyone could ever manage them. Their fire comes from within, not from without. Their motivation is internal, not external." author="Stephen Covey" />
		</React.Fragment>
	);
});
