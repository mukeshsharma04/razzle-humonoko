import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
	avatar: {
		margin: 2,
		backgroundColor: '#4198ff'
	},
	outer: {
		display: 'inline-block',
		borderRadius: '60px',
		boxShadow: '0px 0px 2px #4198ff'
	},
	divider: {
		height: '100px',
		borderLeft: '2px solid #d1d1d1',
		marginLeft: '22px'
	},
	space: {
		marginBottom: theme.spacing.unit * 5
	},
	leftSide: {
		paddingTop: '11%'
  },
  rightSide: {
    display: '-webkit-box'
  }
});

function getSteps() {
	return [ 'Select campaign settings', 'Create an ad group', 'Create an ad' ];
}

class About extends React.Component {
	render() {
		const { classes } = this.props;
		const steps = getSteps();
		return (
			<div className={classes.container}>
				<Typography className={classes.title} gutterBottom={true}>
					How we work
				</Typography>
				<br />
				<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
					Our RPO process is standard, with a few added elements that set Humanoko apart, such as our
					commitment to always keeping you in the loop. You’ll never wonder where we are in the process.
				</Typography>
				<br />
				<Grid container direction="row" justify="center">
					<Grid item md={3}>
						<Grid container direction="column" justify="flex-end">
							<Grid item>
								<Typography className={classNames(classes.paragraph)}>
									Qualify candidates based on education, experience, and skill through initial PHONE
									SCREENINGS.
								</Typography>
								<br />
								<Typography className={classNames(classes.paragraph, classes.leftSide)}>
									Validate inital impressions and discuss the needs of your role, with a TECHNICAL
									INTERVIEW
								</Typography>
								<br />
								<Typography className={classNames(classes.paragraph, classes.leftSide)}>
									Understand a candidates work ethic, motivation level, and ability to collaborate
									with thorough REFERENCE CHECKS.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={2}>
						<Grid container justify="center" alignItems="center">
							<Grid item>
								<div className={classes.outer}>
									<Avatar className={classes.avatar}>1</Avatar>
								</div>
								<div className={classes.divider} />
								<div className={classes.outer}>
									<Avatar className={classes.avatar}>2</Avatar>
								</div>
								<div className={classes.divider} />
								<div className={classes.outer}>
									<Avatar className={classes.avatar}>3</Avatar>
								</div>
								<div className={classes.divider} />
								<div className={classes.outer}>
									<Avatar className={classes.avatar}>4</Avatar>
								</div>
							</Grid>
						</Grid>
					</Grid>
					<Grid item md={3} className={classes.rightSide}>
						<Grid container alignItems="flex-end">
							<Grid item>
								<Typography className={classNames(classes.paragraph)}>
									SUBMIT qualified, verified candidates to you so you can confirm fit and schedule
									your interviews.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		);
	}
}

export default withStyles(styles)(About);
