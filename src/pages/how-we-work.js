import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import Hidden from '@material-ui/core/Hidden';

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
		minHeight: '100px',
		borderLeft: '2px solid #d1d1d1',
		marginLeft: '22px'
	},
	space: {
		marginBottom: theme.spacing.unit * 5
	},
	leftPadding: {
		paddingRight: '15px'
	},
	small: {
		width: '15px',
		height: '15px'
	},
	absoluteFirst: {
		position: 'absolute',
		top: '50%',
		left: '0%'
	},
	absoluteSecond: {
		position: 'absolute',
		top: '70%',
		left: '0%'
	},
	mobileFirst: {
		position: 'absolute',
		top: '40%'
	},
	mobileSecond: {
		position: 'absolute',
		top: '50%'
	},
	mdivider: {
		minHeight: '170px',
		borderLeft: '2px solid #d1d1d1',
		marginLeft: '22px'
	},
	parent: {
		position: 'relative'
	}
});

class About extends React.Component {
	render() {
		const { classes } = this.props;
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
				<Hidden smDown>
					<Grid container justify="center">
						<Grid item md={4}>
							<Typography className={classNames(classes.paragraph, classes.leftPadding)}>
								Qualify candidates based on education, experience, and skill through initial PHONE
								SCREENINGS.
							</Typography>
						</Grid>
						<Grid item md={1}>
							<Grid container justify="center" alignItems="center">
								<Grid item>
									<div className={classes.outer}>
										<Avatar className={classes.avatar}>1</Avatar>
									</div>
									<div className={classes.divider} />
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={4}>
							&#160;
						</Grid>
					</Grid>
					<Grid container className={classes.absoluteFirst} justify="center">
						<Grid item md={4}>
							<Typography className={classNames(classes.paragraph, classes.leftPadding)}>
								&#160;
							</Typography>
						</Grid>
						<Grid item md={1}>
							<Grid container justify="center" alignItems="center">
								<Grid item>
									<div className={classNames(classes.outer)}>
										<Avatar className={classNames(classes.avatar, classes.small)} />
									</div>
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={4}>
							<Typography className={classNames(classes.paragraph, classes.leftPadding)}>
								Look beyond academics for the right blend of fundamentals, work experience,
								self-direction, motivation, and the skills you need.
							</Typography>
						</Grid>
					</Grid>
					<Grid container justify="center">
						<Grid item md={4}>
							<Typography className={classNames(classes.paragraph, classes.leftPadding)}>
								Validate inital impressions and discuss the needs of your role, with a TECHNICAL
								INTERVIEW
							</Typography>
						</Grid>
						<Grid item md={1}>
							<Grid container justify="center" alignItems="center">
								<Grid item>
									<div className={classes.outer}>
										<Avatar className={classes.avatar}>2</Avatar>
									</div>
									<div className={classes.divider} />
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={4}>
							&#160;
						</Grid>
					</Grid>
					<Grid container className={classes.absoluteSecond} justify="center">
						<Grid item md={4}>
							<Typography className={classNames(classes.paragraph, classes.leftPadding)}>
								&#160;
							</Typography>
						</Grid>
						<Grid item md={1}>
							<Grid container justify="center" alignItems="center">
								<Grid item>
									<div className={classNames(classes.outer)}>
										<Avatar className={classNames(classes.avatar, classes.small)} />
									</div>
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={4}>
							<Typography className={classNames(classes.paragraph, classes.leftPadding)}>
								Lean on our 50+ years of IT expertise to pinpoint individuals with the right skills and
								abilities.
							</Typography>
						</Grid>
					</Grid>
					<Grid container justify="center">
						<Grid item md={4}>
							<Typography className={classNames(classes.paragraph, classes.leftPadding)}>
								Understand a candidates work ethic, motivation level, and ability to collaborate with
								thorough REFERENCE CHECKS.
							</Typography>
						</Grid>
						<Grid item md={1}>
							<Grid container justify="center" alignItems="center">
								<Grid item>
									<div className={classes.outer}>
										<Avatar className={classes.avatar}>3</Avatar>
									</div>
									<div className={classes.divider} />
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={4}>
							&#160;
						</Grid>
					</Grid>
					<Grid container justify="center">
						<Grid item md={4}>
							&#160;
						</Grid>
						<Grid item md={1}>
							<Grid container justify="center" alignItems="center">
								<Grid item>
									<div className={classes.outer}>
										<Avatar className={classes.avatar}>4</Avatar>
									</div>
								</Grid>
							</Grid>
						</Grid>
						<Grid item md={4}>
							<Typography className={classNames(classes.paragraph)}>
								SUBMIT qualified, verified candidates to you so you can confirm fit and schedule your
								interviews.
							</Typography>
						</Grid>
					</Grid>
				</Hidden>
				<Hidden mdUp>
					<Grid container className={classes.parent}>
						<Grid item xs={2}>
							<Grid container justify="center" alignItems="center">
								<Grid item>
									<div className={classes.outer}>
										<Avatar className={classes.avatar}>1</Avatar>
									</div>
									<div className={classes.mdivider} />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={9}>
							<Typography className={classNames(classes.paragraph, classes.leftPadding)}>
								Qualify candidates based on education, experience, and skill through initial PHONE
								SCREENINGS.
							</Typography>
						</Grid>
						<Grid container className={classes.mobileFirst}>
							<Grid item xs={2}>
								<Grid container justify="center" alignItems="center">
									<Grid item>
										<div className={classNames(classes.outer)}>
											<Avatar className={classNames(classes.avatar, classes.small)} />
										</div>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={9}>
								<Typography className={classNames(classes.paragraph, classes.leftPadding)}>
									Look beyond academics for the right blend of fundamentals, work experience,
									self-direction, motivation, and the skills you need.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid container className={classes.parent}>
						<Grid item xs={2}>
							<Grid container justify="center" alignItems="center">
								<Grid item>
									<div className={classes.outer}>
										<Avatar className={classes.avatar}>2</Avatar>
									</div>
									<div className={classes.mdivider} />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={9}>
							<Typography className={classNames(classes.paragraph, classes.leftPadding)}>
								Validate inital impressions and discuss the needs of your role, with a TECHNICAL
								INTERVIEW
							</Typography>
						</Grid>
						<Grid container className={classes.mobileSecond}>
							<Grid item xs={2}>
								<Grid container justify="center" alignItems="center">
									<Grid item>
										<div className={classNames(classes.outer)}>
											<Avatar className={classNames(classes.avatar, classes.small)} />
										</div>
									</Grid>
								</Grid>
							</Grid>
							<Grid item xs={9}>
								<Typography className={classNames(classes.paragraph, classes.leftPadding)}>
									Lean on our 50+ years of IT expertise to pinpoint individuals with the right skills
									and abilities.
								</Typography>
							</Grid>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={2}>
							<Grid container justify="center" alignItems="center">
								<Grid item>
									<div className={classes.outer}>
										<Avatar className={classes.avatar}>3</Avatar>
									</div>
									<div className={classes.mdivider} />
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={9}>
							<Typography className={classNames(classes.paragraph, classes.leftPadding)}>
								Understand a candidates work ethic, motivation level, and ability to collaborate with
								thorough REFERENCE CHECKS.
							</Typography>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={2}>
							<Grid container justify="center" alignItems="center">
								<Grid item>
									<div className={classes.outer}>
										<Avatar className={classes.avatar}>4</Avatar>
									</div>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={9}>
							<Typography className={classNames(classes.paragraph)}>
								SUBMIT qualified, verified candidates to you so you can confirm fit and schedule your
								interviews.
							</Typography>
						</Grid>
					</Grid>
				</Hidden>
			</div>
		);
	}
}

export default withStyles(styles)(About);
