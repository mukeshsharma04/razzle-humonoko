import React, { Component } from 'react';
import Banner from '../../components/Banner';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import classNames from 'classnames';
import Chip from '@material-ui/core/Chip';
import Button from '../../components/Button';
import Quotes from '../../components/Quotes';
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
	text: {
		[theme.breakpoints.down('sm')]: {
			...theme.typography.mhero
		},
		[theme.breakpoints.up('sm')]: {
			...theme.typography.hero
		},
		width: 'fit-content',
		color: 'white',
		backgroundColor: '#4198ff',
		padding: '10px'
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
	row: {
		paddingLeft: theme.spacing.unit * 5,
		paddingRight: theme.spacing.unit * 5
	},
	divider: {
		[theme.breakpoints.up('sm')]: {
			borderRight: 'solid 1px #d1d1d1'
		}
	},
	listItem: {
		display: 'list-item'
	},
	space: {
		marginTop: theme.spacing.unit * 4
	},
	ul: {
		listStyle: 'disc',
		paddingLeft: '20px'
	}
});

export default withStyles(styles)(
	class index extends Component {
		render() {
			const { classes } = this.props;

			return (
				<React.Fragment>
					<Banner banner={withPrefix('/img/agency.jpg')} height="499px" />
					<Grid container className={classes.container} justify="space-between">
						<Grid item xs={12} md={12}>
							<Typography className={classes.title} gutterBottom={true}>
								Services
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
								With 40 million people in the industrialized world looking for work, filling your inbox
								with applications is not a problem. The problem lies in quickly sifting through those
								applications to find quality candidates who fit your criteria. That’s where Humanoko
								comes in.
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
								Let us know which roles you need to hire for, and your hiring preferences, if any.
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
								For instance:
								<ul className={classes.ul}>
									<li>
										Do you want a generalist, someone with an agency background or who may have held
										various roles in startups or other companies?
									</li>
									<li>
										Or do you need a specialist, someone who went beyond their foundational
										knowledge and acquired expertise in certain IT disciplines?
									</li>
									<li>Are you in need of temporary help, or temp-to-hire?</li>
								</ul>
							</Typography>
							<Typography className={classNames(classes.paragraph, classes.space)} gutterBottom={true}>
								After we understand your requirements, define your ideal hire, and determine how quickly
								you’d like to interview, we’ll start the process, handling the end-to-end offshore
								recruitment process for you. Learn more about our process and how we work. [Link to how
								we work page]
							</Typography>
						</Grid>
					</Grid>
					<Banner banner={withPrefix('/img/code.jpg')} height="322px" />
					<Grid container className={classes.container} justify="space-between">
						<Grid item xs={12} md={12}>
							<Typography className={classes.title} gutterBottom={true}>
								We specialize in IT requirement
							</Typography>
							<Grid container className={classes.container}>
								<Grid className={classNames(classes.row, classes.divider)} item xs={12} md={4}>
									<Typography
										className={classNames(classes.paragraph, classes.listItem)}
										gutterBottom={true}
									>
										IT security
									</Typography>
									<Typography
										className={classNames(classes.paragraph, classes.listItem)}
										gutterBottom={true}
									>
										Network administrator
									</Typography>
									<Typography
										className={classNames(classes.paragraph, classes.listItem)}
										gutterBottom={true}
									>
										DevOps
									</Typography>
								</Grid>
								<Grid className={classNames(classes.row, classes.divider)} item xs={12} md={4}>
									<Typography
										className={classNames(classes.paragraph, classes.listItem)}
										gutterBottom={true}
									>
										IT operations
									</Typography>
									<Typography
										className={classNames(classes.paragraph, classes.listItem)}
										gutterBottom={true}
									>
										IT infrastructure
									</Typography>
									<Typography
										className={classNames(classes.paragraph, classes.listItem)}
										gutterBottom={true}
									>
										Systems engineer
									</Typography>
								</Grid>
								<Grid className={classNames(classes.row)} item xs={12} md={4}>
									<Typography
										className={classNames(classes.paragraph, classes.listItem)}
										gutterBottom={true}
									>
										Web and app development
									</Typography>
									<Typography
										className={classNames(classes.paragraph, classes.listItem)}
										gutterBottom={true}
									>
										Big Data
									</Typography>
									<Typography
										className={classNames(classes.paragraph, classes.listItem)}
										gutterBottom={true}
									>
										Emerging technology
									</Typography>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Quotes
						quote="The secret to successful hiring is this: look for people who wand to change the world."
						author="Marc Benioff"
					/>
				</React.Fragment>
			);
		}
	}
);
